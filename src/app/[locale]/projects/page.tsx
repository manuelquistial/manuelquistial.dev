import type { Metadata } from "next";
import { getSiteContent } from "@/content/getSiteContent";
import {
  getProjectsByCategory,
  type ProjectCategory,
} from "@/data/projects";
import { parseLocale } from "@/i18n/parseLocale";
import { localizeProjects } from "@/lib/localize";
import { buildPageMetadata } from "@/lib/metadata";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

const categoryOrder: ProjectCategory[] = [
  "engineering",
  "research",
  "agency-web",
];

const featuredByCategory: Partial<Record<ProjectCategory, readonly string[]>> = {
  engineering: ["babel-scores", "udea-fcf-digital-ecosystem"],
  research: ["eeg-motor-imagery-pipeline"],
};

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const content = getSiteContent(locale);

  return buildPageMetadata({
    title: content.meta.pages.projects.title,
    description: content.meta.pages.projects.description,
    path: "/projects",
    locale,
  });
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const locale = parseLocale((await params).locale);
  const content = getSiteContent(locale);

  const categorySubtitles: Partial<Record<ProjectCategory, string>> = {
    "agency-web": content.agencyWebProjectsIntro,
  };

  return (
    <Section>
      <SectionTitle
        title={content.sections.projects}
        subtitle={content.meta.pages.projects.description}
      />

      <div className="space-y-16">
        {categoryOrder.map((category) => {
          const items = localizeProjects(getProjectsByCategory(category), locale);
          if (items.length === 0) return null;

          const featuredIds = featuredByCategory[category] ?? [];
          const featuredSet = new Set(featuredIds);
          const stars = featuredIds
            .map((id) => items.find((project) => project.id === id))
            .filter((project): project is NonNullable<typeof project> =>
              Boolean(project),
            );
          const rest = items.filter((project) => !featuredSet.has(project.id));
          const isAgency = category === "agency-web";

          return (
            <section key={category} id={category}>
              <SectionTitle
                title={content.projectCategories[category]}
                subtitle={categorySubtitles[category]}
                className="mb-8 sm:mb-10"
              />

              {stars.length > 0 ? (
                <div className="space-y-5">
                  {stars.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      labels={content.projectCard}
                      statusLabels={content.projectStatus}
                      featuredLayout
                      detailed={Boolean(project.longDescription)}
                    />
                  ))}
                </div>
              ) : null}

              {rest.length > 0 ? (
                <div
                  className={
                    stars.length > 0
                      ? "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                      : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                  }
                >
                  {rest.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      labels={content.projectCard}
                      statusLabels={content.projectStatus}
                      minimal={isAgency}
                    />
                  ))}
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </Section>
  );
}
