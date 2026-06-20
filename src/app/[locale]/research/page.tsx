import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { parseLocale } from "@/i18n/parseLocale";
import { buildPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface ResearchPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ResearchPageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const { meta } = getDictionary(locale);

  return buildPageMetadata(locale, {
    title: meta.pages.research.title,
    description: meta.pages.research.description,
    path: "/research",
  });
}

export default async function ResearchPage({ params }: ResearchPageProps) {
  const locale = parseLocale((await params).locale);
  const dictionary = getDictionary(locale);
  const { researchPage } = dictionary;

  return (
    <Container as="section" className="py-16 sm:py-20">
      <SectionTitle
        title={researchPage.title}
        subtitle={researchPage.subtitle}
      />

      <section className="mb-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-foreground">
          {researchPage.overview.title}
        </h2>
        <div className="mt-4 space-y-4">
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

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground">
          {researchPage.topics.title}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {researchPage.topics.items.map((topic) => (
            <article
              key={topic.title}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <h3 className="font-medium text-foreground">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground">
          {researchPage.methods.title}
        </h2>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {researchPage.methods.items.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-foreground">
          {researchPage.goals.title}
        </h2>
        <div className="mt-4 space-y-4">
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
    </Container>
  );
}
