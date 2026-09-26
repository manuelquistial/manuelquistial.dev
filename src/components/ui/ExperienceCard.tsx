import type { Experience } from "@/data/experience";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  item: Experience;
  className?: string;
  compact?: boolean;
  showTechnologies?: boolean;
}

export function ExperienceCard({
  item,
  className,
  compact = false,
  showTechnologies = false,
}: ExperienceCardProps) {
  const bullets = compact
    ? item.highlights?.slice(0, 1) ?? []
    : item.highlights?.slice(0, 2) ??
      (item.description ? [item.description] : []);

  return (
    <article className={cn("min-w-0", className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="min-w-0 flex-1 text-lg font-semibold text-foreground">
          {item.company}
        </h3>
        <p className="shrink-0 text-sm text-muted">{item.period}</p>
      </div>
      <p className="mt-1.5 text-base font-medium text-foreground">{item.role}</p>
      {item.location ? (
        <p className="mt-1 text-sm text-muted">{item.location}</p>
      ) : null}
      {item.type && !compact ? (
        <p className="mt-1 text-sm text-muted">{item.type}</p>
      ) : null}

      {bullets.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {bullets.map((bullet) => (
            <li key={bullet} className="text-base leading-relaxed text-muted">
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}

      {showTechnologies && item.technologies?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-[6px] bg-surface-soft px-3 py-1 text-sm text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
