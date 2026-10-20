"use client";

import type { Ref } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { IconClose } from "@/components/learn/icons";

const closeButtonClass =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-transparent text-foreground transition-colors duration-150 hover:bg-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-foreground";

export type ExplanationCopy = {
  key: string;
  eyebrow?: string;
  title: string;
  text: string;
  closable?: boolean;
};

export function StageExplanation({
  copies,
  activeKey,
  onClose,
  closeRef,
  compact = false,
}: {
  copies: readonly ExplanationCopy[];
  activeKey: string | null;
  onClose?: () => void;
  closeRef?: Ref<HTMLButtonElement>;
  compact?: boolean;
}) {
  const active = copies.find((item) => item.key === activeKey) ?? null;
  if (!copies.length || !active) return null;

  return (
    <div className="learn-reading grid items-start">
      <div key={active.key} className="learn-stage-copy min-w-0" style={{ gridArea: "1 / 1" }} aria-live="polite">
        <ExplanationBody
          item={active}
          showClose={Boolean(active.closable && onClose)}
          onClose={onClose}
          closeRef={closeRef}
          compact={compact && !active.closable}
        />
      </div>
      {copies.map((item) =>
        item.key === active.key ? null : (
          <div
            key={item.key}
            className="pointer-events-none invisible min-w-0"
            style={{ gridArea: "1 / 1" }}
            aria-hidden="true"
          >
            <ExplanationBody item={item} showClose={false} compact={compact && !item.closable} />
          </div>
        ),
      )}
    </div>
  );
}

function ExplanationBody({
  item,
  showClose,
  onClose,
  closeRef,
  compact = false,
}: {
  item: ExplanationCopy;
  showClose: boolean;
  onClose?: () => void;
  closeRef?: Ref<HTMLButtonElement>;
  compact?: boolean;
}) {
  const hasHeading = Boolean(item.eyebrow || item.title);

  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          {item.eyebrow ? <p className="mb-1 text-sm font-medium text-muted">{item.eyebrow}</p> : null}
          {item.title ? (
            <h3 className="text-xl leading-snug font-semibold text-foreground">{item.title}</h3>
          ) : null}
        </div>
        {showClose ? (
          <button
            ref={closeRef}
            type="button"
            className={closeButtonClass}
            aria-label={learnUi.closeCard}
            title={learnUi.closeCard}
            onClick={onClose}
          >
            <IconClose />
          </button>
        ) : null}
      </div>
      {compact ? null : (
        <p className={`${hasHeading ? "mt-2" : ""} text-base leading-relaxed text-foreground`}>{item.text}</p>
      )}
    </>
  );
}
