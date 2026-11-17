import { cn } from "@/lib/utils";

interface TagChipProps {
  children: React.ReactNode;
  className?: string;
}

export function TagChip({ children, className }: TagChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border px-2 py-1 text-[11px] font-medium leading-none text-brand",
        className,
      )}
    >
      {children}
    </span>
  );
}
