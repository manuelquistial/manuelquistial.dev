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
  currentLabel: string;
}

export function ExperiencePreview({
  locale,
  items,
  sectionLabel,
  viewAllLabel,
  currentLabel,
}: ExperiencePreviewProps) {
  return (
    <Section variant="muted">
      <SectionTitle title={sectionLabel} />

      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <ExperienceCard
            key={item.id}
            item={item}
            currentLabel={currentLabel}
          />
        ))}
      </div>

      <div className="mt-6">
        <ViewAllLink
          href={localizedSectionPath(locale, "/about", pageSections.experience)}
        >
          {viewAllLabel}
        </ViewAllLink>
      </div>
    </Section>
  );
}
