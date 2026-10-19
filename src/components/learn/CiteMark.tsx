"use client";

import { useEffect, useId, useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import type { LearnSource } from "@/content/learn/types";
import { IconClose } from "@/components/learn/icons";

export function CiteMark({
  source,
  number,
}: {
  source: LearnSource;
  number: number;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLSpanElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <span ref={rootRef} className="relative inline-block">
      <a
        href={`#ref-${source.id}`}
        className="prose-link ml-0.5 align-super text-[0.75em] font-semibold"
        aria-label={`${learnUi.sourcesTitle} ${number}. ${source.authors}, ${source.year}`}
        aria-expanded={open}
        onClick={(event) => {
          event.preventDefault();
          setOpen((value) => !value);
        }}
      >
        {number}
      </a>
      {open ? (
        <span
          role="dialog"
          aria-labelledby={titleId}
          className="absolute left-0 z-30 mt-1 w-64 rounded-[8px] border border-border bg-surface p-3 text-left text-sm text-foreground shadow-sm not-italic"
        >
          <span className="flex items-start justify-between gap-2">
            <span id={titleId} className="font-semibold leading-snug">
              {source.title}
            </span>
            <button
              type="button"
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-[6px] border border-border"
              aria-label={learnUi.closeCard}
              onClick={() => setOpen(false)}
            >
              <IconClose />
            </button>
          </span>
          <span className="mt-2 block text-muted">
            {source.authors}, {source.year}
          </span>
          <span className="mt-2 flex flex-col gap-1">
            <a href={`#ref-${source.id}`} className="prose-link" onClick={() => setOpen(false)}>
              {learnUi.goToReference}
            </a>
            <a href={source.href} className="prose-link" target="_blank" rel="noopener noreferrer">
              {learnUi.openReference}
            </a>
          </span>
        </span>
      ) : null}
    </span>
  );
}
