import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { experience } from "@/data/experience";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { ViewAllLink } from "@/components/ui/ViewAllLink";
import { resolveExperience } from "@/lib/content";
import { localizedPath } from "@/lib/utils";

interface ExperiencePreviewProps {
  locale: Locale;
  sectionLabel: string;
  viewAllLabel: string;
  currentLabel: string;
  experienceCopy: Dictionary["content"]["experience"];
}

export function ExperiencePreview({
  locale,
  sectionLabel,
  viewAllLabel,
  currentLabel,
  experienceCopy,
}: ExperiencePreviewProps) {
  const items = resolveExperience(experience, experienceCopy);

  return (
    <Section>
      <SectionTitle title={sectionLabel} />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ExperienceCard
            key={item.id}
            item={item}
            currentLabel={currentLabel}
          />
        ))}
      </div>

      <div className="mt-10">
        <ViewAllLink href={localizedPath(locale, "/about")}>
          {viewAllLabel}
        </ViewAllLink>
      </div>
    </Section>
  );
}
