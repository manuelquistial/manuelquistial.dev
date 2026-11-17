import type { Locale } from "@/i18n/config";
import { IconArrowRight } from "@/components/icons";
import { localizedPath } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { Section } from "@/components/layout/Section";
import Link from "next/link";

interface ResearchPreviewProps {
  locale: Locale;
  sectionLabel: string;
  viewAllLabel: string;
  projectTitle: string;
  affiliation?: string;
  summary: string;
  previewTagline?: string;
  tags?: readonly string[];
}

export function ResearchPreview({
  locale,
  sectionLabel,
  viewAllLabel,
  projectTitle,
  affiliation,
  summary,
  previewTagline,
  tags = [],
}: ResearchPreviewProps) {
  const blurb = previewTagline || summary;

  return (
    <Section id={pageSections.research} variant="bordered">
      <div className="gp-module relative overflow-hidden bg-brand text-footer-text">
        <div className="grid items-center gap-8 p-6 md:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
          <div className="relative z-[1] lg:col-span-7">
            <h2 className="font-display text-[length:var(--heading-1)] leading-[1.05] text-white">
              {sectionLabel}
            </h2>
            <p className="mt-4 max-w-[42ch] text-[length:var(--body-lg)] leading-relaxed text-footer-text/90">
              {blurb}
            </p>
            {affiliation ? (
              <p className="mt-3 text-sm text-footer-muted">{affiliation}</p>
            ) : null}
            {tags.length > 0 ? (
              <p className="mt-4 text-sm text-footer-muted">
                {tags.join(" · ")}
              </p>
            ) : null}
            <p className="mt-8">
              <Link
                href={localizedPath(locale, "/research")}
                className="inline-flex min-h-11 items-center gap-1.5 text-[length:var(--body)] font-semibold text-accent-yellow transition-colors duration-200 hover:text-white"
              >
                {viewAllLabel}
                <IconArrowRight className="size-[1.05em]" />
              </Link>
            </p>
            <p className="sr-only">{projectTitle}</p>
          </div>

          <div className="relative hidden min-h-[12rem] lg:col-span-5 lg:block" aria-hidden>
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-accent-yellow/80" />
            <div className="absolute bottom-4 right-16 h-28 w-28 rounded-full bg-accent-coral/80" />
            <div className="absolute left-8 top-16 h-24 w-24 rounded-full bg-accent-violet/50" />
          </div>
        </div>
      </div>
    </Section>
  );
}
