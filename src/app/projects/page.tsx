import type { Metadata } from "next";
import { siteContent } from "@/content";
import {
  getProjectsByCategory,
  type ProjectCategory,
} from "@/data/projects";
import { buildPageMetadata } from "@/lib/metadata";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata: Metadata = buildPageMetadata({
  title: siteContent.meta.pages.projects.title,
  description: siteContent.meta.pages.projects.description,
  path: "/projects",
});

const categoryOrder: ProjectCategory[] = [
  "engineering",
  "research",
  "agency-web",
];

const categorySubtitles: Partial<Record<ProjectCategory, string>> = {
  "agency-web": siteContent.agencyWebProjectsIntro,
};

export default function ProjectsPage() {
  return (
    <Section>
      <SectionTitle
        title={siteContent.sections.projects}
        subtitle={siteContent.meta.pages.projects.description}
      />

      <div className="space-y-16">
        {categoryOrder.map((category) => {
          const items = getProjectsByCategory(category);
          if (items.length === 0) return null;

          return (
            <section key={category}>
              <SectionTitle
                title={siteContent.projectCategories[category]}
                subtitle={categorySubtitles[category]}
                className="mb-8 sm:mb-10"
              />
              <div className="grid gap-5 md:grid-cols-2">
                {items.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    labels={siteContent.projectCard}
                    statusLabels={siteContent.projectStatus}
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
