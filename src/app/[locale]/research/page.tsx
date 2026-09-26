import type { Metadata } from "next";
import { getSiteContent } from "@/content/getSiteContent";
import { parseLocale } from "@/i18n/parseLocale";
import { buildPageMetadata } from "@/lib/metadata";
import { pageSections } from "@/lib/pageSections";
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

      <section
        id={pageSections.researchOverview}
        className="max-w-[65ch] space-y-10"
      >
        <div>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold text-foreground">
            {researchPage.overview.title}
          </h2>
          <div className="mt-5 space-y-4">
            {researchPage.overview.paragraphs.map((paragraph, index) => (
              <p
                key={`overview-p-${index}`}
                className="leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold text-foreground">
            {researchPage.topics.title}
          </h2>
          <div className="mt-6 space-y-6">
            {researchPage.topics.items.map((topic) => (
              <article key={topic.title}>
                <h3 className="font-semibold text-foreground">{topic.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold text-foreground">
            {researchPage.methods.title}
          </h2>
          <ul className="mt-6 list-disc space-y-2 pl-5">
            {researchPage.methods.items.map((item) => (
              <li key={item} className="text-base leading-relaxed text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold text-foreground">
            {researchPage.goals.title}
          </h2>
          <div className="mt-5 space-y-4">
            {researchPage.goals.paragraphs.map((paragraph, index) => (
              <p
                key={`goals-p-${index}`}
                className="leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </Section>
  );
}
