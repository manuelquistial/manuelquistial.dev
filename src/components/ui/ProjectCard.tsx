import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { IconArrowRight, IconArrowUpRight } from "@/components/icons";
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

function metaText(
  project: Project,
  labels: SiteContent["projectCard"],
  meta: ProjectCardMeta,
): string | null {
  if (meta === "hidden") return null;

  if (meta === "design" && project.agency) {
    return `${labels.designBy} ${project.agency}`;
  }
  if (meta === "agency" && project.category === "agency-web" && project.agency) {
    return `${labels.deliveredThrough} ${project.agency}`;
  }
  if (project.category !== "agency-web" && project.clientType) {
    return project.clientType;
  }
  if (
    (meta === "auto" || meta === "reserved") &&
    project.id === "sal-picciotto-website" &&
    project.agency
  ) {
    return `${labels.designBy} ${project.agency}`;
  }
  return null;
}

function ProjectMeta({
  project,
  labels,
  meta,
  reserve = false,
}: {
  project: Project;
  labels: SiteContent["projectCard"];
  meta: ProjectCardMeta;
  reserve?: boolean;
}) {
  if (meta === "hidden") return null;

  const text = metaText(project, labels, meta);
  const shouldReserve = reserve || meta === "reserved" || meta === "design";
  if (!text && !shouldReserve) return null;

  return (
    <p className={cn("mt-2 text-sm text-muted", shouldReserve && "min-h-5")}>
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
      className="transition-colors duration-200 hover:text-accent-violet"
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
        className="inline-flex items-center gap-1.5 text-[length:var(--small)] font-semibold text-foreground transition-colors duration-200 hover:text-accent-violet"
      >
        {labels.viewProject}
        <IconArrowRight className="size-[1.05em]" />
      </Link>
    ) : project.liveUrl && project.status !== "coming-soon" ? (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[length:var(--small)] font-semibold text-foreground transition-colors duration-200 hover:text-accent-violet"
      >
        {labels.viewSite}
        <IconArrowUpRight className="size-[1.05em]" />
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

  const useFixedFrame = layout === "default" || layout === "compact";
  const imageFrame = useFixedFrame ? null : projectImageFrame(project);

  return (
    <article className={cn("flex h-full min-w-0 flex-col", className)}>
      {project.image ? (
        <div
          className={cn(
            "relative mb-5 w-full shrink-0 overflow-hidden rounded-[var(--radius-module)] bg-surface-soft",
            useFixedFrame
              ? "aspect-[4/3]"
              : imageFrame?.style
                ? imageFrame.className
                : cn(
                    "aspect-[4/3]",
                    layout === "featured" && "md:aspect-[5/4]",
                  ),
          )}
          style={imageFrame?.style}
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
      ) : (
        <div
          className="mb-5 aspect-[4/3] w-full shrink-0 overflow-hidden rounded-[var(--radius-module)] bg-surface-soft"
          aria-hidden
        />
      )}
      <div className="flex min-h-0 flex-1 flex-col">
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
            "line-clamp-2 text-balance font-semibold leading-snug text-foreground",
            layout === "featured"
              ? "min-h-[2.6em] text-[length:var(--heading-2)] tracking-[-0.03em]"
              : "min-h-[2.5em] text-xl",
          )}
        >
          {titleContent}
        </h3>
        <ProjectMeta
          project={project}
          labels={labels}
          meta={meta}
          reserve={layout === "default" || layout === "compact"}
        />
        <p
          className={cn(
            "mt-3 line-clamp-3 min-h-[4.5em] leading-[1.45] text-muted",
            layout === "featured"
              ? "max-w-[42ch] text-[length:var(--body)]"
              : "text-base",
          )}
        >
          {project.description}
        </p>
        {showTags && project.tags.length > 0 ? (
          <ul className="mt-4 flex min-h-8 flex-wrap gap-2 overflow-hidden">
            {project.tags.slice(0, 3).map((tag) => (
              <li key={tag}>
                <TagChip>{tag}</TagChip>
              </li>
            ))}
          </ul>
        ) : showTags ? (
          <div className="mt-4 min-h-8" aria-hidden />
        ) : null}
        {action ? (
          <div className="mt-auto pt-5">{action}</div>
        ) : (
          <div className="mt-auto" />
        )}
      </div>
    </article>
  );
}
