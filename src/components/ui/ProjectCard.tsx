import Link from "next/link";
import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  labels: SiteContent["projectCard"];
  featuredLayout?: boolean;
  className?: string;
}

function categoryLabel(
  project: Project,
  labels: SiteContent["projectCard"],
): string {
  if (project.category === "agency-web") return labels.webSelection;
  if (project.category === "research") return labels.researchLabel;
  return labels.softwareLabel;
}

function ProjectMeta({
  project,
  labels,
}: {
  project: Project;
  labels: SiteContent["projectCard"];
}) {
  const isAgencyProject = project.category === "agency-web";

  if (isAgencyProject && project.agency) {
    return (
      <p className="mt-2 text-sm text-muted">
        {labels.deliveredThrough} {project.agency}
      </p>
    );
  }

  if (!isAgencyProject && project.clientType) {
    return <p className="mt-2 text-sm text-muted">{project.clientType}</p>;
  }

  return null;
}

export function ProjectCard({
  project,
  labels,
  featuredLayout = false,
  className,
}: ProjectCardProps) {
  const detailHref = project.caseStudyUrl;
  const titleContent = detailHref ? (
    <Link
      href={detailHref}
      className="transition-colors duration-150 hover:text-accent"
    >
      {project.title}
    </Link>
  ) : (
    project.title
  );

  return (
    <article className={cn("flex h-full min-w-0 flex-col", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-[8px] bg-surface-soft",
          featuredLayout ? "aspect-[16/9]" : "aspect-[16/10]",
        )}
      >
        <div className="flex h-full flex-col justify-between p-6 sm:p-8">
          <p className="text-sm font-medium text-muted">
            {categoryLabel(project, labels)}
          </p>
          <p
            className={cn(
              "font-semibold leading-[1.15] tracking-tight text-foreground",
              featuredLayout
                ? "max-w-[16ch] text-[clamp(2rem,4vw,3rem)]"
                : "max-w-[14ch] text-[clamp(1.5rem,3vw,2rem)]",
            )}
            aria-hidden
          >
            {project.title}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <h3
          className={cn(
            "font-semibold leading-snug text-foreground",
            featuredLayout ? "text-[clamp(1.5rem,2.5vw,1.75rem)]" : "text-xl",
          )}
        >
          {titleContent}
        </h3>
        <ProjectMeta project={project} labels={labels} />
        <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-muted">
          {project.description}
        </p>
        {detailHref ? (
          <p className="mt-5">
            <Link
              href={detailHref}
              className="text-base font-semibold text-accent transition-colors duration-150 hover:text-accent-hover"
            >
              {labels.viewProject}
            </Link>
          </p>
        ) : project.liveUrl && project.status !== "coming-soon" ? (
          <p className="mt-5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-accent transition-colors duration-150 hover:text-accent-hover"
            >
              {labels.viewSite}
            </a>
          </p>
        ) : null}
      </div>
    </article>
  );
}
