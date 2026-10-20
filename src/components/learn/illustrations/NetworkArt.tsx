"use client";

import { learnColors } from "@/components/learn/illustrations/palette";
import { Grain, useSvgId } from "@/components/learn/illustrations/shapes";
import { artView, networkNuclei, networkPaths } from "@/components/learn/illustrations/tracedGeometry";

const roles = [
  { id: "n1", x: 188.5, y: 200.5 },
  { id: "n2", x: 670, y: 151.1 },
  { id: "n3", x: 1140.4, y: 136 },
  { id: "n4", x: 477.6, y: 449.5 },
];

function roleAt(x: number, y: number) {
  return roles.find((role) => Math.hypot(role.x - x, role.y - y) < 12)?.id;
}

export function NetworkArt({
  active,
  inhibited,
}: {
  active: readonly string[];
  inhibited: readonly string[];
}) {
  const grain = useSvgId("net-grain");

  return (
    <svg viewBox={`0 0 ${artView.width} ${artView.height}`} width={artView.width} height={artView.height} className="block h-auto w-full" role="img" aria-hidden="true">
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
      {networkNuclei.map((nucleus) => {
        const id = roleAt(nucleus.cx, nucleus.cy);
        const isActive = id ? active.includes(id) : false;
        const isInhibited = id ? inhibited.includes(id) : false;
        return (
          <g key={`${nucleus.cx}-${nucleus.cy}`} data-cell={id ?? "context"}>
            <circle cx={nucleus.cx} cy={nucleus.cy} r={nucleus.r} fill={learnColors.nucleus} stroke={learnColors.violetInk} strokeWidth="1.3" />
            <circle cx={nucleus.cx} cy={nucleus.cy} r={nucleus.r * 0.38} fill={learnColors.nucleolus} />
            {isActive ? <circle cx={nucleus.cx} cy={nucleus.cy} r={nucleus.r + 14} fill="none" stroke={learnColors.signal} strokeWidth="2.6" /> : null}
            {isInhibited ? (
              <circle cx={nucleus.cx} cy={nucleus.cy} r={nucleus.r + 14} fill="none" stroke={learnColors.inhibitory} strokeWidth="2.6" strokeDasharray="5 4" />
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
