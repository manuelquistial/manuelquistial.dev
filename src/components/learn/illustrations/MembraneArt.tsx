"use client";

import { forwardRef } from "react";
import { learnColors } from "@/components/learn/illustrations/palette";
import { Part } from "@/components/learn/illustrations/Part";
import { Grain, useSvgId } from "@/components/learn/illustrations/shapes";
import { artView, lipidHeads } from "@/components/learn/illustrations/tracedGeometry";

export const membraneView = artView;

const channels = [
  { id: "sodium-channel", label: "Canal de Na+", x: 321, fill: learnColors.sodium, stroke: learnColors.blueInk },
  { id: "potassium-channel", label: "Canal de K+", x: 661, fill: learnColors.potassium, stroke: learnColors.violetInk },
  { id: "other-proteins", label: "Otras proteínas", x: 1008, fill: learnColors.gold, stroke: learnColors.myelinEdge },
  { id: "other-proteins-b", label: "Otras proteínas", x: 1354, fill: learnColors.green, stroke: learnColors.blueInk },
] as const;

export const membraneAnchors = {
  "sodium-channel": { x: 16, y: 46 },
  "potassium-channel": { x: 36, y: 46 },
  "other-proteins": { x: 70, y: 46 },
  sodium: { x: 16, y: 28 },
  potassium: { x: 36, y: 72 },
} as const;

export const ionColumns = { sodium: 321, potassium: 661 } as const;

const headRows = [
  { y: 382, xs: lipidHeads[0] ?? [] },
  { y: 528, xs: lipidHeads[1] ?? [] },
];

function channelPath(x: number, pore: number) {
  const top = 358;
  const bottom = 554;
  const mid = (top + bottom) / 2;
  const outer = 72;
  const waist = 24;
  return `M ${x - waist} ${mid}
    C ${x - outer} ${mid - 22}, ${x - outer} ${top + 34}, ${x - 48} ${top + 6}
    C ${x - 20} ${top - 8}, ${x + 20} ${top - 8}, ${x + 48} ${top + 6}
    C ${x + outer} ${top + 34}, ${x + outer} ${mid - 22}, ${x + waist} ${mid}
    C ${x + outer} ${mid + 22}, ${x + outer} ${bottom - 34}, ${x + 48} ${bottom - 6}
    C ${x + 20} ${bottom + 8}, ${x - 20} ${bottom + 8}, ${x - 48} ${bottom - 6}
    C ${x - outer} ${bottom - 34}, ${x - outer} ${mid + 22}, ${x - waist} ${mid} Z
    M ${x - pore} ${top + 46}
    C ${x - pore - 4} ${mid - 16}, ${x - pore - 4} ${mid + 16}, ${x - pore} ${bottom - 46}
    C ${x - pore * 0.15} ${bottom - 30}, ${x + pore * 0.15} ${bottom - 30}, ${x + pore} ${bottom - 46}
    C ${x + pore + 4} ${mid + 16}, ${x + pore + 4} ${mid - 16}, ${x + pore} ${top + 46}
    C ${x + pore * 0.15} ${top + 30}, ${x - pore * 0.15} ${top + 30}, ${x - pore} ${top + 46} Z`;
}

function tailPath(x: number, from: number, to: number, index: number) {
  const lean = ((index * 5) % 9) - 4;
  const mid = (from + to) / 2;
  return `M ${x - 4} ${from} C ${x - 4 + lean} ${mid}, ${x + 3 - lean} ${mid}, ${x - 1} ${to} M ${x + 4} ${from} C ${x + 5 + lean} ${mid}, ${x - 2 - lean} ${mid}, ${x + 2} ${to}`;
}

function blocked(x: number) {
  return channels.some((channel) => Math.abs(x - channel.x) < 78);
}

export const MembraneArt = forwardRef<
  SVGSVGElement,
  {
    labels?: Partial<Record<"sodium-channel" | "potassium-channel" | "other-proteins" | "sodium" | "potassium", string>>;
    selectedId?: string | null;
    hintId?: string;
    onSelect?: (id: string) => void;
    openChannel?: "none" | "sodium" | "potassium";
  }
>(function MembraneArt({ labels, selectedId = null, hintId, onSelect, openChannel = "none" }, ref) {
  const grain = useSvgId("membrane-grain");

  return (
    <svg ref={ref} viewBox={`0 0 ${membraneView.width} ${membraneView.height}`} width={membraneView.width} height={membraneView.height} className="learn-membrane-art block h-auto w-full" role="group">
      <defs>
        <Grain id={grain} />
      </defs>
      <rect width={membraneView.width} height={membraneView.height} fill={learnColors.paper} />
      <g data-part-group="bilayer" pointerEvents="none">
        <g filter={`url(#${grain})`}>
          {headRows[0]?.xs.map((x, index) =>
            blocked(x) ? null : <circle key={`t-${x}`} cx={x} cy={382} r={10.5 + (index % 3) * 0.4} fill={learnColors.head} />,
          )}
          {headRows[1]?.xs.map((x, index) =>
            blocked(x) ? null : <circle key={`b-${x}`} cx={x} cy={528} r={10.5 + (index % 3) * 0.4} fill={learnColors.head} />,
          )}
        </g>
        <g fill="none" stroke="#e7d3a4" strokeWidth="1.35" strokeLinecap="round">
          {headRows[0]?.xs.map((x, index) => (blocked(x) ? null : <path key={`td-${x}`} d={tailPath(x, 398, 444, index)} />))}
          {headRows[1]?.xs.map((x, index) => (blocked(x) ? null : <path key={`bu-${x}`} d={tailPath(x, 512, 466, index + 3)} />))}
        </g>
        <g fill="none" stroke={learnColors.coralInk} strokeWidth="1.15">
          {headRows[0]?.xs.map((x, index) =>
            blocked(x) ? null : <circle key={`to-${x}`} cx={x} cy={382} r={10.5 + (index % 3) * 0.4} />,
          )}
          {headRows[1]?.xs.map((x, index) =>
            blocked(x) ? null : <circle key={`bo-${x}`} cx={x} cy={528} r={10.5 + (index % 3) * 0.4} />,
          )}
        </g>
      </g>
      {channels.map((channel) => {
        const partId = channel.id === "other-proteins-b" ? "other-proteins" : channel.id;
        const open =
          (openChannel === "sodium" && channel.id === "sodium-channel") ||
          (openChannel === "potassium" && channel.id === "potassium-channel");
        const d = channelPath(channel.x, open ? 20 : 13);
        return (
          <Part
            key={channel.x}
            id={partId}
            label={labels?.[partId] ?? channel.label}
            selected={selectedId === partId}
            hinted={hintId === partId && channel.id !== "other-proteins-b"}
            onSelect={onSelect}
          >
            <g data-channel={channel.id}>
              <path className="learn-highlight" d={d} fill={channel.fill} fillRule="evenodd" />
              <path d={d} fill={channel.fill} fillRule="evenodd" stroke={channel.stroke} strokeWidth="1.7" strokeLinejoin="round" />
            </g>
          </Part>
        );
      })}
      <Part id="sodium" label={labels?.sodium ?? "Na+"} selected={selectedId === "sodium"} hinted={hintId === "sodium"} onSelect={onSelect}>
        <g className="learn-na-ion" transform={`translate(${ionColumns.sodium} 250)`}>
          <circle r="18" fill={learnColors.sodium} stroke={learnColors.blueInk} strokeWidth="1.4" />
          <text textAnchor="middle" y="5" fontSize="13" fill={learnColors.ink}>
            Na+
          </text>
        </g>
      </Part>
      <Part id="potassium" label={labels?.potassium ?? "K+"} selected={selectedId === "potassium"} hinted={hintId === "potassium"} onSelect={onSelect}>
        <g className="learn-k-ion" transform={`translate(${ionColumns.potassium} 690)`}>
          <circle r="18" fill={learnColors.potassium} stroke={learnColors.violetInk} strokeWidth="1.4" />
          <text textAnchor="middle" y="5" fontSize="13" fill={learnColors.ink}>
            K+
          </text>
        </g>
      </Part>
    </svg>
  );
});
