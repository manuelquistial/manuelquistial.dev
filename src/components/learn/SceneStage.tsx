"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { learnUi } from "@/content/learn/es/ui";
import type { LearnPartCopy, LearnStageCopy } from "@/content/learn/types";
import { PlaybackControls } from "@/components/learn/PlaybackControls";
import { IconClose, IconCollapse, IconExpand } from "@/components/learn/icons";
import type { useScenePlayback } from "@/components/learn/useScenePlayback";

type Playback = ReturnType<typeof useScenePlayback>;

export type SceneCardAnchor = {
  id: string;
  label: string;
  text: string;
  x: number;
  y: number;
};

const iconButtonClass =
  "inline-flex size-11 items-center justify-center rounded-[6px] border border-border bg-surface text-foreground hover:border-foreground/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

export function cardFor(
  parts: readonly LearnPartCopy[] | undefined,
  anchors: Record<string, { x: number; y: number }>,
  selectedId: string | null,
): SceneCardAnchor | null {
  if (!selectedId) return null;
  const part = parts?.find((item) => item.id === selectedId);
  const anchor = anchors[selectedId];
  if (!part || !anchor) return null;
  return { id: part.id, label: part.label, text: part.text, x: anchor.x, y: anchor.y };
}

export function SceneStage({
  label,
  playback,
  caption,
  card = null,
  onClose,
  zoomed = false,
  onZoom,
  toolbarExtra,
  aside,
  legend,
  children,
}: {
  label: string;
  playback?: Playback;
  caption?: LearnStageCopy | null;
  card?: SceneCardAnchor | null;
  onClose?: () => void;
  zoomed?: boolean;
  onZoom?: () => void;
  toolbarExtra?: ReactNode;
  aside?: ReactNode;
  legend?: ReactNode;
  children: ReactNode;
}) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const openRef = useRef(false);

  useEffect(() => {
    const open = Boolean(card);
    if (open && !openRef.current) {
      playback?.suspend();
      requestAnimationFrame(() => closeRef.current?.focus());
    }
    if (!open && openRef.current) playback?.release();
    openRef.current = open;
  }, [playback, card]);

  const close = () => {
    const current = card?.id;
    onClose?.();
    if (!current || !artRef.current) return;
    const part = artRef.current.querySelector<SVGElement>(`[data-part="${current}"]`);
    part?.focus();
  };

  return (
    <div
      className="overflow-hidden rounded-[8px] border border-border bg-[#eef3f6]"
      onKeyDown={(event) => {
        if (event.key === "Escape" && card) {
          event.preventDefault();
          close();
        }
      }}
    >
      <div className={aside ? "grid lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]" : undefined}>
        <div
          ref={playback?.frameRef}
          className="relative min-w-0"
          onClick={(event) => {
            const target = event.target;
            if (!(target instanceof Element)) return;
            if (target.closest("[data-part], .learn-card, button")) return;
            if (card) onClose?.();
          }}
        >
          <div ref={artRef} className={`learn-zoom-target relative ${zoomed ? "is-zoomed" : ""}`}>
            {children}
            {card ? (
              <>
                <svg className="pointer-events-none absolute inset-0 h-full w-full text-accent" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <line
                    x1={card.x}
                    y1={card.y}
                    x2={Math.min(card.x, 72)}
                    y2={Math.max(6, card.y - 6)}
                    stroke="currentColor"
                    strokeWidth="0.35"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                <div
                  className="learn-card absolute z-10 max-w-64 rounded-[8px] border border-border bg-surface p-3 text-foreground shadow-sm"
                  style={{
                    left: `min(${card.x}%, calc(100% - 16.5rem))`,
                    top: `min(${card.y}%, calc(100% - 8rem))`,
                  }}
                  role="dialog"
                  aria-labelledby={titleId}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p id={titleId} className="text-sm font-semibold">
                      {card.label}
                    </p>
                    <button
                      ref={closeRef}
                      type="button"
                      className={`${iconButtonClass} shrink-0`}
                      aria-label={learnUi.closeCard}
                      title={learnUi.closeCard}
                      onClick={close}
                    >
                      <IconClose />
                    </button>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed">{card.text}</p>
                </div>
              </>
            ) : null}
          </div>
          <p className="sr-only">{label}</p>
        </div>
        {aside ? <div className="min-w-0 border-t border-border bg-surface lg:border-t-0 lg:border-l">{aside}</div> : null}
      </div>
      {legend ? <div className="border-t border-border bg-surface px-3 py-2 text-sm text-foreground">{legend}</div> : null}
      {caption ? (
        <p aria-live="polite" className="border-t border-border bg-surface px-3 py-2 text-sm leading-relaxed text-foreground">
          <span className="font-semibold">{caption.label}.</span> {caption.text}
        </p>
      ) : null}
      {playback || onZoom || toolbarExtra ? (
        <div className="learn-toolbar flex flex-wrap items-center justify-between gap-2 border-t border-border bg-surface px-2 py-1.5">
          <div className="flex flex-wrap items-center gap-2">{toolbarExtra}</div>
          <div className="ml-auto flex items-center gap-1">
            {onZoom ? (
              <button
                type="button"
                className={iconButtonClass}
                aria-pressed={zoomed}
                aria-label={zoomed ? learnUi.zoomOut : learnUi.zoomIn}
                title={zoomed ? learnUi.zoomOut : learnUi.zoomIn}
                onClick={onZoom}
              >
                {zoomed ? <IconCollapse /> : <IconExpand />}
              </button>
            ) : null}
            {playback ? (
              <PlaybackControls
                playing={playback.snapshot.playing}
                speed={playback.snapshot.speed}
                canStep={playback.canStep}
                reducedMotion={playback.reducedMotion}
                onPlay={playback.play}
                onPause={playback.pause}
                onRestart={() => {
                  onClose?.();
                  playback.restart();
                }}
                onStep={playback.step}
                onSpeed={playback.setSpeed}
              />
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
