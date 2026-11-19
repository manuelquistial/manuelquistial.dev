import { learnColors } from "@/components/learn/illustrations/palette";

export function SkillSecurityArt({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 640 360"
      role="img"
      aria-label={label}
      className="block h-auto w-full"
    >
      <rect width="640" height="360" fill={learnColors.paper} />
      <circle cx="78" cy="70" r="46" fill="var(--accent-yellow)" opacity="0.5" />
      <circle cx="560" cy="86" r="40" fill="var(--accent-coral)" opacity="0.4" />
      <circle cx="500" cy="300" r="54" fill="var(--accent-violet)" opacity="0.25" />

      <rect
        x="120"
        y="90"
        width="400"
        height="190"
        rx="24"
        fill="#fff"
        stroke={learnColors.violetInk}
        strokeWidth="2.5"
      />
      <rect x="156" y="126" width="220" height="14" rx="7" fill={learnColors.coral} />
      <rect x="156" y="160" width="280" height="10" rx="5" fill={learnColors.collar} />
      <rect x="156" y="186" width="250" height="10" rx="5" fill={learnColors.collar} opacity="0.75" />
      <rect x="156" y="212" width="190" height="10" rx="5" fill={learnColors.collar} opacity="0.55" />
      <rect
        x="156"
        y="244"
        width="120"
        height="18"
        rx="9"
        fill="var(--accent-green)"
        opacity="0.75"
      />
    </svg>
  );
}
