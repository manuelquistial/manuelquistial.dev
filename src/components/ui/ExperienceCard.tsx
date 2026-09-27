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
  const bullets = compact ? [] : item.highlights ?? [];

  return (
    <article className={cn("min-w-0", className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="min-w-0 flex-1 text-lg font-semibold text-foreground">
          {item.company}
        </h3>
        <p className="shrink-0 text-sm text-muted">{item.period}</p>
      </div>
      <p className="mt-1.5 text-base font-medium text-foreground">{item.role}</p>
      {!compact && item.location ? (
        <p className="mt-1 text-sm text-muted">{item.location}</p>
      ) : null}

      {!compact && item.description ? (
        <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">
          {item.description}
        </p>
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
        <TechnologyLine
          label={item.technologiesLabel}
          technologies={item.technologies}
        />
      ) : null}

      {!compact && item.engagements?.length ? (
        <div className="mt-8 space-y-8">
          {item.engagements.map((engagement) => (
            <section key={engagement.id} className="border-t border-border pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="min-w-0 flex-1 text-base font-semibold text-foreground">
                  {engagement.company}
                </h4>
                {engagement.period ? (
                  <p className="shrink-0 text-sm text-muted">{engagement.period}</p>
                ) : null}
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {engagement.highlights.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-base leading-relaxed text-muted"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              {showTechnologies && engagement.technologies.length ? (
                <TechnologyLine
                  label={engagement.technologiesLabel}
                  technologies={engagement.technologies}
                />
              ) : null}
            </section>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function TechnologyLine({
  label,
  technologies,
}: {
  label?: string;
  technologies: readonly string[];
}) {
  return (
    <p className="mt-4 text-sm leading-relaxed text-muted">
      {label ? (
        <>
          <span className="font-medium text-foreground">{label}</span>
          {": "}
        </>
      ) : null}
      {technologies.join(", ")}
    </p>
  );
}
