"use client";

import { useEffect, useRef, useState } from "react";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { MyelinFigure } from "@/components/learn/illustrations/MyelinFigure";
import { LearnFrame } from "@/components/learn/LearnFrame";
import { PlaybackControls } from "@/components/learn/PlaybackControls";
import { StageCaption } from "@/components/learn/StageCaption";
import { applyFrameVars } from "@/components/learn/applyFrameVars";
import { useInView } from "@/components/learn/useInView";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import {
  learnControlActiveClass,
  learnControlClass,
} from "@/components/learn/controlClass";
import { cn } from "@/lib/utils";
import { myelinFrame, myelinPlaybackStages } from "@/lib/learn/physiology";
import { progressWithinStage } from "@/lib/learn/playback";

type MyelinPart = "myelin" | "glia" | "nodes";

export function MyelinScene() {
  const scene = neuronsLesson.scenes[3];
  const [selected, setSelected] = useState<MyelinPart | null>(null);
  const [viewRef, inView] = useInView<HTMLDivElement>();
  const visualRef = useRef<HTMLDivElement>(null);
  const playback = useScenePlayback(myelinPlaybackStages(), inView);
  const part = scene.parts?.find((item) => item.id === selected);
  const activeNode = myelinFrame(playback.snapshot.stageId, 0).activeNode;

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const stages = myelinPlaybackStages();
      const stage = stages[snapshot.stageIndex];
      const frame = myelinFrame(
        snapshot.stageId,
        progressWithinStage(snapshot.time, stage),
      );
      applyFrameVars(
        visualRef.current,
        { "--spread": String(frame.spread) },
        { activeNode: String(frame.activeNode) },
      );
    });
  }, [playback.controller]);

  return (
    <div ref={viewRef} className="flex flex-col gap-4">
      <div ref={visualRef} className="learn-myelin" data-active-node={activeNode}>
        <LearnFrame>
          <MyelinFigure
            label={scene.textAlternative}
            selected={selected}
            onSelect={setSelected}
          />
        </LearnFrame>
      </div>
      <div role="group" aria-label={scene.title} className="flex flex-wrap gap-2">
        {scene.parts?.map((item) => (
          <button
            key={item.id}
            type="button"
            className={cn(
              learnControlClass,
              selected === item.id && learnControlActiveClass,
            )}
            aria-pressed={selected === item.id}
            onClick={() => setSelected(item.id as MyelinPart)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {part ? (
        <p className="max-w-[65ch] text-sm leading-relaxed text-foreground" aria-live="polite">
          <span className="font-semibold">{part.label}.</span> {part.text}
        </p>
      ) : null}
      <PlaybackControls
        playing={playback.snapshot.playing}
        speed={playback.snapshot.speed}
        canStep={playback.canStep}
        reducedMotion={playback.reducedMotion}
        onPlay={playback.play}
        onPause={playback.pause}
        onRestart={() => {
          setSelected(null);
          playback.restart();
        }}
        onStep={playback.step}
        onSpeed={playback.setSpeed}
      />
      <StageCaption stages={scene.stages} stageId={playback.snapshot.stageId} />
    </div>
  );
}
