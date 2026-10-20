"use client";

import { useEffect, useRef } from "react";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { NeuronArt } from "@/components/learn/illustrations/NeuronArt";
import { pointAlong } from "@/components/learn/illustrations/geometry";
import { axonCurves, signalChains, somaCenter } from "@/components/learn/illustrations/neuronModel";
import { SceneStage } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { signalFrameVars, signalPlaybackStages } from "@/lib/learn/physiology";

export function SignalScene() {
  const scene = neuronsLesson.scenes[2];
  const playback = useScenePlayback(signalPlaybackStages());
  const layerRef = useRef<SVGGElement>(null);
  const caption = scene.stages?.find((item) => item.id === playback.snapshot.stageId);

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const layer = layerRef.current;
      if (!layer) return;
      const vars = signalFrameVars(snapshot.time, snapshot.duration);
      layer.querySelectorAll<SVGCircleElement>("[data-signal]").forEach((dot) => {
        const index = Number(dot.dataset.signal);
        const chain = signalChains[index];
        if (!chain) return;
        const point = pointAlong(chain, Number(vars[`--p${index + 1}`] ?? 0));
        dot.setAttribute("cx", String(point.x));
        dot.setAttribute("cy", String(point.y));
        dot.style.opacity = vars["--p-opacity"] ?? "0";
      });
      const spike = layer.querySelector<SVGCircleElement>("[data-spike]");
      if (spike) {
        const point = pointAlong(axonCurves, Number(vars["--spike"] ?? 0));
        spike.setAttribute("cx", String(point.x));
        spike.setAttribute("cy", String(point.y));
        spike.style.opacity = vars["--spike-opacity"] ?? "0";
      }
      const soma = layer.querySelector<SVGCircleElement>("[data-soma]");
      if (soma) soma.style.opacity = vars["--integration"] ?? "0";
      const threshold = layer.querySelector<SVGCircleElement>("[data-threshold]");
      if (threshold) threshold.style.opacity = vars["--threshold"] ?? "0";
    });
  }, [playback.controller]);

  return (
    <SceneStage label={scene.textAlternative} playback={playback} caption={caption}>
      <NeuronArt label={scene.textAlternative}>
        <g ref={layerRef} pointerEvents="none">
          {signalChains.map((chain, index) => {
            const start = pointAlong(chain, 0);
            return (
              <circle
                key={index}
                data-signal={index}
                cx={start.x}
                cy={start.y}
                r="8"
                fill="#9e3b2d"
                stroke="#fff"
                strokeWidth="2"
              />
            );
          })}
          <circle data-spike="" cx={axonCurves[0]?.x0 ?? 0} cy={axonCurves[0]?.y0 ?? 0} r="11" fill="#9e3b2d" stroke="#fff" strokeWidth="2" opacity="0" />
          <circle data-soma="" cx={somaCenter.x} cy={somaCenter.y} r="96" fill="none" stroke="#6d5b88" strokeWidth="3" opacity="0" />
          <circle data-threshold="" cx={axonCurves[0]?.x0 ?? 0} cy={axonCurves[0]?.y0 ?? 0} r="16" fill="#9e3b2d" opacity="0" />
        </g>
      </NeuronArt>
    </SceneStage>
  );
}
