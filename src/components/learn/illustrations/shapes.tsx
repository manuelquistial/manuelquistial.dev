import { learnColors } from "@/components/learn/illustrations/palette";

export function MyelinCapsule({
  x,
  y,
  length = 124,
  thickness = 42,
}: {
  x: number;
  y: number;
  length?: number;
  thickness?: number;
}) {
  const radius = thickness / 2;
  return (
    <g className="learn-myelin-shape">
      <rect
        x={x}
        y={y - radius}
        width={length}
        height={thickness}
        rx={radius}
        fill={learnColors.myelin}
        stroke={learnColors.ink}
        strokeWidth="1.6"
      />
      <path
        d={`M ${x + 22} ${y - radius + 9} Q ${x + length / 2} ${y - 2}, ${x + length - 22} ${y - radius + 9}`}
        fill="none"
        stroke="#fff8ea"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <ellipse cx={x + 9} cy={y} rx="7" ry={radius - 2} fill={learnColors.collar} stroke={learnColors.ink} strokeWidth="1.15" />
      <ellipse
        cx={x + length - 9}
        cy={y}
        rx="7"
        ry={radius - 2}
        fill={learnColors.collar}
        stroke={learnColors.ink}
        strokeWidth="1.15"
      />
    </g>
  );
}

export function CoralFill({ d, width = 1.5 }: { d: string; width?: number }) {
  return <path className="learn-ribbon" d={d} fill={learnColors.coral} stroke={learnColors.ink} strokeWidth={width} strokeLinejoin="round" />;
}
