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
  /** Star projects rendered full-width with visual placeholder. */
  featuredIds?: readonly string[];
  /** Compact 3-column grid for secondary / agency work. */
  layout?: "featured" | "minimal";
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
  featuredIds = [],
  layout = "featured",
}: CategoryProjectsSectionProps) {
  if (projects.length === 0) return null;

  const featuredSet = new Set(featuredIds);
  const starProjects =
    layout === "featured"
      ? projects.filter(
          (project) => featuredSet.has(project.id) || project.featured,
        )
      : [];
  const gridProjects =
    layout === "minimal"
      ? projects
      : projects.filter(
          (project) => !featuredSet.has(project.id) && !project.featured,
        );

  // Prefer explicit featuredIds order when provided
  const orderedStars =
    featuredIds.length > 0
      ? featuredIds
          .map((id) => projects.find((project) => project.id === id))
          .filter((project): project is Project => Boolean(project))
      : starProjects;

  return (
    <Section variant={variant}>
      <SectionTitle title={title} subtitle={subtitle} />

      {orderedStars.length > 0 ? (
        <div className="space-y-5">
          {orderedStars.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              labels={projectCard}
              statusLabels={projectStatus}
              featuredLayout
              detailed={Boolean(project.longDescription)}
            />
          ))}
        </div>
      ) : null}

      {gridProjects.length > 0 ? (
        <div
          className={
            layout === "minimal"
              ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              : orderedStars.length > 0
                ? "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {gridProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              labels={projectCard}
              statusLabels={projectStatus}
              minimal={layout === "minimal"}
            />
          ))}
        </div>
      ) : null}

      {viewAllHref && viewAllLabel ? (
        <div className="mt-6">
          <ViewAllLink href={viewAllHref}>{viewAllLabel}</ViewAllLink>
        </div>
      ) : null}
    </Section>
  );
}
