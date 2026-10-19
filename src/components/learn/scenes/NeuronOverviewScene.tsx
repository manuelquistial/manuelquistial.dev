"use client";

import { useState } from "react";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { NeuronArt } from "@/components/learn/illustrations/NeuronArt";
import { SceneStage } from "@/components/learn/SceneStage";

export function NeuronOverviewScene() {
  const scene = neuronsLesson.scenes[0];
  const [zoomed, setZoomed] = useState(false);

  return (
    <SceneStage label={scene.textAlternative} zoomed={zoomed} onZoom={() => setZoomed((value) => !value)}>
      <NeuronArt label={scene.textAlternative} />
    </SceneStage>
  );
}
