"use client";

import { useEffect, useRef } from "react";
import type { LearnStageCopy } from "@/content/learn/types";
import { progressWithinStage, type PlaybackController } from "@/lib/learn/playback";

export function StageTrack({
  stages,
  stageIndex,
  controller,
  onSeek,
}: {
  stages: readonly LearnStageCopy[];
  stageIndex: number;
  controller: PlaybackController;
  onSeek: (index: number) => void;
}) {
  const fillRef = useRef<HTMLSpanElement | null>(null);
  const progressRef = useRef(0);
  const count = stages.length;
  const current = Math.min(Math.max(stageIndex, 0), Math.max(count - 1, 0));

  useEffect(() => {
    return controller.onFrame((snapshot) => {
      progressRef.current = progressWithinStage(snapshot.time, {
        id: snapshot.stageId,
        start: snapshot.stageStart,
        end: snapshot.stageEnd,
      });
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${progressRef.current})`;
      }
    });
  }, [controller]);

  if (count === 0) return null;

  return (
    <div className="px-[var(--learn-panel-pad)] pt-4">
      <p className="text-sm font-medium text-muted">
        Etapa {current + 1} de {count}
      </p>
      <div role="tablist" aria-label="Etapas de la animación" className="mt-2 flex gap-1">
        {stages.map((stage, index) => {
          const selected = index === current;
          const done = index < current;
          return (
            <button
              key={stage.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={`${stage.label}. Etapa ${index + 1} de ${count}`}
              className="flex min-h-11 min-w-0 flex-1 flex-col justify-center rounded-[6px] px-1 text-left transition-colors duration-150 hover:bg-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-foreground"
              onClick={() => onSeek(index)}
            >
              <span className="block h-1 overflow-hidden rounded-full bg-foreground/15" aria-hidden="true">
                <span
                  ref={selected ? (node) => {
                    fillRef.current = node;
                    if (node) node.style.transform = `scaleX(${progressRef.current})`;
                  } : undefined}
                  className={`block h-full origin-left rounded-full ${done || selected ? "bg-accent" : "bg-transparent"} ${done ? "opacity-45" : ""}`}
                  style={done ? { transform: "scaleX(1)" } : undefined}
                />
              </span>
              <span
                className={`mt-1 hidden truncate text-xs sm:block ${selected ? "font-semibold text-foreground" : done ? "text-foreground/70" : "text-muted"}`}
              >
                {stage.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
