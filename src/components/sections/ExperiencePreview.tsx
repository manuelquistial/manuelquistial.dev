import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { experience } from "@/data/experience";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { resolveExperience } from "@/lib/content";
import { localizedPath } from "@/lib/utils";

interface ExperiencePreviewProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function ExperiencePreview({
  locale,
  dictionary,
}: ExperiencePreviewProps) {
  const items = resolveExperience(experience, dictionary.content.experience);

  return (
    <section className="bg-surface/40">
      <Container className="py-16 sm:py-20">
        <SectionTitle title={dictionary.sections.experience} />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ExperienceCard
              key={item.id}
              item={item}
              currentLabel={dictionary.experiencePreview.currentLabel}
            />
          ))}
        </div>

        <div className="mt-8">
          <Link
            href={localizedPath(locale, "/about")}
            className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            {dictionary.sections.viewAll} →
          </Link>
        </div>
      </Container>
    </section>
  );
}
