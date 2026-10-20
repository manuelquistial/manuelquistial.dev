"use client";

import { learnColors } from "@/components/learn/illustrations/palette";
import { Part } from "@/components/learn/illustrations/Part";
import { Grain, useSvgId } from "@/components/learn/illustrations/shapes";
import { artView, gliaNodePoints, gliaNucleolus, gliaNucleus, gliaPaths } from "@/components/learn/illustrations/tracedGeometry";

export const gliaView = artView;

export const gliaNodes = gliaNodePoints;

export const gliaAnchors = {
  glia: { x: 51, y: 24 },
  myelin: { x: 18, y: 68 },
  nodes: { x: 28, y: 62 },
} as const;

export function GliaArt({
  labels,
  selectedId = null,
  hintId,
  onSelect,
  activeNode = -1,
  phase = "isolation",
}: {
  labels?: Partial<Record<"glia" | "myelin" | "nodes", string>>;
  selectedId?: string | null;
  hintId?: string;
  onSelect?: (id: string) => void;
  activeNode?: number;
  phase?: "isolation" | "spread" | "regeneration" | "continuation";
}) {
  const grain = useSvgId("glia-grain");

  return (
    <svg viewBox={`0 0 ${gliaView.width} ${gliaView.height}`} width={gliaView.width} height={gliaView.height} className="learn-glia-art block h-auto w-full" role="group">
      <defs>
        <Grain id={grain} />
      </defs>
      <rect width={gliaView.width} height={gliaView.height} fill={learnColors.paper} />
      <g pointerEvents="none" filter={`url(#${grain})`}>
        {gliaPaths.axon.map((d) => (
          <path key={d.slice(0, 24)} d={d} fill={learnColors.coral} />
        ))}
        {gliaPaths.myelin.map((d) => (
          <path key={d.slice(0, 24)} d={d} fill={learnColors.myelin} />
        ))}
        {gliaPaths.body.map((d) => (
          <path key={d.slice(0, 24)} d={d} fill={learnColors.glia} />
        ))}
      </g>
      <g pointerEvents="none" fill="none" strokeLinejoin="round" strokeLinecap="round">
        <g stroke={learnColors.coralInk} strokeWidth="3">
          {gliaPaths.axon.map((d) => (
            <path key={d.slice(0, 24)} d={d} />
          ))}
        </g>
        <g stroke={learnColors.myelinEdge} strokeWidth="2.4">
          {gliaPaths.myelin.map((d) => (
            <path key={d.slice(0, 24)} d={d} />
          ))}
        </g>
        <g stroke="#efe6d4" strokeWidth="1.7" opacity="0.95">
          {gliaPaths.myelinLines.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        {gliaPaths.collars.map((d) => (
          <path key={d.slice(0, 20)} d={d} fill={learnColors.collar} stroke={learnColors.collarInk} strokeWidth="1.5" />
        ))}
        <g stroke={learnColors.violetInk} strokeWidth="2.6">
          {gliaPaths.body.map((d) => (
            <path key={d.slice(0, 24)} d={d} />
          ))}
        </g>
        <ellipse cx={gliaNucleus.cx} cy={gliaNucleus.cy} rx={gliaNucleus.rx} ry={gliaNucleus.ry} fill={learnColors.nucleus} stroke={learnColors.violetInk} strokeWidth="1.7" />
        <circle cx={gliaNucleolus.cx} cy={gliaNucleolus.cy} r={gliaNucleolus.r} fill={learnColors.nucleolus} />
      </g>
      <Part id="myelin" label={labels?.myelin ?? "Mielina"} selected={selectedId === "myelin"} hinted={hintId === "myelin"} onSelect={onSelect}>
        <g className="learn-highlight">
          {gliaPaths.myelin.map((d) => (
            <path key={d.slice(0, 24)} d={d} fill={learnColors.myelin} />
          ))}
        </g>
        {gliaPaths.myelin.map((d) => (
          <path key={d.slice(0, 24)} d={d} fill="transparent" />
        ))}
      </Part>
      <Part id="glia" label={labels?.glia ?? "Oligodendrocito"} selected={selectedId === "glia"} hinted={hintId === "glia"} onSelect={onSelect}>
        <g className="learn-highlight">
          {gliaPaths.body.map((d) => (
            <path key={d.slice(0, 24)} d={d} fill={learnColors.glia} />
          ))}
          {gliaPaths.myelin.map((d) => (
            <path key={`sheath-${d.slice(0, 16)}`} d={d} fill={learnColors.myelin} />
          ))}
        </g>
        {gliaPaths.body.map((d) => (
          <path key={d.slice(0, 24)} d={d} fill="transparent" />
        ))}
      </Part>
      <Part id="nodes" label={labels?.nodes ?? "Nodos de Ranvier"} selected={selectedId === "nodes"} hinted={hintId === "nodes"} onSelect={onSelect}>
        {gliaNodes.map((node, index) => (
          <g key={`${node.x}-${node.y}`} data-node={index}>
            <circle
              className="learn-node-mark"
              cx={node.x}
              cy={node.y}
              r="18"
              fill="none"
              stroke={activeNode === index ? learnColors.signal : "transparent"}
              strokeWidth={activeNode === index ? 6 : 2}
            />
            <circle cx={node.x} cy={node.y} r="5" fill={learnColors.coral} />
            <circle cx={node.x} cy={node.y} r="88" fill="transparent" />
          </g>
        ))}
      </Part>
      <g pointerEvents="none">
        <line
          className="learn-internode"
          x1={gliaNodes[0]?.x ?? 0}
          y1={gliaNodes[0]?.y ?? 0}
          x2={gliaNodes[1]?.x ?? 0}
          y2={gliaNodes[1]?.y ?? 0}
          stroke={learnColors.signal}
          strokeWidth="12"
          strokeLinecap="round"
          pathLength={1}
          opacity={phase === "spread" || phase === "continuation" ? 0.35 : 0}
        />
        {phase === "isolation" ? (
          <g>
            <circle cx={620} cy={560} r="10" fill="none" stroke={learnColors.ink} strokeWidth="2" />
            <path d="M 630 550 L 760 180" fill="none" stroke={learnColors.ink} strokeWidth="1.5" strokeDasharray="6 5" />
          </g>
        ) : null}
        {phase === "regeneration" || phase === "continuation" ? (
          <path d={`M ${(gliaNodes[activeNode]?.x ?? 466) + 16} ${(gliaNodes[activeNode]?.y ?? 620) - 28} L 760 160`} fill="none" stroke={learnColors.ink} strokeWidth="1.5" strokeDasharray="6 5" />
        ) : null}
      </g>
    </svg>
  );
}
