import type { Locale } from "@/i18n/config";
import type { Experience } from "@/data/experience";
import { localizedSectionPath } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { Section } from "@/components/layout/Section";
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
    <Section id={pageSections.experience} variant="bordered">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-[length:var(--heading-1)] text-brand">
          {sectionLabel}
        </h2>
        <ViewAllLink
          href={localizedSectionPath(locale, "/about", pageSections.experience)}
          className="text-brand hover:text-accent-violet"
        >
          {viewAllLabel}
        </ViewAllLink>
      </div>

      <ul className="mt-[var(--section-heading-gap)] divide-y divide-border border-y border-border">
        {items.map((item) => (
          <li key={item.id} className="py-7 md:py-8">
            <ExperienceCard item={item} variant="preview" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
