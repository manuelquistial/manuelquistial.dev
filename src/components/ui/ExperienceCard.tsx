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
  showTechnologies = true,
}: ExperienceCardProps) {
  const bullets = compact
    ? item.highlights?.slice(0, 1) ?? []
    : item.highlights?.slice(0, 3) ?? [];

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

      {bullets.length > 0 ? (
        <ul className="mt-4 list-disc space-y-2 pl-5">
          {bullets.map((bullet) => (
            <li key={bullet} className="text-base leading-relaxed text-muted">
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}

      {showTechnologies && !compact && item.technologies?.length ? (
        <p className="mt-4 text-sm text-muted">
          {item.technologies.join(", ")}
        </p>
      ) : null}
    </article>
  );
}
