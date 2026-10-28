import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/localizedPath";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TagChip } from "@/components/ui/TagChip";
import { ViewAllLink } from "@/components/ui/ViewAllLink";

interface ResearchPreviewProps {
  locale: Locale;
  sectionLabel: string;
  viewAllLabel: string;
  projectTitle: string;
  affiliation?: string;
  summary: string;
  tags?: readonly string[];
}

export function ResearchPreview({
  locale,
  sectionLabel,
  viewAllLabel,
  projectTitle,
  affiliation,
  summary,
  tags = [],
}: ResearchPreviewProps) {
  return (
    <Section variant="bordered">
      <SectionHeader number="02" label={sectionLabel} />

      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col justify-between border border-border bg-surface p-6 md:p-8 lg:col-span-5 lg:min-h-[22rem] lg:p-10">
          <div>
            <p className="text-overline text-muted">{sectionLabel}</p>
            {affiliation ? (
              <p className="mt-4 max-w-[28ch] text-[length:var(--body)] leading-[1.45] text-foreground">
                {affiliation}
              </p>
            ) : null}
          </div>
          {tags.length > 0 ? (
            <ul className="mt-10 flex flex-wrap gap-2 lg:mt-0">
              {tags.map((tag) => (
                <li key={tag}>
                  <TagChip>{tag}</TagChip>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <h3 className="text-[length:var(--heading-2)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
            {projectTitle}
          </h3>
          <p className="mt-6 max-w-[42ch] text-[length:var(--body)] leading-[1.45] text-muted">
            {summary}
          </p>
          <div className="mt-8">
            <ViewAllLink href={localizedPath(locale, "/research")}>
              {viewAllLabel}
            </ViewAllLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
