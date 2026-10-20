"use client";

import { neuronsLesson } from "@/content/learn/es/neurons";
import { NeuronArt } from "@/components/learn/illustrations/NeuronArt";
import { SceneStage } from "@/components/learn/SceneStage";

export function NeuronOverviewScene() {
  const scene = neuronsLesson.scenes[0];

  return (
    <SceneStage label={scene.textAlternative}>
      <NeuronArt label={scene.textAlternative} />
    </SceneStage>
  );
}
