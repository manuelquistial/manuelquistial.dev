"use client";

import { useState } from "react";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { NeuronArt } from "@/components/learn/illustrations/NeuronArt";
import { neuronAnchors } from "@/components/learn/illustrations/neuronModel";
import { SceneStage, cardFor } from "@/components/learn/SceneStage";

export function NeuronPartsScene() {
  const scene = neuronsLesson.scenes[1];
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const labels = Object.fromEntries((scene.parts ?? []).map((part) => [part.id, part.label]));

  return (
    <SceneStage
      label={scene.textAlternative}
      card={cardFor(scene.parts, neuronAnchors, selectedId)}
      onClose={() => setSelectedId(null)}
    >
      <NeuronArt
        labels={labels}
        selectedId={selectedId}
        hintId={scene.parts?.[0]?.id}
        onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
      />
    </SceneStage>
  );
}
