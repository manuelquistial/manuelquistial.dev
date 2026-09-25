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
  /** Full-width featured layout with visual placeholder. */
  featuredLayout?: boolean;
  /** Compact card for agency / secondary grids. */
  minimal?: boolean;
  className?: string;
}

const statusStyles = {
  planned: "border-zinc-700 text-zinc-400 bg-zinc-900",
  "in-progress": "border-accent/30 text-accent bg-accent/10",
  completed: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
  live: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
  "coming-soon": "border-amber-500/30 text-amber-400 bg-amber-500/10",
} as const;

function VisualPlaceholder({ label }: { label: string }) {
  return (
    <div
      aria-hidden
      className="relative aspect-square w-full border border-zinc-800 bg-zinc-950"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(39,39,42,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(39,39,42,0.45)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-6 border border-dashed border-zinc-700 bg-zinc-900/60 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          visual
        </p>
        <pre className="mt-4 overflow-hidden font-mono text-[11px] leading-relaxed text-zinc-500">
{`// ${label}
pipeline.run()
  .map(signal)
  .classify()`}
        </pre>
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  labels,
  statusLabels,
  detailed = false,
  featuredLayout = false,
  minimal = false,
  className,
}: ProjectCardProps) {
  const statusLabel = getProjectStatusLabel(project.status, statusLabels);
  const showLiveSite = hasProjectLiveLink(project.liveUrl, project.status);
  const showGithub = Boolean(project.githubUrl);
  const showCaseStudy = Boolean(project.caseStudyUrl);
  const showActions = showLiveSite || showGithub || showCaseStudy;
  const isAgencyProject = project.category === "agency-web";
  const tags = minimal ? project.tags.slice(0, 4) : project.tags;

  if (featuredLayout) {
    return (
      <article
        className={cn(
          "card-surface grid overflow-hidden hover:border-zinc-500 lg:grid-cols-2",
          className,
        )}
      >
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold leading-snug text-zinc-50 sm:text-2xl">
                {project.title}
              </h3>
              {isAgencyProject && project.agency ? (
                <p className="mt-1.5 font-mono text-xs text-zinc-400">
                  {labels.deliveredThrough} {project.agency}
                </p>
              ) : null}
              {!isAgencyProject && project.clientType ? (
                <p className="mt-1.5 font-mono text-xs text-zinc-400">
                  {project.clientType}
                </p>
              ) : null}
            </div>
            <span
              className={cn(
                "shrink-0 rounded-none border px-2.5 py-0.5 font-mono text-xs font-medium",
                statusStyles[project.status],
              )}
            >
              {statusLabel}
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>

          {detailed && project.longDescription ? (
            <p className="mt-4 border-t border-zinc-800 pt-4 text-sm leading-relaxed text-zinc-400">
              {project.longDescription}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.slice(0, 8).map((tag) => (
              <SkillBadge key={tag} label={tag} />
            ))}
          </div>

          {showActions ? (
            <div className="mt-auto flex flex-wrap gap-2 border-t border-zinc-800 pt-5 mt-8">
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
        </div>

        <div className="border-t border-zinc-800 bg-zinc-950/50 p-4 sm:p-6 lg:border-l lg:border-t-0">
          <VisualPlaceholder label={project.id} />
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "card-surface flex h-full flex-col hover:border-zinc-500",
        minimal ? "p-5" : "p-6 sm:p-7",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3
            className={cn(
              "font-semibold leading-snug text-zinc-50",
              minimal ? "text-base" : detailed ? "text-xl sm:text-2xl" : "text-lg",
            )}
          >
            {project.title}
          </h3>
          {isAgencyProject && project.agency ? (
            <p className="mt-1.5 font-mono text-xs text-zinc-400">
              {labels.deliveredThrough} {project.agency}
            </p>
          ) : null}
          {!isAgencyProject && project.clientType ? (
            <p className="mt-1.5 font-mono text-xs text-zinc-400">
              {project.clientType}
            </p>
          ) : null}
        </div>
        {!minimal ? (
          <span
            className={cn(
              "shrink-0 rounded-none border px-2.5 py-0.5 font-mono text-xs font-medium",
              statusStyles[project.status],
            )}
          >
            {statusLabel}
          </span>
        ) : null}
      </div>

      <p
        className={cn(
          "mt-3 flex-1 leading-relaxed text-zinc-400",
          minimal ? "text-sm line-clamp-3" : "text-sm",
        )}
      >
        {project.description}
      </p>

      {detailed && project.longDescription ? (
        <p className="mt-4 border-t border-zinc-800 pt-4 text-sm leading-relaxed text-zinc-400">
          {project.longDescription}
        </p>
      ) : null}

      <div className={cn("mt-5 flex flex-wrap gap-2", minimal && "mt-4")}>
        {tags.map((tag) => (
          <SkillBadge key={tag} label={tag} />
        ))}
      </div>

      {showActions ? (
        <div
          className={cn(
            "mt-6 flex flex-wrap gap-2 border-t border-zinc-800 pt-5",
            minimal && "mt-5 pt-4",
          )}
        >
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
