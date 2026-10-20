"use client";

import type { Ref } from "react";
import { learnUi } from "@/content/learn/es/ui";
import type { LearnStageCopy } from "@/content/learn/types";
import { IconClose } from "@/components/learn/icons";

const closeButtonClass =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-transparent text-foreground transition-colors duration-150 hover:bg-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-foreground";

export function StageExplanation({
  stage,
  card,
  onClose,
  closeRef,
}: {
  stage?: LearnStageCopy | null;
  card?: { id: string; label: string; text: string } | null;
  onClose?: () => void;
  closeRef?: Ref<HTMLButtonElement>;
}) {
  if (!stage && !card) return null;
  const title = card?.label ?? stage?.title ?? stage?.label ?? "";
  const text = card?.text ?? stage?.text ?? "";
  const key = card ? `part-${card.id}` : stage?.id;

  return (
    <div className="min-h-32 px-4 py-4">
      <div key={key} className="learn-stage-copy" aria-live="polite">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            {card ? <p className="mb-1 text-sm font-medium text-muted">{learnUi.partEyebrow}</p> : null}
            <h3 className="text-xl leading-snug font-semibold text-foreground">{title}</h3>
          </div>
          {card && onClose ? (
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
        <p className="mt-2 text-base leading-relaxed text-foreground">{text}</p>
      </div>
    </div>
  );
}
