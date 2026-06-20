import type { Dictionary } from "@/i18n/types";
import type { ProjectWithCopy } from "@/lib/content";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectWithCopy;
  labels: Dictionary["projectCard"];
  statusLabels: Dictionary["projectStatus"];
  className?: string;
}

const statusStyles = {
  planned: "border-border text-muted bg-surface-elevated",
  "in-progress": "border-accent/30 text-accent bg-accent/10",
  completed: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
} as const;

export function ProjectCard({
  project,
  labels,
  statusLabels,
  className,
}: ProjectCardProps) {
  const statusLabel =
    statusLabels[
      project.status === "in-progress" ? "inProgress" : project.status
    ];
  const hasLinks = Boolean(project.githubUrl || project.liveUrl);

  return (
    <article
      className={cn(
        "card-surface flex h-full flex-col p-6 sm:p-7",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-snug text-foreground">
          {project.name}
        </h3>
        <span
          className={cn(
            "shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium",
            statusStyles[project.status],
          )}
        >
          {statusLabel}
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <SkillBadge key={tag} label={tag} />
        ))}
      </div>

      {hasLinks ? (
        <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
          {project.githubUrl ? (
            <Button href={project.githubUrl} external variant="outline" size="sm">
              {labels.github}
            </Button>
          ) : null}
          {project.liveUrl ? (
            <Button href={project.liveUrl} external variant="secondary" size="sm">
              {labels.liveDemo}
            </Button>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
