"use client";

import { useEffect, useRef, useState } from "react";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { DetailInset } from "@/components/learn/DetailInset";
import { GliaArt, gliaAnchors } from "@/components/learn/illustrations/GliaArt";
import { learnColors } from "@/components/learn/illustrations/palette";
import { IonGlyph } from "@/components/learn/illustrations/species";
import { SceneStage, cardFor } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { progressWithinStage } from "@/lib/learn/playback";
import { myelinFrame, myelinPlaybackStages } from "@/lib/learn/physiology";

const phases = ["isolation", "spread", "regeneration", "continuation"] as const;

function SheathDetail() {
  return (
    <svg viewBox="0 0 120 90" className="block h-auto w-full" aria-hidden="true">
      <rect width="120" height="90" fill="#eef3f6" />
      <circle cx="60" cy="46" r="34" fill={learnColors.myelin} stroke={learnColors.myelinEdge} strokeWidth="2" />
      <circle cx="60" cy="46" r="26" fill="none" stroke="#efe6d4" strokeWidth="3" />
      <circle cx="60" cy="46" r="18" fill="none" stroke={learnColors.myelinEdge} strokeWidth="2" />
      <circle cx="60" cy="46" r="10" fill={learnColors.coral} />
      <text x="8" y="14" fontSize="10" fontWeight="700" fill={learnColors.ink}>
        Capas
      </text>
    </svg>
  );
}

function NodeDetail({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 120 90" className="block h-auto w-full" aria-hidden="true">
      <rect width="120" height="90" fill="#eef3f6" />
      <text x="6" y="12" fontSize="10" fontWeight="700" fill={learnColors.ink}>
        Exterior
      </text>
      <line x1="8" x2="112" y1="34" y2="34" stroke={learnColors.lipid} strokeWidth="6" />
      <line x1="8" x2="112" y1="58" y2="58" stroke={learnColors.lipid} strokeWidth="6" />
      <rect x="48" y="28" width="24" height="36" rx="6" fill={learnColors.sodium} stroke={learnColors.blueInk} />
      {open ? <rect x="57" y="32" width="6" height="28" rx="2" fill="#f7f4ee" /> : <rect x="50" y="42" width="20" height="5" fill={learnColors.blueInk} />}
      <g data-node-na="" opacity={open ? 1 : 0}>
        <IonGlyph symbol="Na⁺" fill={learnColors.sodium} stroke={learnColors.blueInk} x={60} y={0} r={7} />
      </g>
    </svg>
  );
}

export function MyelinScene() {
  const scene = neuronsLesson.scenes[3];
  const playback = useScenePlayback(myelinPlaybackStages());
  const rootRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const labels = Object.fromEntries((scene.parts ?? []).map((part) => [part.id, part.label]));
  const phase = phases.includes(playback.snapshot.stageId as (typeof phases)[number])
    ? (playback.snapshot.stageId as (typeof phases)[number])
    : "isolation";
  const activeNode = myelinFrame(playback.snapshot.stageId, 0).activeNode;
  const sheath = phase === "isolation" || phase === "spread";

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const root = rootRef.current;
      if (!root) return;
      const bounds = myelinPlaybackStages();
      const stage = bounds.find((item) => item.id === snapshot.stageId);
      const amount = progressWithinStage(snapshot.time, stage);
      const band = root.querySelector(".learn-internode");
      if (snapshot.stageId === "spread" || snapshot.stageId === "continuation") {
        band?.setAttribute("stroke-dasharray", `${Math.max(amount, 0.28)} 1`);
        band?.setAttribute("opacity", "0.55");
      }
      const ion = root.querySelector("[data-node-na]");
      if (ion) {
        const y = snapshot.stageId === "regeneration" ? 28 + amount * 48 : 28;
        ion.setAttribute("transform", `translate(0 ${y})`);
        ion.setAttribute("opacity", snapshot.stageId === "regeneration" ? "1" : "0");
      }
    });
  }, [playback.controller, playback.snapshot.stageId, playback.snapshot.time]);

  return (
    <SceneStage
      label={scene.textAlternative}
      playback={playback}
      stages={scene.stages}
      parts={scene.parts}
      card={cardFor(scene.parts, gliaAnchors, selectedId)}
      onClose={() => setSelectedId(null)}
    >
      <div ref={rootRef} className="relative">
        <GliaArt
          labels={labels}
          selectedId={selectedId}
          hintId={scene.parts?.[0]?.id}
          activeNode={activeNode}
          phase={phase}
          onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
        />
        <DetailInset
          title={sheath ? "Corte de la vaina" : "Nodo ampliado"}
          source={sheath ? "La marca señala el tramo cubierto. La mielina ya está formada." : "La marca señala el nodo. Ahí se regenera el impulso."}
        >
          {sheath ? <SheathDetail /> : <NodeDetail open={phase === "regeneration"} />}
        </DetailInset>
      </div>
    </SceneStage>
  );
}
