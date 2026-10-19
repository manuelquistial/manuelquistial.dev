export type Cubic = {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
};

export type Point = { x: number; y: number };

export function cubicPoint(curve: Cubic, t: number): Point {
  const u = 1 - t;
  const uu = u * u;
  const tt = t * t;
  return {
    x: uu * u * curve.x0 + 3 * uu * t * curve.x1 + 3 * u * tt * curve.x2 + tt * t * curve.x3,
    y: uu * u * curve.y0 + 3 * uu * t * curve.y1 + 3 * u * tt * curve.y2 + tt * t * curve.y3,
  };
}

function cubicTangent(curve: Cubic, t: number): Point {
  const u = 1 - t;
  return {
    x: 3 * u * u * (curve.x1 - curve.x0) + 6 * u * t * (curve.x2 - curve.x1) + 3 * t * t * (curve.x3 - curve.x2),
    y: 3 * u * u * (curve.y1 - curve.y0) + 6 * u * t * (curve.y2 - curve.y1) + 3 * t * t * (curve.y3 - curve.y2),
  };
}

export function ribbonPath(curve: Cubic, widthStart: number, widthEnd: number, steps = 18): string {
  const left: string[] = [];
  const right: string[] = [];

  for (let index = 0; index <= steps; index += 1) {
    const t = index / steps;
    const point = cubicPoint(curve, t);
    const tangent = cubicTangent(curve, t);
    const length = Math.hypot(tangent.x, tangent.y) || 1;
    const nx = -tangent.y / length;
    const ny = tangent.x / length;
    const width = (widthStart + (widthEnd - widthStart) * t) / 2;
    left.push(`${point.x + nx * width},${point.y + ny * width}`);
    right.push(`${point.x - nx * width},${point.y - ny * width}`);
  }

  return `M ${left[0]} L ${left.slice(1).join(" L ")} L ${right.reverse().join(" L ")} Z`;
}

export function curveLength(curve: Cubic): number {
  let length = 0;
  let previous = cubicPoint(curve, 0);
  for (let index = 1; index <= 10; index += 1) {
    const next = cubicPoint(curve, index / 10);
    length += Math.hypot(next.x - previous.x, next.y - previous.y);
    previous = next;
  }
  return length;
}

export function pointAlong(curves: readonly Cubic[], progress: number): Point {
  if (curves.length === 0) return { x: 0, y: 0 };
  const lengths = curves.map(curveLength);
  const total = lengths.reduce((sum, length) => sum + length, 0) || 1;
  let remaining = Math.min(1, Math.max(0, progress)) * total;

  for (let index = 0; index < curves.length; index += 1) {
    const length = lengths[index] ?? 0;
    if (remaining <= length || index === curves.length - 1) {
      return cubicPoint(curves[index] as Cubic, length === 0 ? 1 : remaining / length);
    }
    remaining -= length;
  }

  return cubicPoint(curves[curves.length - 1] as Cubic, 1);
}
