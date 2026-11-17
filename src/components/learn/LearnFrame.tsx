import { cn } from "@/lib/utils";

export function LearnFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "min-w-0 touch-pan-y overflow-hidden rounded-[calc(var(--radius-module)-0.35rem)] border border-border/80 bg-surface-soft aspect-[1672/941]",
        className,
      )}
    >
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
