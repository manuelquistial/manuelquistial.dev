import type { Experience } from "@/data/experience";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  item: Experience;
  currentLabel?: string;
  className?: string;
  /** Timeline layout hides tech tags to avoid repeating the Skills section. */
  showTechnologies?: boolean;
}

export function ExperienceCard({
  item,
  currentLabel,
  className,
  showTechnologies = false,
}: ExperienceCardProps) {
  const bullets =
    item.highlights?.slice(0, 3) ??
    (item.description ? [item.description] : []);

  return (
    <article className={cn("min-w-0", className)}>
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
        <h3 className="min-w-0 flex-1 text-lg font-semibold text-zinc-50">
          {item.company}
        </h3>
        {item.current && currentLabel ? (
          <span className="shrink-0 rounded-none border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-xs font-medium text-accent">
            {currentLabel}
          </span>
        ) : null}
      </div>
      <p className="mt-1.5 text-sm font-medium text-accent">{item.role}</p>
      <p className="mt-1 font-mono text-xs text-zinc-400">
        {item.period}
        {item.location ? ` · ${item.location}` : ""}
      </p>
      {item.type ? (
        <p className="mt-1 font-mono text-xs text-zinc-400">{item.type}</p>
      ) : null}

      <ul className="mt-4 space-y-2">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-2 text-sm leading-relaxed text-zinc-400"
          >
            <span
              aria-hidden
              className="mt-2 h-1 w-1 shrink-0 bg-zinc-600"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {showTechnologies && item.technologies?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-1 font-mono text-sm text-zinc-50"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
