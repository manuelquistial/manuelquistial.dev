import type { Metadata } from "next";
import { siteContent } from "@/content";
import { buildPageMetadata } from "@/lib/metadata";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = buildPageMetadata({
  title: siteContent.meta.pages.research.title,
  description: siteContent.meta.pages.research.description,
  path: "/research",
});

export default function ResearchPage() {
  const { researchPage } = siteContent;

  return (
    <Section>
      <SectionTitle
        title={researchPage.title}
        subtitle={researchPage.subtitle}
      />

      <section className="card-surface mb-10 p-6 sm:p-8">
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
