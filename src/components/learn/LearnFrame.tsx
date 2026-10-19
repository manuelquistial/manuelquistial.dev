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
        "min-w-0 touch-pan-y overflow-hidden rounded-[8px] border border-border bg-[#eef3f6] aspect-[1672/941]",
        className,
      )}
    >
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
