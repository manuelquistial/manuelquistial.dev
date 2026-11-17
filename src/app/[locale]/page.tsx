import { getSiteContent } from "@/content/getSiteContent";
import { getLearnLessonsForLocale } from "@/content/learn/catalog";
import { getFeaturedExperience } from "@/data/experience";
import { getProjectById } from "@/data/projects";
import { parseLocale } from "@/i18n/parseLocale";
import {
  localizeExperienceList,
  localizeProject,
} from "@/lib/localize";
import { localizedPath } from "@/lib/localizedPath";
import { Container } from "@/components/layout/Container";
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
  const researchProject = getProjectById("eeg-motor-imagery-pipeline");

  const withHomeCopy = (project: ReturnType<typeof localizeProject>) =>
    project.homeDescription
      ? { ...project, description: project.homeDescription }
      : project;

  const selectedProjects = [babel, sita, siar]
    .filter((project): project is NonNullable<typeof project> => Boolean(project))
    .map((project) => withHomeCopy(localizeProject(project, locale)));

  const experiencePreview = localizeExperienceList(
    getFeaturedExperience(),
    locale,
  );

  const localizedResearch = researchProject
    ? localizeProject(researchProject, locale)
    : null;

  const publishedLessons = getLearnLessonsForLocale(locale);

  const aboutIntro =
    content.about.previewParagraphs[0] ??
    content.sections.aboutPreviewIntro;

  return (
    <>
      <Hero locale={locale} content={content.hero} />
      <SelectedProjects
        title={content.sections.projects}
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
        previewTagline={content.researchPage.previewTagline}
        tags={localizedResearch?.tags}
      />
      <div className="bg-background">
        <Container className="grid gap-6 py-[var(--section-y)] md:grid-cols-2 md:gap-7">
          {publishedLessons.length > 0 ? (
            <AprendamosPreview
              locale={locale}
              sectionLabel={content.nav.learn}
              intro={content.sections.aprendamosIntro}
              exploreLabel={content.sections.exploreTopic}
              lessons={publishedLessons.map((lesson) => ({
                slug: lesson.slug,
                title: lesson.title,
                imageLabel: lesson.scenes[0]?.textAlternative ?? lesson.title,
              }))}
            />
          ) : null}
          <AboutPreview
            locale={locale}
            sectionLabel={content.sections.about}
            intro={aboutIntro}
            viewAllLabel={content.sections.learnMore}
          />
        </Container>
      </div>
      <ExperiencePreview
        locale={locale}
        items={experiencePreview}
        sectionLabel={content.sections.experience}
        viewAllLabel={content.sections.viewAllExperience}
      />
    </>
  );
}
