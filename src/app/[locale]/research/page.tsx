import type { Metadata } from "next";
import { getSiteContent } from "@/content/getSiteContent";
import { parseLocale } from "@/i18n/parseLocale";
import { buildPageMetadata } from "@/lib/metadata";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface ResearchPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ResearchPageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const content = getSiteContent(locale);

  return buildPageMetadata({
    title: content.meta.pages.research.title,
    description: content.meta.pages.research.description,
    path: "/research",
    fullTitle: true,
    locale,
  });
}

export default async function ResearchPage({ params }: ResearchPageProps) {
  const locale = parseLocale((await params).locale);
  const { researchPage } = getSiteContent(locale);

  return (
    <Section>
      <SectionTitle
        as="h1"
        title={researchPage.title}
        subtitle={researchPage.subtitle}
      />

      <div className="max-w-[65ch] space-y-4">
        {researchPage.overview.paragraphs.map((paragraph, index) => (
          <p key={`research-p-${index}`} className="leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
