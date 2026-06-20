import type { ExperienceWithCopy } from "@/lib/content";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  item: ExperienceWithCopy;
  currentLabel?: string;
  className?: string;
}

export function ExperienceCard({
  item,
  currentLabel,
  className,
}: ExperienceCardProps) {
  return (
    <article
      className={cn(
        "rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong",
        className,
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {item.company}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent">{item.role}</p>
        </div>
        {item.current && currentLabel ? (
          <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
            {currentLabel}
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {item.description}
      </p>
    </article>
  );
}
