import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface-elevated px-2.5 py-1 text-xs font-medium text-foreground/80",
        className,
      )}
    >
      {label}
    </span>
  );
}
