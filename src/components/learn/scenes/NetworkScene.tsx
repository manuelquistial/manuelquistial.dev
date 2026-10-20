"use client";

import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { NetworkArt } from "@/components/learn/illustrations/NetworkArt";
import { SceneStage } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { networkPlaybackStages, networkState } from "@/lib/learn/physiology";

export function NetworkScene() {
  const scene = neuronsLesson.scenes[7];
  const playback = useScenePlayback(networkPlaybackStages());
  const state = networkState(playback.snapshot.stageId);

  return (
    <SceneStage
      label={scene.textAlternative}
      playback={playback}
      stages={scene.stages}
      legend={
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          <li className="learn-key-excitatory">{learnUi.excitatory}</li>
          <li className="learn-key-inhibitory">{learnUi.inhibitory}</li>
        </ul>
      }
    >
      <NetworkArt active={state.active} inhibited={state.inhibited} />
    </SceneStage>
  );
}
