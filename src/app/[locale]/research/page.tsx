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
        title={researchPage.title}
        subtitle={researchPage.subtitle}
      />

      <section id={pageSections.researchOverview} className="card-surface mb-10 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-foreground">
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
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground">
          {researchPage.topics.title}
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {researchPage.topics.items.map((topic) => (
            <article key={topic.title} className="card-surface p-5 sm:p-6">
              <h3 className="font-medium text-foreground">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground">
          {researchPage.methods.title}
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {researchPage.methods.items.map((item) => (
            <li
              key={item}
              className="card-surface border-l-2 border-l-accent/40 px-4 py-3.5 text-sm text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-foreground">
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
      </section>
    </Section>
  );
}
