import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { localizedPath } from "@/lib/localizedPath";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ViewAllLink } from "@/components/ui/ViewAllLink";

interface AboutPreviewProps {
  locale: Locale;
  content: SiteContent["about"];
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
      <div className="max-w-[65ch] space-y-4">
        {content.previewParagraphs.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-8">
        <ViewAllLink href={localizedPath(locale, "/about")}>
          {viewAllLabel}
        </ViewAllLink>
      </div>
    </Section>
  );
}
