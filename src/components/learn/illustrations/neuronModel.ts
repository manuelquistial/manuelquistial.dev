import { cubicPoint, ribbonPath, type Cubic, type Point } from "@/components/learn/illustrations/geometry";

export const neuronView = { width: 1200, height: 680 } as const;

export const somaCenter = { x: 268, y: 340 };

const somaLocal =
  "M6 -86C58 -92 96 -48 88 2C102 52 58 96 2 88C-58 102 -104 52 -92 2C-108 -48 -58 -84 6 -86Z";

function hash(seed: number): number {
  const value = Math.sin(seed * 127.1 + 3.7) * 43758.5453;
  return value - Math.floor(value);
}

type Branch = {
  cubic: Cubic;
  w0: number;
  w1: number;
  children: Branch[];
};

function contain(x0: number, y0: number, x3: number, y3: number, bounds: { minX: number; maxX: number; minY: number; maxY: number }) {
  const dx = x3 - x0;
  const dy = y3 - y0;
  let scale = 1;
  if (dx < 0 && x3 < bounds.minX) scale = Math.min(scale, (bounds.minX - x0) / dx);
  if (dx > 0 && x3 > bounds.maxX) scale = Math.min(scale, (bounds.maxX - x0) / dx);
  if (dy < 0 && y3 < bounds.minY) scale = Math.min(scale, (bounds.minY - y0) / dy);
  if (dy > 0 && y3 > bounds.maxY) scale = Math.min(scale, (bounds.maxY - y0) / dy);
  return { x: x0 + dx * scale, y: y0 + dy * scale };
}

const dendriteBounds = { minX: 16, maxX: 390, minY: 12, maxY: 668 };
const terminalBounds = { minX: 860, maxX: 1172, minY: 150, maxY: 560 };

function grow(
  x: number,
  y: number,
  angle: number,
  length: number,
  width: number,
  depth: number,
  seed: number,
  bounds = dendriteBounds,
): Branch {
  const bend = (hash(seed) - 0.5) * 0.55;
  const endAngle = angle + bend;
  const end = contain(x, y, x + Math.cos(endAngle) * length, y + Math.sin(endAngle) * length, bounds);
  const x3 = end.x;
  const y3 = end.y;
  const span = Math.hypot(x3 - x, y3 - y);
  const cubic: Cubic = {
    x0: x,
    y0: y,
    x1: x + Math.cos(angle) * span * 0.45,
    y1: y + Math.sin(angle) * span * 0.45,
    x2: x3 - Math.cos(endAngle) * span * 0.25,
    y2: y3 - Math.sin(endAngle) * span * 0.25,
    x3,
    y3,
  };
  const w1 = Math.max(1.05, width * (0.58 + hash(seed + 9) * 0.06));
  const branch: Branch = { cubic, w0: width, w1, children: [] };

  if (depth > 0 && w1 > 1.35) {
    const spread = 0.34 + hash(seed + 4) * 0.22;
    const next = depth - 1;
    branch.children = [
      grow(x3, y3, endAngle - spread, length * (0.62 + hash(seed + 1) * 0.08), w1, next, seed + 17, bounds),
      grow(x3, y3, endAngle + spread * 0.9, length * (0.56 + hash(seed + 2) * 0.08), w1 * 0.94, next, seed + 41, bounds),
    ];
    if (depth >= 2 && hash(seed + 6) > 0.28) {
      branch.children.push(
        grow(
          x3,
          y3,
          endAngle + (hash(seed + 8) - 0.5) * 0.4,
          length * 0.46,
          w1 * 0.82,
          next,
          seed + 63,
          bounds,
        ),
      );
    }
  }

  return branch;
}

function flatten(branch: Branch, into: Branch[] = []): Branch[] {
  into.push(branch);
  for (const child of branch.children) flatten(child, into);
  return into;
}

function chain(branch: Branch, into: Cubic[] = []): Cubic[] {
  into.push(branch.cubic);
  const next = branch.children[0];
  if (next) chain(next, into);
  return into;
}

const rootSpecs = [
  { angle: Math.PI * 0.28, length: 96, width: 11, depth: 3, seed: 2 },
  { angle: Math.PI * 0.42, length: 124, width: 15, depth: 4, seed: 5 },
  { angle: Math.PI * 0.56, length: 138, width: 17, depth: 4, seed: 8 },
  { angle: Math.PI * 0.7, length: 150, width: 18, depth: 4, seed: 11 },
  { angle: Math.PI * 0.84, length: 158, width: 19, depth: 4, seed: 14 },
  { angle: Math.PI * 0.98, length: 154, width: 18, depth: 4, seed: 17 },
  { angle: Math.PI * 1.12, length: 150, width: 18, depth: 4, seed: 20 },
  { angle: Math.PI * 1.26, length: 142, width: 16, depth: 4, seed: 23 },
  { angle: Math.PI * 1.4, length: 132, width: 15, depth: 4, seed: 26 },
  { angle: Math.PI * 1.54, length: 118, width: 13, depth: 4, seed: 29 },
  { angle: Math.PI * 1.68, length: 96, width: 11, depth: 3, seed: 32 },
  { angle: Math.PI * 0.36, length: 78, width: 9, depth: 3, seed: 35 },
  { angle: Math.PI * 1.62, length: 80, width: 9, depth: 3, seed: 38 },
];

function rootAt(spec: (typeof rootSpecs)[number], origin: Point): Branch {
  return grow(
    origin.x + Math.cos(spec.angle) * 72,
    origin.y + Math.sin(spec.angle) * 68,
    spec.angle,
    spec.length,
    spec.width,
    spec.depth,
    spec.seed,
  );
}

const dendriteRoots = rootSpecs.map((spec) => rootAt(spec, somaCenter));

export const dendriteRibbons = dendriteRoots.flatMap((root) =>
  flatten(root).map((branch) => ({
    d: ribbonPath(branch.cubic, branch.w0, branch.w1),
    hit: `M ${branch.cubic.x0} ${branch.cubic.y0} C ${branch.cubic.x1} ${branch.cubic.y1}, ${branch.cubic.x2} ${branch.cubic.y2}, ${branch.cubic.x3} ${branch.cubic.y3}`,
    width: Math.max(branch.w0, 10),
  })),
);

export const signalChains = [2, 4, 6].map((index) => chain(dendriteRoots[index] as Branch));

export const axonCurve: Cubic = {
  x0: 348,
  y0: 338,
  x1: 500,
  y1: 350,
  x2: 700,
  y2: 328,
  x3: 900,
  y3: 338,
};

export const axonRibbon = ribbonPath(axonCurve, 16, 11, 28);

export const myelinSpans = [0.16, 0.36, 0.56, 0.76].map((t) => {
  const center = cubicPoint(axonCurve, t);
  return { x: center.x - 58, y: center.y, length: 112, thickness: 40 };
});

export const nodePoints = [0.26, 0.46, 0.66, 0.9].map((t) => cubicPoint(axonCurve, t));

export const measurePoint = cubicPoint(axonCurve, 0.46);

const terminalRoots = [
  { angle: -1.25, length: 86, seed: 3 },
  { angle: -0.78, length: 108, seed: 6 },
  { angle: -0.32, length: 74, seed: 9 },
  { angle: 0.16, length: 96, seed: 12 },
  { angle: 0.64, length: 88, seed: 15 },
  { angle: 1.12, length: 72, seed: 18 },
].map((root) => grow(axonCurve.x3, axonCurve.y3, root.angle, root.length, 7.5, 2, root.seed, terminalBounds));

export const terminalRibbons = terminalRoots.flatMap((root) =>
  flatten(root).map((branch) => ribbonPath(branch.cubic, branch.w0, Math.max(branch.w1, 1.4), 10)),
);

export const boutons = terminalRoots.flatMap((root) => {
  const tips: Branch[] = [];
  const walk = (branch: Branch) => {
    if (branch.children.length === 0) tips.push(branch);
    branch.children.forEach(walk);
  };
  walk(root);
  return tips.map((branch) => ({ x: branch.cubic.x3, y: branch.cubic.y3, r: 8 }));
});

export const soma = {
  d: somaLocal,
  transform: `translate(${somaCenter.x} ${somaCenter.y})`,
  nucleus: { cx: 0, cy: -2, rx: 36, ry: 34 },
  nucleolus: { cx: 2, cy: -2, r: 11 },
  organelles: [
    { cx: -22, cy: 18, rx: 8, ry: 4 },
    { cx: 24, cy: 22, rx: 7, ry: 3.5 },
    { cx: 18, cy: -24, rx: 6, ry: 3 },
  ],
};

export const neuronAnchors = {
  dendrites: { x: 12, y: 22 },
  soma: { x: 22, y: 42 },
  axon: { x: 62, y: 46 },
  myelin: { x: 48, y: 40 },
  nodes: { x: 55, y: 52 },
} as const;

export function compactArbor(origin: Point, scale: number, seed: number) {
  const bounds = {
    minX: origin.x - 78,
    maxX: origin.x + 78,
    minY: origin.y - 72,
    maxY: origin.y + 72,
  };
  const specs = [0.2, 0.7, 1.25, 1.8, 2.35, 2.9, 3.45, 4.05].map((turn, index) => ({
    angle: (Math.PI * turn) / 2,
    length: (42 + (index % 3) * 8) * scale,
    width: (6.5 - (index % 2)) * scale,
    depth: 2,
    seed: seed + index * 9,
  }));
  return specs.flatMap((spec) => {
    const root = grow(
      origin.x + Math.cos(spec.angle) * 20 * scale,
      origin.y + Math.sin(spec.angle) * 20 * scale,
      spec.angle,
      spec.length,
      spec.width,
      spec.depth,
      spec.seed,
      bounds,
    );
    return flatten(root).map((branch) => ribbonPath(branch.cubic, branch.w0, branch.w1, 8));
  });
}

export const somaPath = somaLocal;
