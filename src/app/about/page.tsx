import type { Metadata } from "next";
import { siteContent } from "@/content";
import { experience } from "@/data/experience";
import { buildPageMetadata } from "@/lib/metadata";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExperienceCard } from "@/components/ui/ExperienceCard";

export const metadata: Metadata = buildPageMetadata({
  title: siteContent.meta.pages.about.title,
  description: siteContent.meta.pages.about.description,
  path: "/about",
});

export default function AboutPage() {
  const { aboutPage } = siteContent;

  return (
    <Section>
      <SectionTitle title={aboutPage.title} subtitle={aboutPage.intro} />

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <article className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground">
            {aboutPage.engineering.title}
          </h2>
          <div className="mt-5 space-y-4">
            {aboutPage.engineering.paragraphs.map((paragraph, index) => (
              <p
                key={`engineering-p-${index}`}
                className="leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <article className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground">
            {aboutPage.research.title}
          </h2>
          <div className="mt-5 space-y-4">
            {aboutPage.research.paragraphs.map((paragraph, index) => (
              <p
                key={`research-p-${index}`}
                className="leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-foreground">
          {aboutPage.education.title}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {aboutPage.education.items.map((item) => (
            <article key={item.program} className="card-surface p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">
                {item.program}
              </h3>
              <p className="mt-2 text-sm font-medium text-accent">
                {item.institution}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.focus}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-foreground">
          {aboutPage.researchOutputs.title}
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {aboutPage.researchOutputs.items.map((item) => (
            <li key={item.title} className="card-surface p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-4 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  View research →
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-foreground">
          {aboutPage.focus.title}
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {aboutPage.focus.items.map((item) => (
            <li
              key={item}
              className="card-surface border-l-2 border-l-accent/40 px-4 py-3.5 text-sm text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <SectionTitle title={siteContent.sections.experience} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {experience.map((item) => (
            <ExperienceCard
              key={item.id}
              item={item}
              currentLabel={siteContent.experiencePreview.currentLabel}
            />
          ))}
        </div>
      </section>
    </Section>
  );
}
