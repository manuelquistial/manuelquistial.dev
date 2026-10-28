import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TagChip } from "@/components/ui/TagChip";
import { ViewAllLink } from "@/components/ui/ViewAllLink";
import { pageSections } from "@/lib/pageSections";
import { cn } from "@/lib/utils";

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

function categoryLabel(
  project: Project,
  labels: SiteContent["projectCard"],
): string {
  if (project.category === "agency-web") return labels.webSelection;
  if (project.category === "research") return labels.researchLabel;
  return labels.softwareLabel;
}

function ProjectMetaLine({
  project,
  labels,
}: {
  project: Project;
  labels: SiteContent["projectCard"];
}) {
  if (project.id === "sal-picciotto-website" && project.agency) {
    return (
      <p className="mt-2 text-sm text-muted">
        {labels.designBy} {project.agency}
      </p>
    );
  }
  if (project.category !== "agency-web" && project.clientType) {
    return <p className="mt-2 text-sm text-muted">{project.clientType}</p>;
  }
  return null;
}

export function SelectedProjects({
  title,
  projects,
  projectCard,
  viewAllHref,
  viewAllLabel,
  description,
}: SelectedProjectsProps) {
  const total = projects.length;

  return (
    <Section id={pageSections.selectedProjects} variant="bordered">
      <SectionHeader number="01" label={title} description={description} />

      <div className="mt-12 space-y-0 md:mt-16">
        {projects.map((project, index) => {
          const imageLeft = index % 2 === 0;
          const detailHref = project.caseStudyUrl;
          const indexLabel = padIndex(index + 1, total);
          const titleContent = detailHref ? (
            <Link
              href={detailHref}
              className="transition-colors duration-200 hover:text-accent"
            >
              {project.title}
            </Link>
          ) : (
            project.title
          );
          const action = detailHref ? (
            <Link
              href={detailHref}
              className="text-[length:var(--small)] font-semibold text-foreground transition-colors duration-200 hover:text-accent"
            >
              {projectCard.viewProject}
            </Link>
          ) : project.liveUrl && project.status !== "coming-soon" ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[length:var(--small)] font-semibold text-foreground transition-colors duration-200 hover:text-accent"
            >
              {projectCard.viewSite}
            </a>
          ) : null;

          return (
            <article
              key={project.id}
              className="grid gap-6 border-t border-border py-10 md:gap-8 md:py-14 lg:grid-cols-12 lg:items-center lg:gap-12"
            >
              {project.image ? (
                <div
                  className={cn(
                    "relative aspect-[4/3] w-full overflow-hidden bg-surface lg:aspect-[5/4]",
                    imageLeft ? "lg:col-span-7" : "lg:order-2 lg:col-span-7",
                  )}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? ""}
                    fill
                    priority={index < 2}
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="editorial-image object-cover object-top"
                  />
                </div>
              ) : null}

              <div
                className={cn(
                  "min-w-0",
                  project.image
                    ? imageLeft
                      ? "lg:col-span-5"
                      : "lg:order-1 lg:col-span-5"
                    : "lg:col-span-8",
                )}
              >
                <p className="text-overline text-muted">{indexLabel}</p>
                <p className="mt-3 text-overline text-muted">
                  {categoryLabel(project, projectCard)}
                </p>
                <h3 className="mt-3 text-balance text-[length:var(--heading-2)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
                  {titleContent}
                </h3>
                <ProjectMetaLine project={project} labels={projectCard} />
                {project.description ? (
                  <p className="mt-4 max-w-[42ch] text-[length:var(--body)] leading-[1.45] text-muted">
                    {project.description}
                  </p>
                ) : null}
                {project.tags.length > 0 ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <TagChip>{tag}</TagChip>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {action ? <p className="mt-6">{action}</p> : null}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-4 border-t border-border pt-6 md:mt-6">
        <ViewAllLink href={viewAllHref}>{viewAllLabel}</ViewAllLink>
      </div>
    </Section>
  );
}
