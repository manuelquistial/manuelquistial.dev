"use client";

import { useEffect, useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { getNeuronScene } from "@/content/learn/es/neurons";
import { MembraneArt, membraneAnchors } from "@/components/learn/illustrations/MembraneArt";
import { ScenePrompt } from "@/components/learn/ScenePrompt";
import { SceneStage, cardFor } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { progressWithinStage } from "@/lib/learn/playback";
import { ionChannelState, membraneCast } from "@/lib/learn/casts";
import { ionPlaybackStages } from "@/lib/learn/physiology";

const ionLegend = (
  <ul className="flex flex-wrap gap-x-4 gap-y-1">
    <li>{learnUi.sodium}</li>
    <li>{learnUi.potassium}</li>
    <li>{learnUi.pumpLegend}</li>
  </ul>
);

const moment: Record<string, Record<string, string>> = {
  depolarization: {
    "sodium-channel": "El canal está abierto y permite la entrada de Na⁺.",
    "potassium-channel":
      "Al comienzo de esta fase, el canal de K⁺ dependiente de voltaje todavía está cerrado.",
  },
  repolarization: {
    "sodium-channel": "El canal está inactivado y deja de conducir Na⁺.",
    "potassium-channel": "El canal está abierto y permite la salida de K⁺.",
  },
  recovery: {
    "sodium-channel":
      "El canal sale de la inactivación y recupera su disponibilidad para responder.",
    "potassium-channel": "El canal vuelve a cerrarse.",
  },
};

export function IonScene() {
  const scene = getNeuronScene("iones-y-membrana");
  const playback = useScenePlayback(ionPlaybackStages());
  const artRef = useRef<SVGSVGElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const labels = Object.fromEntries((scene.parts ?? []).map((part) => [part.id, part.label]));
  const stage = ionPlaybackStages().find((item) => item.id === playback.snapshot.stageId);
  const progress = progressWithinStage(playback.snapshot.time, stage);
  const channels = ionChannelState(playback.snapshot.stageId, progress);
  const ions = membraneCast(playback.snapshot.stageId, progress);
  const parts = (scene.parts ?? []).map((part) => ({
    ...part,
    text: moment[playback.snapshot.stageId]?.[part.id] ?? part.text,
  }));

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const art = artRef.current;
      if (!art) return;
      const bounds = ionPlaybackStages();
      const current = bounds.find((item) => item.id === snapshot.stageId);
      const amount = progressWithinStage(snapshot.time, current);
      for (const ion of membraneCast(snapshot.stageId, amount)) {
        art.querySelector(`[data-ion="${ion.id}"]`)?.setAttribute("transform", `translate(${ion.x} ${ion.y})`);
      }
    });
  }, [playback.controller]);

  return (
    <SceneStage
      label={scene.textAlternative}
      playback={playback}
      stages={scene.stages}
      parts={parts}
      reserves={Object.values(moment).flatMap((entry) =>
        Object.entries(entry).map(([id, text]) => ({
          title: labels[id] ?? "",
          text,
          cites: scene.parts?.find((part) => part.id === id)?.cites,
        })),
      )}
      card={cardFor(parts, membraneAnchors, selectedId)}
      onClose={() => setSelectedId(null)}
      legend={ionLegend}
      leading={
        !selectedId && scene.prompt ? (
          <ScenePrompt title={learnUi.exploreMembrane} text={scene.prompt} />
        ) : null
      }
    >
      <div className="relative">
        <p className="px-3 pt-2 text-[15px] leading-tight font-semibold text-foreground">{learnUi.outside}</p>
        <MembraneArt
          ref={artRef}
          labels={labels}
          selectedId={selectedId}
          hintId={selectedId ? undefined : scene.parts?.[0]?.id}
          sodiumState={channels.sodium}
          potassiumState={channels.potassium}
          ions={ions}
          onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
        />
        <p className="px-3 pb-2 text-[15px] leading-tight font-semibold text-foreground">{learnUi.inside}</p>
      </div>
    </SceneStage>
  );
}
