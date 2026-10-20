"use client";

import { useEffect, useRef } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { NeuronArt } from "@/components/learn/illustrations/NeuronArt";
import { VoltageGraph } from "@/components/learn/illustrations/VoltageGraph";
import { SceneStage } from "@/components/learn/SceneStage";
import { applyFrameVars } from "@/components/learn/applyFrameVars";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { voltageFrameVars, voltagePlaybackStages } from "@/lib/learn/physiology";

export function VoltageScene() {
  const scene = neuronsLesson.scenes[6];
  const playback = useScenePlayback(voltagePlaybackStages());
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      applyFrameVars(graphRef.current, voltageFrameVars(snapshot.time, snapshot.duration));
    });
  }, [playback.controller]);

  return (
    <SceneStage
      label={scene.textAlternative}
      playback={playback}
      stages={scene.stages}
      legend={<p>{learnUi.graphCaption}</p>}
      aside={
        <div ref={graphRef} className="learn-voltage h-full min-h-48">
          <VoltageGraph label={learnUi.graphCaption} />
        </div>
      }
    >
      <NeuronArt label={scene.textAlternative} showMeasure />
    </SceneStage>
  );
}
