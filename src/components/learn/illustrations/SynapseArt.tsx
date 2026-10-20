"use client";

import { forwardRef } from "react";
import { learnColors } from "@/components/learn/illustrations/palette";
import { Part } from "@/components/learn/illustrations/Part";
import { Grain, useSvgId } from "@/components/learn/illustrations/shapes";
import { artView, chemicalPaths, chemicalVesicles, electricalPaths } from "@/components/learn/illustrations/tracedGeometry";

export const synapseView = artView;

export const synapseAnchors = {
  vesicles: { x: 50, y: 20 },
  transmitters: { x: 50, y: 48 },
  receptors: { x: 50, y: 64 },
  junctions: { x: 50, y: 50 },
} as const;

const junctionCenters = [568, 836, 1100];
const receptorSites = [447, 642, 835, 1030, 1226];

const dotOffsets = [
  [-0.22, -0.12],
  [0.02, -0.2],
  [0.2, -0.08],
  [-0.16, 0.1],
  [0.14, 0.12],
  [0, 0.02],
];

function receptorLobe(x: number) {
  return `M ${x - 9} 664
    C ${x - 15} 682, ${x - 14} 702, ${x - 6} 714
    C ${x} 720, ${x + 9} 716, ${x + 8} 704
    C ${x + 14} 686, ${x + 11} 668, ${x + 4} 658
    C ${x - 2} 650, ${x - 5} 654, ${x - 9} 664 Z`;
}

function Receptor({ x }: { x: number }) {
  return (
    <g>
      {[-13, 13].map((offset) => (
        <path
          key={offset}
          d={receptorLobe(x + offset)}
          fill={learnColors.receptor}
          stroke={learnColors.receptorInk}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      ))}
    </g>
  );
}

function Vesicle({ cx, cy, r, className }: { cx: number; cy: number; r: number; className?: string }) {
  return (
    <g className={className} data-home-x={cx} data-home-y={cy}>
      <circle cx={cx} cy={cy} r={r} fill="#f6f1f6" stroke={learnColors.vesicleInk} strokeWidth="1.8" />
      <circle cx={cx} cy={cy} r={r - 7} fill="none" stroke={learnColors.vesicle} strokeWidth="8" />
      {dotOffsets.map(([dx, dy], index) => (
        <circle
          key={index}
          cx={cx + (dx ?? 0) * r}
          cy={cy + (dy ?? 0) * r}
          r={4.4 + (index % 3) * 0.6}
          fill={learnColors.transmitter}
          stroke={learnColors.myelinEdge}
          strokeWidth="0.6"
        />
      ))}
    </g>
  );
}

export const ChemicalSynapseArt = forwardRef<
  SVGSVGElement,
  {
    labels?: Partial<Record<"vesicles" | "transmitters" | "receptors", string>>;
    selectedId?: string | null;
    hintId?: string;
    onSelect?: (id: string) => void;
  }
>(function ChemicalSynapseArt({ labels, selectedId = null, hintId, onSelect }, ref) {
  const grain = useSvgId("chem-grain");
  const clip = useSvgId("chem-clip");
  const coral = chemicalPaths.coral;
  const fusion = chemicalVesicles.reduce((best, vesicle) => (vesicle.cy > best.cy ? vesicle : best), chemicalVesicles[0]);
  const resting = chemicalVesicles.filter((vesicle) => vesicle !== fusion);

  return (
    <svg ref={ref} viewBox={`0 0 ${synapseView.width} ${synapseView.height}`} width={synapseView.width} height={synapseView.height} className="learn-synapse-art block h-auto w-full" role="group">
      <defs>
        <Grain id={grain} />
        <clipPath id={clip}>
          {coral.map((d) => (
            <path key={d.slice(0, 18)} d={d} />
          ))}
        </clipPath>
      </defs>
      <rect width={synapseView.width} height={synapseView.height} fill={learnColors.paper} />
      <g pointerEvents="none" filter={`url(#${grain})`}>
        {coral.map((d) => (
          <path key={d.slice(0, 18)} d={d} fill={learnColors.coral} />
        ))}
      </g>
      <g pointerEvents="none" fill="none" stroke={learnColors.coralInk} strokeWidth="2.8" strokeLinejoin="round">
        {coral.map((d) => (
          <path key={d.slice(0, 18)} d={d} />
        ))}
      </g>
      <g pointerEvents="none" clipPath={`url(#${clip})`} fill="none" stroke={learnColors.coralInk} strokeWidth="7" opacity="0.35">
        {coral.map((d) => (
          <path key={d.slice(0, 18)} d={d} />
        ))}
      </g>
      <Part id="receptors" label={labels?.receptors ?? "Receptores"} selected={selectedId === "receptors"} hinted={hintId === "receptors"} onSelect={onSelect}>
        <g className="learn-highlight">
          {receptorSites.map((x) => (
            <g key={x}>
              {[-13, 13].map((offset) => (
                <path key={offset} d={receptorLobe(x + offset)} fill={learnColors.receptor} />
              ))}
            </g>
          ))}
        </g>
        {receptorSites.map((x) => (
          <Receptor key={x} x={x} />
        ))}
      </Part>
      <Part id="vesicles" label={labels?.vesicles ?? "Vesículas"} selected={selectedId === "vesicles"} hinted={hintId === "vesicles"} onSelect={onSelect}>
        <g className="learn-highlight">
          {chemicalVesicles.map((vesicle) => (
            <circle key={`${vesicle.cx}-${vesicle.cy}`} cx={vesicle.cx} cy={vesicle.cy} r={vesicle.r} fill={learnColors.vesicle} />
          ))}
        </g>
        {resting.map((vesicle) => (
          <Vesicle key={`${vesicle.cx}-${vesicle.cy}`} cx={vesicle.cx} cy={vesicle.cy} r={vesicle.r} />
        ))}
        {fusion ? (
          <g clipPath={`url(#${clip})`}>
            <g className="learn-fusion-vesicle">
              <Vesicle cx={fusion.cx} cy={fusion.cy + 10} r={fusion.r} />
            </g>
          </g>
        ) : null}
        <g data-part-group="calcium-channels" pointerEvents="none">
          {[620, 1040].map((x) => (
            <g key={x} className="learn-calcium-channel" data-origin={`translate(${x} 400)`} transform={`translate(${x} 400)`}>
              <path
                d="M-9 -12 C -11 -4, -4 -2, -2 0 C -4 2, -11 4, -9 12 L 9 12 C 11 4, 4 2, 2 0 C 4 -2, 11 -4, 9 -12 Z"
                fill={learnColors.gold}
                stroke={learnColors.myelinEdge}
                strokeWidth="1.1"
              />
            </g>
          ))}
        </g>
      </Part>
      <Part id="transmitters" label={labels?.transmitters ?? "Neurotransmisores"} selected={selectedId === "transmitters"} hinted={hintId === "transmitters"} onSelect={onSelect}>
        <g className="learn-transmitters">
          {receptorSites.map((targetX, index) => {
            const targetY = 656;
            return (
              <circle
                key={index}
                className="learn-nt-particle"
                data-home-x={fusion?.cx ?? 830}
                data-home-y={fusion?.cy ?? 360}
                data-target-x={targetX}
                data-target-y={targetY}
                cx={fusion?.cx ?? 830}
                cy={fusion?.cy ?? 360}
                r="7"
                fill={learnColors.transmitter}
                stroke={learnColors.myelinEdge}
                strokeWidth="0.7"
                opacity="0"
              />
            );
          })}
        </g>
      </Part>
    </svg>
  );
});

function Connexon({ x }: { x: number }) {
  return (
    <g data-junction={x}>
      <path
        d={`M ${x - 42} 404 C ${x - 48} 376, ${x + 48} 376, ${x + 42} 404 C ${x + 32} 430, ${x - 32} 430, ${x - 42} 404 Z`}
        fill={learnColors.collar}
        stroke={learnColors.collarInk}
        strokeWidth="1.4"
      />
      <path
        d={`M ${x - 42} 552 C ${x - 48} 580, ${x + 48} 580, ${x + 42} 552 C ${x + 32} 526, ${x - 32} 526, ${x - 42} 552 Z`}
        fill={learnColors.collar}
        stroke={learnColors.collarInk}
        strokeWidth="1.4"
      />
      {[-24, 0, 24].map((offset) => (
        <g key={offset}>
          <rect x={x + offset - 8} y={434} width="16" height="38" rx="7" fill="#efe4cc" stroke={learnColors.myelinEdge} strokeWidth="1.15" />
          <path d={`M ${x + offset} 442 L ${x + offset} 466`} stroke={learnColors.coral} strokeWidth="2.2" strokeLinecap="round" />
          <rect x={x + offset - 8} y={484} width="16" height="38" rx="7" fill="#efe4cc" stroke={learnColors.myelinEdge} strokeWidth="1.15" />
          <path d={`M ${x + offset} 492 L ${x + offset} 516`} stroke={learnColors.coral} strokeWidth="2.2" strokeLinecap="round" />
        </g>
      ))}
      <circle className="learn-junction-ion" data-home-y={458} data-span="72" cx={x} cy={458} r="5" fill={learnColors.receptor} opacity="0" />
    </g>
  );
}

export const ElectricalSynapseArt = forwardRef<
  SVGSVGElement,
  {
    labels?: Partial<Record<"junctions", string>>;
    selectedId?: string | null;
    hintId?: string;
    onSelect?: (id: string) => void;
  }
>(function ElectricalSynapseArt({ labels, selectedId = null, hintId, onSelect }, ref) {
  const grain = useSvgId("elec-grain");

  return (
    <svg ref={ref} viewBox={`0 0 ${synapseView.width} ${synapseView.height}`} width={synapseView.width} height={synapseView.height} className="learn-electrical-art block h-auto w-full" role="group">
      <defs>
        <Grain id={grain} />
      </defs>
      <rect width={synapseView.width} height={synapseView.height} fill={learnColors.paper} />
      <g pointerEvents="none" filter={`url(#${grain})`}>
        {electricalPaths.membranes.map((d) => (
          <path key={d.slice(0, 18)} d={d} fill={learnColors.coral} />
        ))}
      </g>
      <g pointerEvents="none" fill="none" stroke={learnColors.coralInk} strokeWidth="2.8" strokeLinejoin="round">
        {electricalPaths.membranes.map((d) => (
          <path key={d.slice(0, 18)} d={d} />
        ))}
      </g>
      <Part id="junctions" label={labels?.junctions ?? "Uniones comunicantes"} selected={selectedId === "junctions"} hinted={hintId === "junctions"} onSelect={onSelect}>
        {junctionCenters.map((x) => (
          <Connexon key={x} x={x} />
        ))}
      </Part>
    </svg>
  );
});
