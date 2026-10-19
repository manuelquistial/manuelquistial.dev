"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { neuronSceneIds, type NeuronSceneId } from "@/content/learn/scene-ids";
import { LearnFrame } from "@/components/learn/LearnFrame";

function SceneFallback() {
  return (
    <LearnFrame>
      <div className="h-full w-full bg-surface" />
    </LearnFrame>
  );
}

const sceneLoaders = {
  "una-neurona": dynamic(
    () =>
      import("@/components/learn/scenes/NeuronOverviewScene").then(
        (mod) => mod.NeuronOverviewScene,
      ),
    { loading: SceneFallback },
  ),
  partes: dynamic(
    () =>
      import("@/components/learn/scenes/NeuronPartsScene").then(
        (mod) => mod.NeuronPartsScene,
      ),
    { loading: SceneFallback },
  ),
  "recibir-y-transmitir": dynamic(
    () =>
      import("@/components/learn/scenes/SignalScene").then((mod) => mod.SignalScene),
    { loading: SceneFallback },
  ),
  "glia-y-mielina": dynamic(
    () =>
      import("@/components/learn/scenes/MyelinScene").then((mod) => mod.MyelinScene),
    { loading: SceneFallback },
  ),
  sinapsis: dynamic(
    () =>
      import("@/components/learn/scenes/SynapseScene").then((mod) => mod.SynapseScene),
    { loading: SceneFallback },
  ),
  "iones-y-membrana": dynamic(
    () => import("@/components/learn/scenes/IonScene").then((mod) => mod.IonScene),
    { loading: SceneFallback },
  ),
  "diferencia-de-potencial": dynamic(
    () =>
      import("@/components/learn/scenes/VoltageScene").then((mod) => mod.VoltageScene),
    { loading: SceneFallback },
  ),
  "red-neuronal": dynamic(
    () =>
      import("@/components/learn/scenes/NetworkScene").then((mod) => mod.NetworkScene),
    { loading: SceneFallback },
  ),
} satisfies Record<NeuronSceneId, ComponentType>;

function isNeuronSceneId(value: string): value is NeuronSceneId {
  return (neuronSceneIds as readonly string[]).includes(value);
}

export function SceneVisual({ sceneId }: { sceneId: string }) {
  if (!isNeuronSceneId(sceneId)) return null;
  const Visual = sceneLoaders[sceneId];
  return <Visual />;
}
