import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { parseLocale } from "@/i18n/parseLocale";
import { experience } from "@/data/experience";
import { buildPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { resolveExperience } from "@/lib/content";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const { meta } = getDictionary(locale);

  return buildPageMetadata(locale, {
    title: meta.pages.about.title,
    description: meta.pages.about.description,
    path: "/about",
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const locale = parseLocale((await params).locale);
  const dictionary = getDictionary(locale);
  const { aboutPage } = dictionary;
  const experienceItems = resolveExperience(
    experience,
    dictionary.content.experience,
  );

  return (
    <Container as="section" className="py-16 sm:py-20">
      <SectionTitle title={aboutPage.title} subtitle={aboutPage.intro} />

      <div className="grid gap-10 lg:grid-cols-2">
        <article className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground">
            {aboutPage.engineering.title}
          </h2>
          <div className="mt-4 space-y-4">
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

        <article className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground">
            {aboutPage.research.title}
          </h2>
          <div className="mt-4 space-y-4">
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

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">
          {aboutPage.focus.title}
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {aboutPage.focus.items.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <SectionTitle title={dictionary.sections.experience} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {experienceItems.map((item) => (
            <ExperienceCard
              key={item.id}
              item={item}
              currentLabel={dictionary.experiencePreview.currentLabel}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
