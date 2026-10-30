"use client";

import { useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { getNeuronScene } from "@/content/learn/es/neurons";
import { NeuronArt } from "@/components/learn/illustrations/NeuronArt";
import { neuronAnchors } from "@/components/learn/illustrations/neuronModel";
import { ScenePrompt } from "@/components/learn/ScenePrompt";
import { SceneStage, cardFor } from "@/components/learn/SceneStage";

export function NeuronPartsScene() {
  const scene = getNeuronScene("partes");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const labels = Object.fromEntries((scene.parts ?? []).map((part) => [part.id, part.label]));

  return (
    <SceneStage
      label={scene.textAlternative}
      parts={scene.parts}
      card={cardFor(scene.parts, neuronAnchors, selectedId)}
      onClose={() => setSelectedId(null)}
      leading={
        !selectedId && scene.prompt ? (
          <ScenePrompt title={learnUi.exploreNeuron} text={scene.prompt} />
        ) : null
      }
    >
      <NeuronArt
        labels={labels}
        selectedId={selectedId}
        hintId={selectedId ? undefined : scene.parts?.[0]?.id}
        onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
      />
    </SceneStage>
  );
}
