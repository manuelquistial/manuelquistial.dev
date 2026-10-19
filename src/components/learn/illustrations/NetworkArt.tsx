"use client";

import { ribbonPath, type Cubic } from "@/components/learn/illustrations/geometry";
import { learnColors } from "@/components/learn/illustrations/palette";
import { compactArbor } from "@/components/learn/illustrations/neuronModel";

type Cell = {
  id: string;
  x: number;
  y: number;
};

const cells: Cell[] = [
  { id: "n1", x: 150, y: 170 },
  { id: "n2", x: 430, y: 150 },
  { id: "n3", x: 760, y: 250 },
  { id: "n4", x: 470, y: 470 },
  { id: "a", x: 160, y: 430 },
  { id: "b", x: 980, y: 140 },
  { id: "c", x: 1000, y: 430 },
  { id: "d", x: 760, y: 520 },
];

const links: Array<{ id: string; kind: "excitatory" | "inhibitory"; curve: Cubic }> = [
  {
    id: "n1",
    kind: "excitatory",
    curve: { x0: 190, y0: 180, x1: 280, y1: 120, x2: 340, y2: 120, x3: 400, y3: 155 },
  },
  {
    id: "n2",
    kind: "excitatory",
    curve: { x0: 470, y0: 170, x1: 560, y1: 190, x2: 640, y2: 210, x3: 720, y3: 245 },
  },
  {
    id: "n4",
    kind: "inhibitory",
    curve: { x0: 450, y0: 190, x1: 400, y1: 280, x2: 420, y2: 370, x3: 460, y3: 440 },
  },
];

export function NetworkArt({
  active,
  inhibited,
}: {
  active: readonly string[];
  inhibited: readonly string[];
}) {
  return (
    <svg viewBox="0 0 1120 640" width="1120" height="640" className="block h-auto w-full" role="img" aria-hidden="true">
      <rect width="1120" height="640" fill={learnColors.paper} />
      {links.map((link) => {
        const lit = active.includes(link.id) || inhibited.includes(link.id);
        return (
          <path
            key={link.id}
            d={ribbonPath(link.curve, 8, 5, 12)}
            fill={link.kind === "inhibitory" ? learnColors.inhibitory : lit ? "#e2b15a" : learnColors.coral}
            stroke={learnColors.ink}
            strokeWidth="1"
            opacity={lit || link.kind === "inhibitory" ? 1 : 0.85}
          />
        );
      })}
      {cells.map((cell, index) => {
        const isActive = active.includes(cell.id);
        const isInhibited = inhibited.includes(cell.id);
        return (
          <g key={cell.id} data-cell={cell.id}>
            {compactArbor(cell, index % 2 === 0 ? 1 : 0.92, 40 + index * 13).map((d, ribbon) => (
              <path key={ribbon} d={d} fill={learnColors.coral} stroke={learnColors.ink} strokeWidth="0.9" strokeLinejoin="round" />
            ))}
            <circle cx={cell.x} cy={cell.y} r="22" fill={isActive ? learnColors.coralDeep : learnColors.coral} stroke={learnColors.ink} strokeWidth="1.3" />
            <circle cx={cell.x} cy={cell.y} r="9" fill={learnColors.nucleus} stroke={learnColors.ink} strokeWidth="0.8" />
            <circle cx={cell.x} cy={cell.y} r="3.5" fill={learnColors.nucleolus} />
            {isActive ? <circle cx={cell.x} cy={cell.y} r="32" fill="none" stroke={learnColors.signal} strokeWidth="2.5" /> : null}
            {isInhibited ? (
              <circle cx={cell.x} cy={cell.y} r="32" fill="none" stroke={learnColors.inhibitory} strokeWidth="2.5" strokeDasharray="5 4" />
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
