"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import type { LearnPartCopy, LearnStageCopy } from "@/content/learn/types";
import { PlaybackControls } from "@/components/learn/PlaybackControls";
import { StageExplanation } from "@/components/learn/StageCaption";
import { StageTrack } from "@/components/learn/StageTrack";
import type { useScenePlayback } from "@/components/learn/useScenePlayback";

type Playback = ReturnType<typeof useScenePlayback>;

export type SceneCardAnchor = {
  id: string;
  label: string;
  text: string;
  x: number;
  y: number;
};

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
  stages,
  card = null,
  onClose,
  leading,
  aside,
  legend,
  children,
}: {
  label: string;
  playback?: Playback;
  stages?: readonly LearnStageCopy[];
  card?: SceneCardAnchor | null;
  onClose?: () => void;
  leading?: ReactNode;
  aside?: ReactNode;
  legend?: ReactNode;
  children: ReactNode;
}) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const openRef = useRef(false);
  const stage =
    stages?.find((item) => item.id === playback?.snapshot.stageId) ?? null;
  const paused = Boolean(playback) && !playback?.snapshot.playing;

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

  const leaveAnd = (action: () => void) => {
    if (card) onClose?.();
    action();
  };

  const showFooter = Boolean(playback || stage || card);

  return (
    <div
      className={`learn-scene mx-auto w-full overflow-hidden rounded-[8px] border border-border bg-[#eef3f6] ${aside ? "max-w-5xl" : "max-w-3xl"} ${paused ? "is-paused" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && card) {
          event.preventDefault();
          close();
        }
      }}
    >
      {leading}
      <div className={aside ? "grid lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]" : undefined}>
        <div
          ref={playback?.frameRef}
          className="relative min-w-0"
          onClick={(event) => {
            const target = event.target;
            if (!(target instanceof Element)) return;
            if (target.closest("[data-part], button")) return;
            if (card) onClose?.();
          }}
        >
          <div ref={artRef} className="learn-zoom-target relative">
            {children}
          </div>
          <p className="sr-only" id={titleId}>
            {label}
          </p>
        </div>
        {aside ? <div className="min-w-0 border-t border-border bg-surface lg:border-t-0 lg:border-l">{aside}</div> : null}
      </div>
      {legend ? <div className="border-t border-border bg-surface px-4 py-2 text-sm text-foreground">{legend}</div> : null}
      {showFooter ? (
        <div className="border-t border-border bg-surface">
          {playback && stages && stages.length > 0 ? (
            <StageTrack
              stages={stages}
              stageIndex={playback.snapshot.stageIndex}
              controller={playback.controller}
              onSeek={(index) => leaveAnd(() => playback.seek(index))}
            />
          ) : null}
          <StageExplanation stage={card ? null : stage} card={card} onClose={close} closeRef={closeRef} />
          {playback ? (
            <div className="px-2 pt-1 pb-2">
              <PlaybackControls
                playing={playback.snapshot.playing}
                speed={playback.snapshot.speed}
                canStep={playback.canStep}
                canStepBack={playback.canStepBack}
                reducedMotion={playback.reducedMotion}
                onPlay={() => leaveAnd(playback.play)}
                onPause={playback.pause}
                onRestart={() => leaveAnd(playback.restart)}
                onStep={() => leaveAnd(playback.step)}
                onStepBack={() => leaveAnd(playback.stepBack)}
                onSpeed={playback.setSpeed}
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
