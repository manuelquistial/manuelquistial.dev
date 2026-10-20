import { clamp } from "@/lib/learn/physiology";

export type ChannelState = "closed" | "open" | "inactivated";

export type CastIon = {
  id: string;
  species: "na" | "k";
  x: number;
  y: number;
};

export const membraneArt = {
  naX: 321,
  kX: 661,
  leakX: 490,
  pumpX: 790,
  bilayerTop: 382,
  bilayerBottom: 528,
  poreHalf: 18,
} as const;

type Home = { id: string; species: "na" | "k"; x: number; y: number; mover?: "na" | "k" };

const homes: readonly Home[] = [
  { id: "na-1", species: "na", x: 70, y: 300 },
  { id: "na-2", species: "na", x: 165, y: 318 },
  { id: "na-3", species: "na", x: 215, y: 300 },
  { id: "na-4", species: "na", x: 430, y: 318 },
  { id: "na-5", species: "na", x: 555, y: 308 },
  { id: "na-m", species: "na", x: 115, y: 348, mover: "na" },
  { id: "na-i1", species: "na", x: 110, y: 640 },
  { id: "na-i2", species: "na", x: 250, y: 700 },
  { id: "k-o1", species: "k", x: 900, y: 318 },
  { id: "k-o2", species: "k", x: 980, y: 340 },
  { id: "k-1", species: "k", x: 400, y: 660 },
  { id: "k-2", species: "k", x: 520, y: 700 },
  { id: "k-3", species: "k", x: 640, y: 640 },
  { id: "k-4", species: "k", x: 860, y: 700 },
  { id: "k-5", species: "k", x: 980, y: 640 },
  { id: "k-m", species: "k", x: 760, y: 680, mover: "k" },
];

const naEnd = { x: 360, y: 650 };
const kEnd = { x: 700, y: 330 };

function lerp(from: number, to: number, amount: number) {
  return from + (to - from) * amount;
}

function throughPore(
  start: { x: number; y: number },
  end: { x: number; y: number },
  channelX: number,
  amount: number,
) {
  const t = clamp(amount, 0, 1);
  const top = membraneArt.bilayerTop - 6;
  const bottom = membraneArt.bilayerBottom + 6;
  if (t < 0.3) {
    const u = t / 0.3;
    return { x: lerp(start.x, channelX, u), y: lerp(start.y, top, u) };
  }
  if (t < 0.7) {
    const u = (t - 0.3) / 0.4;
    return { x: channelX, y: lerp(top, bottom, u) };
  }
  const u = (t - 0.7) / 0.3;
  return { x: lerp(channelX, end.x, u), y: lerp(bottom, end.y, u) };
}

export function ionChannelState(
  stageId: string,
  progress = 1,
): { sodium: ChannelState; potassium: ChannelState } {
  if (stageId === "depolarization") return { sodium: "open", potassium: "closed" };
  if (stageId === "repolarization") return { sodium: "inactivated", potassium: "open" };
  if (stageId === "hyperpolarization") {
    return {
      sodium: progress < 0.62 ? "inactivated" : "closed",
      potassium: progress < 0.7 ? "open" : "closed",
    };
  }
  return { sodium: "closed", potassium: "closed" };
}

function moverAmount(stageId: string, progress: number, species: "na" | "k") {
  if (species === "na") {
    if (stageId === "depolarization") return progress;
    if (stageId === "rest") return 0;
    return 1;
  }
  if (stageId === "repolarization" || stageId === "hyperpolarization") return stageId === "hyperpolarization" ? 1 : progress;
  if (stageId === "recovery") return 1;
  return 0;
}

export function membraneCast(stageId: string, progress: number): CastIon[] {
  return homes.map((home) => {
    if (home.mover === "na") {
      const point = throughPore(home, naEnd, membraneArt.naX, moverAmount(stageId, progress, "na"));
      return { id: home.id, species: home.species, ...point };
    }
    if (home.mover === "k") {
      const point = throughPore(home, kEnd, membraneArt.kX, moverAmount(stageId, progress, "k"));
      return { id: home.id, species: home.species, ...point };
    }
    return { id: home.id, species: home.species, x: home.x, y: home.y };
  });
}

export function ionInLipidOutsidePore(ion: CastIon): boolean {
  const inLipid = ion.y > membraneArt.bilayerTop && ion.y < membraneArt.bilayerBottom;
  if (!inLipid) return false;
  const channel = ion.species === "na" ? membraneArt.naX : membraneArt.kX;
  return Math.abs(ion.x - channel) > membraneArt.poreHalf;
}

export type ChemicalPose = {
  caOpen: number;
  caTravel: number;
  fusion: number;
  nt: number;
  bound: number;
  response: number;
};

export function chemicalPose(stageId: string, progress: number): ChemicalPose {
  const amount = clamp(progress, 0, 1);
  const after = (ids: readonly string[]) => ids.includes(stageId);
  return {
    caOpen: stageId === "calcium" ? 0.55 + amount * 0.45 : 0,
    caTravel: stageId === "calcium" ? 0.15 + amount * 0.85 : after(["release", "diffusion", "binding", "response"]) ? 1 : 0,
    fusion: stageId === "release" ? 0.4 + amount * 0.6 : after(["diffusion", "binding", "response"]) ? 1 : 0,
    nt: stageId === "release" ? clamp((amount - 0.2) / 0.8, 0, 1) : after(["diffusion", "binding", "response"]) ? 1 : 0,
    bound: stageId === "binding" ? 0.5 + amount * 0.5 : stageId === "response" ? 1 : 0,
    response: stageId === "response" ? 0.4 + amount * 0.6 : 0,
  };
}

export type NtRoute = {
  id: string;
  from: { x: number; y: number };
  ctrl: { x: number; y: number };
  to: { x: number; y: number };
  delay: number;
  docks: boolean;
};

export const ntRoutes: readonly NtRoute[] = [
  { id: "nt-1", from: { x: 830, y: 512 }, ctrl: { x: 700, y: 590 }, to: { x: 642, y: 648 }, delay: 0, docks: true },
  { id: "nt-2", from: { x: 830, y: 512 }, ctrl: { x: 980, y: 600 }, to: { x: 1030, y: 650 }, delay: 0.12, docks: true },
  { id: "nt-3", from: { x: 830, y: 512 }, ctrl: { x: 760, y: 640 }, to: { x: 560, y: 610 }, delay: 0.2, docks: false },
  { id: "nt-4", from: { x: 830, y: 512 }, ctrl: { x: 1040, y: 560 }, to: { x: 1180, y: 600 }, delay: 0.08, docks: false },
  { id: "nt-5", from: { x: 830, y: 512 }, ctrl: { x: 860, y: 680 }, to: { x: 835, y: 630 }, delay: 0.28, docks: true },
];

export function quadPoint(
  from: { x: number; y: number },
  ctrl: { x: number; y: number },
  to: { x: number; y: number },
  amount: number,
) {
  const t = clamp(amount, 0, 1);
  const u = 1 - t;
  return {
    x: u * u * from.x + 2 * u * t * ctrl.x + t * t * to.x,
    y: u * u * from.y + 2 * u * t * ctrl.y + t * t * to.y,
  };
}

export function ntProgress(route: NtRoute, pose: ChemicalPose) {
  if (pose.nt <= 0) return 0;
  const travel = clamp((pose.nt - route.delay) / (1 - route.delay), 0, 1);
  if (pose.bound > 0 && route.docks) return clamp(travel + pose.bound * (1 - travel), 0, 1);
  return travel;
}

export const caIons = [
  { id: "ca-1", x: 690, startY: 560, endY: 400 },
  { id: "ca-2", x: 980, startY: 575, endY: 420 },
  { id: "ca-3", x: 690, startY: 548, endY: 370 },
] as const;

export function caPoint(index: number, pose: ChemicalPose) {
  const ion = caIons[index] ?? caIons[0];
  const local = clamp((pose.caTravel - index * 0.16) / 0.7, 0, 1);
  return { x: ion.x, y: ion.startY + (ion.endY - ion.startY) * local, seen: pose.caTravel > 0.02 || local > 0 };
}

export function fusionOutline(open: number): string {
  const t = clamp(open, 0, 1);
  const cx = 830;
  const cy = 385.5;
  const r = 71.5;
  if (t < 0.05) {
    return `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy} Z`;
  }
  const mouth = 16 + t * 18;
  const lip = 498 + t * 36;
  return `M ${cx - r} ${cy}
    A ${r} ${r} 0 1 1 ${cx + r} ${cy}
    L ${cx + mouth} ${cy + r * 0.45}
    L ${cx + mouth * 0.7} ${lip}
    L ${cx - mouth * 0.7} ${lip}
    L ${cx - mouth} ${cy + r * 0.45} Z`;
}

export type ElectricalFlow = "forward" | "reverse";

export function electricalPose(stageId: string, progress: number, flow: ElectricalFlow = "forward") {
  const amount = clamp(progress, 0, 1);
  const direction = flow === "forward" ? 1 : -1;
  const source = stageId === "connected" ? 0.45 + amount * 0.55 : stageId === "current" || stageId === "shared" ? 1 : 0;
  const current = stageId === "current" ? 0.35 + amount * 0.65 : stageId === "shared" ? 1 : 0;
  const shared = stageId === "shared" ? 0.45 + amount * 0.55 : 0;
  return { direction, source, current, shared };
}
