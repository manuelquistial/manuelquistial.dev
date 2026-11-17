import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { IconArrowRight } from "@/components/icons";
import { localizedPathForAvailableContent } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";

interface AprendamosLessonItem {
  slug: string;
  title: string;
  imageLabel: string;
}

interface AprendamosPreviewProps {
  locale: Locale;
  sectionLabel: string;
  intro: string;
  exploreLabel: string;
  lessons: readonly AprendamosLessonItem[];
}

export function AprendamosPreview({
  locale,
  sectionLabel,
  intro,
  exploreLabel,
  lessons,
}: AprendamosPreviewProps) {
  const primary = lessons[0];
  const href = primary
    ? localizedPathForAvailableContent(locale, `/aprendamos/${primary.slug}`)
    : localizedPathForAvailableContent(locale, "/aprendamos");

  return (
    <section id={pageSections.learn} className="h-full">
      <Link
        href={href.href}
        lang={href.lang}
        hrefLang={href.lang}
        className="gp-module group relative flex h-full min-h-[18rem] flex-col overflow-hidden border border-border bg-surface transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-violet"
      >
        <div className="relative h-28 overflow-hidden bg-surface-soft" aria-hidden>
          <div className="absolute -left-4 top-4 h-24 w-24 rounded-full bg-accent-yellow" />
          <div className="absolute -right-6 top-8 h-20 w-20 rounded-full bg-accent-coral" />
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h2 className="font-display text-[length:var(--heading-2)] text-brand">
            {sectionLabel}
          </h2>
          <p className="mt-3 max-w-[32ch] text-[length:var(--body)] leading-relaxed text-muted">
            {intro}
          </p>
          <p className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand transition-colors group-hover:text-accent-violet">
            {exploreLabel}
            <IconArrowRight className="size-[1.05em]" />
          </p>
        </div>
      </Link>
    </section>
  );
}
