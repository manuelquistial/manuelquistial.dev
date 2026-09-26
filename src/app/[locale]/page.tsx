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
import { ContactCTA } from "@/components/sections/ContactCTA";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const locale = parseLocale((await params).locale);
  const content = getSiteContent(locale);

  const babel = getProjectById("babel-scores");
  const udea = getProjectById("udea-fcf-digital-ecosystem");
  const sal = getProjectById("sal-picciotto-website");

  const withHomeCopy = (project: ReturnType<typeof localizeProject>) =>
    project.homeDescription
      ? { ...project, description: project.homeDescription }
      : project;

  const featured = babel
    ? withHomeCopy(localizeProject(babel, locale))
    : undefined;
  const secondary = [udea, sal]
    .filter((project): project is NonNullable<typeof project> => Boolean(project))
    .map((project) => withHomeCopy(localizeProject(project, locale)));

  const experiencePreview = localizeExperienceList(
    getFeaturedExperience(4),
    locale,
  );

  return (
    <>
      <Hero locale={locale} content={content.hero} />
      <SelectedProjects
        title={content.sections.projects}
        projects={{ featured, secondary }}
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
      <ContactCTA locale={locale} content={content.contactCta} />
    </>
  );
}
