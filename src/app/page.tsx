import { siteContent } from "@/content";
import { experience } from "@/data/experience";
import {
  getFeaturedProjects,
  getProjectsByCategory,
} from "@/data/projects";
import {
  getSkillCategoriesByIds,
  skillCategories,
} from "@/data/skills";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CategoryProjectsSection } from "@/components/sections/CategoryProjectsSection";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { ResearchPreview } from "@/components/sections/ResearchPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  const researchTopics = siteContent.researchPage.topics.items.map(
    (item) => item.title,
  );

  const engineeringProjects = getFeaturedProjects("engineering", 2);
  const researchProjects = getProjectsByCategory("research").slice(0, 1);
  const agencyProjects = getFeaturedProjects("agency-web", 3);
  const homeSkills = getSkillCategoriesByIds(siteContent.homeSkillCategoryIds);
  const experiencePreview = experience.slice(0, 4);

  return (
    <>
      <Hero content={siteContent.hero} />
      <AboutPreview
        content={siteContent.about}
        sectionLabel={siteContent.sections.about}
        viewAllLabel={siteContent.sections.viewAll}
      />
      <CategoryProjectsSection
        title={siteContent.sections.engineeringProjects}
        projects={engineeringProjects}
        viewAllHref="/projects"
        viewAllLabel={siteContent.sections.viewAll}
        projectCard={siteContent.projectCard}
        projectStatus={siteContent.projectStatus}
      />
      <ResearchPreview
        sectionLabel={siteContent.sections.research}
        viewAllLabel={siteContent.sections.viewAll}
        title={siteContent.researchPage.subtitle}
        tagline={siteContent.researchPage.previewTagline}
        overview={siteContent.researchPage.overview.paragraphs[0]}
        topics={researchTopics}
      />
      <CategoryProjectsSection
        title={siteContent.sections.researchProjects}
        projects={researchProjects}
        viewAllHref="/projects"
        viewAllLabel={siteContent.sections.viewAll}
        projectCard={siteContent.projectCard}
        projectStatus={siteContent.projectStatus}
        variant="muted"
      />
      <SkillsSection
        categories={homeSkills.length ? homeSkills : skillCategories}
        sectionLabel={siteContent.sections.skills}
      />
      <CategoryProjectsSection
        title={siteContent.sections.agencyWebProjects}
        subtitle={siteContent.agencyWebProjectsIntro}
        projects={agencyProjects}
        viewAllHref="/projects"
        viewAllLabel={siteContent.sections.viewAll}
        projectCard={siteContent.projectCard}
        projectStatus={siteContent.projectStatus}
        variant="muted"
      />
      <ExperiencePreview
        items={experiencePreview}
        sectionLabel={siteContent.sections.experience}
        viewAllLabel={siteContent.sections.viewAll}
        currentLabel={siteContent.experiencePreview.currentLabel}
      />
      <ContactCTA content={siteContent.contactCta} />
    </>
  );
}
