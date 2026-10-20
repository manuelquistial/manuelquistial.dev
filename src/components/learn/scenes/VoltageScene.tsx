"use client";

import { useEffect, useRef } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { DetailInset } from "@/components/learn/DetailInset";
import { NeuronArt } from "@/components/learn/illustrations/NeuronArt";
import { learnColors } from "@/components/learn/illustrations/palette";
import { IonGlyph } from "@/components/learn/illustrations/species";
import { VoltageGraph } from "@/components/learn/illustrations/VoltageGraph";
import { SceneStage } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { progressWithinStage } from "@/lib/learn/playback";
import { ionChannelState, membraneCast } from "@/lib/learn/casts";
import { membraneVoltage, voltageFrameVars, voltagePlaybackStages, voltageStageAt } from "@/lib/learn/physiology";

function LocalChannel({ x, state, fill }: { x: number; state: "closed" | "open" | "inactivated"; fill: string }) {
  return (
    <g>
      <rect x={x - 12} y={36} width="24" height="40" rx="7" fill={fill} />
      {state === "closed" ? <rect x={x - 10} y={52} width="20" height="5" fill={learnColors.ink} /> : null}
      {state === "open" ? <rect x={x - 3} y={40} width="6" height="32" rx="2" fill="#f7f4ee" /> : null}
      {state === "inactivated" ? <circle cx={x} cy={70} r="5" fill={learnColors.ink} /> : null}
    </g>
  );
}

export function VoltageScene() {
  const scene = neuronsLesson.scenes[6];
  const playback = useScenePlayback(voltagePlaybackStages());
  const rootRef = useRef<HTMLDivElement>(null);
  const ratio = playback.snapshot.duration <= 0 ? 0 : playback.snapshot.time / playback.snapshot.duration;
  const stage = voltageStageAt(ratio);
  const progress = progressWithinStage(ratio, stage);
  const channels = ionChannelState(stage.id, progress);
  const reading = Math.round(membraneVoltage(ratio));

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const root = rootRef.current;
      const scene = root?.closest("section");
      if (!root || !scene) return;
      const vars = voltageFrameVars(snapshot.time, snapshot.duration);
      const trace = scene.querySelector(".learn-voltage-trace");
      trace?.setAttribute("stroke-dasharray", `${vars["--ratio"] ?? 0} 1`);
      const marker = scene.querySelector(".learn-voltage-readout");
      if (marker) marker.textContent = `${vars["--mv"]} mV`;
      const local = root.querySelector(".learn-local-readout");
      if (local) local.textContent = `${vars["--mv"]} mV`;
      const amount = snapshot.duration <= 0 ? 0 : snapshot.time / snapshot.duration;
      const current = voltageStageAt(amount);
      const cast = membraneCast(current.id, progressWithinStage(amount, current));
      const na = cast.find((ion) => ion.id === "na-m");
      const potassium = cast.find((ion) => ion.id === "k-m");
      if (na) root.querySelector("[data-local-na]")?.setAttribute("transform", `translate(78 ${18 + (na.y / 900) * 70})`);
      if (potassium) root.querySelector("[data-local-k]")?.setAttribute("transform", `translate(118 ${18 + (potassium.y / 900) * 70})`);
      const graph = scene.querySelector<HTMLElement>(".learn-voltage");
      graph?.style.setProperty("--dot-x", vars["--dot-x"] ?? "46");
      graph?.style.setProperty("--dot-y", vars["--dot-y"] ?? "173");
      graph?.querySelector("[data-voltage-line]")?.setAttribute("transform", `translate(${vars["--dot-x"]} 0)`);
      graph?.querySelector("[data-voltage-dot]")?.setAttribute("transform", `translate(${vars["--dot-x"]} ${vars["--dot-y"]})`);
    });
  }, [playback.controller, playback.snapshot.stageId, playback.snapshot.time]);

  return (
    <SceneStage
      label={scene.textAlternative}
      playback={playback}
      stages={scene.stages}
      legend={<p>{learnUi.graphCaption}</p>}
      aside={
        <div className="learn-voltage">
          <VoltageGraph label={learnUi.graphCaption} />
        </div>
      }
    >
      <div ref={rootRef} className="relative">
        <NeuronArt label={scene.textAlternative} showMeasure />
        <DetailInset title="Punto de medida" source="El punto del axón no se mueve. La lectura es de ese lugar.">
          <svg viewBox="0 0 160 110" className="block h-auto w-full" aria-hidden="true">
            <rect width="160" height="110" fill="#eef3f6" />
            <text x="8" y="14" fontSize="11" fontWeight="700" fill={learnColors.ink}>
              Exterior
            </text>
            <text x="8" y="104" fontSize="11" fontWeight="700" fill={learnColors.ink}>
              Interior
            </text>
            <line x1="8" x2="152" y1="42" y2="42" stroke={learnColors.lipid} strokeWidth="7" />
            <line x1="8" x2="152" y1="68" y2="68" stroke={learnColors.lipid} strokeWidth="7" />
            <LocalChannel x={78} state={channels.sodium} fill={learnColors.sodium} />
            <LocalChannel x={118} state={channels.potassium} fill={learnColors.potassium} />
            <g data-local-na="">
              <IonGlyph symbol="Na⁺" fill={learnColors.sodium} stroke={learnColors.blueInk} x={0} y={0} r={8} />
            </g>
            <g data-local-k="">
              <IonGlyph symbol="K⁺" fill={learnColors.potassium} stroke={learnColors.violetInk} x={0} y={0} r={8} />
            </g>
            <text className="learn-local-readout" x="8" y="30" fontSize="12" fontWeight="700" fill={learnColors.ink}>
              {reading} mV
            </text>
          </svg>
        </DetailInset>
      </div>
    </SceneStage>
  );
}
