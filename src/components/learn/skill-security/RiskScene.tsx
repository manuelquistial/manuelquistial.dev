import type { skillSecurityRisks } from "@/content/learn/es/skill-security";

type RiskId = (typeof skillSecurityRisks.items)[number]["id"];

export function RiskScene({ active }: { active: RiskId }) {
  const focus = {
    instructions: active === "malicious-instructions",
    access: active === "improper-access",
    programs: active === "malicious-programs",
    connections: active === "untrusted-connections",
  };

  const dim = (on: boolean) => (on ? 1 : 0.28);
  const stroke = (on: boolean) => (on ? "var(--accent-violet)" : "var(--brand)");
  const width = (on: boolean) => (on ? 3 : 1.75);

  return (
    <svg
      viewBox="0 0 640 420"
      role="img"
      aria-hidden="true"
      className="skill-sec-scene mx-auto block h-auto w-full max-w-[40rem]"
    >
      <rect width="640" height="420" fill="color-mix(in srgb, var(--surface-soft) 70%, white)" rx="28" />

      <g className="skill-sec-scene-node" opacity={dim(focus.instructions)}>
        <rect
          x="48"
          y="56"
          width="150"
          height="120"
          rx="22"
          fill="var(--surface)"
          stroke={stroke(focus.instructions)}
          strokeWidth={width(focus.instructions)}
        />
        <rect x="72" y="84" width="102" height="10" rx="5" fill="var(--accent-coral)" opacity="0.8" />
        <rect x="72" y="108" width="84" height="8" rx="4" fill="var(--border-strong)" />
        <rect x="72" y="128" width="92" height="8" rx="4" fill="var(--border-strong)" />
      </g>

      <g className="skill-sec-scene-node" opacity={1}>
        <rect
          x="250"
          y="120"
          width="140"
          height="140"
          rx="28"
          fill="var(--surface)"
          stroke="var(--brand)"
          strokeWidth="2.25"
        />
        <circle
          cx="320"
          cy="178"
          r="28"
          fill="color-mix(in srgb, var(--accent-violet) 24%, white)"
        />
        <rect x="286" y="220" width="68" height="10" rx="5" fill="var(--border-strong)" />
      </g>

      <g className="skill-sec-scene-node" opacity={dim(focus.access)}>
        <rect
          x="470"
          y="48"
          width="122"
          height="96"
          rx="18"
          fill="var(--surface)"
          stroke={stroke(focus.access)}
          strokeWidth={width(focus.access)}
        />
        <path
          d="M500 72h48M500 92h36M500 112h42"
          stroke="var(--brand)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
      </g>

      <g className="skill-sec-scene-node" opacity={dim(focus.programs)}>
        <rect
          x="470"
          y="180"
          width="122"
          height="96"
          rx="18"
          fill="var(--surface)"
          stroke={stroke(focus.programs)}
          strokeWidth={width(focus.programs)}
        />
        <rect x="496" y="208" width="70" height="12" rx="4" fill="var(--accent-yellow)" opacity="0.7" />
        <rect x="496" y="232" width="48" height="8" rx="4" fill="var(--border-strong)" />
      </g>

      <g className="skill-sec-scene-node" opacity={dim(focus.connections)}>
        <circle
          cx="320"
          cy="348"
          r="42"
          fill="var(--surface)"
          stroke={stroke(focus.connections)}
          strokeWidth={width(focus.connections)}
        />
        <path
          d="M302 348h36M320 330v36"
          stroke="var(--brand)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
      </g>

      <path
        className="skill-sec-scene-link"
        d="M198 116 C224 116 224 170 250 170"
        fill="none"
        stroke={stroke(focus.instructions)}
        strokeWidth={focus.instructions ? 2.5 : 1.5}
        strokeDasharray="6 6"
        opacity={dim(focus.instructions)}
      />
      <path
        className="skill-sec-scene-link"
        d="M390 160 C430 140 450 120 470 100"
        fill="none"
        stroke={stroke(focus.access)}
        strokeWidth={focus.access ? 2.5 : 1.5}
        strokeDasharray="6 6"
        opacity={dim(focus.access)}
      />
      <path
        className="skill-sec-scene-link"
        d="M390 210 C430 220 450 230 470 230"
        fill="none"
        stroke={stroke(focus.programs)}
        strokeWidth={focus.programs ? 2.5 : 1.5}
        strokeDasharray="6 6"
        opacity={dim(focus.programs)}
      />
      <path
        className="skill-sec-scene-link"
        d="M320 260 V306"
        fill="none"
        stroke={stroke(focus.connections)}
        strokeWidth={focus.connections ? 2.5 : 1.5}
        strokeDasharray="6 6"
        opacity={dim(focus.connections)}
      />
    </svg>
  );
}
