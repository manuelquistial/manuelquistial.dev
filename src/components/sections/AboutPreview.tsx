import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { IconArrowRight } from "@/components/icons";
import { localizedPath } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";

interface AboutPreviewProps {
  locale: Locale;
  sectionLabel: string;
  intro: string;
  viewAllLabel: string;
}

export function AboutPreview({
  locale,
  sectionLabel,
  intro,
  viewAllLabel,
}: AboutPreviewProps) {
  return (
    <section id={pageSections.about} className="h-full">
      <Link
        href={localizedPath(locale, "/about")}
        className="gp-module group relative flex h-full min-h-[18rem] flex-col overflow-hidden border border-border bg-surface transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-violet"
      >
        <div className="relative h-28 overflow-hidden bg-surface-soft" aria-hidden>
          <div className="absolute -left-2 top-6 h-20 w-20 rounded-full bg-accent-violet" />
          <div className="absolute right-2 top-2 h-24 w-24 rounded-full bg-accent-yellow" />
          <div className="absolute bottom-0 right-16 h-16 w-16 rounded-full bg-accent-coral" />
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h2 className="font-display text-[length:var(--heading-2)] text-brand">
            {sectionLabel}
          </h2>
          <p className="mt-3 max-w-[32ch] text-[length:var(--body)] leading-relaxed text-muted">
            {intro}
          </p>
          <p className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand transition-colors group-hover:text-accent-coral">
            {viewAllLabel}
            <IconArrowRight className="size-[1.05em]" />
          </p>
        </div>
      </Link>
    </section>
  );
}
