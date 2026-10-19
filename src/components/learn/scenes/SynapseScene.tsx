"use client";

import { useEffect, useRef, useState } from "react";
import { learnArt } from "@/content/learn/art";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { SceneStage, type SceneHotspot } from "@/components/learn/SceneStage";
import { applyFrameVars } from "@/components/learn/applyFrameVars";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { progressWithinStage } from "@/lib/learn/playback";
import { synapseFrameVars, synapsePlaybackStages } from "@/lib/learn/physiology";

const chemicalLayout: SceneHotspot[] = [
  {
    id: "vesicles",
    label: "",
    text: "",
    top: "6%",
    left: "22%",
    width: "56%",
    height: "34%",
  },
  {
    id: "transmitters",
    label: "",
    text: "",
    top: "40%",
    left: "28%",
    width: "44%",
    height: "18%",
  },
  {
    id: "receptors",
    label: "",
    text: "",
    top: "62%",
    left: "16%",
    width: "68%",
    height: "16%",
  },
];

const electricalLayout: SceneHotspot[] = [
  {
    id: "junctions",
    label: "",
    text: "",
    top: "36%",
    left: "26%",
    width: "52%",
    height: "24%",
  },
];

export function SynapseScene() {
  const scene = neuronsLesson.scenes[4];
  const [mode, setMode] = useState<"chemical" | "electrical">("chemical");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const playback = useScenePlayback(synapsePlaybackStages(mode));
  const overlayRef = useRef<HTMLDivElement>(null);
  const caption = scene.stages?.find((item) => item.id === playback.snapshot.stageId);
  const layout = (mode === "chemical" ? chemicalLayout : electricalLayout).map((item) => {
    const part = scene.parts?.find((entry) => entry.id === item.id);
    return { ...item, label: part?.label ?? item.id, text: part?.text ?? "" };
  });

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const stages = synapsePlaybackStages(mode);
      const stage = stages.find((item) => item.id === snapshot.stageId);
      applyFrameVars(
        overlayRef.current,
        synapseFrameVars(
          mode,
          snapshot.stageId,
          progressWithinStage(snapshot.time, stage),
        ),
      );
    });
  }, [mode, playback.controller]);

  const switchMode = (next: "chemical" | "electrical") => {
    if (next === mode) return;
    setMode(next);
    setSelectedId(null);
    playback.reset(synapsePlaybackStages(next));
  };

  return (
    <SceneStage
      label={scene.textAlternative}
      src={mode === "chemical" ? learnArt.chemical : learnArt.electrical}
      playback={playback}
      caption={caption}
      hotspots={layout}
      selectedId={selectedId}
      onSelect={setSelectedId}
      toolbarExtra={
        <div role="tablist" aria-label={learnUi.synapseModes} className="flex gap-1">
          {(["chemical", "electrical"] as const).map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={mode === item}
              className={`min-h-11 rounded-[6px] border px-3 text-sm font-semibold ${mode === item ? "border-foreground/40 bg-surface-soft text-foreground" : "border-border text-foreground"}`}
              onClick={() => switchMode(item)}
            >
              {item === "chemical" ? learnUi.chemical : learnUi.electrical}
            </button>
          ))}
        </div>
      }
      overlay={
        <div ref={overlayRef} className={`learn-synapse absolute inset-0 is-${mode}`}>
          <span className="learn-calcium" />
          <span className="learn-nt learn-nt-a" />
          <span className="learn-nt learn-nt-b" />
          <span className="learn-nt learn-nt-c" />
          <span className="learn-response-band" />
          <span className="learn-ion-flow learn-ion-flow-a" />
          <span className="learn-ion-flow learn-ion-flow-b" />
          <span className="learn-ion-flow learn-ion-flow-c" />
        </div>
      }
    />
  );
}
