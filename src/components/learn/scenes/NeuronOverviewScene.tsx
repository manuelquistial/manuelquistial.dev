"use client";

import { useState } from "react";
import { learnArt } from "@/content/learn/art";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { SceneStage } from "@/components/learn/SceneStage";

export function NeuronOverviewScene() {
  const scene = neuronsLesson.scenes[0];
  const [zoomed, setZoomed] = useState(false);

  return (
    <SceneStage
      label={scene.textAlternative}
      src={learnArt.neuron}
      zoomed={zoomed}
      onZoom={() => setZoomed((value) => !value)}
    />
  );
}
