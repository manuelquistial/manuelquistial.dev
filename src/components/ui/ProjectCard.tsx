import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { TagChip } from "@/components/ui/TagChip";
import { projectImageFrame } from "@/lib/projectImage";
import { cn } from "@/lib/utils";

type ProjectCardMeta = "auto" | "agency" | "design" | "reserved" | "hidden";
type ProjectCardLayout = "default" | "featured" | "compact" | "list";

interface ProjectCardProps {
  project: Project;
  labels: SiteContent["projectCard"];
  /** Whether to show the category eyebrow. */
  withCategory?: boolean;
  /** How project meta (agency / client / design credit) is presented. */
  meta?: ProjectCardMeta;
  layout?: ProjectCardLayout;
  indexLabel?: string;
  showTags?: boolean;
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

function categoryLabel(
  project: Project,
  labels: SiteContent["projectCard"],
): string {
  if (project.category === "agency-web") return labels.webSelection;
  if (project.category === "research") return labels.researchLabel;
  return labels.softwareLabel;
}

export function ProjectCard({
  project,
  labels,
  withCategory = false,
  meta = "auto",
  layout = "default",
  indexLabel,
  showTags = false,
  priority = false,
  className,
}: ProjectCardProps) {
  const detailHref = project.caseStudyUrl;
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

  const action =
    detailHref ? (
      <Link
        href={detailHref}
        className="text-[length:var(--small)] font-semibold text-foreground transition-colors duration-200 hover:text-accent"
      >
        {labels.viewProject}
      </Link>
    ) : project.liveUrl && project.status !== "coming-soon" ? (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[length:var(--small)] font-semibold text-foreground transition-colors duration-200 hover:text-accent"
      >
        {labels.viewSite}
      </a>
    ) : null;

  if (layout === "list") {
    return (
      <article
        className={cn(
          "grid gap-4 border-t border-border py-6 md:grid-cols-12 md:items-baseline md:gap-6",
          className,
        )}
      >
        <div className="md:col-span-3">
          {indexLabel ? (
            <p className="text-overline text-muted">{indexLabel}</p>
          ) : null}
          {withCategory ? (
            <p className="mt-2 text-sm text-muted">{categoryLabel(project, labels)}</p>
          ) : null}
        </div>
        <div className="md:col-span-4">
          <h3 className="text-balance text-[length:var(--heading-3)] font-semibold leading-snug text-foreground">
            {titleContent}
          </h3>
          <ProjectMeta project={project} labels={labels} meta={meta} />
        </div>
        <div className="md:col-span-5">
          {project.description ? (
            <p className="max-w-[55ch] text-[length:var(--body)] leading-[1.45] text-muted">
              {project.description}
            </p>
          ) : null}
          {action ? <p className="mt-4">{action}</p> : null}
        </div>
      </article>
    );
  }

  const imageFrame = projectImageFrame(project);
  const imageFallbackAspect =
    layout === "featured"
      ? "aspect-[4/3] md:aspect-[5/4]"
      : layout === "compact"
        ? "aspect-[4/3]"
        : "aspect-[8/5]";

  return (
    <article className={cn("flex h-full min-w-0 flex-col", className)}>
      {project.image ? (
        <div
          className={cn(
            "mb-5",
            imageFrame.style
              ? imageFrame.className
              : cn("relative w-full overflow-hidden bg-surface", imageFallbackAspect),
          )}
          style={imageFrame.style}
        >
          <Image
            src={project.image}
            alt={project.imageAlt ?? ""}
            fill
            priority={priority}
            sizes={
              layout === "featured"
                ? "(min-width: 1024px) 55vw, 100vw"
                : "(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"
            }
            className="editorial-image object-contain object-center"
          />
        </div>
      ) : null}
      <div className="mt-0 flex flex-1 flex-col">
        {indexLabel ? (
          <p className="mb-2 text-overline text-muted">{indexLabel}</p>
        ) : null}
        {withCategory ? (
          <p className="mb-2 text-overline text-muted">
            {categoryLabel(project, labels)}
          </p>
        ) : null}
        <h3
          className={cn(
            "text-balance font-semibold leading-snug text-foreground",
            layout === "featured"
              ? "text-[length:var(--heading-2)] tracking-[-0.03em]"
              : "text-xl",
          )}
        >
          {titleContent}
        </h3>
        <ProjectMeta project={project} labels={labels} meta={meta} />
        {project.description ? (
          <p
            className={cn(
              "mt-3 leading-[1.45] text-muted",
              layout === "featured" ? "max-w-[42ch] text-[length:var(--body)]" : "max-w-[65ch] text-base",
            )}
          >
            {project.description}
          </p>
        ) : null}
        {showTags && project.tags.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <TagChip>{tag}</TagChip>
              </li>
            ))}
          </ul>
        ) : null}
        {action ? <p className="mt-auto pt-5">{action}</p> : null}
      </div>
    </article>
  );
}
