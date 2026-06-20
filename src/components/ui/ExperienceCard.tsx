import type { Experience } from "@/data/experience";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  item: Experience;
  currentLabel?: string;
  className?: string;
}

export function ExperienceCard({
  item,
  currentLabel,
  className,
}: ExperienceCardProps) {
  return (
    <article className={cn("card-surface p-6 sm:p-7", className)}>
      <div>
        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
          <h3 className="min-w-0 flex-1 text-lg font-semibold text-foreground">
            {item.company}
          </h3>
          {item.current && currentLabel ? (
            <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
              {currentLabel}
            </span>
          ) : null}
        </div>
        <p className="mt-1.5 text-sm font-medium text-accent">{item.role}</p>
        <p className="mt-1 text-xs text-muted">
          {item.period}
          {item.location ? ` · ${item.location}` : ""}
        </p>
        {item.type ? (
          <p className="mt-1 text-xs text-muted">{item.type}</p>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {item.description}
      </p>
      {item.technologies?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <SkillBadge key={tech} label={tech} />
          ))}
        </div>
      ) : null}
    </article>
  );
}
