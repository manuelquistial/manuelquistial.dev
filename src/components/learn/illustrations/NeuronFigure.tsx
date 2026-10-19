import {
  axonRoute,
  dendriteRoutes,
  learnColors,
  neuronViewBox,
} from "@/components/learn/illustrations/palette";

export type NeuronPart = "soma" | "dendrites" | "axon";

interface NeuronFigureProps {
  label: string;
  selected?: NeuronPart | null;
  onSelect?: (part: NeuronPart) => void;
  zoom?: number;
  showSignals?: boolean;
  viewBox?: string;
}

const twigs = [
  "M 168 128 C 132 104 108 112 74 78",
  "M 206 164 C 176 146 156 172 126 156",
  "M 156 242 C 124 214 96 224 58 196",
  "M 168 250 C 136 286 108 274 68 308",
  "M 196 348 C 164 386 142 368 104 404",
  "M 236 322 C 204 352 188 334 164 362",
];

function Process({ d, width }: { d: string; width: number }) {
  return (
    <>
      <path
        className="learn-process-edge"
        d={d}
        stroke={learnColors.ink}
        strokeWidth={width + 1.6}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={d}
        stroke={learnColors.dendrite}
        strokeWidth={width}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

export function DendriteArt() {
  return (
    <g>
      {dendriteRoutes.map((route) => (
        <Process key={route} d={route} width={10} />
      ))}
      {twigs.map((route) => (
        <Process key={route} d={route} width={4} />
      ))}
    </g>
  );
}

export function SomaArt() {
  return (
    <g>
      <path
        className="learn-shape"
        d="M300 156C378 140 438 188 426 262C416 332 362 392 286 382C214 372 176 322 194 258C208 198 236 164 300 156Z"
        fill={learnColors.soma}
        stroke={learnColors.ink}
        strokeWidth="1.75"
      />
      <ellipse cx="318" cy="262" rx="36" ry="30" fill={learnColors.nucleus} />
      <ellipse cx="308" cy="254" rx="10" ry="8" fill="#f3e4dc" opacity="0.7" />
    </g>
  );
}

export function AxonArt() {
  return (
    <g>
      <path
        className="learn-process-edge"
        d={axonRoute}
        stroke={learnColors.ink}
        strokeWidth="20"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={axonRoute}
        stroke={learnColors.axon}
        strokeWidth="16"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M846 246C874 228 904 214 928 196" stroke={learnColors.ink} strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M846 246C874 228 904 214 928 196" stroke={learnColors.axon} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M858 262C890 270 914 292 936 314" stroke={learnColors.ink} strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M858 262C890 270 914 292 936 314" stroke={learnColors.axon} strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="934" cy="190" r="12" fill={learnColors.somaDeep} stroke={learnColors.ink} />
      <circle cx="942" cy="322" r="11" fill={learnColors.somaDeep} stroke={learnColors.ink} />
      <circle cx="900" cy="252" r="10" fill={learnColors.somaDeep} stroke={learnColors.ink} />
    </g>
  );
}

export function NeuronArtwork() {
  return (
    <g>
      <DendriteArt />
      <SomaArt />
      <AxonArt />
    </g>
  );
}

function HitTarget({
  part,
  selected,
  onSelect,
  label,
  children,
}: {
  part: NeuronPart;
  selected?: NeuronPart | null;
  onSelect?: (part: NeuronPart) => void;
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

export function NeuronFigure({
  label,
  selected = null,
  onSelect,
  zoom = 1,
  showSignals = false,
  viewBox = neuronViewBox,
}: NeuronFigureProps) {
  const interactive = Boolean(onSelect);

  return (
    <svg
      viewBox={viewBox}
      className="learn-neuron h-full w-full"
      role={interactive ? "group" : "img"}
      aria-label={interactive ? undefined : label}
    >
      <rect width="960" height="520" fill="#fbfaf7" />
      <g style={{ transform: `scale(${zoom})`, transformOrigin: "34% 52%" }}>
        <HitTarget part="dendrites" selected={selected} onSelect={onSelect} label="Dendritas">
          <DendriteArt />
          {interactive
            ? dendriteRoutes.map((route) => (
                <path key={route} d={route} className="learn-hit" />
              ))
            : null}
        </HitTarget>
        <HitTarget part="soma" selected={selected} onSelect={onSelect} label="Soma">
          <SomaArt />
        </HitTarget>
        <HitTarget part="axon" selected={selected} onSelect={onSelect} label="Axón">
          <AxonArt />
          {interactive ? <path d={axonRoute} className="learn-hit" /> : null}
        </HitTarget>
        {showSignals ? (
          <g className="learn-signal" aria-hidden="true">
            <ellipse
              cx="318"
              cy="262"
              rx="78"
              ry="70"
              fill={learnColors.signal}
              opacity="calc(var(--integration, 0) * 0.28)"
            />
            <circle
              cx="418"
              cy="270"
              r="16"
              fill="none"
              stroke={learnColors.signal}
              strokeWidth="3"
              opacity="var(--threshold, 0)"
            />
            {dendriteRoutes.map((route, index) => (
              <circle
                key={route}
                r="7"
                fill={learnColors.signal}
                style={{
                  offsetPath: `path("${route}")`,
                  offsetDistance: `calc(var(--p${index + 1}, 0) * 100%)`,
                  opacity: "var(--p-opacity, 0)",
                }}
              />
            ))}
            <ellipse
              rx="26"
              ry="11"
              fill={learnColors.signal}
              style={{
                offsetPath: `path("${axonRoute}")`,
                offsetDistance: "calc(var(--spike, 0) * 100%)",
                opacity: "var(--spike-opacity, 0)",
              }}
            />
          </g>
        ) : null}
      </g>
    </svg>
  );
}
