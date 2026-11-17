import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ViewAllLink } from "@/components/ui/ViewAllLink";

interface CategoryProjectsSectionProps {
  title: string;
  subtitle?: string;
  projects: readonly Project[];
  viewAllHref?: string;
  viewAllLabel?: string;
  projectCard: SiteContent["projectCard"];
}

export function CategoryProjectsSection({
  title,
  subtitle,
  projects,
  viewAllHref,
  viewAllLabel,
  projectCard,
}: CategoryProjectsSectionProps) {
  if (projects.length === 0) return null;

  return (
    <Section>
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="grid items-stretch gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="gp-module flex h-full flex-col border border-border bg-surface p-4 md:p-5"
          >
            <ProjectCard
              project={project}
              labels={projectCard}
              meta="reserved"
              showTags
              priority={index < 2}
            />
          </div>
        ))}
      </div>
      {viewAllHref && viewAllLabel ? (
        <div className="mt-8">
          <ViewAllLink href={viewAllHref}>{viewAllLabel}</ViewAllLink>
        </div>
      ) : null}
    </Section>
  );
}
