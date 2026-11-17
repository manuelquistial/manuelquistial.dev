import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { IconArrowRight, IconArrowUpRight } from "@/components/icons";
import { Section } from "@/components/layout/Section";
import { ViewAllLink } from "@/components/ui/ViewAllLink";
import { pageSections } from "@/lib/pageSections";
import { cn } from "@/lib/utils";

interface SelectedProjectsProps {
  title: string;
  projects: readonly Project[];
  projectCard: SiteContent["projectCard"];
  viewAllHref: string;
  viewAllLabel: string;
  description?: string;
}

const moduleAccents = [
  {
    shell: "bg-brand text-white",
    shape: "bg-accent-coral",
    shapePos: "-right-8 -top-10 h-28 w-28",
    shape2: "bg-accent-yellow",
    shape2Pos: "-left-10 -bottom-10 h-24 w-24",
    meta: "text-white/70",
    title: "text-white",
    link: "text-white hover:text-accent-yellow",
  },
  {
    shell: "bg-surface text-brand border border-border",
    shape: "bg-accent-green",
    shapePos: "-right-8 -bottom-10 h-28 w-28",
    shape2: "bg-accent-violet/25",
    shape2Pos: "-left-8 -top-8 h-24 w-24",
    meta: "text-muted",
    title: "text-brand",
    link: "text-brand hover:text-accent-violet",
  },
  {
    shell: "bg-surface-soft text-brand",
    shape: "bg-accent-coral",
    shapePos: "-right-8 -bottom-8 h-28 w-28",
    shape2: "bg-accent-yellow",
    shape2Pos: "-left-10 top-8 h-20 w-20",
    meta: "text-muted",
    title: "text-brand",
    link: "text-brand hover:text-accent-coral",
  },
] as const;

function ProjectMetaLine({
  project,
  labels,
}: {
  project: Project;
  labels: SiteContent["projectCard"];
}) {
  if (project.id === "sal-picciotto-website" && project.agency) {
    return (
      <p className="text-sm opacity-80">
        {labels.designBy} {project.agency}
      </p>
    );
  }
  if (project.category !== "agency-web" && project.clientType) {
    return <p className="text-sm opacity-80">{project.clientType}</p>;
  }
  return null;
}

export function SelectedProjects({
  title,
  projects,
  projectCard,
  viewAllHref,
  viewAllLabel,
  description,
}: SelectedProjectsProps) {
  return (
    <Section id={pageSections.selectedProjects} variant="bordered">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-[length:var(--heading-1)] text-brand">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-[42ch] text-[length:var(--body)] text-muted">
              {description}
            </p>
          ) : null}
        </div>
        <ViewAllLink href={viewAllHref} className="text-brand hover:text-accent-violet">
          {viewAllLabel}
        </ViewAllLink>
      </div>

      <div className="mt-[var(--section-heading-gap)] grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {projects.map((project, index) => {
          const accent = moduleAccents[index % moduleAccents.length];
          const detailHref = project.caseStudyUrl;
          const href =
            detailHref ??
            (project.liveUrl && project.status !== "coming-soon"
              ? project.liveUrl
              : undefined);
          const external = Boolean(!detailHref && href);
          const ArrowIcon = external ? IconArrowUpRight : IconArrowRight;

          const card = (
            <article
              className={cn(
                "gp-module relative flex h-full min-h-[24rem] flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1",
                accent.shell,
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute rounded-full opacity-90",
                  accent.shape,
                  accent.shapePos,
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute rounded-full opacity-80",
                  accent.shape2,
                  accent.shape2Pos,
                )}
              />

              {project.image ? (
                <div className="relative z-[1] mx-4 mt-4 aspect-[4/3] shrink-0 overflow-hidden rounded-[calc(var(--radius-module)-0.35rem)] bg-white/10">
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? ""}
                    fill
                    priority={index < 2}
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div className="relative z-[1] mx-4 mt-4 flex aspect-[4/3] shrink-0 items-center justify-center rounded-[calc(var(--radius-module)-0.35rem)] bg-brand/10">
                  <span className="font-display text-4xl opacity-40">&</span>
                </div>
              )}

              <div className="relative z-[1] flex flex-1 flex-col p-5 md:p-6">
                <p className={cn("text-overline", accent.meta)}>
                  {project.tags.slice(0, 2).join(" · ") || project.category}
                </p>
                <h3
                  className={cn(
                    "mt-2 line-clamp-2 min-h-[2.5em] text-[length:var(--heading-3)] font-bold leading-tight tracking-[-0.02em]",
                    accent.title,
                  )}
                >
                  {project.title}
                </h3>
                <div className="mt-2 min-h-5">
                  <ProjectMetaLine project={project} labels={projectCard} />
                </div>
                <p
                  className={cn(
                    "mt-3 line-clamp-3 min-h-[4.5em] flex-1 text-sm leading-relaxed",
                    accent.meta,
                  )}
                >
                  {project.description}
                </p>
                <span
                  className={cn(
                    "mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold",
                    accent.link,
                  )}
                >
                  {detailHref
                    ? projectCard.viewProject
                    : projectCard.viewSite}
                  <ArrowIcon className="size-[1.05em]" />
                </span>
              </div>
            </article>
          );

          if (!href) return <div key={project.id} className="h-full">{card}</div>;

          if (external) {
            return (
              <a
                key={project.id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-violet"
              >
                {card}
              </a>
            );
          }

          return (
            <Link
              key={project.id}
              href={href}
              className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-violet"
            >
              {card}
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
