import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border-strong px-2 py-1 text-[11px] font-medium leading-none text-foreground",
        className,
      )}
    >
      {label}
    </span>
  );
}
