import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ViewAllLink } from "@/components/ui/ViewAllLink";
import { pageSections } from "@/lib/pageSections";

interface SelectedProjectsProps {
  title: string;
  projects: readonly Project[];
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
  return (
    <Section id={pageSections.selectedProjects}>
      <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
        <SectionTitle title={title} spaced={false} />
        <ViewAllLink href={viewAllHref} className="shrink-0">
          {viewAllLabel}
        </ViewAllLink>
      </div>

      <div className="grid auto-rows-fr grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            labels={projectCard}
            designCredit={project.id === "sal-picciotto-website"}
            uniform
          />
        ))}
      </div>
    </Section>
  );
}
