"use client";

import { ribbonPath, type Cubic } from "@/components/learn/illustrations/geometry";
import { learnColors } from "@/components/learn/illustrations/palette";
import { Part } from "@/components/learn/illustrations/Part";
import { CoralFill, MyelinCapsule } from "@/components/learn/illustrations/shapes";

export const gliaView = { width: 1100, height: 460 } as const;

const axon: Cubic = { x0: 20, y0: 318, x1: 360, y1: 330, x2: 740, y2: 306, x3: 1080, y3: 318 };

const segments = [
  { x: 70, y: 318 },
  { x: 320, y: 322 },
  { x: 575, y: 314 },
  { x: 830, y: 316 },
];

export const gliaNodes = [
  { x: 250, y: 320 },
  { x: 500, y: 318 },
  { x: 755, y: 315 },
  { x: 1005, y: 318 },
];

const processes: Cubic[] = [
  { x0: 500, y0: 168, x1: 280, y1: 150, x2: 160, y2: 230, x3: 145, y3: 292 },
  { x0: 545, y0: 210, x1: 430, y1: 240, x2: 390, y2: 280, x3: 400, y3: 296 },
  { x0: 600, y0: 214, x1: 640, y1: 248, x2: 655, y2: 272, x3: 650, y3: 294 },
  { x0: 670, y0: 155, x1: 860, y1: 140, x2: 960, y2: 220, x3: 910, y3: 290 },
];

export const gliaAnchors = {
  glia: { x: 54, y: 24 },
  myelin: { x: 28, y: 62 },
  nodes: { x: 46, y: 74 },
} as const;

export function GliaArt({
  labels,
  selectedId = null,
  hintId,
  onSelect,
  activeNode = -1,
}: {
  labels?: Partial<Record<"glia" | "myelin" | "nodes", string>>;
  selectedId?: string | null;
  hintId?: string;
  onSelect?: (id: string) => void;
  activeNode?: number;
}) {
  return (
    <svg
      viewBox={`0 0 ${gliaView.width} ${gliaView.height}`}
      width={gliaView.width}
      height={gliaView.height}
      className="learn-glia-art block h-auto w-full"
      role="group"
    >
      <rect width={gliaView.width} height={gliaView.height} fill={learnColors.paper} />
      <g data-part-group="axon">
        <CoralFill d={ribbonPath(axon, 18, 16, 24)} />
      </g>
      <Part id="myelin" label={labels?.myelin ?? "Mielina"} selected={selectedId === "myelin"} hinted={hintId === "myelin"} onSelect={onSelect}>
        <g data-part-group="myelin-segments">
          {segments.map((segment) => (
            <MyelinCapsule key={segment.x} x={segment.x} y={segment.y} length={150} thickness={58} />
          ))}
        </g>
      </Part>
      <Part id="nodes" label={labels?.nodes ?? "Nodos de Ranvier"} selected={selectedId === "nodes"} hinted={hintId === "nodes"} onSelect={onSelect}>
        <g data-part-group="ranvier-nodes">
          {gliaNodes.map((node, index) => (
            <g key={node.x} data-node={index}>
              <circle
                className="learn-node-mark"
                cx={node.x}
                cy={node.y}
                r="14"
                fill="none"
                stroke={activeNode === index ? learnColors.signal : "transparent"}
                strokeWidth={activeNode === index ? 3 : 2}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={activeNode === index ? 7 : 3}
                fill={activeNode === index ? learnColors.signal : learnColors.coral}
              />
              <circle cx={node.x} cy={node.y} r="22" fill="transparent" stroke="transparent" />
            </g>
          ))}
        </g>
      </Part>
      <Part id="glia" label={labels?.glia ?? "Oligodendrocito"} selected={selectedId === "glia"} hinted={hintId === "glia"} onSelect={onSelect}>
        {processes.map((curve) => (
          <path
            key={`${curve.x3}-${curve.y3}`}
            d={ribbonPath(curve, 22, 10, 16)}
            fill={learnColors.glia}
            stroke={learnColors.ink}
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
        ))}
        <path
          d="M455 78C500 8 650 8 690 86C735 150 655 188 590 196C575 250 505 246 470 196C400 188 385 140 455 78Z"
          fill={learnColors.glia}
          stroke={learnColors.ink}
          strokeWidth="1.5"
        />
        <circle cx="575" cy="108" r="30" fill={learnColors.nucleus} stroke={learnColors.ink} strokeWidth="1.2" />
        <circle cx="575" cy="108" r="12" fill={learnColors.nucleolus} />
      </Part>
    </svg>
  );
}
