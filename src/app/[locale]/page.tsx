import { getSiteContent } from "@/content/getSiteContent";
import { learnLessons } from "@/content/learn/catalog";
import { learnUi } from "@/content/learn/es/ui";
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
import { ResearchPreview } from "@/components/sections/ResearchPreview";
import { AprendamosPreview } from "@/components/sections/AprendamosPreview";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { AboutPreview } from "@/components/sections/AboutPreview";

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
  const researchProject = getProjectById("eeg-motor-imagery-pipeline");

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

  const localizedResearch = researchProject
    ? localizeProject(researchProject, locale)
    : null;

  const publishedLessons = learnLessons.filter(
    (lesson) => lesson.locales.length > 0,
  );

  return (
    <>
      <Hero
        locale={locale}
        content={content.hero}
        imageSrc={babel?.image}
        imageAlt={babel?.imageAlt}
      />
      <SelectedProjects
        title={content.sections.selectedWork}
        description={content.sections.selectedWorkIntro}
        projects={selectedProjects}
        projectCard={content.projectCard}
        viewAllHref={localizedPath(locale, "/projects")}
        viewAllLabel={content.sections.viewAll}
      />
      <ResearchPreview
        locale={locale}
        sectionLabel={content.sections.research}
        viewAllLabel={content.sections.viewResearch}
        projectTitle={content.researchPage.projectTitle}
        affiliation={content.researchPage.affiliation}
        summary={content.researchPage.summary}
        tags={localizedResearch?.tags}
        systemItems={content.researchPage.system.items}
      />
      {publishedLessons.length > 0 ? (
        <AprendamosPreview
          locale={locale}
          sectionLabel={content.nav.learn}
          intro={content.sections.aprendamosIntro}
          exploreLabel={learnUi.explore}
          lessons={publishedLessons.map((lesson) => ({
            slug: lesson.slug,
            title: lesson.title,
            imageLabel: lesson.scenes[0]?.textAlternative ?? lesson.title,
          }))}
        />
      ) : null}
      <ExperiencePreview
        locale={locale}
        items={experiencePreview}
        sectionLabel={content.sections.experience}
        viewAllLabel={content.sections.viewAllExperience}
      />
      <AboutPreview
        locale={locale}
        intro={content.aboutPage.intro}
        education={content.aboutPage.education}
        sectionLabel={content.sections.about}
        viewAllLabel={content.aboutPage.title}
        roleLabel={content.hero.overlinePrimary}
        researcherLabel={content.hero.overlineSecondary}
      />
    </>
  );
}
