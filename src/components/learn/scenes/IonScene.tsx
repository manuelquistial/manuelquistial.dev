"use client";

import { useEffect, useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { DetailInset } from "@/components/learn/DetailInset";
import { ChannelDetail, MembraneArt, membraneAnchors } from "@/components/learn/illustrations/MembraneArt";
import { SceneStage, cardFor } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { progressWithinStage } from "@/lib/learn/playback";
import { ionChannelState, membraneCast } from "@/lib/learn/casts";
import { ionPlaybackStages } from "@/lib/learn/physiology";

const moment: Record<string, Record<string, string>> = {
  rest: {
    "sodium-channel": "En reposo este canal de Na⁺ dependiente de voltaje está cerrado. No es el canal de fuga.",
    "potassium-channel": "En reposo este canal de K⁺ dependiente de voltaje está cerrado.",
    leak: "Este poro estrecho representa canales de fuga. Contribuyen al reposo y no producen la subida rápida.",
    pump: "La bomba conserva los gradientes a largo plazo. No causa la bajada rápida del potencial de acción.",
    sodium: "Hay más Na⁺ fuera que dentro. La mayoría permanece en su compartimento.",
    potassium: "Hay más K⁺ dentro que fuera. La mayoría permanece en su compartimento.",
  },
  depolarization: {
    "sodium-channel": "La compuerta se abre y el Na⁺ entra por este poro. El K⁺ no usa este canal.",
    "potassium-channel": "Durante esta entrada de sodio, el canal de K⁺ del ejemplo sigue cerrado.",
    sodium: "Un Na⁺ cruza el canal abierto. El resto sigue más concentrado fuera.",
    potassium: "El potasio no atraviesa el canal de sodio.",
  },
  repolarization: {
    "sodium-channel": "El canal de Na⁺ queda inactivado: una bola bloquea la boca interna.",
    "potassium-channel": "Su compuerta se abre y el K⁺ sale por este poro.",
    sodium: "El sodio que entró permanece dentro. No vuelve a cruzar la membrana en este paso.",
    potassium: "Un K⁺ sale por su canal. Sigue habiendo más potasio dentro.",
  },
  recovery: {
    "sodium-channel": "El canal de Na⁺ vuelve a cerrarse. El episodio rápido ya pasó.",
    "potassium-channel": "El canal de K⁺ vuelve a cerrarse.",
    pump: "La bomba sigue encargada de los gradientes, en un tiempo más largo que esta bajada.",
    sodium: "La distribución no se invierte: sigue habiendo más Na⁺ fuera.",
    potassium: "Sigue habiendo más K⁺ dentro. Un solo potencial no intercambia los compartimentos.",
  },
};

export function IonScene() {
  const scene = neuronsLesson.scenes[5];
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
      const detailNa = art.parentElement?.querySelector(".learn-detail-na");
      const detailK = art.parentElement?.querySelector(".learn-detail-k");
      const na = membraneCast(snapshot.stageId, amount).find((ion) => ion.id === "na-m");
      const potassium = membraneCast(snapshot.stageId, amount).find((ion) => ion.id === "k-m");
      if (detailNa && na) {
        const y = 18 + ((na.y - 150) / 700) * 72;
        detailNa.setAttribute("transform", `translate(0 ${Math.max(0, Math.min(70, y - 22))})`);
      }
      if (detailK && potassium) {
        const y = 18 + ((potassium.y - 150) / 700) * 72;
        detailK.setAttribute("transform", `translate(0 ${Math.max(-40, Math.min(20, y - 86))})`);
      }
    });
  }, [playback.controller, playback.snapshot.stageId, playback.snapshot.time]);

  return (
    <SceneStage
      label={scene.textAlternative}
      playback={playback}
      stages={scene.stages}
      parts={scene.parts}
      reserves={Object.values(moment).flatMap((entry) =>
        Object.entries(entry).map(([id, text]) => ({
          title: labels[id] ?? "",
          text,
        })),
      )}
      card={cardFor(parts, membraneAnchors, selectedId)}
      onClose={() => setSelectedId(null)}
      legend={
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          <li>{learnUi.sodium}</li>
          <li>{learnUi.potassium}</li>
          <li>{learnUi.pumpLegend}</li>
        </ul>
      }
    >
      <div className="relative">
        <MembraneArt
          ref={artRef}
          labels={labels}
          selectedId={selectedId}
          hintId={scene.parts?.[0]?.id}
          sodiumState={channels.sodium}
          potassiumState={channels.potassium}
          ions={ions}
          outsideLabel={learnUi.outside}
          insideLabel={learnUi.inside}
          onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
        />
        <DetailInset title="Canales de este ejemplo" source="La ampliación sigue el mismo instante de la membrana.">
          <ChannelDetail
            sodium={channels.sodium}
            potassium={channels.potassium}
            showSodiumMoving={playback.snapshot.stageId === "depolarization"}
            showPotassiumMoving={playback.snapshot.stageId === "repolarization"}
          />
        </DetailInset>
      </div>
    </SceneStage>
  );
}
