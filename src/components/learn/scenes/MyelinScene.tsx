"use client";

import { useState } from "react";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { GliaArt, gliaAnchors } from "@/components/learn/illustrations/GliaArt";
import { SceneStage, cardFor } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { myelinFrame, myelinPlaybackStages } from "@/lib/learn/physiology";

export function MyelinScene() {
  const scene = neuronsLesson.scenes[3];
  const playback = useScenePlayback(myelinPlaybackStages());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const caption = scene.stages?.find((item) => item.id === playback.snapshot.stageId);
  const labels = Object.fromEntries((scene.parts ?? []).map((part) => [part.id, part.label]));
  const activeNode = myelinFrame(playback.snapshot.stageId, 0).activeNode;

  return (
    <SceneStage
      label={scene.textAlternative}
      playback={playback}
      caption={caption}
      card={cardFor(scene.parts, gliaAnchors, selectedId)}
      onClose={() => setSelectedId(null)}
    >
      <GliaArt
        labels={labels}
        selectedId={selectedId}
        hintId={scene.parts?.[0]?.id}
        activeNode={activeNode}
        onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
      />
    </SceneStage>
  );
}
