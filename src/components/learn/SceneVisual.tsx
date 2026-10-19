"use client";

import type { ComponentType } from "react";
import { neuronSceneIds, type NeuronSceneId } from "@/content/learn/scene-ids";
import { IonScene } from "@/components/learn/scenes/IonScene";
import { MyelinScene } from "@/components/learn/scenes/MyelinScene";
import { NetworkScene } from "@/components/learn/scenes/NetworkScene";
import { NeuronOverviewScene } from "@/components/learn/scenes/NeuronOverviewScene";
import { NeuronPartsScene } from "@/components/learn/scenes/NeuronPartsScene";
import { SignalScene } from "@/components/learn/scenes/SignalScene";
import { SynapseScene } from "@/components/learn/scenes/SynapseScene";
import { VoltageScene } from "@/components/learn/scenes/VoltageScene";

const sceneLoaders = {
  "una-neurona": NeuronOverviewScene,
  partes: NeuronPartsScene,
  "recibir-y-transmitir": SignalScene,
  "glia-y-mielina": MyelinScene,
  sinapsis: SynapseScene,
  "iones-y-membrana": IonScene,
  "diferencia-de-potencial": VoltageScene,
  "red-neuronal": NetworkScene,
} satisfies Record<NeuronSceneId, ComponentType>;

function isNeuronSceneId(value: string): value is NeuronSceneId {
  return (neuronSceneIds as readonly string[]).includes(value);
}

export function SceneVisual({ sceneId }: { sceneId: string }) {
  if (!isNeuronSceneId(sceneId)) return null;
  const Visual = sceneLoaders[sceneId];
  return <Visual />;
}
