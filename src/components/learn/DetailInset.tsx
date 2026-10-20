import type { ReactNode } from "react";

export function DetailInset({
  title,
  source,
  children,
}: {
  title: string;
  source: string;
  children: ReactNode;
}) {
  return (
    <figure className="pointer-events-none absolute top-2 right-2 z-10 w-[46%] min-w-[148px] max-w-[228px] rounded-[8px] border border-border bg-surface/95 p-1.5 shadow-sm">
      <figcaption className="px-1 pb-1 text-xs leading-tight font-semibold text-foreground">{title}</figcaption>
      <div className="overflow-hidden rounded-[6px] bg-[#eef3f6]">{children}</div>
      <p className="px-1 pt-1 text-[11px] leading-snug text-muted">{source}</p>
    </figure>
  );
}
