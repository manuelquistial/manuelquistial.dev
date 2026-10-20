"use client";

import { useEffect, useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { MembraneArt, ionColumns, membraneAnchors, membraneView } from "@/components/learn/illustrations/MembraneArt";
import { SceneStage, cardFor } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { progressWithinStage } from "@/lib/learn/playback";
import { ionPlaybackStages, referenceIonMotion } from "@/lib/learn/physiology";

export function IonScene() {
  const scene = neuronsLesson.scenes[5];
  const playback = useScenePlayback(ionPlaybackStages());
  const artRef = useRef<SVGSVGElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const labels = Object.fromEntries((scene.parts ?? []).map((part) => [part.id, part.label]));
  const openChannel =
    playback.snapshot.stageId === "depolarization"
      ? "sodium"
      : playback.snapshot.stageId === "repolarization" || playback.snapshot.stageId === "hyperpolarization"
        ? "potassium"
        : "none";

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const art = artRef.current;
      if (!art) return;
      const stage = ionPlaybackStages().find((item) => item.id === snapshot.stageId);
      const motion = referenceIonMotion(snapshot.stageId, progressWithinStage(snapshot.time, stage));
      art
        .querySelector(".learn-na-ion")
        ?.setAttribute("transform", `translate(${ionColumns.sodium} ${(motion.na / 100) * membraneView.height})`);
      art
        .querySelector(".learn-k-ion")
        ?.setAttribute("transform", `translate(${ionColumns.potassium} ${(motion.k / 100) * membraneView.height})`);
    });
  }, [playback.controller]);

  return (
    <SceneStage
      label={scene.textAlternative}
      playback={playback}
      stages={scene.stages}
      card={cardFor(scene.parts, membraneAnchors, selectedId)}
      onClose={() => setSelectedId(null)}
      legend={
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          <li>{learnUi.sodium}</li>
          <li>{learnUi.potassium}</li>
        </ul>
      }
    >
      <MembraneArt
        ref={artRef}
        labels={labels}
        selectedId={selectedId}
        hintId={scene.parts?.[0]?.id}
        openChannel={openChannel}
        onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
      />
    </SceneStage>
  );
}
