import { getSiteContent } from "@/content/getSiteContent";
import { getFeaturedExperience } from "@/data/experience";
import {
  getFeaturedProjects,
  getProjectsByCategory,
} from "@/data/projects";
import {
  getSkillCategoriesByIds,
  skillCategories,
} from "@/data/skills";
import { parseLocale } from "@/i18n/parseLocale";
import {
  localizeExperienceList,
  localizeProjects,
  localizeSkillCategories,
} from "@/lib/localize";
import { localizedSectionPath } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CategoryProjectsSection } from "@/components/sections/CategoryProjectsSection";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { ResearchPreview } from "@/components/sections/ResearchPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const locale = parseLocale((await params).locale);
  const content = getSiteContent(locale);

  const researchTopics = content.researchPage.topics.items.map(
    (item) => item.title,
  );

  const engineeringProjects = localizeProjects(
    getFeaturedProjects("engineering", 2),
    locale,
  );
  const researchProjects = localizeProjects(
    getProjectsByCategory("research").slice(0, 1),
    locale,
  );
  const agencyProjects = localizeProjects(
    getFeaturedProjects("agency-web", 3),
    locale,
  );
  const homeSkills = localizeSkillCategories(
    getSkillCategoriesByIds(content.homeSkillCategoryIds),
    locale,
  );
  const experiencePreview = localizeExperienceList(getFeaturedExperience(), locale);

  return (
    <>
      <Hero locale={locale} content={content.hero} />
      <AboutPreview
        locale={locale}
        content={content.about}
        sectionLabel={content.sections.about}
        viewAllLabel={content.sections.viewAll}
      />
      <CategoryProjectsSection
        title={content.sections.engineeringProjects}
        projects={engineeringProjects}
        viewAllHref={localizedSectionPath(
          locale,
          "/projects",
          pageSections.engineering,
        )}
        viewAllLabel={content.sections.viewAll}
        projectCard={content.projectCard}
        projectStatus={content.projectStatus}
      />
      <ResearchPreview
        locale={locale}
        sectionLabel={content.sections.research}
        viewAllLabel={content.sections.viewAll}
        title={content.researchPage.subtitle}
        tagline={content.researchPage.previewTagline}
        overview={content.researchPage.overview.paragraphs[0]}
        topics={researchTopics}
      />
      <CategoryProjectsSection
        title={content.sections.researchProjects}
        projects={researchProjects}
        viewAllHref={localizedSectionPath(
          locale,
          "/projects",
          pageSections.research,
        )}
        viewAllLabel={content.sections.viewAll}
        projectCard={content.projectCard}
        projectStatus={content.projectStatus}
        variant="muted"
      />
      <SkillsSection
        categories={homeSkills.length ? homeSkills : localizeSkillCategories(skillCategories, locale)}
        sectionLabel={content.sections.skills}
      />
      <CategoryProjectsSection
        title={content.sections.agencyWebProjects}
        subtitle={content.agencyWebProjectsIntro}
        projects={agencyProjects}
        viewAllHref={localizedSectionPath(
          locale,
          "/projects",
          pageSections.agencyWeb,
        )}
        viewAllLabel={content.sections.viewAll}
        projectCard={content.projectCard}
        projectStatus={content.projectStatus}
        variant="muted"
      />
      <ExperiencePreview
        locale={locale}
        items={experiencePreview}
        sectionLabel={content.sections.experience}
        viewAllLabel={content.sections.viewAll}
        currentLabel={content.experiencePreview.currentLabel}
      />
      <ContactCTA locale={locale} content={content.contactCta} />
    </>
  );
}
