import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  labels: SiteContent["projectCard"];
  showCategory?: boolean;
  showAgency?: boolean;
  designCredit?: boolean;
  uniform?: boolean;
  className?: string;
}

function ProjectMeta({
  project,
  labels,
  showAgency,
  designCredit,
  reserveSpace,
}: {
  project: Project;
  labels: SiteContent["projectCard"];
  showAgency: boolean;
  designCredit: boolean;
  reserveSpace: boolean;
}) {
  let text: string | null = null;

  if (designCredit && project.agency) {
    text = `${labels.designBy} ${project.agency}`;
  } else if (showAgency && project.category === "agency-web" && project.agency) {
    text = `${labels.deliveredThrough} ${project.agency}`;
  } else if (project.category !== "agency-web" && project.clientType) {
    text = project.clientType;
  }

  if (!text && !reserveSpace) return null;

  return (
    <p className={cn("mt-2 text-sm text-muted", reserveSpace && "min-h-5")}>
      {text}
    </p>
  );
}

export function ProjectCard({
  project,
  labels,
  showCategory = false,
  showAgency = false,
  designCredit = false,
  uniform = false,
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
      {project.image ? (
        <div className="relative mb-4 aspect-[8/5] w-full overflow-hidden bg-surface">
          <Image
            src={project.image}
            alt={project.imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : null}
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
        <h3 className="text-xl font-semibold leading-snug text-foreground">
          {titleContent}
        </h3>
        <ProjectMeta
          project={project}
          labels={labels}
          showAgency={showAgency}
          designCredit={designCredit}
          reserveSpace={uniform}
        />
        {project.description ? (
          <p
            className="mt-3 max-w-[65ch] text-base leading-relaxed text-muted"
          >
            {project.description}
          </p>
        ) : null}
        {detailHref ? (
          <p className="mt-auto pt-5">
            <Link
              href={detailHref}
              className="text-base font-semibold text-accent transition-colors duration-150 hover:text-accent-hover"
            >
              {labels.viewProject}
            </Link>
          </p>
        ) : project.liveUrl && project.status !== "coming-soon" ? (
          <p className="mt-auto pt-5">
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
