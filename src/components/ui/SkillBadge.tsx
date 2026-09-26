import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[6px] bg-surface-soft px-3 py-1 text-sm text-foreground",
        className,
      )}
    >
      {label}
    </span>
  );
}
