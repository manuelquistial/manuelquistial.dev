import type { Locale } from "@/i18n/config";
import type { Experience } from "@/data/experience";
import { localizedSectionPath } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { ViewAllLink } from "@/components/ui/ViewAllLink";

interface ExperiencePreviewProps {
  locale: Locale;
  items: readonly Experience[];
  sectionLabel: string;
  viewAllLabel: string;
}

export function ExperiencePreview({
  locale,
  items,
  sectionLabel,
  viewAllLabel,
}: ExperiencePreviewProps) {
  return (
    <Section variant="muted">
      <SectionTitle title={sectionLabel} />

      <ol className="divide-y divide-border border-y border-border">
        {items.map((item) => (
          <li key={item.id} className="py-6 first:pt-0 last:pb-0 sm:py-8">
            <ExperienceCard item={item} compact />
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <ViewAllLink
          href={localizedSectionPath(locale, "/about", pageSections.experience)}
        >
          {viewAllLabel}
        </ViewAllLink>
      </div>
    </Section>
  );
}
