"use client";

import { useState } from "react";
import { learnArt } from "@/content/learn/art";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { SceneStage, hotspotsFromParts } from "@/components/learn/SceneStage";

const layout = {
  dendrites: { top: "8%", left: "1%", width: "34%", height: "82%" },
  soma: { top: "40%", left: "18%", width: "16%", height: "22%" },
  axon: { top: "38%", left: "36%", width: "62%", height: "34%" },
};

export function NeuronPartsScene() {
  const scene = neuronsLesson.scenes[1];
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <SceneStage
      label={scene.textAlternative}
      src={learnArt.neuron}
      hotspots={hotspotsFromParts(scene.parts, layout)}
      selectedId={selectedId}
      onSelect={setSelectedId}
    />
  );
}
