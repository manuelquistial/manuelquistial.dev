"use client";

import { useEffect, useRef } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { MembraneFigure } from "@/components/learn/illustrations/MembraneFigure";
import { VoltageGraph } from "@/components/learn/illustrations/VoltageGraph";
import { LearnFrame } from "@/components/learn/LearnFrame";
import { PlaybackControls } from "@/components/learn/PlaybackControls";
import { StageCaption } from "@/components/learn/StageCaption";
import { applyFrameVars } from "@/components/learn/applyFrameVars";
import { useInView } from "@/components/learn/useInView";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { voltageFrameVars, voltagePlaybackStages } from "@/lib/learn/physiology";

const stages = voltagePlaybackStages();

export function VoltageScene() {
  const scene = neuronsLesson.scenes[6];
  const [viewRef, inView] = useInView<HTMLDivElement>();
  const visualRef = useRef<HTMLDivElement>(null);
  const playback = useScenePlayback(stages, inView);

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      applyFrameVars(
        visualRef.current,
        voltageFrameVars(snapshot.time, snapshot.duration),
        { stage: snapshot.stageId },
      );
    });
  }, [playback.controller]);

  return (
    <div ref={viewRef} className="flex flex-col gap-4">
      <div
        ref={visualRef}
        className="learn-voltage grid gap-4 lg:grid-cols-2"
        data-stage={playback.snapshot.stageId}
      >
        <LearnFrame>
          <MembraneFigure label={scene.textAlternative} />
        </LearnFrame>
        <LearnFrame>
          <VoltageGraph label={learnUi.graphCaption} />
        </LearnFrame>
      </div>
      <p className="max-w-[65ch] text-sm leading-relaxed text-muted">
        {learnUi.voltageExample} {learnUi.graphCaption}
      </p>
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
