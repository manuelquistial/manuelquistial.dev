"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import type { LearnPartCopy, LearnStageCopy } from "@/content/learn/types";
import { PlaybackControls } from "@/components/learn/PlaybackControls";
import { StageExplanation, type ExplanationCopy } from "@/components/learn/StageCaption";
import { StageTrack } from "@/components/learn/StageTrack";
import type { useScenePlayback } from "@/components/learn/useScenePlayback";

type Playback = ReturnType<typeof useScenePlayback>;

export type SceneCardAnchor = {
  id: string;
  label: string;
  text: string;
  cites?: readonly string[];
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
  return {
    id: part.id,
    label: part.label,
    text: part.text,
    cites: part.cites,
    x: anchor.x,
    y: anchor.y,
  };
}

export function SceneStage({
  label,
  playback,
  stages,
  parts,
  idle,
  reserves,
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
  parts?: readonly LearnPartCopy[];
  idle?: { title?: string; text: string };
  reserves?: readonly { title: string; text: string; cites?: readonly string[] }[];
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
  const playbackRef = useRef(playback);
  const stage =
    stages?.find((item) => item.id === playback?.snapshot.stageId) ?? null;
  const paused = Boolean(playback) && !playback?.snapshot.playing;
  const copies = explanationCopies({ idle, stages, parts, reserves, card });
  const activeKey = card
    ? `part-${card.id}`
    : stage?.id ?? (idle?.text ? "prompt" : null);
  const hasTrack = Boolean(playback && stages && stages.length > 0);
  const cardId = card?.id ?? null;

  useEffect(() => {
    playbackRef.current = playback;
  }, [playback]);

  useEffect(() => {
    const open = Boolean(cardId);
    if (open && !openRef.current) {
      playbackRef.current?.suspend();
      requestAnimationFrame(() => closeRef.current?.focus());
    }
    if (!open && openRef.current) playbackRef.current?.release();
    openRef.current = open;
  }, [cardId]);

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

  const showFooter = Boolean(playback || copies.length > 0);

  return (
    <div
      className={`learn-scene w-full overflow-hidden rounded-[8px] border border-border bg-[#eef3f6] ${paused ? "is-paused" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && card) {
          event.preventDefault();
          close();
        }
      }}
    >
      {leading}
      <div className={aside ? "learn-split" : undefined}>
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
        {aside ? <div className="learn-split-aside min-w-0">{aside}</div> : null}
      </div>
      {legend ? (
        <div className="border-t border-border bg-surface px-[var(--learn-panel-pad)] py-3 text-sm leading-relaxed text-foreground">
          <div className="learn-reading">{legend}</div>
        </div>
      ) : null}
      {showFooter ? (
        <div className="border-t border-border bg-surface">
          {hasTrack && playback && stages ? (
            <StageTrack
              stages={stages}
              stageIndex={playback.snapshot.stageIndex}
              controller={playback.controller}
              onSeek={(index) => leaveAnd(() => playback.seek(index))}
            />
          ) : null}
          {copies.length > 0 ? (
            <div
              className={`px-[var(--learn-panel-pad)] ${hasTrack ? "pt-3" : "pt-4"} ${playback ? "pb-2" : "pb-4"}`}
            >
              <StageExplanation
                copies={copies}
                activeKey={activeKey}
                onClose={close}
                closeRef={closeRef}
                compact={Boolean(playback?.snapshot.playing) && !card}
              />
            </div>
          ) : null}
          {playback ? (
            <div className="px-[var(--learn-panel-pad)] pb-3">
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

function explanationCopies({
  idle,
  stages,
  parts,
  reserves,
  card,
}: {
  idle?: { title?: string; text: string };
  stages?: readonly LearnStageCopy[];
  parts?: readonly LearnPartCopy[];
  reserves?: readonly { title: string; text: string; cites?: readonly string[] }[];
  card: SceneCardAnchor | null;
}): ExplanationCopy[] {
  const copies: ExplanationCopy[] = [];

  if (idle?.text) {
    copies.push({ key: "prompt", title: idle.title ?? "", text: idle.text });
  }

  for (const item of stages ?? []) {
    copies.push({
      key: item.id,
      title: item.title || item.label,
      text: item.text,
      cites: item.cites,
    });
  }

  for (const part of parts ?? []) {
    const selected = card?.id === part.id;
    copies.push({
      key: `part-${part.id}`,
      title: selected ? card.label : part.label,
      text: selected ? card.text : part.text,
      cites: selected ? card.cites : part.cites,
      closable: true,
    });
  }

  if (card && !copies.some((item) => item.key === `part-${card.id}`)) {
    copies.push({
      key: `part-${card.id}`,
      title: card.label,
      text: card.text,
      cites: card.cites,
      closable: true,
    });
  }

  reserves?.forEach((item, index) => {
    copies.push({
      key: `reserve-${index}`,
      title: item.title,
      text: item.text,
      cites: item.cites,
      closable: true,
    });
  });

  return copies;
}
