import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/localizedPath";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ViewAllLink } from "@/components/ui/ViewAllLink";

interface ResearchPreviewProps {
  locale: Locale;
  sectionLabel: string;
  viewAllLabel: string;
  summary: string;
}

export function ResearchPreview({
  locale,
  sectionLabel,
  viewAllLabel,
  summary,
}: ResearchPreviewProps) {
  return (
    <Section>
      <SectionTitle title={sectionLabel} />
      <p className="max-w-[65ch] text-[clamp(1.125rem,1.5vw,1.25rem)] leading-[1.5] text-muted">
        {summary}
      </p>
      <div className="mt-8">
        <ViewAllLink href={localizedPath(locale, "/research")}>
          {viewAllLabel}
        </ViewAllLink>
      </div>
    </Section>
  );
}
