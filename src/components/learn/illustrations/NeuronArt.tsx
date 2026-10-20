"use client";

import type { ReactNode } from "react";
import { learnColors } from "@/components/learn/illustrations/palette";
import { Part } from "@/components/learn/illustrations/Part";
import { Grain, useSvgId } from "@/components/learn/illustrations/shapes";
import { axonCurves, measurePoint, neuronView, somaCenter } from "@/components/learn/illustrations/neuronModel";
import { neuronNucleolus, neuronPaths, neuronSoma } from "@/components/learn/illustrations/tracedGeometry";

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
  const grain = useSvgId("grain");
  const shade = useSvgId("shade");
  const clip = useSvgId("clip");
  const somaMask = useSvgId("soma-mask");
  const dendriteMask = useSvgId("dendrite-mask");
  const axonMask = useSvgId("axon-mask");
  const interactive = Boolean(onSelect);
  const [dendrites, ...axonPieces] = neuronPaths.coral;
  const axonHit = axonCurves
    .map((curve, index) =>
      `${index === 0 ? `M ${curve.x0} ${curve.y0}` : ""} C ${curve.x1} ${curve.y1}, ${curve.x2} ${curve.y2}, ${curve.x3} ${curve.y3}`,
    )
    .join(" ");

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
        <Grain id={grain} />
        <radialGradient id={shade} cx="50%" cy="42%" r="58%">
          <stop offset="0%" stopColor="#f8c4b6" />
          <stop offset="62%" stopColor={learnColors.coral} stopOpacity="0" />
        </radialGradient>
        <clipPath id={clip}>
          {neuronPaths.coral.map((d) => (
            <path key={d.slice(0, 24)} d={d} />
          ))}
        </clipPath>
        <mask id={somaMask} maskUnits="userSpaceOnUse">
          <rect width={neuronView.width} height={neuronView.height} fill="black" />
          <ellipse cx={neuronSoma.cx} cy={neuronSoma.cy} rx={neuronSoma.rx} ry={neuronSoma.ry} fill="white" />
        </mask>
        <mask id={dendriteMask} maskUnits="userSpaceOnUse">
          <rect width={neuronView.width} height={neuronView.height} fill="white" />
          <ellipse cx={neuronSoma.cx} cy={neuronSoma.cy} rx={neuronSoma.rx} ry={neuronSoma.ry} fill="black" />
          <rect x="690" width="1000" height={neuronView.height} fill="black" />
        </mask>
        <mask id={axonMask} maskUnits="userSpaceOnUse">
          <rect width={neuronView.width} height={neuronView.height} fill="black" />
          <rect x="640" width="1100" height={neuronView.height} fill="white" />
        </mask>
      </defs>
      <rect width={neuronView.width} height={neuronView.height} fill={learnColors.paper} />
      <g pointerEvents="none">
        <g filter={`url(#${grain})`}>
          {neuronPaths.coral.map((d) => (
            <path key={d.slice(0, 28)} d={d} fill={learnColors.coral} />
          ))}
          <ellipse cx={somaCenter.x} cy={somaCenter.y - 8} rx="190" ry="170" fill={`url(#${shade})`} clipPath={`url(#${clip})`} />
          {neuronPaths.myelin.map((d) => (
            <path key={d.slice(0, 28)} d={d} fill={learnColors.myelin} />
          ))}
        </g>
        <g fill="none" stroke={learnColors.coralInk} strokeWidth="3.1" strokeLinejoin="round" strokeLinecap="round">
          {neuronPaths.coral.map((d) => (
            <path key={d.slice(0, 28)} d={d} />
          ))}
        </g>
        <g fill="none" stroke={learnColors.myelinEdge} strokeWidth="2.4" strokeLinejoin="round">
          {neuronPaths.myelin.map((d) => (
            <path key={d.slice(0, 28)} d={d} />
          ))}
        </g>
        <g fill="none" stroke="#efe6d4" strokeWidth="1.6" strokeLinecap="round" opacity="0.9">
          {neuronPaths.myelinLines.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        {neuronPaths.collars.map((d) => (
          <path key={d.slice(0, 24)} d={d} fill={learnColors.collar} stroke={learnColors.collarInk} strokeWidth="1.5" strokeLinejoin="round" />
        ))}
        <path d={neuronPaths.nucleus} fill={learnColors.nucleus} stroke={learnColors.violetInk} strokeWidth="1.8" />
        <circle cx={neuronNucleolus.cx} cy={neuronNucleolus.cy} r={neuronNucleolus.r} fill={learnColors.nucleolus} />
      </g>
      <Part
        id="dendrites"
        label={labels?.dendrites ?? "Dendritas"}
        selected={selectedId === "dendrites"}
        hinted={hintId === "dendrites"}
        onSelect={onSelect}
      >
        <path className="learn-highlight" d={dendrites} fill={learnColors.coral} mask={`url(#${dendriteMask})`} />
        {interactive ? <path d={dendrites} fill="transparent" /> : null}
      </Part>
      <Part id="axon" label={labels?.axon ?? "Axón"} selected={selectedId === "axon"} hinted={hintId === "axon"} onSelect={onSelect}>
        <g className="learn-highlight">
          <path d={dendrites} fill={learnColors.coral} mask={`url(#${axonMask})`} />
          {axonPieces.map((d) => (
            <path key={d.slice(0, 24)} d={d} fill={learnColors.coral} />
          ))}
        </g>
        {interactive ? (
          <>
            {axonPieces.map((d) => (
              <path key={d.slice(0, 24)} d={d} fill="transparent" />
            ))}
            <path d={axonHit} fill="none" stroke="transparent" strokeWidth="72" strokeLinecap="round" />
          </>
        ) : null}
      </Part>
      <Part id="soma" label={labels?.soma ?? "Soma"} selected={selectedId === "soma"} hinted={hintId === "soma"} onSelect={onSelect}>
        <path className="learn-highlight" d={dendrites} fill={learnColors.coral} mask={`url(#${somaMask})`} />
        {interactive ? (
          <ellipse cx={neuronSoma.cx} cy={neuronSoma.cy} rx={neuronSoma.rx} ry={neuronSoma.ry} fill="transparent" />
        ) : null}
      </Part>
      {showMeasure ? (
        <g data-part-group="measure" aria-hidden="true">
          <circle cx={measurePoint.x} cy={measurePoint.y} r="9" fill={learnColors.signal} stroke="#fff" strokeWidth="2" />
          <text x={measurePoint.x + 14} y={measurePoint.y - 12} fill={learnColors.ink} fontSize="18" fontWeight="700">
            Punto
          </text>
        </g>
      ) : null}
      {children}
    </svg>
  );
}
