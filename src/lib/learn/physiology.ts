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

export const VOLTAGE_DURATION = 12;
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
    { id: "rest", start: 0, end: 3 },
    { id: "depolarization", start: 3, end: 6 },
    { id: "repolarization", start: 6, end: 9 },
  ];
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
  { id: "inputs", start: 0, end: 0.28 },
  { id: "integration", start: 0.28, end: 0.52 },
  { id: "threshold", start: 0.52, end: 0.68 },
  { id: "propagation", start: 0.68, end: 1 },
] as const;

export const SIGNAL_DURATION = 10;

export function signalPlaybackStages(): StageBound[] {
  return scaleStages(signalStages, SIGNAL_DURATION);
}

export function signalFrameVars(
  time: number,
  duration: number,
): Record<string, string> {
  const ratio = duration <= 0 ? 0 : clamp(time / duration, 0, 1);
  const stage = signalStages[stageIndexAt(ratio, signalStages)] ?? signalStages[0];
  const progress = progressWithinStage(ratio, stage);
  const traveling = stage.id === "inputs";
  const visible =
    stage.id === "inputs" ? 1 : stage.id === "integration" ? 1 - progress : 0;
  const delayed = (offset: number) =>
    traveling ? String(clamp((progress - offset) / 0.72, 0, 1)) : "1";

  return {
    "--p1": delayed(0),
    "--p2": delayed(0.16),
    "--p3": delayed(0.32),
    "--p-opacity": String(visible),
    "--integration": stage.id === "integration" || stage.id === "threshold" ? "1" : "0",
    "--threshold": stage.id === "threshold" ? "1" : "0",
    "--spike": stage.id === "propagation" ? String(progress) : "0",
    "--spike-opacity": stage.id === "propagation" ? "1" : "0",
  };
}

export const myelinStages = [
  { id: "rest", start: 0, end: 0.12 },
  { id: "node-1", start: 0.12, end: 0.34 },
  { id: "node-2", start: 0.34, end: 0.56 },
  { id: "node-3", start: 0.56, end: 0.78 },
  { id: "node-4", start: 0.78, end: 1 },
] as const;

export const MYELIN_DURATION = 10;

const myelinNodeIndex: Record<string, number> = {
  rest: -1,
  "node-1": 0,
  "node-2": 1,
  "node-3": 2,
  "node-4": 3,
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
  { id: "arrival", start: 0, end: 1 / 6 },
  { id: "calcium", start: 1 / 6, end: 2 / 6 },
  { id: "release", start: 2 / 6, end: 3 / 6 },
  { id: "diffusion", start: 3 / 6, end: 4 / 6 },
  { id: "binding", start: 4 / 6, end: 5 / 6 },
  { id: "response", start: 5 / 6, end: 1 },
] as const;

export const electricalStages = [
  { id: "connected", start: 0, end: 0.3 },
  { id: "current", start: 0.3, end: 0.7 },
  { id: "shared", start: 0.7, end: 1 },
] as const;

export const SYNAPSE_DURATION = 12;

export function synapsePlaybackStages(mode: "chemical" | "electrical"): StageBound[] {
  const source = mode === "chemical" ? chemicalStages : electricalStages;
  return scaleStages(source, SYNAPSE_DURATION);
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
  { id: "idle", start: 0, end: 0.2 },
  { id: "input", start: 0.2, end: 0.45 },
  { id: "relay", start: 0.45, end: 0.7 },
  { id: "split", start: 0.7, end: 1 },
] as const;

export const NETWORK_DURATION = 8;

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
