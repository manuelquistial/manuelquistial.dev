import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TagChip } from "@/components/ui/TagChip";
import { ViewAllLink } from "@/components/ui/ViewAllLink";

interface ResearchSystemItem {
  title: string;
  description: string;
}

interface ResearchPreviewProps {
  locale: Locale;
  sectionLabel: string;
  viewAllLabel: string;
  projectTitle: string;
  affiliation?: string;
  summary: string;
  tags?: readonly string[];
  systemItems?: readonly ResearchSystemItem[];
}

export function ResearchPreview({
  locale,
  sectionLabel,
  viewAllLabel,
  projectTitle,
  affiliation,
  summary,
  tags = [],
  systemItems = [],
}: ResearchPreviewProps) {
  return (
    <Section id={pageSections.research} variant="bordered">
      <SectionHeader number="02" label={sectionLabel} />

      <div className="mt-[var(--section-heading-gap)] grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col border border-border bg-surface p-6 md:p-8 lg:col-span-6 lg:p-10">
          <div>
            <p className="text-overline text-muted">{affiliation}</p>
            <h3 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.04em] text-foreground md:mt-8">
              {projectTitle}
            </h3>
            <p className="mt-6 max-w-[42ch] text-[length:var(--body-lg)] leading-[1.45] text-muted md:mt-8">
              {summary}
            </p>
          </div>
          {systemItems.length > 0 ? (
            <ul className="mt-8 space-y-4 border-t border-border pt-6">
              {systemItems.map((item, index) => (
                <li key={item.title} className="grid grid-cols-[auto_1fr] gap-3">
                  <span className="text-overline text-muted" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[length:var(--body)] font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-[1.45] text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="flex flex-col justify-center lg:col-span-5 lg:col-start-8">
          {tags.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag}>
                  <TagChip>{tag}</TagChip>
                </li>
              ))}
            </ul>
          ) : null}
          <div className={tags.length > 0 ? "mt-8" : undefined}>
            <ViewAllLink href={localizedPath(locale, "/research")}>
              {viewAllLabel}
            </ViewAllLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
