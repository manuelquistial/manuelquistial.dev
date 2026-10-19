"use client";

import { useEffect, useRef, useState } from "react";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { NeuronFigure } from "@/components/learn/illustrations/NeuronFigure";
import { LearnFrame } from "@/components/learn/LearnFrame";
import { PlaybackControls } from "@/components/learn/PlaybackControls";
import { StageCaption } from "@/components/learn/StageCaption";
import { applyFrameVars } from "@/components/learn/applyFrameVars";
import { useInView } from "@/components/learn/useInView";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { signalFrameVars, signalPlaybackStages } from "@/lib/learn/physiology";

const focus: Record<string, string> = {
  inputs: "0 0 520 520",
  integration: "120 40 480 460",
  threshold: "160 60 460 440",
  propagation: "340 80 620 360",
};

export function SignalScene() {
  const scene = neuronsLesson.scenes[2];
  const [viewRef, inView] = useInView<HTMLDivElement>();
  const visualRef = useRef<HTMLDivElement>(null);
  const [narrow, setNarrow] = useState(false);
  const playback = useScenePlayback(signalPlaybackStages(), inView);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 720px)");
    const update = () => setNarrow(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      applyFrameVars(
        visualRef.current,
        signalFrameVars(snapshot.time, snapshot.duration),
      );
    });
  }, [playback.controller]);

  const viewBox = narrow ? focus[playback.snapshot.stageId] ?? focus.inputs : undefined;

  return (
    <div ref={viewRef} className="flex flex-col gap-4">
      <div ref={visualRef}>
        <LearnFrame>
          <NeuronFigure
            label={scene.textAlternative}
            showSignals
            viewBox={viewBox}
          />
        </LearnFrame>
      </div>
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
