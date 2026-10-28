import { cn } from "@/lib/utils";

interface TagChipProps {
  children: React.ReactNode;
  className?: string;
}

export function TagChip({ children, className }: TagChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border-strong px-2 py-1 text-[11px] font-medium leading-none text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
