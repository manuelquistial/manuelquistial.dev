import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ViewAllLink } from "@/components/ui/ViewAllLink";
import { pageSections } from "@/lib/pageSections";

interface SelectedProjectsProps {
  title: string;
  projects: {
    featured: Project | undefined;
    secondary: readonly Project[];
  };
  projectCard: SiteContent["projectCard"];
  viewAllHref: string;
  viewAllLabel: string;
}

export function SelectedProjects({
  title,
  projects,
  projectCard,
  viewAllHref,
  viewAllLabel,
}: SelectedProjectsProps) {
  const { featured, secondary } = projects;

  return (
    <Section id={pageSections.selectedProjects}>
      <SectionTitle title={title} />

      {featured ? (
        <div className="mt-2">
          <ProjectCard
            project={featured}
            labels={projectCard}
            featuredLayout
          />
        </div>
      ) : null}

      {secondary.length > 0 ? (
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
          {secondary.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              labels={projectCard}
            />
          ))}
        </div>
      ) : null}

      <div className="mt-10">
        <ViewAllLink href={viewAllHref}>{viewAllLabel}</ViewAllLink>
      </div>
    </Section>
  );
}
