type CaseKind = "program" | "files" | "permissions";

export function CaseSituationArt({ kind }: { kind: CaseKind }) {
  return (
    <svg
      viewBox="0 0 420 240"
      aria-hidden="true"
      className="block h-auto w-full max-w-[24rem]"
    >
      <rect
        width="420"
        height="240"
        rx="24"
        fill="color-mix(in srgb, var(--surface-soft) 80%, white)"
      />
      {kind === "program" ? (
        <>
          <rect x="48" y="58" width="140" height="124" rx="22" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
          <rect x="72" y="88" width="92" height="10" rx="5" fill="var(--border-strong)" />
          <rect x="72" y="112" width="72" height="8" rx="4" fill="var(--border-strong)" />
          <path d="M188 120 H236" stroke="var(--brand)" strokeWidth="2" strokeDasharray="5 5" />
          <rect x="236" y="78" width="136" height="84" rx="18" fill="var(--surface)" stroke="var(--accent-violet)" strokeWidth="2.5" />
          <rect x="260" y="106" width="88" height="12" rx="4" fill="var(--accent-yellow)" opacity="0.75" />
          <rect x="260" y="130" width="60" height="8" rx="4" fill="var(--border-strong)" />
        </>
      ) : null}
      {kind === "files" ? (
        <>
          <rect x="54" y="70" width="120" height="110" rx="20" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
          <path d="M174 120 H220" stroke="var(--brand)" strokeWidth="2" strokeDasharray="5 5" />
          <rect x="220" y="56" width="64" height="78" rx="10" fill="var(--surface)" stroke="var(--brand)" strokeWidth="1.75" />
          <rect x="300" y="70" width="64" height="78" rx="10" fill="var(--surface)" stroke="var(--accent-coral)" strokeWidth="2.5" />
          <path d="M174 150 H332" stroke="var(--accent-coral)" strokeWidth="2" strokeDasharray="5 5" opacity="0.8" />
        </>
      ) : null}
      {kind === "permissions" ? (
        <>
          <rect x="58" y="66" width="132" height="112" rx="20" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
          <circle cx="124" cy="112" r="22" fill="color-mix(in srgb, var(--accent-violet) 22%, white)" />
          <path d="M190 122 H236" stroke="var(--brand)" strokeWidth="2" strokeDasharray="5 5" />
          <rect x="236" y="72" width="128" height="100" rx="18" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
          <rect x="258" y="98" width="84" height="10" rx="5" fill="var(--border-strong)" />
          <rect x="258" y="122" width="84" height="10" rx="5" fill="var(--accent-coral)" opacity="0.55" />
          <rect x="258" y="146" width="84" height="10" rx="5" fill="var(--accent-coral)" opacity="0.55" />
        </>
      ) : null}
    </svg>
  );
}
