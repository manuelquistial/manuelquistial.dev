"use client";

import { useEffect, useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { DetailInset } from "@/components/learn/DetailInset";
import {
  ChemicalSynapseArt,
  ElectricalSynapseArt,
  JunctionDetail,
  synapseAnchors,
} from "@/components/learn/illustrations/SynapseArt";
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
    vesicles: "Las vesículas siguen cerradas. El impulso acaba de llegar al terminal y todavía no hay fusión.",
    "calcium-channel": "Los canales de Ca²⁺ están cerrados. El calcio aún no entra.",
    transmitters: "El neurotransmisor sigue dentro de las vesículas.",
    cleft: "La hendidura está vacía de mensajero en este instante.",
    receptors: "Los receptores siguen en reposo, integrados en la membrana de enfrente.",
  },
  calcium: {
    "calcium-channel": "El canal se abre y el Ca²⁺ entra desde el exterior del terminal. No es el neurotransmisor.",
    vesicles: "La vesícula preparada sigue cerrada. El calcio aún no ha abierto la fusión.",
    transmitters: "Las moléculas siguen dentro. El punto dorado con Ca²⁺ es un ion, no el mensajero.",
  },
  release: {
    vesicles: "La vesícula cambia de contorno: el círculo cerrado se abre y se continúa con la membrana.",
    transmitters: "El contenido sale solo después de que aparece la abertura.",
    "calcium-channel": "El calcio que ya entró desencadena esta fusión. El canal vuelve a cerrarse.",
  },
  diffusion: {
    transmitters: "Unas pocas moléculas se difunden por trayectorias distintas. No van en fila hacia un imán.",
    cleft: "El mensajero permanece en la hendidura mientras se dispersa.",
    receptors: "Todavía no hay unión. Los receptores siguen cerrados.",
  },
  binding: {
    receptors: "En este ejemplo el receptor es ionotrópico: al unirse el mensajero, sus lóbulos se separan y aparece un poro. No describe todos los receptores.",
    transmitters: "Algunas moléculas contactan el receptor. No atraviesan la membrana como si fueran el ion.",
    cleft: "Otras moléculas siguen en la hendidura, sin unirse.",
  },
  response: {
    receptors: "El poro deja pasar Na⁺. El cambio de voltaje es local y no inicia aquí un potencial de acción.",
    transmitters: "El mensajero permanece fuera. Quien cruza la membrana es el ion.",
  },
};

const electricalMoment: Record<string, Record<string, string>> = {
  connected: {
    junctions: "El poro comunica los dos interiores. No es una tapa cerrada. Este ejemplo es bidireccional; otras sinapsis eléctricas no lo son.",
    "cell-1": "Célula de arriba. En este ejemplo puede ser el origen o el destino.",
    "cell-2": "Célula de abajo. El mensaje puede recorrer el poro en cualquiera de los dos sentidos de este ejemplo.",
  },
  current: {
    junctions: "Los iones cruzan el poro abierto. No hay vesículas ni hendidura química.",
    "cell-1": "Si esta célula cambia primero, la corriente sale hacia la otra. Si es el destino, el cambio llega después.",
    "cell-2": "La corriente iónica entra o sale según cuál célula se activó en el ejemplo.",
  },
  shared: {
    junctions: "El paso de iones cambia el voltaje de la célula acoplada.",
    "cell-1": "Su voltaje depende de si fue el origen o la célula que responde.",
    "cell-2": "La respuesta es un cambio local de voltaje, no una copia química del mensaje.",
  },
};

function ChemicalInset({ stageId, pose }: { stageId: string; pose: ChemicalPose }) {
  if (stageId === "binding" || stageId === "response") {
    return (
      <DetailInset title="Receptor de este ejemplo" source="Un receptor ionotrópico de la membrana postsináptica.">
        <svg viewBox="0 0 160 120" className="block h-auto w-full" aria-hidden="true">
          <text x="8" y="16" fontSize="12" fill="#20201e">Hendidura</text>
          <rect x="16" y="48" width="128" height="14" rx="3" fill="#e7a090" />
          <text x="8" y="108" fontSize="12" fill="#20201e">Interior</text>
          <path d="M 58 40 C 50 62, 52 78, 62 86 C 70 90, 78 84, 76 72 C 82 58, 74 44, 66 40 Z" fill="#8eb4d4" stroke="#3d5f86" />
          <path d="M 102 40 C 94 62, 96 78, 106 86 C 114 90, 122 84, 120 72 C 126 58, 118 44, 110 40 Z" fill="#8eb4d4" stroke="#3d5f86" />
          <rect x="74" y="62" width="12" height="28" rx="3" fill="#f7f4ee" stroke="#3d5f86" />
          <g transform="translate(80 34)">
            <line x1="-8" y1="0" x2="8" y2="0" stroke="#7d5d86" strokeWidth="1.6" />
            <circle cx="-9" cy="0" r="6" fill="#d4789a" stroke="#7d5d86" />
            <circle cx="9" cy="0" r="6" fill="#d4789a" stroke="#7d5d86" />
          </g>
          {stageId === "response" ? (
            <g transform="translate(80 96)">
              <circle r="9" fill="#8eb4d4" stroke="#3d5f86" />
              <text y="3" textAnchor="middle" fontSize="8" fill="#20201e">Na⁺</text>
            </g>
          ) : null}
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

  const open = pose.caOpen > 0.2;
  const swung = pose.caOpen > 0.45;
  return (
    <DetailInset title="Canal de calcio" source="Tomado de la membrana presináptica. El calcio entra desde fuera.">
      <svg viewBox="0 0 160 130" className="block h-auto w-full" aria-hidden="true">
        <text x="8" y="16" fontSize="12" fill="#20201e">Exterior</text>
        <rect x="18" y="36" width="124" height="12" fill="#e7a090" />
        <rect x="18" y="86" width="124" height="12" fill="#e7a090" />
        <text x="8" y="122" fontSize="12" fill="#20201e">Interior</text>
        <rect x="58" y="28" width="44" height="78" rx="16" fill="#e0b15a" stroke="#a89880" />
        <rect x={open ? 74 : 77} y="40" width={open ? 12 : 6} height="54" rx="3" fill={open ? "#f7f4ee" : "#a89880"} />
        <path d="M 66 58 L 76 70 L 68 82" fill="#a89880" transform={swung ? "rotate(-60 72 70)" : undefined} />
        <path d="M 94 58 L 84 70 L 92 82" fill="#a89880" transform={swung ? "rotate(60 88 70)" : undefined} />
        {pose.caTravel > 0.05 ? (
          <g transform={`translate(80 ${96 - pose.caTravel * 52})`}>
            <circle r="11" fill="#e0b15a" stroke="#a89880" />
            <text y="3" textAnchor="middle" fontSize="8" fill="#20201e">Ca²⁺</text>
          </g>
        ) : null}
      </svg>
    </DetailInset>
  );
}

export function SynapseScene() {
  const scene = neuronsLesson.scenes[4];
  const [mode, setMode] = useState<"chemical" | "electrical">("chemical");
  const [flow, setFlow] = useState<ElectricalFlow>("forward");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const playback = useScenePlayback(synapsePlaybackStages(mode));
  const artRef = useRef<SVGSVGElement>(null);
  const flowRef = useRef(flow);
  useEffect(() => {
    flowRef.current = flow;
  }, [flow]);
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
        return;
      }

      const frame = electricalPose(snapshot.stageId, amount, flowRef.current);
      const top = frame.direction === 1 ? frame.source : frame.shared;
      const bottom = frame.direction === 1 ? frame.shared : frame.source;
      art.querySelector(".learn-cell-top")?.setAttribute("opacity", String(top * 0.85));
      art.querySelector(".learn-cell-bottom")?.setAttribute("opacity", String(bottom * 0.85));
      art.querySelectorAll<SVGGElement>(".learn-junction-ion").forEach((dot) => {
        const home = Number(dot.dataset.homeY);
        const span = Number(dot.dataset.span ?? 120);
        const y = home + frame.direction * frame.current * span;
        dot.setAttribute("transform", `translate(0 ${y - home})`);
        dot.style.opacity = String(Math.min(1, frame.current));
      });
      const detail = art.parentElement?.querySelector(".learn-detail-ion");
      if (detail) {
        const fromTop = frame.direction === 1;
        const start = fromTop ? 40 : 84;
        const end = fromTop ? 84 : 40;
        detail.setAttribute("cy", String(start + (end - start) * frame.current));
      }
    });
  }, [mode, playback.controller, playback.snapshot.stageId, playback.snapshot.time]);

  const switchMode = (next: "chemical" | "electrical") => {
    if (next === mode) return;
    setMode(next);
    setSelectedId(null);
    playback.reset(synapsePlaybackStages(next));
  };

  const switchFlow = (next: ElectricalFlow) => {
    if (next === flow) return;
    setFlow(next);
    setSelectedId(null);
    playback.reset(synapsePlaybackStages("electrical"));
  };

  return (
    <SceneStage
      label={scene.textAlternative}
      playback={playback}
      stages={stages}
      parts={scene.parts}
      reserves={Object.values(notes).flatMap((entry) =>
        Object.entries(entry).map(([id, text]) => ({
          title: labels[id] ?? "",
          text,
        })),
      )}
      card={cardFor(parts, synapseAnchors, selectedId)}
      onClose={() => setSelectedId(null)}
      leading={
        <div className="flex flex-wrap items-center gap-2 px-[var(--learn-panel-pad)] pt-[var(--learn-panel-pad)]">
          <div role="tablist" aria-label={learnUi.synapseModes} className="inline-flex rounded-full bg-surface-soft p-1">
            {(["chemical", "electrical"] as const).map((item) => {
              const selected = mode === item;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={`min-h-11 rounded-full px-4 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-foreground ${selected ? "bg-surface text-foreground shadow-sm" : "text-muted"}`}
                  onClick={() => switchMode(item)}
                >
                  {item === "chemical" ? learnUi.chemical : learnUi.electrical}
                </button>
              );
            })}
          </div>
          {mode === "electrical" ? (
            <div role="tablist" aria-label={learnUi.electricalDirection} className="inline-flex rounded-full bg-surface-soft p-1">
              {(["forward", "reverse"] as const).map((item) => {
                const selected = flow === item;
                return (
                  <button
                    key={item}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    className={`min-h-11 rounded-full px-4 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-foreground ${selected ? "bg-surface text-foreground shadow-sm" : "text-muted"}`}
                    onClick={() => switchFlow(item)}
                  >
                    {item === "forward" ? learnUi.fromCell1 : learnUi.fromCell2}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      }
      legend={
        mode === "chemical" ? (
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            <li>{learnUi.calcium}</li>
            <li>{learnUi.transmitterKey}</li>
          </ul>
        ) : (
          <p>{learnUi.electricalNote}</p>
        )
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
          <DetailInset title="Poro de la unión" source="Tomada de la unión central. El lumen sigue abierto.">
            <JunctionDetail flow={flow} />
          </DetailInset>
        </div>
      )}
    </SceneStage>
  );
}
