import { learnColors } from "@/components/learn/illustrations/palette";

export function IonGlyph({
  symbol,
  fill,
  stroke,
  x = 0,
  y = 0,
  r = 18,
}: {
  symbol: string;
  fill: string;
  stroke: string;
  x?: number;
  y?: number;
  r?: number;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill={fill} stroke={stroke} strokeWidth="1.6" />
      <text textAnchor="middle" y={r * 0.28} fontSize={r * 0.72} fontWeight="700" fill={learnColors.ink}>
        {symbol}
      </text>
    </g>
  );
}

export function TransmitterGlyph({ x = 0, y = 0, scale = 1 }: { x?: number; y?: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <line x1="-7" y1="0" x2="7" y2="0" stroke={learnColors.vesicleInk} strokeWidth="1.6" />
      <circle cx="-8" cy="0" r="5.5" fill={learnColors.transmitter} stroke={learnColors.vesicleInk} strokeWidth="1.2" />
      <circle cx="8" cy="0" r="5.5" fill={learnColors.transmitter} stroke={learnColors.vesicleInk} strokeWidth="1.2" />
    </g>
  );
}
