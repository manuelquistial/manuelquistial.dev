"use client";

import { useEffect, useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { getNeuronScene, getNeuronQuestion } from "@/content/learn/es/neurons";
import { DetailInset } from "@/components/learn/DetailInset";
import {
  ChemicalSynapseArt,
  ElectricalSynapseArt,
  JunctionDetail,
  synapseAnchors,
} from "@/components/learn/illustrations/SynapseArt";
import { CheckQuestion } from "@/components/learn/CheckQuestion";
import { CiteList } from "@/components/learn/LearnRefs";
import { SceneStage, cardFor } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { progressWithinStage } from "@/lib/learn/playback";
import {
  caPoint,
  chemicalPose,
  electricalPose,
  fusionOutline,
  ntProgress,
  ntRoutes,
  quadPoint,
  type ChemicalPose,
  type ElectricalFlow,
} from "@/lib/learn/casts";
import { synapsePlaybackStages } from "@/lib/learn/physiology";

const chemicalMoment: Record<string, Record<string, string>> = {
  arrival: {
    "calcium-channel":
      "La despolarización del terminal precede a la apertura de estos canales.",
    vesicles: "La vesícula contiene el neurotransmisor que se liberará durante la fusión.",
    transmitters: "El neurotransmisor se encuentra almacenado en las vesículas.",
  },
  calcium: {
    "calcium-channel": "El canal está abierto y permite la entrada de Ca²⁺ al terminal.",
    vesicles: "La vesícula contiene el neurotransmisor que se liberará durante la fusión.",
    transmitters: "El neurotransmisor se encuentra almacenado en las vesículas.",
  },
  release: {
    "calcium-channel":
      "El aumento de calcio dentro del terminal desencadena la fusión vesicular.",
    vesicles:
      "La membrana de la vesícula se fusiona con la membrana presináptica y libera su contenido.",
    transmitters: "La fusión vesicular libera el neurotransmisor en la hendidura.",
  },
  diffusion: {
    transmitters:
      "Las moléculas se difunden por la hendidura y algunas alcanzan los receptores.",
  },
  binding: {
    receptors: "La unión del neurotransmisor abre el canal del receptor ionotrópico.",
    transmitters: "La unión del neurotransmisor activa el receptor postsináptico.",
  },
  response: {
    receptors:
      "El canal abierto permite una corriente iónica que modifica el potencial postsináptico.",
    transmitters: "La unión del neurotransmisor activa el receptor postsináptico.",
  },
};

const electricalMoment: Record<string, Record<string, string>> = {
  connected: {
    junctions:
      "Canales que conectan los interiores celulares y permiten el paso directo de corriente iónica.",
    "cell-1": "En esta secuencia, el cambio de potencial comienza en esta célula.",
    "cell-2":
      "Su potencial de membrana cambia por la corriente que atraviesa la unión comunicante.",
  },
  current: {
    junctions:
      "Canales que conectan los interiores celulares y permiten el paso directo de corriente iónica.",
    "cell-1": "En esta secuencia, el cambio de potencial comienza en esta célula.",
    "cell-2":
      "Su potencial de membrana cambia por la corriente que atraviesa la unión comunicante.",
  },
  shared: {
    junctions:
      "Canales que conectan los interiores celulares y permiten el paso directo de corriente iónica.",
    "cell-1": "En esta secuencia, el cambio de potencial comienza en esta célula.",
    "cell-2":
      "Su potencial de membrana cambia por la corriente que atraviesa la unión comunicante.",
  },
};

function ChemicalInset({ stageId, pose }: { stageId: string; pose: ChemicalPose }) {
  if (stageId === "binding" || stageId === "response") {
    return (
      <DetailInset title="Receptor de este ejemplo" source="Un receptor ionotrópico de la membrana postsináptica.">
        <svg viewBox="0 0 160 120" className="block h-auto w-full" aria-hidden="true">
          <text x="8" y="16" fontSize="14" fill="#20201e">Hendidura</text>
          <rect x="16" y="48" width="128" height="14" rx="3" fill="#e7a090" />
          <text x="8" y="112" fontSize="14" fill="#20201e">Interior</text>
          <path d="M 58 40 C 50 62, 52 78, 62 86 C 70 90, 78 84, 76 72 C 82 58, 74 44, 66 40 Z" fill="#8eb4d4" stroke="#3d5f86" />
          <path d="M 102 40 C 94 62, 96 78, 106 86 C 114 90, 122 84, 120 72 C 126 58, 118 44, 110 40 Z" fill="#8eb4d4" stroke="#3d5f86" />
          <rect x="74" y="62" width="12" height="28" rx="3" fill="#f7f4ee" stroke="#3d5f86" />
          <g transform="translate(80 34)">
            <line x1="-8" y1="0" x2="8" y2="0" stroke="#7d5d86" strokeWidth="1.6" />
            <circle cx="-9" cy="0" r="6" fill="#d4789a" stroke="#7d5d86" />
            <circle cx="9" cy="0" r="6" fill="#d4789a" stroke="#7d5d86" />
          </g>
          <g className="learn-inset-post-na" opacity={stageId === "response" ? 1 : 0} transform="translate(80 100)">
            <circle r="11" fill="#8eb4d4" stroke="#3d5f86" />
            <text x="16" y="4" fontSize="14" fontWeight="700" fill="#20201e">Na⁺</text>
          </g>
        </svg>
      </DetailInset>
    );
  }

  if (stageId === "release" || stageId === "diffusion") {
    return (
      <DetailInset title="Zona de liberación" source="La ampliación corresponde a la vesícula preparada.">
        <svg viewBox="720 300 220 270" className="block h-auto w-full" aria-hidden="true">
          <rect x="720" y="300" width="220" height="270" fill="#eef3f6" />
          <path d="M 730 492 H 930" fill="none" stroke="#e7a090" strokeWidth="8" />
          <path className="learn-fusion-detail" d={fusionOutline(pose.fusion)} fill="#f6f1f6" stroke="#7d5d86" strokeWidth="2.2" />
        </svg>
      </DetailInset>
    );
  }

  if (stageId !== "calcium") return null;
  const open = pose.caOpen > 0.2;
  const swung = pose.caOpen > 0.45;
  return (
    <DetailInset title="Canal de calcio" source="Misma orientación que la membrana presináptica: el calcio entra desde la hendidura hacia el terminal.">
      <svg viewBox="0 0 180 150" className="block h-auto w-full" aria-hidden="true">
        <text x="8" y="18" fontSize="14" fontWeight="700" fill="#20201e">Interior</text>
        <circle cx="132" cy="28" r="16" fill="#f6f1f6" stroke="#7d5d86" strokeWidth="1.6" />
        <circle cx="126" cy="28" r="4" fill="#d4789a" />
        <circle cx="138" cy="28" r="4" fill="#d4789a" />
        <rect x="18" y="48" width="144" height="12" fill="#e7a090" />
        <rect x="18" y="96" width="144" height="12" fill="#e7a090" />
        <text x="8" y="140" fontSize="14" fontWeight="700" fill="#20201e">Exterior</text>
        <rect x="68" y="40" width="44" height="76" rx="16" fill="#e0b15a" stroke="#a89880" />
        <rect className="learn-inset-pore" x={open ? 84 : 87} y="52" width={open ? 12 : 6} height="52" rx="3" fill={open ? "#f7f4ee" : "#a89880"} />
        <path className="learn-inset-gate" data-side="left" d="M 76 70 L 86 82 L 78 94" fill="#a89880" transform={swung ? "rotate(-60 82 82)" : undefined} />
        <path className="learn-inset-gate" data-side="right" d="M 104 70 L 94 82 L 102 94" fill="#a89880" transform={swung ? "rotate(60 98 82)" : undefined} />
        <g className="learn-inset-ca" transform={`translate(90 ${118 - pose.caTravel * 62})`} opacity={pose.caTravel > 0.05 ? 1 : 0}>
          <circle r="12" fill="#e0b15a" stroke="#a89880" />
          <text x="16" y="4" fontSize="14" fontWeight="700" fill="#20201e">Ca²⁺</text>
        </g>
      </svg>
    </DetailInset>
  );
}

export function SynapseScene() {
  const scene = getNeuronScene("sinapsis");
  const [mode, setMode] = useState<"chemical" | "electrical">("chemical");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const playback = useScenePlayback(synapsePlaybackStages(mode));
  const artRef = useRef<SVGSVGElement>(null);
  const flow: ElectricalFlow = "forward";
  const stages = scene.stages?.filter((item) => synapsePlaybackStages(mode).some((bound) => bound.id === item.id));
  const labels = Object.fromEntries((scene.parts ?? []).map((part) => [part.id, part.label]));
  const stageBound = synapsePlaybackStages(mode).find((item) => item.id === playback.snapshot.stageId);
  const progress = progressWithinStage(playback.snapshot.time, stageBound);
  const pose = chemicalPose(playback.snapshot.stageId, progress);
  const electric = electricalPose(playback.snapshot.stageId, progress, flow);
  const notes = mode === "chemical" ? chemicalMoment : electricalMoment;
  const parts = (scene.parts ?? []).map((part) => ({
    ...part,
    text: notes[playback.snapshot.stageId]?.[part.id] ?? part.text,
  }));
  const modeNote = scene.variantNotes?.[mode];
  const question = getNeuronQuestion("sinapsis-quimica");

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const art = artRef.current;
      if (!art) return;
      const bounds = synapsePlaybackStages(mode);
      const stage = bounds.find((item) => item.id === snapshot.stageId);
      const amount = progressWithinStage(snapshot.time, stage);

      if (mode === "chemical") {
        const frame = chemicalPose(snapshot.stageId, amount);
        const outline = fusionOutline(frame.fusion);
        art.querySelector(".learn-fusion-shape")?.setAttribute("d", outline);
        art.parentElement?.querySelector(".learn-fusion-detail")?.setAttribute("d", outline);
        art.querySelector(".learn-fusion-ring")?.setAttribute("opacity", frame.fusion < 0.05 ? "1" : "0");
        art.querySelector(".learn-fusion-cargo")?.setAttribute("opacity", frame.fusion < 0.45 ? "1" : "0");
        art.querySelectorAll<SVGRectElement>(".learn-ca-pore").forEach((pore) => {
          const host = pore.closest("[data-channel-x]");
          const x = Number(host?.getAttribute("data-channel-x"));
          const open = frame.caOpen > 0.2;
          if (Number.isFinite(x)) {
            pore.setAttribute("x", String(x - (open ? 7 : 2)));
            pore.setAttribute("width", open ? "14" : "4");
          }
          pore.setAttribute("fill", open ? "#f7f4ee" : "#a89880");
        });
        art.querySelectorAll<SVGGElement>(".learn-ca-gate").forEach((gate) => {
          const angle = frame.caOpen > 0.45 ? (gate.dataset.side === "left" ? -70 : 70) : 0;
          gate.setAttribute("transform", `translate(${gate.dataset.x} 485) rotate(${angle})`);
        });
        art.querySelectorAll<SVGGElement>(".learn-ca-ion").forEach((ion, index) => {
          const point = caPoint(index, frame);
          ion.setAttribute("transform", `translate(${point.x} ${point.y})`);
          ion.setAttribute("opacity", point.seen ? "1" : "0");
        });
        art.querySelectorAll<SVGGElement>(".learn-nt-particle").forEach((particle) => {
          const route = ntRoutes.find((item) => item.id === particle.dataset.nt);
          if (!route) return;
          const travel = ntProgress(route, frame);
          const point = quadPoint(route.from, route.ctrl, route.to, travel);
          particle.setAttribute("transform", `translate(${point.x} ${point.y})`);
          particle.setAttribute("opacity", frame.nt > route.delay ? "1" : "0");
        });
        art.querySelector(".learn-post-band")?.setAttribute("opacity", String(frame.response));
        const post = art.querySelector(".learn-post-na");
        if (post) {
          post.setAttribute("opacity", frame.response > 0.15 ? "1" : "0");
          post.setAttribute("transform", `translate(835 ${700 + frame.response * 70})`);
        }
        const insetCa = art.parentElement?.querySelector(".learn-inset-ca");
        if (insetCa) {
          insetCa.setAttribute("transform", `translate(90 ${118 - frame.caTravel * 62})`);
          insetCa.setAttribute("opacity", frame.caTravel > 0.05 ? "1" : "0");
        }
        const insetNa = art.parentElement?.querySelector(".learn-inset-post-na");
        if (insetNa) {
          insetNa.setAttribute("opacity", frame.response > 0.15 ? "1" : "0");
          insetNa.setAttribute("transform", `translate(80 ${92 + frame.response * 16})`);
        }
        return;
      }

      const frame = electricalPose(snapshot.stageId, amount, "forward");
      const top = frame.source;
      const bottom = frame.shared;
      art.querySelector(".learn-cell-top")?.setAttribute("opacity", String(top * 0.85));
      art.querySelector(".learn-cell-bottom")?.setAttribute("opacity", String(bottom * 0.85));
      art.querySelectorAll<SVGGElement>(".learn-junction-ion").forEach((dot) => {
        const home = Number(dot.dataset.homeY);
        const span = Number(dot.dataset.span ?? 120);
        const y = home + frame.direction * frame.current * span;
        dot.setAttribute("transform", `translate(0 ${y - home})`);
        dot.style.opacity = "1";
      });
      const detail = art.parentElement?.querySelector(".learn-detail-ion");
      if (detail) {
        const fromTop = frame.direction === 1;
        const start = fromTop ? 40 : 84;
        const end = fromTop ? 84 : 40;
        detail.setAttribute("cy", String(start + (end - start) * frame.current));
      }
    });
  }, [mode, playback.controller]);

  const switchMode = (next: "chemical" | "electrical") => {
    if (next === mode) return;
    setMode(next);
    setSelectedId(null);
    playback.reset(synapsePlaybackStages(next));
  };

  return (
    <>
      <SceneStage
        label={scene.textAlternative}
        playback={playback}
        stages={stages}
        parts={scene.parts}
        reserves={Object.values(notes).flatMap((entry) =>
          Object.entries(entry).map(([id, text]) => ({
            title: labels[id] ?? "",
            text,
            cites: scene.parts?.find((part) => part.id === id)?.cites,
          })),
        )}
        card={cardFor(parts, synapseAnchors, selectedId)}
        onClose={() => setSelectedId(null)}
        leading={
          <div className="flex flex-col gap-3 px-[var(--learn-panel-pad)] pt-[var(--learn-panel-pad)]">
            <div role="tablist" aria-label={learnUi.synapseModes} className="inline-flex rounded-full bg-surface-soft p-1">
              {(["chemical", "electrical"] as const).map((item) => {
                const selected = mode === item;
                return (
                  <button
                    key={item}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    className={`min-h-11 rounded-full px-4 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-foreground ${selected ? "bg-surface text-foreground shadow-sm" : "text-muted hover:bg-surface hover:text-foreground"}`}
                    onClick={() => switchMode(item)}
                  >
                    {item === "chemical" ? learnUi.chemical : learnUi.electrical}
                  </button>
                );
              })}
            </div>
            {modeNote ? (
              <p className="learn-reading text-sm leading-relaxed text-muted">
                {modeNote.text}
                <CiteList cites={modeNote.cites} />
              </p>
            ) : null}
          </div>
        }
        legend={
          mode === "chemical" ? (
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              <li>{learnUi.calcium}</li>
              <li>{learnUi.transmitterKey}</li>
            </ul>
          ) : null
        }
      >
        {mode === "chemical" ? (
          <div className="relative">
            <ChemicalSynapseArt
              ref={artRef}
              labels={labels}
              selectedId={selectedId}
              hintId="vesicles"
              pose={pose}
              onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
            />
            <ChemicalInset stageId={playback.snapshot.stageId} pose={pose} />
          </div>
        ) : (
          <div className="relative">
            <ElectricalSynapseArt
              ref={artRef}
              labels={labels}
              selectedId={selectedId}
              hintId="junctions"
              flow={flow}
              source={electric.source}
              shared={electric.shared}
              onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
            />
            {selectedId === "junctions" ? (
              <DetailInset title="Poro de la unión" source="Tomada de la unión central. El lumen sigue abierto.">
                <JunctionDetail flow={flow} />
              </DetailInset>
            ) : null}
          </div>
        )}
      </SceneStage>
      {question ? (
        <div className="learn-follow" hidden={mode !== "chemical"}>
          <CheckQuestion question={question} />
        </div>
      ) : null}
    </>
  );
}
