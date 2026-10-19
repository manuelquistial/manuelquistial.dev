import { useId } from "react";
import { learnColors } from "@/components/learn/illustrations/palette";

type MyelinPart = "myelin" | "glia" | "nodes";

const nodeX = [78, 286, 534, 782];
const segments = [
  [112, 250],
  [322, 498],
  [570, 746],
];

interface MyelinFigureProps {
  label: string;
  selected?: MyelinPart | null;
  onSelect?: (part: MyelinPart) => void;
}

function Selectable({
  part,
  selected,
  onSelect,
  label,
  children,
}: {
  part: MyelinPart;
  selected?: MyelinPart | null;
  onSelect?: (part: MyelinPart) => void;
  label: string;
  children: React.ReactNode;
}) {
  const interactive = Boolean(onSelect);
  return (
    <g
      className={selected === part ? "is-selected" : undefined}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-pressed={interactive ? selected === part : undefined}
      aria-label={interactive ? label : undefined}
      onClick={interactive ? () => onSelect?.(part) : undefined}
      onKeyDown={
        interactive
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect?.(part);
              }
            }
          : undefined
      }
    >
      {children}
    </g>
  );
}

export function MyelinFigure({ label, selected = null, onSelect }: MyelinFigureProps) {
  const clipId = useId().replace(/:/g, "");
  const interactive = Boolean(onSelect);

  return (
    <svg
      viewBox="0 0 960 420"
      className="learn-myelin-art h-full w-full"
      role={interactive ? "group" : "img"}
      aria-label={interactive ? undefined : label}
    >
      <rect width="960" height="420" fill="#fbfaf7" />
      <Selectable part="glia" selected={selected} onSelect={onSelect} label="Oligodendrocito">
        <path
          d="M470 78C520 70 548 108 534 146C522 176 486 184 456 170C424 156 418 112 438 90C446 82 456 80 470 78Z"
          fill={learnColors.glia}
          stroke={learnColors.gliaEdge}
          strokeWidth="1.6"
        />
        <path d="M500 150C520 190 250 210 190 228" fill="none" stroke={learnColors.gliaEdge} strokeWidth="3" strokeLinecap="round" />
        <path d="M490 168C500 210 410 214 410 236" fill="none" stroke={learnColors.gliaEdge} strokeWidth="3" strokeLinecap="round" />
        <path d="M470 160C430 200 650 206 658 230" fill="none" stroke={learnColors.gliaEdge} strokeWidth="3" strokeLinecap="round" />
      </Selectable>

      <rect x="48" y="236" width="864" height="32" rx="16" fill={learnColors.axon} stroke={learnColors.ink} strokeWidth="1.4" />

      <Selectable part="myelin" selected={selected} onSelect={onSelect} label="Mielina">
        {segments.map(([start, end]) => (
          <rect
            key={`${start}-${end}`}
            x={start}
            y="214"
            width={end - start}
            height="76"
            rx="28"
            fill={learnColors.myelin}
            stroke={learnColors.myelinEdge}
            strokeWidth="1.6"
          />
        ))}
      </Selectable>

      <Selectable part="nodes" selected={selected} onSelect={onSelect} label="Nodos de Ranvier">
        {nodeX.map((x, index) => (
          <g key={x} className={`node node-${index}`}>
            <rect x={x - 16} y="230" width="32" height="44" rx="8" fill={learnColors.somaDeep} stroke={learnColors.ink} strokeWidth="1.4" />
          </g>
        ))}
      </Selectable>

      <defs>
        <clipPath id={clipId}>
          <rect x="48" y="240" width="864" height="24" rx="12" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`} aria-hidden="true">
        {nodeX.slice(0, -1).map((x, index) => {
          const length = nodeX[index + 1] - x - 32;
          return (
            <line
              key={x}
              className={`inner-current inner-${index + 1}`}
              x1={x + 16}
              x2={nodeX[index + 1] - 16}
              y1="252"
              y2="252"
              stroke={learnColors.signal}
              strokeWidth="6"
              strokeLinecap="round"
              style={{
                strokeDasharray: length,
                strokeDashoffset: `calc((1 - var(--spread, 0)) * ${length}px)`,
              }}
            />
          );
        })}
      </g>
    </svg>
  );
}
