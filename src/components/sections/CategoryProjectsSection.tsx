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
  projectStatus: SiteContent["projectStatus"];
  variant?: "default" | "muted";
}

export function CategoryProjectsSection({
  title,
  subtitle,
  projects,
  viewAllHref,
  viewAllLabel,
  projectCard,
  projectStatus,
  variant = "default",
}: CategoryProjectsSectionProps) {
  if (projects.length === 0) return null;

  return (
    <Section variant={variant}>
      <SectionTitle title={title} subtitle={subtitle} />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            labels={projectCard}
            statusLabels={projectStatus}
          />
        ))}
      </div>

      {viewAllHref && viewAllLabel ? (
        <div className="mt-6">
          <ViewAllLink href={viewAllHref}>{viewAllLabel}</ViewAllLink>
        </div>
      ) : null}
    </Section>
  );
}
