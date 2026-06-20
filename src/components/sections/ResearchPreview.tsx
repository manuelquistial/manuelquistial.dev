import type { Locale } from "@/i18n/config";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ViewAllLink } from "@/components/ui/ViewAllLink";
import { localizedPath } from "@/lib/utils";

interface ResearchPreviewProps {
  locale: Locale;
  sectionLabel: string;
  viewAllLabel: string;
  title: string;
  tagline: string;
  overview: string;
  topics: string[];
}

export function ResearchPreview({
  locale,
  sectionLabel,
  viewAllLabel,
  title,
  tagline,
  overview,
  topics,
}: ResearchPreviewProps) {
  return (
    <Section>
      <SectionTitle title={sectionLabel} subtitle={tagline} />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="mt-4 leading-relaxed text-muted">{overview}</p>
          <div className="mt-8">
            <ViewAllLink href={localizedPath(locale, "/research")}>
              {viewAllLabel}
            </ViewAllLink>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {topics.map((topic) => (
            <li
              key={topic}
              className="card-surface border-l-2 border-l-accent/40 px-4 py-3.5 text-sm text-foreground"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
