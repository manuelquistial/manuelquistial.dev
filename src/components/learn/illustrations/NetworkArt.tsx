"use client";

import { learnColors } from "@/components/learn/illustrations/palette";
import { Part } from "@/components/learn/illustrations/Part";
import { Grain, useSvgId } from "@/components/learn/illustrations/shapes";
import { artView, networkNuclei, networkPaths } from "@/components/learn/illustrations/tracedGeometry";

const roles = [
  { id: "n1", part: "cell-a", letter: "A", x: 188.5, y: 200.5 },
  { id: "n2", part: "cell-b", letter: "B", x: 670, y: 151.1 },
  { id: "n3", part: "cell-c", letter: "C", x: 1140.4, y: 136 },
  { id: "n4", part: "cell-d", letter: "D", x: 477.6, y: 449.5 },
] as const;

export const networkAnchors = {
  "cell-a": { x: 12, y: 22 },
  "cell-b": { x: 40, y: 18 },
  "cell-c": { x: 68, y: 16 },
  "cell-d": { x: 30, y: 52 },
} as const;

const links = [
  { id: "ab", d: "M 250 190 C 380 80, 520 80, 620 145", kind: "excitatory" as const },
  { id: "bc", d: "M 750 140 C 880 60, 1000 60, 1080 125", kind: "excitatory" as const },
  { id: "bd", d: "M 640 210 C 610 300, 560 360, 520 400", kind: "inhibitory" as const },
];

function roleAt(x: number, y: number) {
  return roles.find((role) => Math.hypot(role.x - x, role.y - y) < 12);
}

export function NetworkArt({
  active,
  inhibited,
  local,
  labels,
  selectedId,
  onSelect,
}: {
  active: readonly string[];
  inhibited: readonly string[];
  local?: "n2" | "n3" | "n4" | null;
  labels?: Partial<Record<"cell-a" | "cell-b" | "cell-c" | "cell-d", string>>;
  selectedId?: string | null;
  onSelect?: (id: string) => void;
}) {
  const grain = useSvgId("net-grain");

  return (
    <svg viewBox={`0 0 ${artView.width} ${artView.height}`} width={artView.width} height={artView.height} className="learn-network-art block h-auto w-full" role="group">
      <defs>
        <Grain id={grain} />
      </defs>
      <rect width={artView.width} height={artView.height} fill={learnColors.paper} />
      <g filter={`url(#${grain})`}>
        {networkPaths.coral.map((d, index) => (
          <path key={index} d={d} fill={learnColors.coral} />
        ))}
      </g>
      <g fill="none" stroke={learnColors.coralInk} strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
        {networkPaths.coral.map((d, index) => (
          <path key={index} d={d} />
        ))}
      </g>
      {links.map((link) => (
        <g key={link.id} pointerEvents="none">
          <path d={link.d} fill="none" stroke={link.kind === "inhibitory" ? learnColors.inhibitory : learnColors.myelinEdge} strokeWidth="3" strokeDasharray={link.kind === "inhibitory" ? "8 6" : undefined} />
          <path
            className={`learn-link learn-link-${link.id}`}
            data-link={link.id}
            d={link.d}
            fill="none"
            stroke={link.kind === "inhibitory" ? learnColors.inhibitory : learnColors.signal}
            strokeWidth="6"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="0.08 1"
            opacity="0"
          />
          {link.kind === "inhibitory" ? (
            <g transform="translate(560 330)">
              <circle r="14" fill="#f7f4ee" stroke={learnColors.inhibitory} strokeWidth="2" />
              <path d="M -7 0 H 7" stroke={learnColors.inhibitory} strokeWidth="2.4" />
            </g>
          ) : (
            <g transform={link.id === "ab" ? "translate(430 96)" : "translate(900 72)"}>
              <circle r="14" fill="#f7f4ee" stroke={learnColors.signal} strokeWidth="2" />
              <path d="M -7 0 H 7 M 0 -7 V 7" stroke={learnColors.signal} strokeWidth="2.2" />
            </g>
          )}
        </g>
      ))}
      {networkNuclei.map((nucleus) => {
        const role = roleAt(nucleus.cx, nucleus.cy);
        const id = role?.id;
        const isActive = id ? active.includes(id) : false;
        const isInhibited = id ? inhibited.includes(id) : false;
        const isLocal = id && local === id;
        const body = (
          <g data-cell={id ?? "context"} opacity={id ? 1 : 0.72}>
            <circle cx={nucleus.cx} cy={nucleus.cy} r={nucleus.r} fill={learnColors.nucleus} stroke={learnColors.violetInk} strokeWidth="1.3" />
            <circle cx={nucleus.cx} cy={nucleus.cy} r={nucleus.r * 0.38} fill={learnColors.nucleolus} />
            {isActive ? <circle cx={nucleus.cx} cy={nucleus.cy} r={nucleus.r + 16} fill="none" stroke={learnColors.signal} strokeWidth="4" /> : null}
            {isInhibited ? (
              <circle cx={nucleus.cx} cy={nucleus.cy} r={nucleus.r + 16} fill="none" stroke={learnColors.inhibitory} strokeWidth="3" strokeDasharray="5 4" />
            ) : null}
            {isLocal ? (
              <path
                d={`M ${nucleus.cx - 28} ${nucleus.cy + nucleus.r * 0.2} C ${nucleus.cx - 10} ${nucleus.cy + nucleus.r + 8}, ${nucleus.cx + 18} ${nucleus.cy + nucleus.r + 8}, ${nucleus.cx + 34} ${nucleus.cy + nucleus.r * 0.1}`}
                fill="none"
                stroke={id === "n4" ? learnColors.inhibitory : learnColors.signal}
                strokeWidth="6"
                strokeLinecap="round"
              />
            ) : null}
            {role ? (
              <text x={nucleus.cx - nucleus.r - 8} y={nucleus.cy - nucleus.r - 6} fontSize="36" fontWeight="700" fill={learnColors.ink}>
                {role.letter}
              </text>
            ) : null}
          </g>
        );
        if (!role) return <g key={`${nucleus.cx}-${nucleus.cy}`}>{body}</g>;
        return (
          <Part
            key={role.part}
            id={role.part}
            label={labels?.[role.part] ?? role.letter}
            selected={selectedId === role.part}
            onSelect={onSelect}
          >
            {body}
            <circle cx={role.x} cy={role.y} r="70" fill="transparent" />
          </Part>
        );
      })}
    </svg>
  );
}
