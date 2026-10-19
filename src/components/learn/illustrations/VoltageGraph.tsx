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
    <svg viewBox="0 0 360 240" className="h-full w-full" role="img" aria-label={label}>
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
          <text x="4" y={plotY(value) + 4} fill={learnColors.ink} fontSize="12">
            {value}
          </text>
        </g>
      ))}
      <text x="4" y="14" fill={learnColors.muted} fontSize="12">
        mV
      </text>
      <polyline points={curve} fill="none" stroke={learnColors.signal} strokeWidth="2.5" />
      <line
        y1={voltagePlot.top}
        y2={voltagePlot.bottom}
        stroke={learnColors.ink}
        strokeWidth="1.5"
        style={{ transform: "translateX(calc(var(--dot-x, 46) * 1px))" }}
      />
      <circle
        r="5"
        fill={learnColors.signal}
        stroke="#fbfaf7"
        strokeWidth="2"
        style={{
          transform:
            "translate(calc(var(--dot-x, 46) * 1px), calc(var(--dot-y, 173) * 1px))",
        }}
      />
      <text x={voltagePlot.left} y="232" fill={learnColors.muted} fontSize="12">
        Tiempo de la animación
      </text>
      <text x={voltagePlot.right - 70} y={restY - 6} fill={learnColors.muted} fontSize="11">
        reposo
      </text>
    </svg>
  );
}
