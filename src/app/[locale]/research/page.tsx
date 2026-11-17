import type { Metadata } from "next";
import { getSiteContent } from "@/content/getSiteContent";
import { parseLocale } from "@/i18n/parseLocale";
import { buildPageMetadata } from "@/lib/metadata";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/ui/PageHero";

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

function Prose({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="mt-5 space-y-4">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="leading-[1.45] text-muted">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default async function ResearchPage({ params }: ResearchPageProps) {
  const locale = parseLocale((await params).locale);
  const { researchPage } = getSiteContent(locale);

  return (
    <Section>
      <PageHero
        tone="research"
        eyebrow={researchPage.affiliation}
        title={researchPage.title}
        description={researchPage.projectTitle}
        illustration="research"
      />

      <p className="mt-[var(--section-heading-gap)] max-w-[65ch] text-[length:var(--body-lg)] leading-[1.45] text-muted">
        {researchPage.summary}
      </p>

      <section className="mt-[var(--section-y)] max-w-[65ch] border-t border-border pt-[var(--section-y)]">
        <h2 className="text-[length:var(--heading-3)] font-semibold text-foreground">
          {researchPage.objective.title}
        </h2>
        <Prose paragraphs={researchPage.objective.paragraphs} />
      </section>

      <section className="mt-[var(--section-y)] max-w-[65ch] border-t border-border pt-[var(--section-y)]">
        <h2 className="text-[length:var(--heading-3)] font-semibold text-foreground">
          {researchPage.system.title}
        </h2>
        <div className="mt-[var(--section-heading-gap)] space-y-8">
          {researchPage.system.items.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 leading-[1.45] text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-[var(--section-y)] max-w-[65ch] border-t border-border pt-[var(--section-y)]">
        <h2 className="text-[length:var(--heading-3)] font-semibold text-foreground">
          {researchPage.design.title}
        </h2>
        <Prose paragraphs={researchPage.design.paragraphs} />
      </section>

      <section className="mt-[var(--section-y)] max-w-[65ch] border-t border-border pt-[var(--section-y)]">
        <h2 className="text-[length:var(--heading-3)] font-semibold text-foreground">
          {researchPage.evaluation.title}
        </h2>
        <Prose paragraphs={researchPage.evaluation.paragraphs} />
      </section>
    </Section>
  );
}
