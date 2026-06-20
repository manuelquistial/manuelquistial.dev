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

          return (
            <section key={category}>
              <SectionTitle
                title={content.projectCategories[category]}
                subtitle={categorySubtitles[category]}
                className="mb-8 sm:mb-10"
              />
              <div className="grid gap-5 md:grid-cols-2">
                {items.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    labels={content.projectCard}
                    statusLabels={content.projectStatus}
                    detailed={Boolean(
                      project.featured &&
                        project.category === "engineering" &&
                        project.longDescription,
                    )}
                    className={
                      project.featured && project.category === "engineering"
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
