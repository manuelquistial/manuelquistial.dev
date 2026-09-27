import type { Metadata } from "next";
import { getSiteContent } from "@/content/getSiteContent";
import { parseLocale } from "@/i18n/parseLocale";
import { buildPageMetadata } from "@/lib/metadata";
import { Section } from "@/components/layout/Section";

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
        <p key={paragraph} className="leading-relaxed text-muted">
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
      <header className="max-w-[65ch]">
        <h1 className="text-[clamp(2.375rem,4vw,3.75rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
          {researchPage.title}
        </h1>
        <p className="mt-6 text-[clamp(1.25rem,2vw,1.5rem)] font-semibold leading-snug text-foreground">
          {researchPage.projectTitle}
        </p>
        <p className="mt-3 text-base font-medium text-foreground">
          {researchPage.affiliation}
        </p>
      </header>

      <p className="mt-8 max-w-[65ch] leading-relaxed text-muted">
        {researchPage.summary}
      </p>

      <section className="mt-14 max-w-[65ch]">
        <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-[1.25] text-foreground">
          {researchPage.objective.title}
        </h2>
        <Prose paragraphs={researchPage.objective.paragraphs} />
      </section>

      <section className="mt-14 max-w-[65ch]">
        <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-[1.25] text-foreground">
          {researchPage.system.title}
        </h2>
        <div className="mt-8 space-y-8">
          {researchPage.system.items.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 max-w-[65ch]">
        <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-[1.25] text-foreground">
          {researchPage.design.title}
        </h2>
        <Prose paragraphs={researchPage.design.paragraphs} />
      </section>

      <section className="mt-14 max-w-[65ch]">
        <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-[1.25] text-foreground">
          {researchPage.evaluation.title}
        </h2>
        <Prose paragraphs={researchPage.evaluation.paragraphs} />
      </section>
    </Section>
  );
}
