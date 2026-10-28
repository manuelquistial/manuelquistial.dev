import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number: string;
  label: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  number,
  label,
  description,
  className,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "grid gap-6 border-t border-border pt-8 md:grid-cols-12 md:gap-8 md:pt-10",
        className,
      )}
    >
      <div className="flex items-baseline gap-4 md:col-span-5 lg:col-span-4">
        <span
          className="font-display text-[clamp(3rem,6vw,5rem)] text-foreground"
          aria-hidden="true"
        >
          {number}
        </span>
        <h2 className="text-overline text-foreground">{label}</h2>
      </div>
      {description ? (
        <p
          className={cn(
            "max-w-[42ch] text-[length:var(--body)] leading-[1.45] text-muted md:col-span-7 lg:col-span-5 lg:col-start-8",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
