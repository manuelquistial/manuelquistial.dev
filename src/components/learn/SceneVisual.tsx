"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type ComponentType } from "react";
import { neuronSceneIds, type NeuronSceneId } from "@/content/learn/scene-ids";

const sceneLoaders = {
  "una-neurona": () =>
    import("@/components/learn/scenes/NeuronOverviewScene").then(
      (mod) => mod.NeuronOverviewScene,
    ),
  partes: () =>
    import("@/components/learn/scenes/NeuronPartsScene").then(
      (mod) => mod.NeuronPartsScene,
    ),
  "recibir-y-transmitir": () =>
    import("@/components/learn/scenes/SignalScene").then((mod) => mod.SignalScene),
  "glia-y-mielina": () =>
    import("@/components/learn/scenes/MyelinScene").then((mod) => mod.MyelinScene),
  sinapsis: () =>
    import("@/components/learn/scenes/SynapseScene").then((mod) => mod.SynapseScene),
  "iones-y-membrana": () =>
    import("@/components/learn/scenes/IonScene").then((mod) => mod.IonScene),
  "diferencia-de-potencial": () =>
    import("@/components/learn/scenes/VoltageScene").then((mod) => mod.VoltageScene),
  "red-neuronal": () =>
    import("@/components/learn/scenes/NetworkScene").then((mod) => mod.NetworkScene),
} satisfies Record<NeuronSceneId, () => Promise<ComponentType>>;

const dynamicScenes = Object.fromEntries(
  (Object.keys(sceneLoaders) as NeuronSceneId[]).map((id) => [
    id,
    dynamic(sceneLoaders[id], {
      ssr: false,
      loading: () => <SceneFallback />,
    }),
  ]),
) as Record<NeuronSceneId, ComponentType>;

function isNeuronSceneId(value: string): value is NeuronSceneId {
  return (neuronSceneIds as readonly string[]).includes(value);
}

function SceneFallback() {
  return (
    <div
      className="min-h-[16rem] w-full animate-pulse rounded-[8px] border border-border bg-[#eef3f6]"
      aria-hidden="true"
    />
  );
}

export function SceneVisual({
  sceneId,
  eager = false,
}: {
  sceneId: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(eager);

  useEffect(() => {
    if (active) return;
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [active]);

  if (!isNeuronSceneId(sceneId)) return null;
  const Visual = dynamicScenes[sceneId];

  return (
    <div ref={ref}>
      {active ? <Visual /> : <SceneFallback />}
    </div>
  );
}
