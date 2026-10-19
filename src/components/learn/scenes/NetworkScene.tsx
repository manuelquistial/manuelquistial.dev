"use client";

import { learnArt } from "@/content/learn/art";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { SceneStage } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { networkPlaybackStages, networkState } from "@/lib/learn/physiology";

const cells = [
  { id: "n1", left: "11.2%", top: "20.9%" },
  { id: "n2", left: "39.8%", top: "15.6%" },
  { id: "n3", left: "55.2%", top: "40%" },
  { id: "n4", left: "41.4%", top: "72.2%" },
];

export function NetworkScene() {
  const scene = neuronsLesson.scenes[7];
  const playback = useScenePlayback(networkPlaybackStages());
  const state = networkState(playback.snapshot.stageId);
  const caption = scene.stages?.find((item) => item.id === playback.snapshot.stageId);

  return (
    <SceneStage
      label={scene.textAlternative}
      src={learnArt.network}
      playback={playback}
      caption={caption}
      legend={
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          <li className="learn-key-excitatory">{learnUi.excitatory}</li>
          <li className="learn-key-inhibitory">{learnUi.inhibitory}</li>
        </ul>
      }
      overlay={
        <div className="absolute inset-0">
          {cells.map((cell) => {
            const active = state.active.includes(cell.id);
            const inhibited = state.inhibited.includes(cell.id);
            return (
              <span
                key={cell.id}
                className={`learn-net-ring ${active ? "is-active" : ""} ${inhibited ? "is-inhibited" : ""}`}
                style={{ left: cell.left, top: cell.top }}
              />
            );
          })}
        </div>
      }
    />
  );
}
