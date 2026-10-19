"use client";

import type { KeyboardEvent, MouseEvent, ReactNode } from "react";

export function Part({
  id,
  label,
  selected = false,
  hinted = false,
  onSelect,
  children,
}: {
  id: string;
  label: string;
  selected?: boolean;
  hinted?: boolean;
  onSelect?: (id: string) => void;
  children: ReactNode;
}) {
  const interactive = Boolean(onSelect);

  return (
    <g
      data-part={id}
      className={`learn-part${selected ? " is-selected" : ""}${hinted && !selected ? " learn-hint" : ""}`}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-pressed={interactive ? selected : undefined}
      aria-label={interactive ? label : undefined}
      onClick={
        interactive
          ? (event: MouseEvent<SVGGElement>) => {
              event.stopPropagation();
              onSelect?.(id);
            }
          : undefined
      }
      onKeyDown={
        interactive
          ? (event: KeyboardEvent<SVGGElement>) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect?.(id);
              }
            }
          : undefined
      }
    >
      {children}
    </g>
  );
}
