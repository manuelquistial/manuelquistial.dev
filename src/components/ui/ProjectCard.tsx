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
  designCredit?: boolean;
  className?: string;
}

function ProjectMeta({
  project,
  labels,
  showAgency,
  designCredit,
}: {
  project: Project;
  labels: SiteContent["projectCard"];
  showAgency: boolean;
  designCredit: boolean;
}) {
  if (designCredit && project.agency) {
    return (
      <p className="mt-2 text-sm text-muted">
        {labels.designBy} {project.agency}
      </p>
    );
  }

  if (showAgency && project.category === "agency-web" && project.agency) {
    return (
      <p className="mt-2 text-sm text-muted">
        {labels.deliveredThrough} {project.agency}
      </p>
    );
  }

  if (project.category !== "agency-web" && project.clientType) {
    return <p className="mt-2 text-sm text-muted">{project.clientType}</p>;
  }

  return null;
}

export function ProjectCard({
  project,
  labels,
  featuredLayout = false,
  showCategory = false,
  showAgency = false,
  designCredit = false,
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
      <div className="mt-0 flex flex-1 flex-col">
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
          designCredit={designCredit}
        />
        {project.description ? (
          <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-muted">
            {project.description}
          </p>
        ) : null}
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
