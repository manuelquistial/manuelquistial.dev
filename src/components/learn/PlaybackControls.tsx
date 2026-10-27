"use client";

import { useEffect, useId, useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { PLAYBACK_SPEEDS } from "@/lib/learn/playback";
import {
  IconPause,
  IconPlay,
  IconRestart,
  IconStep,
  IconStepBack,
} from "@/components/learn/icons";

const ghostButtonClass =
  "group relative inline-flex size-11 items-center justify-center rounded-full bg-transparent text-foreground transition-colors duration-150 hover:bg-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-foreground disabled:cursor-not-allowed disabled:opacity-40";

const playButtonClass =
  "group relative inline-flex size-12 items-center justify-center rounded-full bg-accent text-white transition-colors duration-150 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-45";

function formatSpeed(value: number) {
  return `${value.toLocaleString("es-CO")}×`;
}

function Tip({ label, align = "center" }: { label: string; align?: "start" | "end" | "center" }) {
  const position = align === "start" ? "left-0" : align === "end" ? "right-0" : "left-1/2 -translate-x-1/2";
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-[calc(100%+0.35rem)] z-30 whitespace-nowrap rounded-[6px] bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 ${position}`}
    >
      {label}
    </span>
  );
}

interface PlaybackControlsProps {
  playing: boolean;
  speed: number;
  canStep: boolean;
  canStepBack: boolean;
  reducedMotion: boolean;
  onPlay: () => void;
  onPause: () => void;
  onRestart: () => void;
  onStep: () => void;
  onStepBack: () => void;
  onSpeed: (speed: number) => void;
}

export function PlaybackControls({
  playing,
  speed,
  canStep,
  canStepBack,
  reducedMotion,
  onPlay,
  onPause,
  onRestart,
  onStep,
  onStepBack,
  onSpeed,
}: PlaybackControlsProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const playLabel = reducedMotion ? learnUi.reducedPlay : playing ? learnUi.pause : learnUi.play;

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
    const current = rootRef.current?.querySelector<HTMLButtonElement>("[aria-checked='true']");
    current?.focus();
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="flex w-full items-center justify-between gap-2">
      <div className="flex items-center gap-1">
        <button
          type="button"
          className={ghostButtonClass}
          aria-label={learnUi.previous}
          disabled={!canStepBack}
          onClick={onStepBack}
        >
          <IconStepBack />
          <Tip label={learnUi.previous} align="start" />
        </button>
        <button
          type="button"
          className={playButtonClass}
          aria-label={playing ? learnUi.pause : learnUi.play}
          aria-pressed={playing}
          disabled={reducedMotion}
          onClick={playing ? onPause : onPlay}
        >
          {playing ? <IconPause /> : <IconPlay />}
          <Tip label={playLabel} />
        </button>
        <button
          type="button"
          className={ghostButtonClass}
          aria-label={learnUi.step}
          disabled={!canStep}
          onClick={onStep}
        >
          <IconStep />
          <Tip label={learnUi.step} />
        </button>
      </div>
      <div className="flex items-center gap-1">
        <button type="button" className={ghostButtonClass} aria-label={learnUi.restart} onClick={onRestart}>
          <IconRestart />
          <Tip label={learnUi.restart} align="end" />
        </button>
        <div className="relative">
          <button
            type="button"
            className={`${ghostButtonClass} w-auto min-w-11 px-2 text-sm font-semibold`}
            aria-label={`${learnUi.speedLabel}, ${formatSpeed(speed)}`}
            aria-expanded={open}
            aria-controls={menuId}
            aria-haspopup="menu"
            disabled={reducedMotion}
            onClick={() => setOpen((value) => !value)}
          >
            {formatSpeed(speed)}
            <Tip label={`${learnUi.speedLabel}. ${learnUi.speedNote}`} align="end" />
          </button>
          {open ? (
            <div
              id={menuId}
              role="menu"
              aria-label={learnUi.speedLabel}
              className="absolute right-0 bottom-full z-30 mb-1 max-h-[min(50vh,16rem)] w-36 overflow-y-auto overscroll-contain rounded-[8px] border border-border bg-surface p-1 shadow-sm"
            >
              {PLAYBACK_SPEEDS.map((value) => {
                const selected = speed === value;
                return (
                  <button
                    key={value}
                    type="button"
                    role="menuitemradio"
                    aria-checked={selected}
                    className={`flex min-h-11 w-full items-center gap-2 rounded-[6px] px-3 text-left text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-foreground ${selected ? "bg-surface-soft font-semibold text-foreground" : "font-medium text-foreground hover:bg-surface-soft"}`}
                    onClick={() => {
                      onSpeed(value);
                      setOpen(false);
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className={`size-2 rounded-full ${selected ? "bg-accent" : "bg-transparent"}`}
                    />
                    {formatSpeed(value)}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
