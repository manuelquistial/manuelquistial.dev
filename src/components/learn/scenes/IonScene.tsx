"use client";

import { useEffect, useRef, useState } from "react";
import { learnArt } from "@/content/learn/art";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { SceneStage, hotspotsFromParts } from "@/components/learn/SceneStage";
import { applyFrameVars } from "@/components/learn/applyFrameVars";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { progressWithinStage } from "@/lib/learn/playback";
import { ionPlaybackStages, referenceIonMotion } from "@/lib/learn/physiology";

const layout = {
  "sodium-channel": { top: "32%", left: "12%", width: "14%", height: "34%" },
  "potassium-channel": { top: "32%", left: "34%", width: "14%", height: "34%" },
  "other-proteins": { top: "32%", left: "56%", width: "36%", height: "34%" },
  sodium: { top: "16%", left: "8%", width: "22%", height: "16%" },
  potassium: { top: "68%", left: "30%", width: "22%", height: "16%" },
};

export function IonScene() {
  const scene = neuronsLesson.scenes[5];
  const playback = useScenePlayback(ionPlaybackStages());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const caption = scene.stages?.find((item) => item.id === playback.snapshot.stageId);

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const stage = ionPlaybackStages().find((item) => item.id === snapshot.stageId);
      const motion = referenceIonMotion(
        snapshot.stageId,
        progressWithinStage(snapshot.time, stage),
      );
      applyFrameVars(overlayRef.current, {
        "--na-top": `${motion.na}%`,
        "--k-top": `${motion.k}%`,
      });
    });
  }, [playback.controller]);

  return (
    <SceneStage
      label={scene.textAlternative}
      src={learnArt.membrane}
      playback={playback}
      caption={caption}
      hotspots={hotspotsFromParts(scene.parts, layout)}
      selectedId={selectedId}
      onSelect={setSelectedId}
      legend={
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          <li>{learnUi.sodium}</li>
          <li>{learnUi.potassium}</li>
          <li>{learnUi.schematic}</li>
        </ul>
      }
      overlay={
        <div ref={overlayRef} className="learn-ions absolute inset-0">
          <span className="learn-ion learn-ion-na">Na+</span>
          <span className="learn-ion learn-ion-na learn-ion-still" style={{ left: "8%", top: "18%" }}>
            Na+
          </span>
          <span className="learn-ion learn-ion-k">K+</span>
          <span className="learn-ion learn-ion-k learn-ion-still" style={{ left: "62%", top: "74%" }}>
            K+
          </span>
        </div>
      }
    />
  );
}
