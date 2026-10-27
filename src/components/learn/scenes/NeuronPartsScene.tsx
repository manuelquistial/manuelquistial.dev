"use client";

import { useState } from "react";
import { getNeuronScene } from "@/content/learn/es/neurons";
import { NeuronArt } from "@/components/learn/illustrations/NeuronArt";
import { neuronAnchors } from "@/components/learn/illustrations/neuronModel";
import { SceneStage, cardFor } from "@/components/learn/SceneStage";

export function NeuronPartsScene() {
  const scene = getNeuronScene("partes");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const labels = Object.fromEntries((scene.parts ?? []).map((part) => [part.id, part.label]));

  return (
    <SceneStage
      label={scene.textAlternative}
      idle={scene.prompt ? { text: scene.prompt } : undefined}
      parts={scene.parts}
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
