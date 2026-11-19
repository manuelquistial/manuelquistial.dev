import Link from "next/link";
import {
  skillSecurityHero,
  skillSecurityUi,
} from "@/content/learn/es/skill-security";
import { getLearnBasePath } from "@/content/learn/routes";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/localizedPath";

function HeroComposition() {
  return (
    <svg
      viewBox="0 0 420 360"
      role="img"
      aria-label={skillSecurityUi.illustrationPending}
      className="mx-auto block h-auto w-full max-w-[26rem]"
    >
      <rect width="420" height="360" fill="transparent" />
      <circle cx="68" cy="62" r="42" fill="var(--accent-yellow)" opacity="0.55" />
      <circle cx="352" cy="78" r="36" fill="var(--accent-coral)" opacity="0.45" />
      <circle cx="300" cy="300" r="48" fill="var(--accent-green)" opacity="0.35" />

      <rect
        x="48"
        y="108"
        width="118"
        height="132"
        rx="22"
        fill="var(--surface)"
        stroke="var(--brand)"
        strokeWidth="2"
      />
      <rect x="68" y="132" width="78" height="10" rx="5" fill="var(--accent-violet)" opacity="0.55" />
      <rect x="68" y="156" width="62" height="8" rx="4" fill="var(--border-strong)" />
      <rect x="68" y="176" width="70" height="8" rx="4" fill="var(--border-strong)" />
      <rect x="68" y="196" width="50" height="8" rx="4" fill="var(--border-strong)" />

      <path
        d="M166 170 H214"
        stroke="var(--brand)"
        strokeWidth="2"
        strokeDasharray="5 5"
        opacity="0.55"
      />

      <rect
        x="214"
        y="92"
        width="148"
        height="168"
        rx="24"
        fill="var(--surface)"
        stroke="var(--brand)"
        strokeWidth="2.25"
      />
      <circle cx="288" cy="150" r="28" fill="color-mix(in srgb, var(--accent-violet) 28%, white)" />
      <rect x="246" y="196" width="84" height="10" rx="5" fill="var(--border-strong)" />
      <rect x="246" y="218" width="64" height="8" rx="4" fill="var(--border-strong)" />

      <path
        d="M288 260 V292"
        stroke="var(--brand)"
        strokeWidth="2"
        strokeDasharray="5 5"
        opacity="0.55"
      />

      <g transform="translate(238 292)">
        <rect width="36" height="44" rx="8" fill="var(--surface)" stroke="var(--brand)" strokeWidth="1.75" />
        <path d="M22 0 V14 H36" fill="none" stroke="var(--brand)" strokeWidth="1.75" />
      </g>
      <g transform="translate(286 292)">
        <rect width="36" height="44" rx="8" fill="var(--surface)" stroke="var(--brand)" strokeWidth="1.75" />
        <path d="M22 0 V14 H36" fill="none" stroke="var(--brand)" strokeWidth="1.75" />
      </g>
      <g transform="translate(334 292)">
        <circle cx="18" cy="22" r="16" fill="var(--surface)" stroke="var(--brand)" strokeWidth="1.75" />
        <path d="M12 22h12" stroke="var(--brand)" strokeWidth="1.75" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function SkillSecurityHero({ locale }: { locale: Locale }) {
  const indexHref = localizedPath(locale, getLearnBasePath(locale));

  return (
    <header className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-6%] top-0 -z-10 h-[min(28rem,70%)] rounded-[2rem] bg-[color-mix(in_srgb,var(--accent-violet)_10%,var(--surface-soft))]"
      />
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Link
            href={indexHref}
            className="text-overline text-brand/55 transition-colors duration-200 hover:text-accent-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet"
          >
            {skillSecurityUi.eyebrow}
          </Link>
          <h1 className="font-display mt-5 max-w-[16ch] text-[length:var(--heading-1)] leading-[1.02] text-brand">
            {skillSecurityHero.title}
          </h1>
          <div className="mt-7 max-w-[42rem] space-y-5 text-[length:var(--body-lg)] leading-relaxed text-brand/80">
            {skillSecurityHero.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 max-w-[40rem] text-[length:var(--body-lg)] font-semibold leading-relaxed text-brand">
            {skillSecurityHero.highlight}
          </p>
        </div>

        <div className="lg:col-span-5 lg:pt-8">
          <HeroComposition />
        </div>
      </div>
    </header>
  );
}
