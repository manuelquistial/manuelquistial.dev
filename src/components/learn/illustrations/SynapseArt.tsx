"use client";

import { forwardRef } from "react";
import { learnColors } from "@/components/learn/illustrations/palette";
import { Part } from "@/components/learn/illustrations/Part";
import { Grain, useSvgId } from "@/components/learn/illustrations/shapes";
import { IonGlyph, TransmitterGlyph } from "@/components/learn/illustrations/species";
import { artView, chemicalPaths, chemicalVesicles, electricalPaths } from "@/components/learn/illustrations/tracedGeometry";
import { caIons, fusionOutline, ntRoutes, type ChemicalPose, type ElectricalFlow } from "@/lib/learn/casts";

export const synapseView = artView;

export const synapseAnchors = {
  vesicles: { x: 42, y: 22 },
  transmitters: { x: 50, y: 48 },
  receptors: { x: 50, y: 68 },
  junctions: { x: 50, y: 50 },
  "calcium-channel": { x: 58, y: 34 },
  cleft: { x: 50, y: 56 },
  "cell-1": { x: 18, y: 28 },
  "cell-2": { x: 18, y: 72 },
} as const;

const junctionCenters = [568, 836, 1100];
const receptorSites = [447, 642, 835, 1030, 1226];

function receptorLobe(x: number, spread: number) {
  const shift = spread;
  return `M ${x - 9 - shift} 664
    C ${x - 15 - shift} 682, ${x - 14 - shift} 702, ${x - 6 - shift} 714
    C ${x - shift} 720, ${x + 9 - shift} 716, ${x + 8 - shift} 704
    C ${x + 14 - shift} 686, ${x + 11 - shift} 668, ${x + 4 - shift} 658
    C ${x - 2 - shift} 650, ${x - 5 - shift} 654, ${x - 9 - shift} 664 Z`;
}

function CalciumChannel({ x, open }: { x: number; open: number }) {
  const openPore = open > 0.2;
  const swung = open > 0.45;
  return (
    <g className="learn-calcium-channel" data-channel-x={x}>
      <rect x={x - 34} y={430} width="68" height="110" rx="28" fill={learnColors.calcium} stroke={learnColors.myelinEdge} strokeWidth="2" />
      <rect className="learn-ca-pore" x={x - (openPore ? 7 : 2)} y={448} width={openPore ? 14 : 4} height="74" rx="3" fill={openPore ? "#f7f4ee" : learnColors.myelinEdge} />
      <g className="learn-ca-gate" data-side="left" data-x={x} transform={`translate(${x} 485) rotate(${swung ? -70 : 0})`}>
        <path d="M -22 -14 L -4 0 L -20 16 Z" fill={learnColors.myelinEdge} />
      </g>
      <g className="learn-ca-gate" data-side="right" data-x={x} transform={`translate(${x} 485) rotate(${swung ? 70 : 0})`}>
        <path d="M 22 -14 L 4 0 L 20 16 Z" fill={learnColors.myelinEdge} />
      </g>
    </g>
  );
}

function Vesicle({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#f6f1f6" stroke={learnColors.vesicleInk} strokeWidth="1.8" />
      <circle cx={cx} cy={cy} r={r - 7} fill="none" stroke={learnColors.vesicle} strokeWidth="8" />
      <TransmitterGlyph x={cx - r * 0.25} y={cy - r * 0.1} scale={r / 40} />
      <TransmitterGlyph x={cx + r * 0.22} y={cy + r * 0.16} scale={r / 46} />
    </g>
  );
}

export const ChemicalSynapseArt = forwardRef<
  SVGSVGElement,
  {
    labels?: Partial<Record<"vesicles" | "transmitters" | "receptors" | "calcium-channel" | "cleft", string>>;
    selectedId?: string | null;
    hintId?: string;
    onSelect?: (id: string) => void;
    pose?: ChemicalPose;
  }
>(function ChemicalSynapseArt({ labels, selectedId = null, hintId, onSelect, pose }, ref) {
  const grain = useSvgId("chem-grain");
  const coral = chemicalPaths.coral;
  const fusion = chemicalVesicles.reduce((best, vesicle) => (vesicle.cy > best.cy ? vesicle : best), chemicalVesicles[0]);
  const resting = chemicalVesicles.filter((vesicle) => vesicle !== fusion);
  const open = pose?.fusion ?? 0;
  const bound = pose?.bound ?? 0;

  return (
    <svg ref={ref} viewBox="0 40 1672 760" width={synapseView.width} height={synapseView.height} className="learn-synapse-art block h-auto w-full" role="group">
      <defs>
        <Grain id={grain} />
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
      <Part id="cleft" label={labels?.cleft ?? "Hendidura"} selected={selectedId === "cleft"} hinted={hintId === "cleft"} onSelect={onSelect}>
        <rect className="learn-highlight" x="380" y="530" width="980" height="120" fill={learnColors.outside} opacity="0.01" />
        <rect x="380" y="530" width="980" height="120" fill="transparent" />
      </Part>
      <Part id="receptors" label={labels?.receptors ?? "Receptores"} selected={selectedId === "receptors"} hinted={hintId === "receptors"} onSelect={onSelect}>
        <g className="learn-highlight">
          {receptorSites.map((x) => (
            <path key={x} d={receptorLobe(x, 0)} fill={learnColors.receptor} />
          ))}
        </g>
        {receptorSites.map((x, index) => {
          const docked = bound > 0.35 && ntRoutes.some((route) => route.docks && Math.abs(route.to.x - x) < 30);
          const spread = docked ? 6 : 0;
          return (
            <g key={x} data-receptor={index} data-open={docked ? "1" : "0"}>
              {[-13, 13].map((offset) => (
                <path key={offset} d={receptorLobe(x + offset + (offset < 0 ? -spread : spread), 0)} fill={learnColors.receptor} stroke={learnColors.receptorInk} strokeWidth="1.5" />
              ))}
              {docked ? <rect x={x - 4} y={700} width="8" height="36" rx="3" fill="#f7f4ee" stroke={learnColors.receptorInk} /> : null}
            </g>
          );
        })}
      </Part>
      <Part id="calcium-channel" label={labels?.["calcium-channel"] ?? "Canal de Ca2+"} selected={selectedId === "calcium-channel"} hinted={hintId === "calcium-channel"} onSelect={onSelect}>
        <g className="learn-highlight">
          {[690, 980].map((x) => (
            <rect key={x} x={x - 36} y={428} width="72" height="114" rx="28" fill={learnColors.calcium} />
          ))}
        </g>
        {[690, 980].map((x) => (
          <CalciumChannel key={x} x={x} open={pose?.caOpen ?? 0} />
        ))}
        {caIons.map((ion, index) => (
          <g key={ion.id} className="learn-ca-ion" data-ca={index} transform={`translate(${ion.x} ${ion.startY})`} opacity={pose && pose.caTravel > 0 ? 1 : 0}>
            <IonGlyph symbol="Ca²⁺" fill={learnColors.calcium} stroke={learnColors.myelinEdge} r={14} />
          </g>
        ))}
      </Part>
      <Part id="vesicles" label={labels?.vesicles ?? "Vesículas"} selected={selectedId === "vesicles"} hinted={hintId === "vesicles"} onSelect={onSelect}>
        <g className="learn-highlight">
          {resting.map((vesicle) => (
            <circle key={`${vesicle.cx}-${vesicle.cy}`} cx={vesicle.cx} cy={vesicle.cy} r={vesicle.r} fill={learnColors.vesicle} />
          ))}
        </g>
        {resting.map((vesicle) => (
          <Vesicle key={`${vesicle.cx}-${vesicle.cy}`} cx={vesicle.cx} cy={vesicle.cy} r={vesicle.r} />
        ))}
        <g className="learn-fusion-vesicle">
          <path className="learn-fusion-shape" d={fusionOutline(open)} fill="#f6f1f6" stroke={learnColors.vesicleInk} strokeWidth="2.2" />
          <circle className="learn-fusion-ring" cx="830" cy="385.5" r="52" fill="none" stroke={learnColors.vesicle} strokeWidth="10" opacity={open < 0.05 ? 1 : 0} />
          <g className="learn-fusion-cargo" opacity={open < 0.45 ? 1 : 0}>
            <TransmitterGlyph x={800} y={368} scale={1.15} />
            <TransmitterGlyph x={858} y={404} scale={1} />
          </g>
        </g>
      </Part>
      <Part id="transmitters" label={labels?.transmitters ?? "Neurotransmisores"} selected={selectedId === "transmitters"} hinted={hintId === "transmitters"} onSelect={onSelect}>
        {ntRoutes.map((route) => (
          <g key={route.id} className="learn-nt-particle" data-nt={route.id} transform={`translate(${route.from.x} ${route.from.y})`} opacity="0">
            <TransmitterGlyph scale={2.1} />
          </g>
        ))}
      </Part>
      <g pointerEvents="none" className="learn-post-band" opacity={pose?.response ?? 0}>
        <path d="M 560 730 C 700 760, 960 760, 1120 730" fill="none" stroke={learnColors.signal} strokeWidth="10" strokeLinecap="round" opacity="0.45" />
      </g>
      <g className="learn-post-na" transform="translate(835 760)" opacity={pose && pose.response > 0.2 ? 1 : 0}>
        <IonGlyph symbol="Na⁺" fill={learnColors.sodium} stroke={learnColors.blueInk} r={14} />
      </g>
    </svg>
  );
});

function Connexon({ x }: { x: number }) {
  const lumen = 20;
  return (
    <g data-junction={x}>
      <path
        d={`M ${x - 48} 380
          C ${x - 40} 420, ${x - 30} 448, ${x - (lumen + 10)} 468
          L ${x - (lumen + 10)} 508
          C ${x - 30} 528, ${x - 40} 556, ${x - 48} 596
          L ${x + 48} 596
          C ${x + 40} 556, ${x + 30} 528, ${x + (lumen + 10)} 508
          L ${x + (lumen + 10)} 468
          C ${x + 30} 448, ${x + 40} 420, ${x + 48} 380 Z`}
        fill={learnColors.collar}
        stroke={learnColors.collarInk}
        strokeWidth="1.8"
      />
      <path d={`M ${x - lumen} 392 L ${x - lumen} 584 L ${x + lumen} 584 L ${x + lumen} 392 Z`} fill="#f7f4ee" />
      <g className="learn-junction-ion" data-home-y={488} data-span="120" opacity="1">
        <circle cx={x} cy={488} r="18" fill={learnColors.sodium} stroke={learnColors.blueInk} />
        <text x={x} y={494} textAnchor="middle" fontSize="13" fontWeight="700" fill={learnColors.ink}>
          Na⁺
        </text>
      </g>
    </g>
  );
}

export const ElectricalSynapseArt = forwardRef<
  SVGSVGElement,
  {
    labels?: Partial<Record<"junctions" | "cell-1" | "cell-2", string>>;
    selectedId?: string | null;
    hintId?: string;
    onSelect?: (id: string) => void;
    flow?: ElectricalFlow;
    source?: number;
    shared?: number;
  }
>(function ElectricalSynapseArt({ labels, selectedId = null, hintId, onSelect, flow = "forward", source = 0, shared = 0 }, ref) {
  const grain = useSvgId("elec-grain");
  const topHot = flow === "forward" ? source : shared;
  const bottomHot = flow === "forward" ? shared : source;

  return (
    <svg ref={ref} viewBox="500 368 740 268" width={synapseView.width} height={synapseView.height} className="learn-electrical-art block h-auto w-full" role="group">
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
      <path className="learn-cell-hot learn-cell-top" d={electricalPaths.membranes[1]} fill="none" stroke={learnColors.signal} strokeWidth="8" opacity={topHot * 0.85} />
      <path className="learn-cell-hot learn-cell-bottom" d={electricalPaths.membranes[0]} fill="none" stroke={learnColors.signal} strokeWidth="8" opacity={bottomHot * 0.85} />
      <Part id="cell-1" label={labels?.["cell-1"] ?? "Célula 1"} selected={selectedId === "cell-1"} hinted={hintId === "cell-1"} onSelect={onSelect}>
        <rect x="80" y="40" width="1500" height="300" fill="transparent" />
      </Part>
      <Part id="cell-2" label={labels?.["cell-2"] ?? "Célula 2"} selected={selectedId === "cell-2"} hinted={hintId === "cell-2"} onSelect={onSelect}>
        <rect x="80" y="600" width="1500" height="280" fill="transparent" />
      </Part>
      <Part id="junctions" label={labels?.junctions ?? "Uniones comunicantes"} selected={selectedId === "junctions"} hinted={hintId === "junctions"} onSelect={onSelect}>
        {junctionCenters.map((x) => (
          <Connexon key={x} x={x} />
        ))}
      </Part>
    </svg>
  );
});

export function JunctionDetail({ flow }: { flow: ElectricalFlow }) {
  const fromTop = flow === "forward";
  return (
    <svg viewBox="0 0 160 110" className="block h-auto w-full" aria-hidden="true">
      <rect width="160" height="110" fill="#eef3f6" />
      <text x="8" y="18" fontSize="16" fontWeight="700" fill={learnColors.ink}>
        {fromTop ? "Célula 1" : "Célula 2"}
      </text>
      <text x="8" y="102" fontSize="16" fontWeight="700" fill={learnColors.ink}>
        {fromTop ? "Célula 2" : "Célula 1"}
      </text>
      <path d="M 48 28 C 58 46, 62 50, 68 55 L 68 70 C 62 76, 58 80, 48 98 L 112 98 C 102 80, 98 76, 92 70 L 92 55 C 98 50, 102 46, 112 28 Z" fill={learnColors.collar} stroke={learnColors.collarInk} />
      <rect x="74" y="34" width="12" height="58" rx="4" fill="#f7f4ee" />
      <circle className="learn-detail-ion" cx="80" cy={fromTop ? 40 : 84} r="8" fill={learnColors.sodium} />
      <text x="96" y="58" fontSize="14" fontWeight="700" fill={learnColors.ink}>
        Na⁺
      </text>
    </svg>
  );
}
