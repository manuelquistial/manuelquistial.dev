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
    fullTitle: true,
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

  return (
    <Section>
      <div id={pageSections.about}>
        <SectionTitle
          as="h1"
          title={aboutPage.title}
          subtitle={
            typeof aboutPage.intro === "string"
              ? aboutPage.intro
              : aboutPage.intro.join(" ")
          }
        />
      </div>

      <div className="mt-4">
        <Button href={getCvUrl(locale)} download={getCvDownloadName(locale)} variant="outline">
          {content.contactPage.cv}
        </Button>
      </div>

      <section id={pageSections.experience} className="mt-16 border-t border-border pt-10 md:mt-24">
        <SectionTitle title={content.sections.experience} />
        <ul className="divide-y divide-border border-y border-border">
          {professional.map((item) => (
            <li key={item.id} className="py-8 md:py-10">
              <ExperienceCard item={item} />
            </li>
          ))}
        </ul>
      </section>

      {teaching.length > 0 ? (
        <section className="mt-16 border-t border-border pt-10 md:mt-24">
          <SectionTitle title={content.sections.teaching} />
          <ul className="divide-y divide-border border-y border-border">
            {teaching.map((item) => (
              <li key={item.id} className="py-8 md:py-10">
                <ExperienceCard item={item} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-16 border-t border-border pt-10 md:mt-24">
        <h2 className="text-[length:var(--heading-2)] font-semibold tracking-[-0.03em] text-foreground">
          {aboutPage.education.title}
        </h2>
        <div className="mt-8 space-y-8">
          {aboutPage.education.items.map((item) => (
            <article key={item.degree} className="border-t border-border pt-6 first:border-t-0 first:pt-0">
              <h3 className="text-[length:var(--heading-3)] font-semibold text-foreground">
                {item.degree}
              </h3>
              <p className="mt-2 text-base text-muted">{item.institution}</p>
              <p className="mt-1 text-overline text-muted">{item.period}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-10 md:mt-24">
        <h2 className="text-[length:var(--heading-2)] font-semibold tracking-[-0.03em] text-foreground">
          {content.sections.skills}
        </h2>
        <div className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <div key={category.id}>
              <h3 className="text-overline text-foreground">
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

      <section className="mt-16 border-t border-border pt-10 md:mt-24">
        <h2 className="text-[length:var(--heading-2)] font-semibold tracking-[-0.03em] text-foreground">
          {aboutPage.researchOutputs.title}
        </h2>
        <p className="mt-4">
          <a
            href={localizedPath(locale, "/research")}
            className="text-base font-semibold text-foreground transition-colors duration-200 hover:text-accent"
          >
            {content.sections.viewResearch}
          </a>
        </p>
      </section>

      <section className="mt-16 border-t border-border pt-10 md:mt-24">
        <h2 className="text-[length:var(--heading-2)] font-semibold tracking-[-0.03em] text-foreground">
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
