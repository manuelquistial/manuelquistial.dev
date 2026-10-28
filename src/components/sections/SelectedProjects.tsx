import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ViewAllLink } from "@/components/ui/ViewAllLink";
import { pageSections } from "@/lib/pageSections";

interface SelectedProjectsProps {
  title: string;
  projects: readonly Project[];
  projectCard: SiteContent["projectCard"];
  viewAllHref: string;
  viewAllLabel: string;
  description?: string;
}

function padIndex(index: number, total: number): string {
  const width = Math.max(2, String(total).length);
  return `${String(index).padStart(width, "0")} / ${String(total).padStart(width, "0")}`;
}

export function SelectedProjects({
  title,
  projects,
  projectCard,
  viewAllHref,
  viewAllLabel,
  description,
}: SelectedProjectsProps) {
  const [primary, secondary, ...rest] = projects;
  const total = projects.length;

  return (
    <Section id={pageSections.selectedProjects} variant="bordered">
      <SectionHeader number="01" label={title} description={description} />

      {primary ? (
        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <ProjectCard
              project={primary}
              labels={projectCard}
              layout="featured"
              indexLabel={padIndex(1, total)}
              showTags
              meta={primary.id === "sal-picciotto-website" ? "design" : "hidden"}
              withCategory
              priority
            />
          </div>
          {secondary ? (
            <div className="lg:col-span-5 lg:pt-16">
              <ProjectCard
                project={secondary}
                labels={projectCard}
                layout="compact"
                indexLabel={padIndex(2, total)}
                showTags
                meta={
                  secondary.id === "sal-picciotto-website" ? "design" : "hidden"
                }
                withCategory
                priority
              />
            </div>
          ) : null}
        </div>
      ) : null}

      {rest.length > 0 ? (
        <div className="mt-4 md:mt-8">
          {rest.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              labels={projectCard}
              layout="list"
              indexLabel={padIndex(index + 3, total)}
              meta={
                project.id === "sal-picciotto-website" ? "design" : "reserved"
              }
              withCategory
            />
          ))}
        </div>
      ) : null}

      <div className="mt-10 border-t border-border pt-6">
        <ViewAllLink href={viewAllHref}>{viewAllLabel}</ViewAllLink>
      </div>
    </Section>
  );
}
