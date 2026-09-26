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
  "agency-web",
  "research",
];

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
        as="h1"
        title={content.sections.projects}
        subtitle={content.meta.pages.projects.description}
      />

      <div className="space-y-16 lg:space-y-24">
        {categoryOrder.map((category) => {
          const items = localizeProjects(
            getProjectsByCategory(category),
            locale,
          ).filter((project) => project.status !== "coming-soon");

          if (items.length === 0) return null;

          return (
            <section key={category} id={category}>
              <SectionTitle
                title={content.projectCategories[category]}
                subtitle={categorySubtitles[category]}
                className="mb-8 sm:mb-10"
              />

              <div
                className={
                  category === "engineering"
                    ? "grid gap-10 md:grid-cols-2 md:gap-8"
                    : "grid gap-10 sm:grid-cols-2 lg:grid-cols-3 md:gap-8"
                }
              >
                {items.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    labels={content.projectCard}
                    featuredLayout={
                      category === "engineering" &&
                      project.id === "babel-scores"
                    }
                    className={
                      category === "engineering" &&
                      project.id === "babel-scores"
                        ? "md:col-span-2"
                        : undefined
                    }
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Section>
  );
}
