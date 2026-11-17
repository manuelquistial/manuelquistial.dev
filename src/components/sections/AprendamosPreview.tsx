import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { IconArrowRight } from "@/components/icons";
import { SpotIllustration } from "@/components/ui/SpotIllustration";
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
        <div className="relative flex justify-center overflow-hidden bg-surface-soft px-4 py-5 md:py-6">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-8 -top-6 h-28 w-28 rounded-full bg-accent-yellow" />
            <div className="absolute -right-10 top-2 h-24 w-24 rounded-full bg-accent-coral" />
            <div className="absolute -bottom-6 left-[18%] h-20 w-20 rounded-full bg-accent-violet" />
            <div className="absolute bottom-3 right-[22%] h-12 w-12 rounded-full bg-accent-green" />
          </div>
          <SpotIllustration
            id="learn"
            alt=""
            size="card"
            sizes="208px"
            className="relative z-[1] transition-transform duration-200 group-hover:scale-[1.04]"
          />
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
