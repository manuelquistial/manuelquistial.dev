"use client";

import { useEffect, useRef } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { MembraneFigure } from "@/components/learn/illustrations/MembraneFigure";
import { LearnFrame } from "@/components/learn/LearnFrame";
import { PlaybackControls } from "@/components/learn/PlaybackControls";
import { StageCaption } from "@/components/learn/StageCaption";
import { applyFrameVars } from "@/components/learn/applyFrameVars";
import { useInView } from "@/components/learn/useInView";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { ionFrameVars, ionPlaybackStages } from "@/lib/learn/physiology";

const stages = ionPlaybackStages();

export function IonScene() {
  const scene = neuronsLesson.scenes[5];
  const [viewRef, inView] = useInView<HTMLDivElement>();
  const visualRef = useRef<HTMLDivElement>(null);
  const playback = useScenePlayback(stages, inView);

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      applyFrameVars(visualRef.current, ionFrameVars(snapshot.time, stages), {
        stage: snapshot.stageId,
      });
    });
  }, [playback.controller]);

  return (
    <div ref={viewRef} className="flex flex-col gap-4">
      <div
        ref={visualRef}
        className="learn-membrane"
        data-stage={playback.snapshot.stageId}
      >
        <LearnFrame>
          <MembraneFigure label={scene.textAlternative} />
        </LearnFrame>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
        <li>{learnUi.sodium}</li>
        <li>{learnUi.potassium}</li>
        <li>{learnUi.pumpLegend}</li>
        <li>{learnUi.schematic}</li>
      </ul>
      <PlaybackControls
        playing={playback.snapshot.playing}
        speed={playback.snapshot.speed}
        canStep={playback.canStep}
        reducedMotion={playback.reducedMotion}
        onPlay={playback.play}
        onPause={playback.pause}
        onRestart={playback.restart}
        onStep={playback.step}
        onSpeed={playback.setSpeed}
      />
      <StageCaption stages={scene.stages} stageId={playback.snapshot.stageId} />
    </div>
  );
}
