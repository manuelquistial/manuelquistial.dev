"use client";

import { useEffect, useRef } from "react";
import { getNeuronScene } from "@/content/learn/es/neurons";
import { NeuronArt } from "@/components/learn/illustrations/NeuronArt";
import { pointAlong } from "@/components/learn/illustrations/geometry";
import { axonCurves } from "@/components/learn/illustrations/neuronModel";
import { SceneStage } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { axonFronts, axonPlaybackStages } from "@/lib/learn/physiology";

const spikePath = "M -40 10 C -24 10, -16 -4, -8 -52 C -4 -86, 6 -90, 12 -42 C 18 -4, 26 16, 44 18";

function poseAt(position: number) {
  const here = pointAlong(axonCurves, position);
  const ahead = pointAlong(axonCurves, Math.min(1, position + 0.015));
  const angle = (Math.atan2(ahead.y - here.y, ahead.x - here.x) * 180) / Math.PI;
  return `translate(${here.x} ${here.y}) rotate(${angle}) scale(1.55)`;
}

function applySpikes(root: HTMLElement, time: number) {
  const fronts = axonFronts(time);
  root.querySelectorAll<SVGGElement>("[data-spike]").forEach((node, index) => {
    const position = fronts[index];
    if (position === undefined) {
      node.setAttribute("opacity", "0");
      return;
    }
    node.setAttribute("opacity", "1");
    node.setAttribute("transform", poseAt(position));
  });
}

export function VoltageScene() {
  const scene = getNeuronScene("diferencia-de-potencial");
  const playback = useScenePlayback(axonPlaybackStages());
  const rootRef = useRef<HTMLDivElement>(null);
  const fronts = axonFronts(playback.snapshot.time);

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const root = rootRef.current;
      if (!root) return;
      applySpikes(root, snapshot.time);
    });
  }, [playback.controller, playback.snapshot.stageId, playback.snapshot.time]);

  return (
    <SceneStage label={scene.textAlternative} playback={playback} stages={scene.stages}>
      <div ref={rootRef} className="relative">
        <NeuronArt label={scene.textAlternative}>
          <g className="learn-axon-spikes" pointerEvents="none">
            {[0, 1, 2].map((index) => {
              const position = fronts[index];
              return (
                <g
                  key={index}
                  data-spike=""
                  opacity={position === undefined ? 0 : 1}
                  transform={position === undefined ? undefined : poseAt(position)}
                >
                  <path d={spikePath} fill="none" stroke="#f7f4ee" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={spikePath} fill="none" stroke="#9e3b2d" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              );
            })}
          </g>
        </NeuronArt>
      </div>
    </SceneStage>
  );
}
