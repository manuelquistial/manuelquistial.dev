"use client";

import { useEffect, useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { NeuronArt } from "@/components/learn/illustrations/NeuronArt";
import { chainPath } from "@/components/learn/illustrations/geometry";
import { axonCurves, signalChains } from "@/components/learn/illustrations/neuronModel";
import { SceneStage } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { signalFrameVars, signalPlaybackStages, type SignalExample } from "@/lib/learn/physiology";

const axonPath = chainPath(axonCurves);
const dendritePaths = signalChains.map((chain) => chainPath(chain));
const nodeStops = [0.18, 0.4, 0.62, 0.84];

const shortCopy: Record<string, { title: string; text: string }> = {
  threshold: {
    title: "El segmento inicial no alcanza el umbral",
    text: "En este ejemplo las entradas se suman, pero el indicador queda por debajo de la marca.",
  },
  propagation: {
    title: "No sale un potencial de acción",
    text: "El axón permanece en reposo. Una entrada más intensa no agranda un impulso que no llegó a empezar.",
  },
};

export function SignalScene() {
  const scene = neuronsLesson.scenes[2];
  const [example, setExample] = useState<SignalExample>("reach");
  const rootRef = useRef<HTMLDivElement>(null);
  const playback = useScenePlayback(signalPlaybackStages());
  const stages = scene.stages?.map((stage) => {
    const alt = example === "short" ? shortCopy[stage.id] : undefined;
    return alt ? { ...stage, ...alt } : stage;
  });

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const art = rootRef.current?.querySelector(".learn-signal");
      if (!(art instanceof SVGGElement)) return;
      const vars = signalFrameVars(snapshot.time, snapshot.duration, example);
      const opacity = Number(vars["--p-opacity"] ?? 0);
      art.querySelectorAll<SVGPathElement>("[data-graded]").forEach((path) => {
        const index = Number(path.dataset.graded);
        const front = Number(vars[`--p${index + 1}`] ?? 0) * 0.62;
        path.setAttribute("stroke-dasharray", `${Math.max(front, 0.001)} 1`);
        path.setAttribute("stroke-dashoffset", "0");
        path.style.opacity = String(opacity * (0.95 - front * 0.45));
      });
      const spike = Number(vars["--spike"] ?? 0);
      const band = art.querySelector<SVGPathElement>("[data-spike]");
      const recovery = art.querySelector<SVGPathElement>("[data-recovery]");
      if (band && recovery) {
        const node = nodeStops.find((stop) => stop >= Math.max(spike, 0.001)) ?? nodeStops[nodeStops.length - 1];
        const active = spike > 0;
        band.setAttribute("stroke-dasharray", "0.045 1");
        band.setAttribute("stroke-dashoffset", String(1 - (node ?? 0)));
        band.style.opacity = active ? "1" : "0";
        const trail = Math.max(0, (node ?? 0) - 0.16);
        recovery.setAttribute("stroke-dasharray", `${Math.max(trail, 0.001)} 1`);
        recovery.style.opacity = active ? "0.28" : "0";
      }
      const root = rootRef.current;
      const dot = root?.querySelector<HTMLElement>("[data-meter-dot]");
      if (dot) dot.style.top = `${(1 - Number(vars["--meter"] ?? 0)) * 100}%`;
      const mark = root?.querySelector<HTMLElement>("[data-meter-state]");
      if (mark) mark.textContent = vars["--crossed"] === "1" ? "Por encima" : "Por debajo";
    });
  }, [example, playback.controller, playback.snapshot.stageId, playback.snapshot.time]);

  return (
    <SceneStage
      label={scene.textAlternative}
      playback={playback}
      stages={stages}
      leading={
        <div className="px-3 pt-3">
          <div role="tablist" aria-label={learnUi.signalExamples} className="inline-flex rounded-full bg-surface-soft p-1">
            {(["short", "reach"] as const).map((item) => {
              const selected = example === item;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={`min-h-11 rounded-full px-4 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-foreground ${selected ? "bg-surface text-foreground shadow-sm" : "text-muted"}`}
                  onClick={() => {
                    if (item === example) return;
                    setExample(item);
                    playback.reset(signalPlaybackStages());
                  }}
                >
                  {item === "reach" ? learnUi.reaches : learnUi.fallsShort}
                </button>
              );
            })}
          </div>
        </div>
      }
    >
      <div ref={rootRef} className="relative">
        <NeuronArt label={scene.textAlternative}>
          <g className="learn-signal" pointerEvents="none">
            {dendritePaths.map((d, index) => (
              <path
                key={index}
                data-graded={index}
                d={d}
                fill="none"
                stroke="#9e3b2d"
                strokeWidth="16"
                strokeLinecap="round"
                pathLength={1}
                opacity="0"
              />
            ))}
            <path data-recovery="" d={axonPath} fill="none" stroke="#e07f6c" strokeWidth="18" strokeLinecap="round" pathLength={1} opacity="0" />
            <path data-spike="" d={axonPath} fill="none" stroke="#9e3b2d" strokeWidth="22" strokeLinecap="round" pathLength={1} opacity="0" />
            <circle cx={520} cy={500} r="7" fill="#9e3b2d" />
          </g>
        </NeuronArt>
        <div className="learn-meter">
          <p className="text-[15px] leading-tight font-semibold text-foreground">{learnUi.meterTitle}</p>
          <div className="relative mx-auto mt-3 h-36 w-4 rounded-full bg-surface-soft">
            <span className="absolute -left-1 h-0.5 w-6 bg-accent" style={{ top: "28%" }} />
            <span data-meter-dot="" className="absolute left-1/2 size-4 -translate-x-1/2 rounded-full border-2 border-white bg-foreground" style={{ top: "84%" }} />
          </div>
          <p className="mt-2 text-sm text-muted">{learnUi.meterMark}</p>
          <p data-meter-state="" className="text-base font-semibold text-foreground">
            Por debajo
          </p>
        </div>
      </div>
    </SceneStage>
  );
}
