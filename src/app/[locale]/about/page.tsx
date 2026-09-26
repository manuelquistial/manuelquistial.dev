import type { Metadata } from "next";
import { getSiteContent } from "@/content/getSiteContent";
import {
  getProfessionalExperience,
  getTeachingExperience,
} from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { getCvDownloadName, getCvUrl } from "@/data/profile";
import { parseLocale } from "@/i18n/parseLocale";
import {
  localizeExperienceList,
  localizeSkillCategories,
} from "@/lib/localize";
import { localizedPath } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { buildPageMetadata } from "@/lib/metadata";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { Button } from "@/components/ui/Button";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const content = getSiteContent(locale);

  return buildPageMetadata({
    title: content.meta.pages.about.title,
    description: content.meta.pages.about.description,
    path: "/about",
    locale,
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const locale = parseLocale((await params).locale);
  const content = getSiteContent(locale);
  const { aboutPage } = content;
  const professional = localizeExperienceList(
    getProfessionalExperience(),
    locale,
  );
  const teaching = localizeExperienceList(getTeachingExperience(), locale);
  const skills = localizeSkillCategories(skillCategories, locale);
  const researchLinkLabel =
    locale === "es" ? "Ver investigación" : "View research";

  return (
    <Section>
      <div id={pageSections.about}>
        <SectionTitle
          as="h1"
          title={aboutPage.title}
          subtitle={aboutPage.intro}
        />
      </div>

      <div className="mt-4">
        <Button href={getCvUrl(locale)} download={getCvDownloadName(locale)}>
          {content.contactPage.cv}
        </Button>
      </div>

      <section id={pageSections.experience} className="mt-16">
        <SectionTitle title={content.sections.experience} />
        <ul className="divide-y divide-border border-y border-border">
          {professional.map((item) => (
            <li key={item.id} className="py-8">
              <ExperienceCard item={item} />
            </li>
          ))}
        </ul>
      </section>

      {teaching.length > 0 ? (
        <section className="mt-16">
          <SectionTitle title={content.sections.teaching} />
          <ul className="divide-y divide-border border-y border-border">
            {teaching.map((item) => (
              <li key={item.id} className="py-8">
                <ExperienceCard item={item} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-16">
        <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold text-foreground">
          {aboutPage.education.title}
        </h2>
        <div className="mt-6 space-y-8">
          {aboutPage.education.items.map((item) => (
            <article key={item.degree}>
              <h3 className="text-lg font-semibold text-foreground">
                {item.degree}
              </h3>
              <p className="mt-2 text-base text-muted">{item.institution}</p>
              <p className="mt-1 text-sm text-muted">{item.period}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold text-foreground">
          {content.sections.skills}
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <div key={category.id}>
              <h3 className="text-base font-semibold text-foreground">
                {category.name}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-[65ch]">
        <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold text-foreground">
          {aboutPage.researchOutputs.title}
        </h2>
        <ul className="mt-6 space-y-6">
          {aboutPage.researchOutputs.items.map((item) => (
            <li key={item.title}>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {item.description}
              </p>
              {item.href ? (
                <a
                  href={localizedPath(locale, item.href)}
                  className="mt-4 inline-block text-base font-semibold text-accent transition-colors duration-150 hover:text-accent-hover"
                >
                  {researchLinkLabel}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold text-foreground">
          {aboutPage.languages.title}
        </h2>
        <ul className="mt-6 space-y-2">
          {aboutPage.languages.items.map((item) => (
            <li key={item.language} className="text-base text-muted">
              <span className="font-medium text-foreground">
                {item.language}
              </span>
              {" · "}
              {item.level}
            </li>
          ))}
        </ul>
      </section>
    </Section>
  );
}
