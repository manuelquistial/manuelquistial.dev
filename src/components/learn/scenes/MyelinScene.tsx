"use client";

import { useEffect, useRef, useState } from "react";
import { getNeuronScene } from "@/content/learn/es/neurons";
import { DetailInset } from "@/components/learn/DetailInset";
import { GliaArt, gliaAnchors } from "@/components/learn/illustrations/GliaArt";
import { learnColors } from "@/components/learn/illustrations/palette";
import { IonGlyph } from "@/components/learn/illustrations/species";
import { SceneStage, cardFor } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { progressWithinStage } from "@/lib/learn/playback";
import { myelinFrame, myelinPlaybackStages } from "@/lib/learn/physiology";

const phases = ["spread", "regeneration", "continuation"] as const;

function SheathDetail() {
  return (
    <svg viewBox="0 0 320 170" className="block h-auto w-full" aria-hidden="true">
      <rect width="320" height="170" fill="#eef3f6" />
      <circle cx="78" cy="86" r="54" fill={learnColors.myelin} stroke={learnColors.myelinEdge} strokeWidth="2" />
      <circle cx="78" cy="86" r="42" fill="none" stroke="#efe6d4" strokeWidth="4" />
      <circle cx="78" cy="86" r="30" fill="none" stroke={learnColors.myelinEdge} strokeWidth="2" />
      <circle cx="78" cy="86" r="22" fill="none" stroke={learnColors.lipid} strokeWidth="3" />
      <circle cx="78" cy="86" r="14" fill={learnColors.coral} />
      <line x1="116" y1="48" x2="168" y2="36" stroke={learnColors.ink} strokeWidth="1.4" />
      <text x="172" y="40" fontSize="15" fontWeight="700" fill={learnColors.ink}>
        Capas de mielina
      </text>
      <line x1="100" y1="86" x2="168" y2="78" stroke={learnColors.ink} strokeWidth="1.4" />
      <text x="172" y="82" fontSize="15" fontWeight="700" fill={learnColors.ink}>
        Membrana del axón
      </text>
      <line x1="92" y1="86" x2="168" y2="118" stroke={learnColors.ink} strokeWidth="1.4" />
      <text x="172" y="122" fontSize="15" fontWeight="700" fill={learnColors.ink}>
        Axón
      </text>
    </svg>
  );
}

function NodeLongitudinal({ open, spread }: { open: boolean; spread: number }) {
  const tip = 96 + Math.max(0.35, spread) * 150;
  return (
    <svg viewBox="0 0 420 168" className="block h-auto w-full" aria-hidden="true">
      <rect width="420" height="168" fill="#eef3f6" />
      <text x="12" y="20" fontSize="15" fontWeight="700" fill={learnColors.ink}>
        Exterior
      </text>
      <rect x="96" y="40" width="168" height="34" fill={learnColors.myelin} stroke={learnColors.myelinEdge} />
      <rect x="96" y="108" width="168" height="28" fill={learnColors.myelin} stroke={learnColors.myelinEdge} />
      <rect x="20" y="74" width="380" height="34" rx="12" fill={learnColors.coral} />
      <line x1="96" y1="91" x2={tip} y2="91" stroke="#5d7aa0" strokeWidth="7" strokeLinecap="round" />
      <rect x="286" y="58" width="30" height="66" rx="8" fill={learnColors.sodium} stroke={learnColors.blueInk} />
      {open ? <rect x="297" y="66" width="8" height="50" rx="2" fill="#f7f4ee" /> : <rect x="290" y="86" width="22" height="7" fill={learnColors.blueInk} />}
      <g data-node-na="" opacity={open ? 1 : 0}>
        <IonGlyph symbol="" fill={learnColors.sodium} stroke={learnColors.blueInk} x={301} y={0} r={12} />
        <text x="318" y="5" fontSize="15" fontWeight="700" fill={learnColors.ink}>
          Na⁺
        </text>
      </g>
      <text x="28" y="156" fontSize="14" fontWeight="700" fill={learnColors.ink}>
        Nodo
      </text>
      <text x="250" y="156" fontSize="14" fontWeight="700" fill={learnColors.ink}>
        Nodo siguiente
      </text>
      <text x="300" y="20" fontSize="15" fontWeight="700" fill={learnColors.ink}>
        Interior del axón
      </text>
    </svg>
  );
}

export function MyelinScene() {
  const scene = getNeuronScene("glia-y-mielina");
  const playback = useScenePlayback(myelinPlaybackStages());
  const rootRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const labels = Object.fromEntries((scene.parts ?? []).map((part) => [part.id, part.label]));
  const phase = phases.includes(playback.snapshot.stageId as (typeof phases)[number])
    ? (playback.snapshot.stageId as (typeof phases)[number])
    : "spread";
  const activeNode = myelinFrame(playback.snapshot.stageId, 0).activeNode;
  const nodal = phase === "regeneration" || phase === "continuation";
  const spread = nodal ? Math.max(progressWithinStage(playback.snapshot.time, myelinPlaybackStages().find((item) => item.id === phase)), phase === "continuation" ? 1 : 0.4) : 0;

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
        const moving = snapshot.stageId === "regeneration" || snapshot.stageId === "continuation";
        const y = moving ? 46 + Math.max(amount, 0.4) * 58 : 46;
        ion.setAttribute("transform", `translate(0 ${y})`);
        ion.setAttribute("opacity", moving ? "1" : "0");
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
          markSheath={selectedId === "myelin"}
          onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
        />
        {selectedId === "myelin" ? (
          <DetailInset title="Corte de la vaina" source="La marca señala la vaina de la que sale este corte. La mielina ya está formada.">
            <SheathDetail />
          </DetailInset>
        ) : null}
        {nodal ? (
          <DetailInset title="Entre dos nodos" source="El corte sigue el tramo marcado en el axón. La mielina no se forma ni desaparece.">
            <NodeLongitudinal open={phase === "regeneration" || phase === "continuation"} spread={spread} />
          </DetailInset>
        ) : null}
      </div>
    </SceneStage>
  );
}
