"use client";

import { useEffect, useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { NetworkArt, networkAnchors } from "@/components/learn/illustrations/NetworkArt";
import { SceneStage, cardFor } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { progressWithinStage } from "@/lib/learn/playback";
import { networkPlaybackStages, networkState } from "@/lib/learn/physiology";

const linkFor: Record<string, string> = {
  input: "ab",
  relay: "bc",
  split: "bd",
};

const localFor: Record<string, "n2" | "n3" | "n4" | null> = {
  idle: null,
  input: "n2",
  relay: "n3",
  split: "n4",
};

const moment: Record<string, Record<string, string>> = {
  idle: {
    "cell-a": "A está en reposo. En este ejemplo es la célula que inicia el episodio.",
    "cell-b": "B espera una entrada excitatoria de A.",
    "cell-c": "C todavía no recibe la señal de B.",
    "cell-d": "D puede recibir una conexión inhibitoria desde B. Ahora no hay actividad.",
  },
  input: {
    "cell-a": "A inicia el episodio. La franja recorre su axón hasta el terminal que contacta con B.",
    "cell-b": "B muestra una respuesta local. Aún no dispara.",
  },
  relay: {
    "cell-b": "B dispara después de esa respuesta. Su axón lleva la señal hacia C.",
    "cell-c": "C recibe una respuesta local excitatoria.",
  },
  split: {
    "cell-c": "C dispara. La conexión que llegó desde B era excitatoria.",
    "cell-d": "D recibe la conexión inhibitoria, marcada con el signo menos. Hay respuesta local, pero no dispara.",
    "cell-b": "Desde B salen dos caminos: uno excitatorio hacia C y otro inhibitorio hacia D.",
  },
};

export function NetworkScene() {
  const scene = neuronsLesson.scenes[7];
  const playback = useScenePlayback(networkPlaybackStages());
  const rootRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const state = networkState(playback.snapshot.stageId);
  const labels = Object.fromEntries((scene.parts ?? []).map((part) => [part.id, part.label]));
  const parts = (scene.parts ?? []).map((part) => ({
    ...part,
    text: moment[playback.snapshot.stageId]?.[part.id] ?? part.text,
  }));

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const root = rootRef.current;
      if (!root) return;
      const bounds = networkPlaybackStages();
      const stage = bounds.find((item) => item.id === snapshot.stageId);
      const amount = progressWithinStage(snapshot.time, stage);
      const current = linkFor[snapshot.stageId];
      root.querySelectorAll<SVGPathElement>(".learn-link").forEach((path) => {
        const on = path.dataset.link === current;
        path.setAttribute("opacity", on ? "1" : "0");
        path.setAttribute("stroke-dashoffset", String(1 - amount));
      });
    });
  }, [playback.controller, playback.snapshot.stageId, playback.snapshot.time]);

  return (
    <SceneStage
      label={scene.textAlternative}
      playback={playback}
      stages={scene.stages}
      card={cardFor(parts, networkAnchors, selectedId)}
      onClose={() => setSelectedId(null)}
      legend={
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          <li className="learn-key-excitatory">{learnUi.excitatory}</li>
          <li className="learn-key-inhibitory">{learnUi.inhibitory}</li>
        </ul>
      }
    >
      <div ref={rootRef} className="relative">
        <NetworkArt
          active={state.active}
          inhibited={state.inhibited}
          local={localFor[playback.snapshot.stageId] ?? null}
          labels={labels}
          selectedId={selectedId}
          onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
        />
      </div>
    </SceneStage>
  );
}
