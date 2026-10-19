"use client";

import { useId, type ReactNode } from "react";
import { learnColors } from "@/components/learn/illustrations/palette";
import { Part } from "@/components/learn/illustrations/Part";
import { CoralFill, MyelinCapsule } from "@/components/learn/illustrations/shapes";
import {
  axonCurve,
  axonRibbon,
  boutons,
  dendriteRibbons,
  measurePoint,
  myelinSpans,
  neuronView,
  soma,
  terminalRibbons,
} from "@/components/learn/illustrations/neuronModel";

export function NeuronArt({
  label,
  labels,
  selectedId = null,
  hintId,
  onSelect,
  showMeasure = false,
  children,
}: {
  label?: string;
  labels?: Partial<Record<"dendrites" | "soma" | "axon", string>>;
  selectedId?: string | null;
  hintId?: string;
  onSelect?: (id: string) => void;
  showMeasure?: boolean;
  children?: ReactNode;
}) {
  const shadeId = useId();
  const interactive = Boolean(onSelect);

  return (
    <svg
      viewBox={`0 0 ${neuronView.width} ${neuronView.height}`}
      width={neuronView.width}
      height={neuronView.height}
      className="block h-auto w-full"
      role={interactive ? "group" : "img"}
      aria-label={interactive ? undefined : label}
    >
      <defs>
        <radialGradient id={shadeId} cx="38%" cy="36%" r="70%">
          <stop offset="0%" stopColor="#f6c3b6" />
          <stop offset="100%" stopColor={learnColors.coral} />
        </radialGradient>
      </defs>
      <rect width={neuronView.width} height={neuronView.height} fill={learnColors.paper} />
      <Part
        id="dendrites"
        label={labels?.dendrites ?? "Dendritas"}
        selected={selectedId === "dendrites"}
        hinted={hintId === "dendrites"}
        onSelect={onSelect}
      >
        {dendriteRibbons.map((ribbon, index) => (
          <g key={index}>
            <CoralFill d={ribbon.d} width={1.15} />
            {interactive ? (
              <path d={ribbon.hit} fill="none" stroke="transparent" strokeWidth={ribbon.width} strokeLinecap="round" />
            ) : null}
          </g>
        ))}
      </Part>
      <g data-part-group="axon">
        <Part id="axon" label={labels?.axon ?? "Axón"} selected={selectedId === "axon"} hinted={hintId === "axon"} onSelect={onSelect}>
          <g data-part-group="axon-core">
            <CoralFill d={axonRibbon} width={1.35} />
          </g>
          <g data-part-group="myelin-segments">
            {myelinSpans.map((span) => (
              <MyelinCapsule key={span.x} x={span.x} y={span.y} length={span.length} thickness={span.thickness} />
            ))}
          </g>
          <g data-part-group="axon-terminals">
            {terminalRibbons.map((d, index) => (
              <CoralFill key={index} d={d} width={1.15} />
            ))}
            {boutons.map((bouton) => (
              <circle
                key={`${bouton.x}-${bouton.y}`}
                cx={bouton.x}
                cy={bouton.y}
                r={bouton.r}
                fill={learnColors.coralDeep}
                stroke={learnColors.ink}
                strokeWidth="1.15"
              />
            ))}
          </g>
          {interactive ? (
            <path
              d={`M ${axonCurve.x0} ${axonCurve.y0} C ${axonCurve.x1} ${axonCurve.y1}, ${axonCurve.x2} ${axonCurve.y2}, ${axonCurve.x3} ${axonCurve.y3}`}
              fill="none"
              stroke="transparent"
              strokeWidth="30"
            />
          ) : null}
        </Part>
      </g>
      <Part id="soma" label={labels?.soma ?? "Soma"} selected={selectedId === "soma"} hinted={hintId === "soma"} onSelect={onSelect}>
        <g transform={soma.transform}>
          <path d={soma.d} fill={`url(#${shadeId})`} stroke={learnColors.ink} strokeWidth="1.6" />
          {soma.organelles.map((item) => (
            <ellipse
              key={`${item.cx}-${item.cy}`}
              cx={item.cx}
              cy={item.cy}
              rx={item.rx}
              ry={item.ry}
              fill={learnColors.coralDeep}
              opacity="0.55"
            />
          ))}
          <ellipse
            cx={soma.nucleus.cx}
            cy={soma.nucleus.cy}
            rx={soma.nucleus.rx}
            ry={soma.nucleus.ry}
            fill={learnColors.nucleus}
            stroke={learnColors.ink}
            strokeWidth="1.2"
          />
          <circle cx={soma.nucleolus.cx} cy={soma.nucleolus.cy} r={soma.nucleolus.r} fill={learnColors.nucleolus} />
        </g>
      </Part>
      {showMeasure ? (
        <g data-part-group="measure" aria-hidden="true">
          <circle cx={measurePoint.x} cy={measurePoint.y} r="9" fill={learnColors.signal} stroke="#fff" strokeWidth="2" />
          <text x={measurePoint.x + 14} y={measurePoint.y - 10} fill={learnColors.ink} fontSize="16" fontWeight="700">
            Punto
          </text>
        </g>
      ) : null}
      {children}
    </svg>
  );
}
