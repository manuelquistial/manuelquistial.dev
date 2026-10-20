import {
  progressWithinStage,
  scaleStages,
  stageIndexAt,
  type StageBound,
} from "@/lib/learn/playback";

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function smoothstep(value: number): number {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
}

function lerp(from: number, to: number, amount: number): number {
  return from + (to - from) * amount;
}

export const membrane = {
  outsideY: 28,
  bilayerTop: 96,
  bilayerBottom: 144,
  insideY: 196,
  naX: 118,
  kX: 214,
  channelHalf: 16,
} as const;

export const voltagePlot = {
  left: 46,
  right: 332,
  top: 22,
  bottom: 200,
} as const;

export const voltageStages = [
  { id: "rest", start: 0, end: 0.18 },
  { id: "depolarization", start: 0.18, end: 0.42 },
  { id: "repolarization", start: 0.42, end: 0.7 },
  { id: "hyperpolarization", start: 0.7, end: 1 },
] as const;

export const VOLTAGE_DURATION = 10;
export const ION_DURATION = 9;

export function membraneVoltage(time: number): number {
  const x = clamp(time, 0, 1);
  if (x <= 0.18) return -70;
  if (x <= 0.42) return lerp(-70, 30, smoothstep((x - 0.18) / 0.24));
  if (x <= 0.7) return lerp(30, -70, smoothstep((x - 0.42) / 0.28));
  if (x <= 0.84) return lerp(-70, -80, smoothstep((x - 0.7) / 0.14));
  return lerp(-80, -73, smoothstep((x - 0.84) / 0.16));
}

export function voltageStageAt(time: number): (typeof voltageStages)[number] {
  const index = stageIndexAt(time, voltageStages);
  return voltageStages[index] ?? voltageStages[0];
}

export function plotX(time: number): number {
  return (
    voltagePlot.left +
    clamp(time, 0, 1) * (voltagePlot.right - voltagePlot.left)
  );
}

export function plotY(millivolts: number): number {
  const min = -90;
  const max = 40;
  const ratio = (clamp(millivolts, min, max) - min) / (max - min);
  return voltagePlot.bottom - ratio * (voltagePlot.bottom - voltagePlot.top);
}

export function voltagePlaybackStages(): StageBound[] {
  return scaleStages(voltageStages, VOLTAGE_DURATION);
}

export function ionPlaybackStages(): StageBound[] {
  return [
    { id: "depolarization", start: 0, end: 3 },
    { id: "repolarization", start: 3, end: 6 },
    { id: "recovery", start: 6, end: ION_DURATION },
  ];
}

/** Three didactic impulses. Starts are seconds on the axon clock. */
const AXON_TRAVEL = 3.3;
const AXON_LOCAL = 1.3;
const AXON_STARTS = [-0.28, 1.42, 3.12] as const;

export const AXON_DURATION = 10;

export const axonStages = [
  { id: "first", start: 0, end: 0.17 },
  { id: "second", start: 0.17, end: 0.34 },
  { id: "third", start: 0.34, end: 0.64 },
  { id: "terminals", start: 0.64, end: 1 },
] as const;

export const axonNodes = [0.18, 0.4, 0.62, 0.84] as const;

export const axonProbes = [
  { id: "start", position: 0.04, label: "Segmento inicial" },
  { id: "node-a", position: 0.18, label: "Primer nodo" },
  { id: "node-b", position: 0.4, label: "Nodo intermedio" },
  { id: "node-c", position: 0.62, label: "Nodo siguiente" },
  { id: "end", position: 0.9, label: "Cerca del terminal" },
] as const;

export type AxonProbeId = (typeof axonProbes)[number]["id"];

export type AxonPaint = "rest" | "regeneration" | "spread" | "recovery" | "after";

export function axonPlaybackStages(): StageBound[] {
  return scaleStages(axonStages, AXON_DURATION);
}

function axonRatio(age: number): number {
  return 0.18 + (clamp(age, 0, AXON_LOCAL) / AXON_LOCAL) * 0.82;
}

export function axonFronts(time: number): number[] {
  return AXON_STARTS.map((start) => (time - start) / AXON_TRAVEL).filter(
    (position) => position >= 0 && position <= 1,
  );
}

export function axonLocal(time: number, position: number): {
  millivolts: number;
  ratio: number;
} {
  const pos = clamp(position, 0, 1);
  let age = Number.POSITIVE_INFINITY;
  for (const start of AXON_STARTS) {
    const elapsed = time - (start + pos * AXON_TRAVEL);
    if (elapsed >= 0 && elapsed <= AXON_LOCAL && elapsed < age) age = elapsed;
  }
  if (!Number.isFinite(age)) return { millivolts: -70, ratio: 0 };
  const ratio = axonRatio(age);
  return { millivolts: membraneVoltage(ratio), ratio };
}

export function axonPaint(time: number, position: number): AxonPaint {
  const { ratio, millivolts } = axonLocal(time, position);
  if (ratio <= 0) return "rest";
  const phase = voltageStageAt(ratio).id;
  if (phase === "depolarization" && millivolts > -55) {
    const atNode = axonNodes.some((node) => Math.abs(node - position) <= 0.04);
    const bare = position < 0.15 || position > 0.9;
    return atNode || bare ? "regeneration" : "spread";
  }
  if (phase === "repolarization") return "recovery";
  if (phase === "hyperpolarization" && millivolts < -72) return "after";
  return "rest";
}

const axonLabels: Record<AxonPaint, string> = {
  rest: "Reposo",
  regeneration: "Despolarizado",
  spread: "Corriente local",
  recovery: "Recuperación",
  after: "Más negativo",
};

export function axonReadout(time: number, position: number): {
  millivolts: number;
  label: string;
  paint: AxonPaint;
} {
  const local = axonLocal(time, position);
  const paint = axonPaint(time, position);
  return {
    millivolts: Math.round(local.millivolts),
    label: axonLabels[paint],
    paint,
  };
}

export type IonPoint = { x: number; y: number };

export function ionPositions(
  stageId: string,
  progress: number,
): { na: IonPoint; k: IonPoint } {
  const amount = clamp(progress, 0, 1);
  const naRest = { x: membrane.naX, y: membrane.outsideY };
  const kRest = { x: membrane.kX, y: membrane.insideY };
  const naInside = { x: membrane.naX - 36, y: membrane.insideY };

  if (stageId === "depolarization") {
    return {
      na: {
        x: membrane.naX,
        y: lerp(membrane.outsideY, membrane.insideY, amount),
      },
      k: kRest,
    };
  }

  if (stageId === "repolarization") {
    return {
      na: naInside,
      k: {
        x: membrane.kX,
        y: lerp(membrane.insideY, membrane.outsideY, amount),
      },
    };
  }

  if (stageId === "hyperpolarization") {
    return {
      na: naInside,
      k: {
        x: membrane.kX,
        y: lerp(membrane.outsideY, membrane.outsideY - 8, amount),
      },
    };
  }

  return { na: naRest, k: kRest };
}

/** Vertical position, as a percentage of the reference membrane figure. */
export function referenceIonMotion(
  stageId: string,
  progress: number,
): { na: number; k: number } {
  const amount = clamp(progress, 0, 1);
  const outside = 22;
  const inside = 76;
  if (stageId === "depolarization") {
    return { na: lerp(outside, inside, amount), k: inside };
  }
  if (stageId === "repolarization" || stageId === "hyperpolarization") {
    return { na: inside, k: lerp(inside, outside, amount) };
  }
  return { na: outside, k: inside };
}

export function crossesLipidOutsideChannel(point: IonPoint, channel: "na" | "k" | "none"): boolean {
  const inLipid =
    point.y > membrane.bilayerTop && point.y < membrane.bilayerBottom;
  if (!inLipid) return false;
  if (channel === "none") return true;
  const center = channel === "na" ? membrane.naX : membrane.kX;
  return Math.abs(point.x - center) > membrane.channelHalf;
}

export function voltageFrameVars(
  time: number,
  duration: number,
): Record<string, string> {
  const ratio = duration <= 0 ? 0 : clamp(time / duration, 0, 1);
  const stage = voltageStageAt(ratio);
  const progress = progressWithinStage(ratio, stage);
  const ions = ionPositions(stage.id, progress);
  const millivolts = membraneVoltage(ratio);
  return {
    "--na-x": String(ions.na.x),
    "--na-y": String(ions.na.y),
    "--k-x": String(ions.k.x),
    "--k-y": String(ions.k.y),
    "--dot-x": String(plotX(ratio)),
    "--dot-y": String(plotY(millivolts)),
    "--ratio": String(ratio),
    "--mv": String(Math.round(millivolts)),
  };
}

export function ionFrameVars(
  time: number,
  stages: readonly StageBound[],
): Record<string, string> {
  const index = stageIndexAt(time, stages);
  const stage = stages[index];
  const ions = ionPositions(stage?.id ?? "rest", progressWithinStage(time, stage));
  return {
    "--na-x": String(ions.na.x),
    "--na-y": String(ions.na.y),
    "--k-x": String(ions.k.x),
    "--k-y": String(ions.k.y),
  };
}

export const signalStages = [
  { id: "inputs", start: 0, end: 0.25 },
  { id: "integration", start: 0.25, end: 0.47 },
  { id: "threshold", start: 0.47, end: 0.67 },
  { id: "propagation", start: 0.67, end: 1 },
] as const;

export const SIGNAL_DURATION = 9;

export function signalPlaybackStages(): StageBound[] {
  return scaleStages(signalStages, SIGNAL_DURATION);
}

export type SignalExample = "reach" | "short";

export function signalFrameVars(
  time: number,
  duration: number,
  example: SignalExample = "reach",
): Record<string, string> {
  const ratio = duration <= 0 ? 0 : clamp(time / duration, 0, 1);
  const stage = signalStages[stageIndexAt(ratio, signalStages)] ?? signalStages[0];
  const progress = progressWithinStage(ratio, stage);
  const reach = example === "reach";
  const front = (offset: number, enabled = true) => {
    if (!enabled) return "0";
    if (stage.id === "inputs") return String(clamp((progress - offset) / 0.72, 0, 1));
    return "1";
  };
  const visible =
    stage.id === "inputs" || stage.id === "integration"
      ? 1
      : stage.id === "threshold"
        ? 0.65
        : 0.12;
  const meter = reach
    ? stage.id === "inputs"
      ? 0.16 + progress * 0.18
      : stage.id === "integration"
        ? 0.36 + progress * 0.2
        : stage.id === "threshold"
          ? 0.58 + progress * 0.3
          : 0.92
    : stage.id === "inputs"
      ? 0.12 + progress * 0.1
      : stage.id === "integration"
        ? 0.24 + progress * 0.16
        : stage.id === "threshold"
          ? 0.4 + progress * 0.1
          : 0.36;
  const crossed = reach && (stage.id === "propagation" || (stage.id === "threshold" && progress >= 0.62));
  const spike = stage.id === "propagation" && reach ? Math.max(progress, 0.12) : 0;

  return {
    "--p1": front(0),
    "--p2": front(0.18),
    "--p3": front(0.34, reach),
    "--p-opacity": String(visible),
    "--meter": String(clamp(meter, 0, 1)),
    "--crossed": crossed ? "1" : "0",
    "--integration": stage.id === "integration" || stage.id === "threshold" ? "1" : "0",
    "--threshold": stage.id === "threshold" ? "1" : "0",
    "--spike": String(spike),
    "--spike-opacity": spike > 0 ? "1" : "0",
  };
}

export const myelinStages = [
  { id: "spread", start: 0, end: 0.34 },
  { id: "regeneration", start: 0.34, end: 0.67 },
  { id: "continuation", start: 0.67, end: 1 },
] as const;

export const MYELIN_DURATION = 9;

const myelinNodeIndex: Record<string, number> = {
  spread: -1,
  regeneration: 0,
  continuation: 1,
};

export function myelinPlaybackStages(): StageBound[] {
  return scaleStages(myelinStages, MYELIN_DURATION);
}

export function myelinFrame(stageId: string, progress: number): {
  activeNode: number;
  spread: number;
} {
  return {
    activeNode: myelinNodeIndex[stageId] ?? -1,
    spread: clamp(progress, 0, 1),
  };
}

export const chemicalStages = [
  { id: "arrival", start: 0, end: 0.08 },
  { id: "calcium", start: 0.08, end: 0.26 },
  { id: "release", start: 0.26, end: 0.46 },
  { id: "diffusion", start: 0.46, end: 0.64 },
  { id: "binding", start: 0.64, end: 0.82 },
  { id: "response", start: 0.82, end: 1 },
] as const;

export const electricalStages = [
  { id: "connected", start: 0, end: 0.16 },
  { id: "current", start: 0.16, end: 0.62 },
  { id: "shared", start: 0.62, end: 1 },
] as const;

const CHEMICAL_DURATION = 11;
const ELECTRICAL_DURATION = 6;

export function synapsePlaybackStages(mode: "chemical" | "electrical"): StageBound[] {
  const source = mode === "chemical" ? chemicalStages : electricalStages;
  return scaleStages(source, mode === "chemical" ? CHEMICAL_DURATION : ELECTRICAL_DURATION);
}

export function synapseFrameVars(
  mode: "chemical" | "electrical",
  stageId: string,
  progress: number,
): Record<string, string> {
  const amount = clamp(progress, 0, 1);
  if (mode === "electrical") {
    return {
      "--current": stageId === "current" || stageId === "shared" ? String(stageId === "shared" ? 1 : amount) : "0",
      "--shared": stageId === "shared" ? String(amount) : "0",
      "--calcium": "0",
      "--release": "0",
      "--diffuse": "0",
      "--bind": "0",
      "--response": "0",
    };
  }

  const reached = (id: string) => stageId === id;
  return {
    "--current": "0",
    "--shared": "0",
    "--calcium": reached("calcium") ? String(amount) : reached("arrival") ? "0" : "1",
    "--release": reached("release") ? String(amount) : ["diffusion", "binding", "response"].includes(stageId) ? "1" : "0",
    "--diffuse": reached("diffusion") ? String(amount) : ["binding", "response"].includes(stageId) ? "1" : "0",
    "--bind": reached("binding") ? String(amount) : reached("response") ? "1" : "0",
    "--response": reached("response") ? String(amount) : "0",
  };
}

export const networkStages = [
  { id: "input", start: 0, end: 0.34 },
  { id: "relay", start: 0.34, end: 0.67 },
  { id: "split", start: 0.67, end: 1 },
] as const;

export const NETWORK_DURATION = 9;

export function networkPlaybackStages(): StageBound[] {
  return scaleStages(networkStages, NETWORK_DURATION);
}

export function networkState(stageId: string): {
  active: readonly string[];
  inhibited: readonly string[];
} {
  if (stageId === "input") return { active: ["n1"], inhibited: [] };
  if (stageId === "relay") return { active: ["n2"], inhibited: [] };
  if (stageId === "split") return { active: ["n3"], inhibited: ["n4"] };
  return { active: [], inhibited: [] };
}
