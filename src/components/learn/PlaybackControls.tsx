"use client";

import { learnUi } from "@/content/learn/es/ui";
import { PLAYBACK_SPEEDS } from "@/lib/learn/playback";
import {
  learnControlActiveClass,
  learnControlClass,
} from "@/components/learn/controlClass";
import { cn } from "@/lib/utils";

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
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={learnControlClass}
          onClick={onPlay}
          disabled={playing || reducedMotion}
          title={reducedMotion ? learnUi.reducedPlay : undefined}
        >
          {learnUi.play}
        </button>
        <button
          type="button"
          className={learnControlClass}
          onClick={onPause}
          disabled={!playing}
        >
          {learnUi.pause}
        </button>
        <button type="button" className={learnControlClass} onClick={onRestart}>
          {learnUi.restart}
        </button>
        <button
          type="button"
          className={learnControlClass}
          onClick={onStep}
          disabled={!canStep}
        >
          {learnUi.step}
        </button>
      </div>
      <div
        role="group"
        aria-label={learnUi.speedLabel}
        className="flex flex-wrap items-center gap-2"
      >
        <span className="text-sm font-semibold text-foreground">
          {learnUi.speedLabel}
        </span>
        {PLAYBACK_SPEEDS.map((value) => (
          <button
            key={value}
            type="button"
            className={cn(learnControlClass, speed === value && learnControlActiveClass)}
            aria-pressed={speed === value}
            disabled={reducedMotion}
            onClick={() => onSpeed(value)}
          >
            {value.toLocaleString("es-CO")}×
          </button>
        ))}
      </div>
      <p className="max-w-[65ch] text-sm leading-relaxed text-muted">
        {reducedMotion ? learnUi.reduced : learnUi.speedNote}
      </p>
    </div>
  );
}
