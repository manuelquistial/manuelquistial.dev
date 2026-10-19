"use client";

import { forwardRef } from "react";
import { learnColors } from "@/components/learn/illustrations/palette";
import { Part } from "@/components/learn/illustrations/Part";

export const membraneView = { width: 1000, height: 420 } as const;

const channels = [
  { id: "sodium-channel", label: "Canal de Na+", x: 160, fill: learnColors.sodium },
  { id: "potassium-channel", label: "Canal de K+", x: 390, fill: learnColors.potassium },
  { id: "other-proteins", label: "Otras proteínas", x: 630, fill: learnColors.gold },
  { id: "other-proteins-b", label: "Otras proteínas", x: 850, fill: learnColors.green },
] as const;

export const membraneAnchors = {
  "sodium-channel": { x: 16, y: 48 },
  "potassium-channel": { x: 39, y: 48 },
  "other-proteins": { x: 74, y: 48 },
  sodium: { x: 16, y: 22 },
  potassium: { x: 39, y: 74 },
} as const;

export const ionColumns = { sodium: 160, potassium: 390 } as const;

function Heads({ y }: { y: number }) {
  return (
    <g>
      {Array.from({ length: 46 }, (_, index) => {
        const x = 16 + index * 21.4;
        const blocked = channels.some((channel) => Math.abs(x - channel.x) < 42);
        if (blocked) return null;
        return <circle key={`${y}-${x}`} cx={x} cy={y} r="7.5" fill={learnColors.head} stroke={learnColors.ink} strokeWidth="0.8" />;
      })}
    </g>
  );
}

function Tails() {
  return (
    <g fill="none" stroke="#d7c49a" strokeWidth="1.25" strokeLinecap="round">
      {Array.from({ length: 40 }, (_, index) => {
        const x = 22 + index * 24.4;
        const blocked = channels.some((channel) => Math.abs(x - channel.x) < 40);
        if (blocked) return null;
        return <path key={x} d={`M ${x} 164 C ${x - 6} 188, ${x + 7} 208, ${x - 3} 236`} />;
      })}
    </g>
  );
}

function Lobe({ x, fill, side, open }: { x: number; fill: string; side: -1 | 1; open: boolean }) {
  const gap = open ? 11 : 5;
  const inner = x + side * gap;
  const outer = x + side * 46;
  return (
    <path
      d={`M ${inner} 168
          C ${x + side * 18} 148, ${outer} 150, ${outer} 176
          C ${outer + side * 4} 198, ${x + side * 24} 198, ${inner} 198
          C ${x + side * 24} 202, ${outer + side * 4} 202, ${outer} 224
          C ${outer} 250, ${x + side * 18} 252, ${inner} 232 Z`}
      fill={fill}
      stroke={learnColors.ink}
      strokeWidth="1.35"
    />
  );
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
  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${membraneView.width} ${membraneView.height}`}
      width={membraneView.width}
      height={membraneView.height}
      className="learn-membrane-art block h-auto w-full"
      role="group"
    >
      <rect width={membraneView.width} height={membraneView.height} fill={learnColors.paper} />
      <g data-part-group="bilayer">
        <rect x="0" y="156" width="1000" height="88" fill={learnColors.membrane} />
        <Tails />
        <Heads y={156} />
        <Heads y={244} />
      </g>
      {channels.map((channel) => {
        const partId = channel.id === "other-proteins-b" ? "other-proteins" : channel.id;
        const open =
          (openChannel === "sodium" && channel.id === "sodium-channel") ||
          (openChannel === "potassium" && channel.id === "potassium-channel");
        const pore = open ? 11 : 5;
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
              <Lobe x={channel.x} fill={channel.fill} side={-1} open={open} />
              <Lobe x={channel.x} fill={channel.fill} side={1} open={open} />
              <rect x={channel.x - pore} y="168" width={pore * 2} height="64" fill="#f7f4ee" />
            </g>
          </Part>
        );
      })}
      <Part id="sodium" label={labels?.sodium ?? "Na+"} selected={selectedId === "sodium"} hinted={hintId === "sodium"} onSelect={onSelect}>
        <g className="learn-na-ion" transform={`translate(${ionColumns.sodium} 92)`}>
          <circle r="16" fill={learnColors.sodium} stroke={learnColors.ink} strokeWidth="1.2" />
          <text textAnchor="middle" y="4" fontSize="11" fill={learnColors.ink}>
            Na+
          </text>
        </g>
      </Part>
      <Part id="potassium" label={labels?.potassium ?? "K+"} selected={selectedId === "potassium"} hinted={hintId === "potassium"} onSelect={onSelect}>
        <g className="learn-k-ion" transform={`translate(${ionColumns.potassium} 319)`}>
          <circle r="16" fill={learnColors.potassium} stroke={learnColors.ink} strokeWidth="1.2" />
          <text textAnchor="middle" y="4" fontSize="11" fill={learnColors.ink}>
            K+
          </text>
        </g>
      </Part>
    </svg>
  );
});
