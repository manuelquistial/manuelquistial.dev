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
      <div className="gp-module grid items-center gap-8 overflow-hidden bg-brand p-6 text-footer-text md:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
        <header className="lg:col-span-6">
          <p className="text-sm text-footer-muted">{researchPage.affiliation}</p>
          <h1 className="mt-4 font-display text-[length:var(--heading-1)] text-white">
            {researchPage.title}
          </h1>
          <p className="mt-6 text-[length:var(--heading-3)] font-semibold leading-snug text-footer-text/95">
            {researchPage.projectTitle}
          </p>
        </header>
        <div className="relative hidden min-h-[10rem] lg:col-span-6 lg:block" aria-hidden>
          <div className="absolute -right-4 top-0 h-28 w-28 rounded-full bg-accent-yellow/80" />
          <div className="absolute bottom-4 right-10 h-24 w-24 rounded-full bg-accent-coral/80" />
          <div className="absolute left-10 top-12 h-20 w-20 rounded-full bg-accent-violet/50" />
        </div>
      </div>

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
