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
import { PageHero } from "@/components/ui/PageHero";
import { ProjectCard } from "@/components/ui/ProjectCard";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

const categoryOrder: ProjectCategory[] = ["engineering", "agency-web"];

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const content = getSiteContent(locale);

  return buildPageMetadata({
    title: content.meta.pages.projects.title,
    description: content.meta.pages.projects.description,
    path: "/projects",
    fullTitle: true,
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
      <PageHero
        tone="coding"
        title={content.sections.projects}
        description={content.sections.selectedWorkIntro}
        illustration="coding"
      />

      <div className="mt-[var(--section-y)] space-y-[var(--section-y)]">
        {categoryOrder.map((category) => {
          const items = localizeProjects(
            getProjectsByCategory(category),
            locale,
          ).filter((project) => project.status !== "coming-soon");

          if (items.length === 0) return null;

          return (
            <section
              key={category}
              id={category}
              className="border-t border-border pt-[var(--section-y)]"
            >
              <SectionTitle
                title={content.projectCategories[category]}
                subtitle={categorySubtitles[category]}
                className="mb-[var(--section-heading-gap)]"
              />

              <div className="grid items-stretch gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
                {items.map((project, index) => (
                  <div
                    key={project.id}
                    className="gp-module flex h-full flex-col border border-border bg-surface p-4 transition-transform duration-200 hover:-translate-y-1 md:p-5"
                  >
                    <ProjectCard
                      project={project}
                      labels={content.projectCard}
                      meta="reserved"
                      showTags
                      priority={index < 2}
                    />
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Section>
  );
}
