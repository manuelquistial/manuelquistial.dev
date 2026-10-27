"use client";

import type { Ref } from "react";
import { learnColors } from "@/components/learn/illustrations/palette";
import { Part } from "@/components/learn/illustrations/Part";
import { Grain, useSvgId } from "@/components/learn/illustrations/shapes";
import { IonGlyph } from "@/components/learn/illustrations/species";
import { artView } from "@/components/learn/illustrations/tracedGeometry";
import type { CastIon, ChannelState } from "@/lib/learn/casts";
import { membraneArt } from "@/lib/learn/casts";

export const membraneView = artView;

export const membraneFocus = { x: 40, y: 290, width: 980, height: 450 } as const;

export const membraneAnchors = {
  "sodium-channel": { x: 28, y: 46 },
  "potassium-channel": { x: 62, y: 46 },
  pump: { x: 84, y: 58 },
  leak: { x: 46, y: 58 },
  sodium: { x: 24, y: 24 },
  potassium: { x: 62, y: 78 },
} as const;

function nearProtein(x: number) {
  if (Math.abs(x - membraneArt.naX) < 74 || Math.abs(x - membraneArt.kX) < 74) return true;
  if (Math.abs(x - membraneArt.leakX) < 34) return true;
  if (Math.abs(x - membraneArt.pumpX) < 50) return true;
  return false;
}

function headXs() {
  const xs: number[] = [];
  for (let x = membraneFocus.x + 16; x < membraneFocus.x + membraneFocus.width - 16; x += 22) {
    if (!nearProtein(x)) xs.push(x);
  }
  return xs;
}

const headRows = [
  { y: 382, xs: headXs() },
  { y: 528, xs: headXs() },
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
  return nearProtein(x);
}

function poreFor(state: ChannelState) {
  if (state === "open") return 18;
  if (state === "inactivated") return 14;
  return 4;
}

function Gate({ x, state, tone }: { x: number; state: ChannelState; tone: string }) {
  if (state === "open") {
    return (
      <g>
        <path d={`M ${x - 30} 418 L ${x - 18} 392 L ${x - 12} 448`} fill="none" stroke={tone} strokeWidth="6" strokeLinecap="round" />
        <path d={`M ${x + 30} 418 L ${x + 18} 392 L ${x + 12} 448`} fill="none" stroke={tone} strokeWidth="6" strokeLinecap="round" />
      </g>
    );
  }
  if (state === "inactivated") {
    return (
      <g>
        <path d={`M ${x - 28} 430 L ${x - 12} 455`} fill="none" stroke={tone} strokeWidth="5" strokeLinecap="round" />
        <path d={`M ${x + 28} 430 L ${x + 12} 455`} fill="none" stroke={tone} strokeWidth="5" strokeLinecap="round" />
        <circle cx={x} cy={512} r="15" fill={tone} stroke="#fff" strokeWidth="2" />
      </g>
    );
  }
  return (
    <g>
      <path d={`M ${x - 28} 444 L ${x - 1} 456 L ${x - 28} 468 Z`} fill={tone} />
      <path d={`M ${x + 28} 444 L ${x + 1} 456 L ${x + 28} 468 Z`} fill={tone} />
    </g>
  );
}

export function MembraneArt({
  labels,
  selectedId = null,
  hintId,
  onSelect,
  sodiumState = "closed",
  potassiumState = "closed",
  ions = [],
  ref,
}: {
  labels?: Partial<Record<"sodium-channel" | "potassium-channel" | "pump" | "leak" | "sodium" | "potassium", string>>;
  selectedId?: string | null;
  hintId?: string;
  onSelect?: (id: string) => void;
  sodiumState?: ChannelState;
  potassiumState?: ChannelState;
  ions?: readonly CastIon[];
  ref?: Ref<SVGSVGElement>;
}) {
  const grain = useSvgId("membrane-grain");
  const channels = [
    { id: "sodium-channel" as const, x: membraneArt.naX, state: sodiumState, fill: learnColors.sodium, stroke: learnColors.blueInk },
    { id: "potassium-channel" as const, x: membraneArt.kX, state: potassiumState, fill: learnColors.potassium, stroke: learnColors.violetInk },
  ];

  return (
    <svg
      ref={ref}
      viewBox={`${membraneFocus.x} ${membraneFocus.y} ${membraneFocus.width} ${membraneFocus.height}`}
      width={membraneFocus.width}
      height={membraneFocus.height}
      className="learn-membrane-art block h-auto w-full"
      role="group"
    >
      <defs>
        <Grain id={grain} />
      </defs>
      <rect x={membraneFocus.x} y={membraneFocus.y} width={membraneFocus.width} height={membraneFocus.height} fill={learnColors.paper} />
      <rect x={membraneFocus.x} y="368" width={membraneFocus.width} height="168" fill={learnColors.membrane} />
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
      </g>
      <Part id="leak" label={labels?.leak ?? "Canal de fuga"} selected={selectedId === "leak"} hinted={hintId === "leak"} onSelect={onSelect}>
        <g className="learn-highlight">
          <rect x={membraneArt.leakX - 28} y={390} width="56" height="130" rx="16" fill={learnColors.green} />
        </g>
        <rect x={membraneArt.leakX - 22} y={396} width="44" height="118" rx="14" fill={learnColors.green} stroke={learnColors.blueInk} strokeWidth="1.6" />
        <rect x={membraneArt.leakX - 5} y={408} width="10" height="94" rx="4" fill="#f7f4ee" />
        <text x={membraneArt.leakX} y="590" textAnchor="middle" fontSize="22" fontWeight="700" fill={learnColors.ink}>
          Fuga
        </text>
      </Part>
      <Part id="pump" label={labels?.pump ?? "Bomba Na+/K+"} selected={selectedId === "pump"} hinted={hintId === "pump"} onSelect={onSelect}>
        <g className="learn-highlight">
          <ellipse cx={membraneArt.pumpX} cy={456} rx="46" ry="58" fill={learnColors.pump} />
        </g>
        <ellipse cx={membraneArt.pumpX} cy={456} rx="40" ry="52" fill={learnColors.pump} stroke={learnColors.myelinEdge} strokeWidth="1.8" />
        <path d={`M ${membraneArt.pumpX - 16} 430 L ${membraneArt.pumpX} 408 L ${membraneArt.pumpX + 8} 424`} fill="none" stroke={learnColors.ink} strokeWidth="3" strokeLinecap="round" />
        <path d={`M ${membraneArt.pumpX + 16} 490 L ${membraneArt.pumpX} 512 L ${membraneArt.pumpX - 8} 496`} fill="none" stroke={learnColors.ink} strokeWidth="3" strokeLinecap="round" />
        <text x={membraneArt.pumpX} y="590" textAnchor="middle" fontSize="22" fontWeight="700" fill={learnColors.ink}>
          Bomba
        </text>
      </Part>
      {channels.map((channel) => (
        <Part
          key={channel.id}
          id={channel.id}
          label={labels?.[channel.id] ?? channel.id}
          selected={selectedId === channel.id}
          hinted={hintId === channel.id}
          onSelect={onSelect}
        >
          <g data-channel={channel.id} data-state={channel.state}>
            <path className="learn-highlight" d={channelPath(channel.x, poreFor(channel.state))} fill={channel.fill} fillRule="evenodd" />
            <path d={channelPath(channel.x, poreFor(channel.state))} fill={channel.fill} fillRule="evenodd" stroke={channel.stroke} strokeWidth="1.7" />
            <Gate x={channel.x} state={channel.state} tone={channel.stroke} />
          </g>
        </Part>
      ))}
      {(["na", "k"] as const).map((species) => {
        const sodium = species === "na";
        const id = sodium ? "sodium" : "potassium";
        return (
          <Part
            key={species}
            id={id}
            label={labels?.[id] ?? (sodium ? "Na+" : "K+")}
            selected={selectedId === id}
            hinted={hintId === id}
            onSelect={onSelect}
          >
            {ions
              .filter((ion) => ion.species === species)
              .map((ion) => (
                <g key={ion.id} className={sodium ? "learn-na-ion" : "learn-k-ion"} data-ion={ion.id} transform={`translate(${ion.x} ${ion.y})`}>
                  <IonGlyph
                    symbol={sodium ? "Na⁺" : "K⁺"}
                    fill={sodium ? learnColors.sodium : learnColors.potassium}
                    stroke={sodium ? learnColors.blueInk : learnColors.violetInk}
                    r={22}
                  />
                </g>
              ))}
          </Part>
        );
      })}
    </svg>
  );
}

