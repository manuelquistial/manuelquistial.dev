import { learnColors } from "@/components/learn/illustrations/palette";
import { NeuronArtwork } from "@/components/learn/illustrations/NeuronFigure";

const cells = [
  { id: "n1", x: 0, y: 24 },
  { id: "n2", x: 300, y: 8 },
  { id: "n3", x: 600, y: 24 },
  { id: "n4", x: 300, y: 250 },
];

export function NetworkFigure({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 980 560" className="learn-network-art h-full w-full" role="img" aria-label={label}>
      <rect width="980" height="560" fill="#fbfaf7" />
      <path d="M270 118C300 108 318 86 332 78" fill="none" stroke={learnColors.ink} strokeWidth="2" />
      <circle cx="332" cy="76" r="7" fill={learnColors.signal} />
      <path d="M572 96C610 86 628 78 640 86" fill="none" stroke={learnColors.ink} strokeWidth="2" />
      <circle cx="640" cy="84" r="7" fill={learnColors.signal} />
      <path d="M470 150C470 210 430 250 400 286" fill="none" stroke={learnColors.inhibitory} strokeWidth="2" />
      <path d="M386 286H414" stroke={learnColors.inhibitory} strokeWidth="3" strokeLinecap="round" />
      {cells.map((cell) => (
        <g key={cell.id} data-cell={cell.id} transform={`translate(${cell.x} ${cell.y}) scale(0.3)`}>
          <NeuronArtwork />
        </g>
      ))}
    </svg>
  );
}
