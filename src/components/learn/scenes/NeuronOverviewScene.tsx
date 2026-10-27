"use client";

import { getNeuronScene } from "@/content/learn/es/neurons";
import { NeuronArt } from "@/components/learn/illustrations/NeuronArt";
import { SceneStage } from "@/components/learn/SceneStage";

export function NeuronOverviewScene() {
  const scene = getNeuronScene("una-neurona");

  return (
    <SceneStage label={scene.textAlternative}>
      <NeuronArt label={scene.textAlternative} />
    </SceneStage>
  );
}
