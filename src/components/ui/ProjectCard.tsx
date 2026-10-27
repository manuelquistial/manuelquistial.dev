import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { cn } from "@/lib/utils";

type ProjectCardMeta = "auto" | "agency" | "design" | "reserved" | "hidden";

interface ProjectCardProps {
  project: Project;
  labels: SiteContent["projectCard"];
  /** Whether to show the category eyebrow. */
  withCategory?: boolean;
  /** How project meta (agency / client / design credit) is presented. */
  meta?: ProjectCardMeta;
  priority?: boolean;
  className?: string;
}

function ProjectMeta({
  project,
  labels,
  meta,
}: {
  project: Project;
  labels: SiteContent["projectCard"];
  meta: ProjectCardMeta;
}) {
  if (meta === "hidden") return null;

  let text: string | null = null;

  if (meta === "design" && project.agency) {
    text = `${labels.designBy} ${project.agency}`;
  } else if (meta === "agency" && project.category === "agency-web" && project.agency) {
    text = `${labels.deliveredThrough} ${project.agency}`;
  } else if (project.category !== "agency-web" && project.clientType) {
    text = project.clientType;
  }

  const reserveSpace = meta === "reserved" || meta === "design";
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
  withCategory = false,
  meta = "auto",
  priority = false,
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
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : null}
      <div className="mt-0 flex flex-1 flex-col">
        {withCategory ? (
          <p className="mb-2 text-sm text-muted">
            {project.category === "agency-web"
              ? labels.webSelection
              : project.category === "research"
                ? labels.researchLabel
                : labels.softwareLabel}
          </p>
        ) : null}
        <h3 className="text-balance text-xl font-semibold leading-snug text-foreground">
          {titleContent}
        </h3>
        <ProjectMeta project={project} labels={labels} meta={meta} />
        {project.description ? (
          <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-muted">
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
