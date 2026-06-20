import { getDictionary } from "@/i18n/getDictionary";
import { parseLocale } from "@/i18n/parseLocale";
import { skillCategories } from "@/data/skills";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ResearchPreview } from "@/components/sections/ResearchPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { resolveSkillCategories } from "@/lib/content";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const locale = parseLocale((await params).locale);
  const dictionary = getDictionary(locale);

  const researchTopics = dictionary.researchPage.topics.items.map(
    (item) => item.title,
  );

  const skills = resolveSkillCategories(
    skillCategories,
    dictionary.content.skills,
  );

  return (
    <>
      <Hero
        locale={locale}
        content={dictionary.hero}
        unavailableLabel={dictionary.projectCard.unavailable}
      />
      <AboutPreview
        locale={locale}
        content={dictionary.about}
        sectionLabel={dictionary.sections.about}
        viewAllLabel={dictionary.sections.viewAll}
      />
      <SkillsSection
        categories={skills}
        sectionLabel={dictionary.sections.skills}
      />
      <ExperiencePreview locale={locale} dictionary={dictionary} />
      <ProjectsPreview locale={locale} dictionary={dictionary} />
      <ResearchPreview
        locale={locale}
        sectionLabel={dictionary.sections.research}
        viewAllLabel={dictionary.sections.viewAll}
        title={dictionary.researchPage.subtitle}
        tagline={dictionary.researchPage.previewTagline}
        overview={dictionary.researchPage.overview.paragraphs[0]}
        topics={researchTopics}
      />
      <ContactCTA locale={locale} content={dictionary.contactCta} />
    </>
  );
}
