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

      <ol className="space-y-0">
        {items.map((item) => (
          <li
            key={item.id}
            className="relative border-l border-zinc-800 pb-10 pl-8 last:pb-0"
          >
            <span
              aria-hidden
              className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-none bg-zinc-700"
            />
            <ExperienceCard item={item} currentLabel={currentLabel} />
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
