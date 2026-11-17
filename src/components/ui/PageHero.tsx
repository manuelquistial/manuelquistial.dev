import type { ReactNode } from "react";
import Link from "next/link";
import {
  SpotIllustration,
  type SpotIllustrationId,
} from "@/components/ui/SpotIllustration";
import { cn } from "@/lib/utils";

export type PageHeroTone = "wave" | "coding" | "research" | "learn";

const toneStyles: Record<
  PageHeroTone,
  {
    shell: string;
    title: string;
    description: string;
    eyebrow: string;
    circles: readonly { className: string }[];
  }
> = {
  // portrait-wave: cream, yellow, coral, blue jacket
  wave: {
    shell:
      "bg-[color-mix(in_srgb,var(--accent-yellow)_18%,var(--surface-soft))] text-brand",
    title: "text-brand",
    description: "text-brand/80",
    eyebrow: "text-brand/60",
    circles: [
      { className: "absolute -left-6 top-2 h-28 w-28 rounded-full bg-accent-yellow sm:h-32 sm:w-32" },
      { className: "absolute -right-4 top-10 h-24 w-24 rounded-full bg-accent-coral sm:h-28 sm:w-28" },
      { className: "absolute bottom-2 left-[28%] h-16 w-16 rounded-full bg-accent-violet/55" },
    ],
  },
  // portrait-coding: sage greens, blue, orange code chip
  coding: {
    shell:
      "bg-[color-mix(in_srgb,var(--accent-green)_16%,var(--surface-soft))] text-brand",
    title: "text-brand",
    description: "text-brand/80",
    eyebrow: "text-brand/60",
    circles: [
      { className: "absolute -left-8 top-0 h-28 w-28 rounded-full bg-accent-green sm:h-32 sm:w-32" },
      { className: "absolute -right-6 top-8 h-24 w-24 rounded-full bg-accent-yellow sm:h-28 sm:w-28" },
      { className: "absolute bottom-0 right-[30%] h-16 w-16 rounded-full bg-accent-coral/70" },
    ],
  },
  // portrait-research: orange / blue / green on navy-friendly art
  research: {
    shell: "bg-brand text-footer-text",
    title: "text-white",
    description: "text-footer-text/95",
    eyebrow: "text-footer-muted",
    circles: [
      { className: "absolute -right-2 top-0 h-28 w-28 rounded-full bg-accent-yellow/85 sm:h-32 sm:w-32" },
      { className: "absolute bottom-2 right-14 h-24 w-24 rounded-full bg-accent-coral/80 sm:h-28 sm:w-28" },
      { className: "absolute left-4 top-14 h-20 w-20 rounded-full bg-accent-violet/55" },
    ],
  },
  // portrait-learn: cobalt blue circle, green leaves, yellow accents
  learn: {
    shell:
      "bg-[color-mix(in_srgb,var(--accent-violet)_14%,var(--surface-soft))] text-brand",
    title: "text-brand",
    description: "text-brand/80",
    eyebrow: "text-brand/60",
    circles: [
      { className: "absolute -left-8 -top-4 h-28 w-28 rounded-full bg-accent-yellow sm:h-32 sm:w-32" },
      { className: "absolute -right-8 top-4 h-24 w-24 rounded-full bg-accent-coral sm:h-28 sm:w-28" },
      { className: "absolute -bottom-4 left-[22%] h-20 w-20 rounded-full bg-accent-green" },
    ],
  },
};

interface PageHeroProps {
  title: string;
  description?: string;
  eyebrow?: string;
  eyebrowHref?: string;
  tone?: PageHeroTone;
  illustration?: SpotIllustrationId;
  className?: string;
  children?: ReactNode;
}

export function PageHero({
  title,
  description,
  eyebrow,
  eyebrowHref,
  tone = "research",
  illustration,
  className,
  children,
}: PageHeroProps) {
  const styles = toneStyles[tone];

  return (
    <div
      className={cn(
        "gp-module relative grid items-center gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10",
        styles.shell,
        className,
      )}
    >
      <header className={cn("relative z-[1]", illustration ? "lg:col-span-6" : "lg:col-span-10")}>
        {eyebrow ? (
          eyebrowHref ? (
            <Link
              href={eyebrowHref}
              className={cn(
                "text-overline transition-colors duration-200 hover:text-accent-violet",
                styles.eyebrow,
              )}
            >
              {eyebrow}
            </Link>
          ) : (
            <p className={cn("text-overline", styles.eyebrow)}>{eyebrow}</p>
          )
        ) : null}
        <h1
          className={cn(
            "font-display text-[length:var(--heading-1)]",
            styles.title,
            eyebrow ? "mt-4" : null,
          )}
        >
          {title}
        </h1>
        {description ? (
          <p
            className={cn(
              "mt-6 text-[length:var(--heading-3)] font-semibold leading-snug",
              styles.description,
            )}
          >
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </header>
      {illustration ? (
        <div className="relative flex min-h-[14rem] items-center justify-center lg:col-span-6 lg:justify-end">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            {styles.circles.map((circle) => (
              <div key={circle.className} className={circle.className} />
            ))}
          </div>
          <SpotIllustration
            id={illustration}
            alt=""
            size="xl"
            sizes="280px"
            className="relative z-[1]"
          />
        </div>
      ) : null}
    </div>
  );
}
