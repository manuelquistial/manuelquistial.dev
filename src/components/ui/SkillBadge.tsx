interface SkillBadgeProps {
  label: string;
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface-elevated px-2.5 py-1 text-xs font-medium text-muted">
      {label}
    </span>
  );
}
