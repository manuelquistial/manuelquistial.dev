import { learnUi } from "@/content/learn/es/ui";
import { learnColors } from "@/components/learn/illustrations/palette";
import { membrane as membraneLayout } from "@/lib/learn/physiology";

function LipidRow({ y, skip }: { y: number; skip: readonly [number, number][] }) {
  const heads = [];
  for (let x = 28; x <= 332; x += 16) {
    const blocked = skip.some(([start, end]) => x > start && x < end);
    if (blocked) continue;
    heads.push(
      <ellipse key={`${y}-${x}`} cx={x} cy={y} rx="6" ry="7" fill={learnColors.lipid} stroke={learnColors.ink} strokeWidth="0.8" />,
    );
  }
  return <g>{heads}</g>;
}

export function MembraneFigure({ label }: { label: string }) {
  const channels: [number, number][] = [
    [membraneLayout.naX - 22, membraneLayout.naX + 22],
    [membraneLayout.kX - 22, membraneLayout.kX + 22],
  ];

  return (
    <svg viewBox="0 0 360 240" className="h-full w-full" role="img" aria-label={label}>
      <rect width="360" height="118" fill={learnColors.outside} />
      <rect y="122" width="360" height="118" fill={learnColors.inside} />
      <LipidRow y={membraneLayout.bilayerTop + 8} skip={channels} />
      <LipidRow y={membraneLayout.bilayerBottom - 8} skip={channels} />
      <rect
        x={membraneLayout.naX - 16}
        y={membraneLayout.bilayerTop - 6}
        width="32"
        height={membraneLayout.bilayerBottom - membraneLayout.bilayerTop + 12}
        rx="8"
        fill="#f7f1ea"
        stroke={learnColors.sodium}
        strokeWidth="2"
      />
      <rect className="gate-na" x={membraneLayout.naX - 12} y="112" width="24" height="8" rx="2" fill={learnColors.sodium} />
      <rect
        x={membraneLayout.kX - 12}
        y={membraneLayout.bilayerTop - 2}
        width="24"
        height={membraneLayout.bilayerBottom - membraneLayout.bilayerTop + 4}
        rx="4"
        fill="#f7f1ea"
        stroke={learnColors.potassium}
        strokeWidth="2"
      />
      <rect className="gate-k" x={membraneLayout.kX - 10} y="114" width="20" height="8" rx="2" fill={learnColors.potassium} />
      <path
        d="M286 104C286 92 314 92 314 108C314 128 300 136 292 148C286 136 276 128 286 112Z"
        fill={learnColors.pump}
        stroke={learnColors.ink}
        strokeWidth="1.2"
      />
      <g aria-hidden="true">
        <g style={{ transform: "translate(calc(var(--na-x, 118) * 1px), calc(var(--na-y, 28) * 1px))" }}>
          <circle r="8" fill={learnColors.sodium} />
          <text x="12" y="5" fill={learnColors.ink} fontSize="15">
            Na+
          </text>
        </g>
        <g style={{ transform: "translate(calc(var(--k-x, 214) * 1px), calc(var(--k-y, 196) * 1px))" }}>
          <circle r="8" fill={learnColors.potassium} />
          <text x="12" y="5" fill={learnColors.ink} fontSize="15">
            K+
          </text>
        </g>
      </g>
      <text x="16" y="22" fill={learnColors.muted} fontSize="14">
        {learnUi.outside}
      </text>
      <text x="16" y="228" fill={learnColors.muted} fontSize="14">
        {learnUi.inside}
      </text>
    </svg>
  );
}
