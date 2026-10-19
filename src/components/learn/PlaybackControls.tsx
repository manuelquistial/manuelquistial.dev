"use client";

import { useEffect, useId, useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { PLAYBACK_SPEEDS } from "@/lib/learn/playback";
import { IconPause, IconPlay, IconRestart, IconStep } from "@/components/learn/icons";

const iconButtonClass =
  "inline-flex size-11 items-center justify-center rounded-[6px] border border-border bg-surface text-foreground transition-colors duration-150 hover:border-foreground/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground disabled:cursor-not-allowed disabled:opacity-45";

interface PlaybackControlsProps {
  playing: boolean;
  speed: number;
  canStep: boolean;
  reducedMotion: boolean;
  onPlay: () => void;
  onPause: () => void;
  onRestart: () => void;
  onStep: () => void;
  onSpeed: (speed: number) => void;
}

export function PlaybackControls({
  playing,
  speed,
  canStep,
  reducedMotion,
  onPlay,
  onPause,
  onRestart,
  onStep,
  onSpeed,
}: PlaybackControlsProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="flex items-center gap-1">
      <button
        type="button"
        className={iconButtonClass}
        aria-label={playing ? learnUi.pause : learnUi.play}
        title={reducedMotion ? learnUi.reducedPlay : playing ? learnUi.pause : learnUi.play}
        disabled={reducedMotion}
        onClick={playing ? onPause : onPlay}
      >
        {playing ? <IconPause /> : <IconPlay />}
      </button>
      <button
        type="button"
        className={iconButtonClass}
        aria-label={learnUi.restart}
        title={learnUi.restart}
        onClick={onRestart}
      >
        <IconRestart />
      </button>
      <button
        type="button"
        className={iconButtonClass}
        aria-label={learnUi.step}
        title={reducedMotion ? learnUi.reducedPlay : learnUi.step}
        disabled={!canStep}
        onClick={onStep}
      >
        <IconStep />
      </button>
      <div className="relative">
        <button
          type="button"
          className={`${iconButtonClass} w-auto min-w-11 px-2 text-sm font-semibold`}
          aria-label={learnUi.speedLabel}
          title={`${learnUi.speedLabel}. ${learnUi.speedNote}`}
          aria-expanded={open}
          aria-controls={menuId}
          disabled={reducedMotion}
          onClick={() => setOpen((value) => !value)}
        >
          {speed.toLocaleString("es-CO")}×
        </button>
        {open ? (
          <div
            id={menuId}
            role="menu"
            className="absolute bottom-12 right-0 z-20 min-w-24 rounded-[8px] border border-border bg-surface p-1 shadow-sm"
          >
            {PLAYBACK_SPEEDS.map((value) => (
              <button
                key={value}
                type="button"
                role="menuitemradio"
                aria-checked={speed === value}
                className="flex min-h-11 w-full items-center rounded-[6px] px-3 text-left text-sm font-semibold text-foreground hover:bg-surface-soft"
                onClick={() => {
                  onSpeed(value);
                  setOpen(false);
                }}
              >
                {value.toLocaleString("es-CO")}×
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
