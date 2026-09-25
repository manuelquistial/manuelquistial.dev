import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-1 font-mono text-sm text-zinc-50",
        className,
      )}
    >
      {label}
    </span>
  );
}
