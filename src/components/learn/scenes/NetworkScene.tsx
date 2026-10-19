"use client";

import { useEffect, useRef } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { NetworkFigure } from "@/components/learn/illustrations/NetworkFigure";
import { LearnFrame } from "@/components/learn/LearnFrame";
import { PlaybackControls } from "@/components/learn/PlaybackControls";
import { StageCaption } from "@/components/learn/StageCaption";
import { applyFrameVars } from "@/components/learn/applyFrameVars";
import { useInView } from "@/components/learn/useInView";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { networkPlaybackStages, networkState } from "@/lib/learn/physiology";

const stages = networkPlaybackStages();

export function NetworkScene() {
  const scene = neuronsLesson.scenes[7];
  const [viewRef, inView] = useInView<HTMLDivElement>();
  const visualRef = useRef<HTMLDivElement>(null);
  const playback = useScenePlayback(stages, inView);
  const state = networkState(playback.snapshot.stageId);

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const next = networkState(snapshot.stageId);
      applyFrameVars(visualRef.current, {}, {
        active: next.active[0] ?? "",
        inhibited: next.inhibited[0] ?? "",
      });
    });
  }, [playback.controller]);

  return (
    <div ref={viewRef} className="flex flex-col gap-4">
      <div
        ref={visualRef}
        className="learn-network"
        data-active={state.active[0] ?? ""}
        data-inhibited={state.inhibited[0] ?? ""}
      >
        <LearnFrame className="sm:aspect-[16/10]">
          <NetworkFigure label={scene.textAlternative} />
        </LearnFrame>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
        <li>{learnUi.excitatory}</li>
        <li>{learnUi.inhibitory}</li>
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
