"use client";

import { useEffect, useRef, useState } from "react";
import { learnArt } from "@/content/learn/art";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { SceneStage } from "@/components/learn/SceneStage";
import { applyFrameVars } from "@/components/learn/applyFrameVars";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { myelinFrame, myelinPlaybackStages } from "@/lib/learn/physiology";

const layout = [
  { id: "glia", top: "12%", left: "34%", width: "32%", height: "40%" },
  { id: "myelin", top: "54%", left: "6%", width: "18%", height: "18%" },
  { id: "myelin", top: "54%", left: "28%", width: "16%", height: "18%" },
  { id: "myelin", top: "54%", left: "50%", width: "16%", height: "18%" },
  { id: "myelin", top: "54%", left: "72%", width: "16%", height: "18%" },
  { id: "nodes", top: "56%", left: "22%", width: "8%", height: "16%" },
  { id: "nodes", top: "56%", left: "44%", width: "8%", height: "16%" },
  { id: "nodes", top: "56%", left: "66%", width: "8%", height: "16%" },
];

const nodeLeft = ["8%", "24%", "46%", "69%"];

export function MyelinScene() {
  const scene = neuronsLesson.scenes[3];
  const playback = useScenePlayback(myelinPlaybackStages());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const caption = scene.stages?.find((item) => item.id === playback.snapshot.stageId);

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const frame = myelinFrame(snapshot.stageId, 0);
      const progress =
        snapshot.duration <= 0 ? 0 : Math.min(1, snapshot.time / snapshot.duration);
      applyFrameVars(
        overlayRef.current,
        { "--spread": String(progress) },
        { activeNode: String(frame.activeNode) },
      );
    });
  }, [playback.controller]);

  return (
    <SceneStage
      label={scene.textAlternative}
      src={learnArt.glia}
      playback={playback}
      caption={caption}
      hotspots={layout.map((spot) => {
        const part = scene.parts?.find((item) => item.id === spot.id);
        return { ...spot, label: part?.label ?? spot.id, text: part?.text ?? "" };
      })}
      selectedId={selectedId}
      onSelect={setSelectedId}
      overlay={
        <div ref={overlayRef} className="learn-saltatory absolute inset-0">
          <span className="learn-axon-current" />
          {nodeLeft.map((left, index) => (
            <span key={left} className="learn-node-glow" data-node={index} style={{ left }} />
          ))}
        </div>
      }
    />
  );
}
