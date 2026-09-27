import { getSiteContent } from "@/content/getSiteContent";
import { getFeaturedExperience } from "@/data/experience";
import { getProjectById } from "@/data/projects";
import { parseLocale } from "@/i18n/parseLocale";
import {
  localizeExperienceList,
  localizeProject,
} from "@/lib/localize";
import { localizedPath } from "@/lib/localizedPath";
import { Hero } from "@/components/sections/Hero";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { ResearchPreview } from "@/components/sections/ResearchPreview";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const locale = parseLocale((await params).locale);
  const content = getSiteContent(locale);

  const babel = getProjectById("babel-scores");
  const sita = getProjectById("sita");
  const siar = getProjectById("siar");
  const finanzas = getProjectById("finanzas");
  const conciliacion = getProjectById("conciliacion");
  const sal = getProjectById("sal-picciotto-website");

  const withHomeCopy = (project: ReturnType<typeof localizeProject>) =>
    project.homeDescription
      ? { ...project, description: project.homeDescription }
      : project;

  const selectedProjects = [babel, sita, siar, finanzas, conciliacion, sal]
    .filter((project): project is NonNullable<typeof project> => Boolean(project))
    .map((project) => withHomeCopy(localizeProject(project, locale)));

  const experiencePreview = localizeExperienceList(
    getFeaturedExperience(),
    locale,
  );

  return (
    <>
      <Hero locale={locale} content={content.hero} />
      <SelectedProjects
        title={content.sections.projects}
        projects={selectedProjects}
        projectCard={content.projectCard}
        viewAllHref={localizedPath(locale, "/projects")}
        viewAllLabel={content.sections.viewAll}
      />
      <ExperiencePreview
        locale={locale}
        items={experiencePreview}
        sectionLabel={content.sections.experience}
        viewAllLabel={content.sections.viewAllExperience}
      />
      <ResearchPreview
        locale={locale}
        sectionLabel={content.sections.research}
        viewAllLabel={content.sections.viewResearch}
        summary={content.researchPage.previewTagline}
      />
    </>
  );
}
