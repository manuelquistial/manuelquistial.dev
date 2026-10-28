import type { Locale } from "@/i18n/config";
import type { Experience } from "@/data/experience";
import { localizedSectionPath } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
    <Section variant="bordered">
      <SectionHeader number="04" label={sectionLabel} />

      <ul className="mt-12 divide-y divide-border border-y border-border md:mt-16">
        {items.map((item) => (
          <li key={item.id} className="py-8 md:py-10">
            <ExperienceCard item={item} variant="preview" />
          </li>
        ))}
      </ul>

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
