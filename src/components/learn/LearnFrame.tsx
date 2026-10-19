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
        "min-w-0 touch-pan-y overflow-hidden rounded-[8px] border border-border bg-surface",
        className,
      )}
    >
      <div className="aspect-[5/4] w-full sm:aspect-[16/9]">{children}</div>
    </div>
  );
}
