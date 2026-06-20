import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ViewAllLink } from "@/components/ui/ViewAllLink";
import { localizedPath } from "@/lib/utils";

interface AboutPreviewProps {
  locale: Locale;
  content: Dictionary["about"];
  sectionLabel: string;
  viewAllLabel: string;
}

export function AboutPreview({
  locale,
  content,
  sectionLabel,
  viewAllLabel,
}: AboutPreviewProps) {
  return (
    <Section>
      <SectionTitle title={sectionLabel} />

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <div className="space-y-4">
          {content.paragraphs.map((paragraph, index) => (
            <p
              key={`about-preview-p-${index}`}
              className="leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}
          <ViewAllLink href={localizedPath(locale, "/about")}>
            {viewAllLabel}
          </ViewAllLink>
        </div>

        <ul className="space-y-3">
          {content.highlights.map((item) => (
            <li
              key={item}
              className="card-surface border-l-2 border-l-accent/50 px-4 py-3.5 text-sm text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
