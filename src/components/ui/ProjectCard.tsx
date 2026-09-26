import Link from "next/link";
import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  labels: SiteContent["projectCard"];
  featuredLayout?: boolean;
  showCategory?: boolean;
  showAgency?: boolean;
  className?: string;
}

function ProjectMeta({
  project,
  labels,
  showAgency,
}: {
  project: Project;
  labels: SiteContent["projectCard"];
  showAgency: boolean;
}) {
  const isAgencyProject = project.category === "agency-web";

  if (showAgency && isAgencyProject && project.agency) {
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
  showCategory = false,
  showAgency = true,
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
        aria-hidden
      />

      <div className="mt-5 flex flex-1 flex-col">
        {showCategory ? (
          <p className="mb-2 text-sm text-muted">
            {project.category === "agency-web"
              ? labels.webSelection
              : project.category === "research"
                ? labels.researchLabel
                : labels.softwareLabel}
          </p>
        ) : null}
        <h3
          className={cn(
            "font-semibold leading-snug text-foreground",
            featuredLayout ? "text-[clamp(1.5rem,2.5vw,1.75rem)]" : "text-xl",
          )}
        >
          {titleContent}
        </h3>
        <ProjectMeta
          project={project}
          labels={labels}
          showAgency={showAgency}
        />
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
