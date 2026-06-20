import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { getProjectStatusLabel, hasProjectLiveLink } from "@/lib/projects";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  labels: SiteContent["projectCard"];
  statusLabels: SiteContent["projectStatus"];
  detailed?: boolean;
  className?: string;
}

const statusStyles = {
  planned: "border-border text-muted bg-surface-elevated",
  "in-progress": "border-accent/30 text-accent bg-accent/10",
  completed: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
  live: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
  "coming-soon": "border-amber-500/30 text-amber-400 bg-amber-500/10",
} as const;

export function ProjectCard({
  project,
  labels,
  statusLabels,
  detailed = false,
  className,
}: ProjectCardProps) {
  const statusLabel = getProjectStatusLabel(project.status, statusLabels);
  const showLiveSite = hasProjectLiveLink(project.liveUrl, project.status);
  const showGithub = Boolean(project.githubUrl);
  const showCaseStudy = Boolean(project.caseStudyUrl);
  const showActions = showLiveSite || showGithub || showCaseStudy;
  const isAgencyProject = project.category === "agency-web";

  return (
    <article
      className={cn(
        "card-surface flex h-full flex-col p-6 sm:p-7",
        project.featured && project.category === "engineering" && detailed
          ? "lg:p-8"
          : null,
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3
            className={cn(
              "font-semibold leading-snug text-foreground",
              project.featured && detailed ? "text-xl sm:text-2xl" : "text-lg",
            )}
          >
            {project.title}
          </h3>
          {isAgencyProject && project.agency ? (
            <p className="mt-1.5 text-xs font-medium text-muted">
              {labels.deliveredThrough} {project.agency}
            </p>
          ) : null}
          {!isAgencyProject && project.clientType ? (
            <p className="mt-1.5 text-xs font-medium text-muted">
              {project.clientType}
            </p>
          ) : null}
        </div>
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

      {detailed && project.longDescription ? (
        <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted">
          {project.longDescription}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <SkillBadge key={tag} label={tag} />
        ))}
      </div>

      {showActions ? (
        <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
          {showGithub ? (
            <Button href={project.githubUrl} external variant="outline" size="sm">
              {labels.github}
            </Button>
          ) : null}
          {showLiveSite ? (
            <Button href={project.liveUrl} external variant="secondary" size="sm">
              {isAgencyProject ? labels.liveSite : labels.liveDemo}
            </Button>
          ) : null}
          {showCaseStudy ? (
            <Button href={project.caseStudyUrl} variant="secondary" size="sm">
              {labels.caseStudy}
            </Button>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
