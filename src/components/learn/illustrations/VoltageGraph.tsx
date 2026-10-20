import { learnColors } from "@/components/learn/illustrations/palette";
import {
  membraneVoltage,
  plotX,
  plotY,
  voltagePlot,
} from "@/lib/learn/physiology";

const curve = Array.from({ length: 81 }, (_, index) => {
  const time = index / 80;
  return `${plotX(time)},${plotY(membraneVoltage(time))}`;
}).join(" ");

export function VoltageGraph({ label }: { label: string }) {
  const restY = plotY(-70);

  return (
    <svg viewBox="0 0 360 240" className="block h-auto w-full" role="img" aria-label={label}>
      <rect width="360" height="240" fill="#fbfaf7" />
      {[-80, -70, 0, 30].map((value) => (
        <g key={value}>
          <line
            x1={voltagePlot.left}
            x2={voltagePlot.right}
            y1={plotY(value)}
            y2={plotY(value)}
            stroke={value === -70 ? learnColors.muted : learnColors.myelinEdge}
            strokeDasharray={value === -70 ? "4 4" : undefined}
          />
          <text x="6" y={plotY(value) + 4} fill={learnColors.ink} fontSize="15">
            {value}
          </text>
        </g>
      ))}
      <text x="6" y="16" fill={learnColors.muted} fontSize="15">
        mV
      </text>
      <polyline points={curve} fill="none" stroke={learnColors.myelinEdge} strokeWidth="2" opacity="0.45" />
      <polyline className="learn-voltage-trace" points={curve} fill="none" stroke={learnColors.signal} strokeWidth="2.75" pathLength={1} strokeDasharray="0 1" />
      <text className="learn-voltage-readout" x={voltagePlot.right - 64} y="18" fill={learnColors.ink} fontSize="14" fontWeight="700">
        -70 mV
      </text>
      <line
        data-voltage-line=""
        x1="0"
        x2="0"
        y1={voltagePlot.top}
        y2={voltagePlot.bottom}
        stroke={learnColors.ink}
        strokeWidth="1.5"
        transform={`translate(${plotX(0)} 0)`}
      />
      <circle
        data-voltage-dot=""
        r="5"
        fill={learnColors.signal}
        stroke="#fbfaf7"
        strokeWidth="2"
        transform={`translate(${plotX(0)} ${plotY(-70)})`}
      />
      <text x={voltagePlot.left} y="232" fill={learnColors.muted} fontSize="15">
        Tiempo de la animación
      </text>
      <text x={voltagePlot.right - 78} y={restY - 8} fill={learnColors.muted} fontSize="13">
        reposo
      </text>
    </svg>
  );
}
