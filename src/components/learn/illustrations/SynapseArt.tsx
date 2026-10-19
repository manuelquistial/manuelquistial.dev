"use client";

import { forwardRef } from "react";
import { learnColors } from "@/components/learn/illustrations/palette";
import { Part } from "@/components/learn/illustrations/Part";

export const synapseView = { width: 900, height: 640 } as const;

const vesicles = [
  { cx: 210, cy: 168 },
  { cx: 390, cy: 132 },
  { cx: 560, cy: 128 },
  { cx: 720, cy: 176 },
];

const receptors = [190, 330, 470, 610, 740];

export const synapseAnchors = {
  vesicles: { x: 48, y: 22 },
  transmitters: { x: 50, y: 58 },
  receptors: { x: 52, y: 72 },
  junctions: { x: 50, y: 48 },
} as const;

const transmitterDots = [
  [-12, -8],
  [0, -10],
  [12, -6],
  [-8, 6],
  [8, 8],
  [0, 0],
];

function Vesicle({ cx, cy, className }: { cx: number; cy: number; className?: string }) {
  return (
    <g className={className} data-home-x={cx} data-home-y={cy}>
      <circle cx={cx} cy={cy} r="42" fill={learnColors.vesicle} stroke={learnColors.ink} strokeWidth="1.5" />
      {transmitterDots.map(([dx, dy]) => (
        <circle
          key={`${dx}-${dy}`}
          cx={cx + (dx ?? 0)}
          cy={cy + (dy ?? 0)}
          r="5.5"
          fill={learnColors.transmitter}
          stroke={learnColors.ink}
          strokeWidth="0.8"
        />
      ))}
    </g>
  );
}

function Receptor({ x }: { x: number }) {
  return (
    <path
      d={`M ${x - 18} 468
          C ${x - 22} 430, ${x - 6} 424, ${x - 2} 448
          C ${x - 2} 424, ${x + 2} 424, ${x + 2} 448
          C ${x + 6} 424, ${x + 22} 430, ${x + 18} 468 Z`}
      fill={learnColors.receptor}
      stroke={learnColors.ink}
      strokeWidth="1.3"
    />
  );
}

export const ChemicalSynapseArt = forwardRef<
  SVGSVGElement,
  {
    labels?: Partial<Record<"vesicles" | "transmitters" | "receptors", string>>;
    selectedId?: string | null;
    hintId?: string;
    onSelect?: (id: string) => void;
  }
>(function ChemicalSynapseArt({ labels, selectedId = null, hintId, onSelect }, ref) {
  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${synapseView.width} ${synapseView.height}`}
      width={synapseView.width}
      height={synapseView.height}
      className="learn-synapse-art block h-auto w-full"
      role="group"
    >
      <rect width={synapseView.width} height={synapseView.height} fill={learnColors.paper} />
      <g data-part-group="postsynaptic-membrane">
        <path
          d="M0 500 C 80 468, 150 512, 230 486 C 300 464, 360 508, 450 484 C 530 462, 600 510, 690 482 C 760 460, 830 508, 900 478 L 900 640 L 0 640 Z"
          fill={learnColors.coral}
          stroke={learnColors.ink}
          strokeWidth="1.6"
        />
      </g>
      <g data-part-group="synaptic-cleft" aria-hidden="true">
        <path d="M80 430 C 250 418, 650 418, 820 430" fill="none" stroke="#d5dee6" strokeWidth="8" strokeLinecap="round" opacity="0.01" />
      </g>
      <Part
        id="receptors"
        label={labels?.receptors ?? "Receptores"}
        selected={selectedId === "receptors"}
        hinted={hintId === "receptors"}
        onSelect={onSelect}
      >
        {receptors.map((x) => (
          <Receptor key={x} x={x} />
        ))}
      </Part>
      <Part
        id="vesicles"
        label={labels?.vesicles ?? "Vesículas"}
        selected={selectedId === "vesicles"}
        hinted={hintId === "vesicles"}
        onSelect={onSelect}
      >
        <g data-part-group="presynaptic-terminal">
          <path
            d="M0 0 H900 V70 C 860 78, 820 130, 760 190 C 700 250, 620 300, 520 330 C 470 368, 430 368, 380 330 C 280 292, 160 230, 90 150 C 40 90, 30 40, 0 20 Z"
            fill={learnColors.coral}
            stroke={learnColors.ink}
            strokeWidth="1.6"
          />
        </g>
        <g data-part-group="calcium-channels">
          <g className="learn-calcium-channel" data-origin="translate(250 300)" transform="translate(250 300)">
            <path d="M-16 -18 C -18 -8, -8 -4, -4 0 C -8 4, -18 8, -16 18 L 16 18 C 18 8, 8 4, 4 0 C 8 -4, 18 -8, 16 -18 Z" fill={learnColors.gold} stroke={learnColors.ink} strokeWidth="1.1" />
          </g>
          <g className="learn-calcium-channel" data-origin="translate(650 300)" transform="translate(650 300)">
            <path d="M-16 -18 C -18 -8, -8 -4, -4 0 C -8 4, -18 8, -16 18 L 16 18 C 18 8, 8 4, 4 0 C 8 -4, 18 -8, 16 -18 Z" fill={learnColors.gold} stroke={learnColors.ink} strokeWidth="1.1" />
          </g>
        </g>
        {vesicles.map((vesicle) => (
          <Vesicle key={vesicle.cx} cx={vesicle.cx} cy={vesicle.cy} />
        ))}
        <g className="learn-fusion-vesicle">
          <Vesicle cx={450} cy={300} />
        </g>
        <path className="learn-fusion-pore" d="M418 332 C 430 362, 470 362, 482 332" fill={learnColors.paper} stroke={learnColors.ink} strokeWidth="1.5" />
      </Part>
      <Part
        id="transmitters"
        label={labels?.transmitters ?? "Neurotransmisores"}
        selected={selectedId === "transmitters"}
        hinted={hintId === "transmitters"}
        onSelect={onSelect}
      >
        <g data-part-group="neurotransmitters" className="learn-transmitters">
          {receptors.map((x, index) => (
            <circle
              key={x}
              className="learn-nt-particle"
              data-target-x={x}
              data-target-y="430"
              cx={430 + index * 10}
              cy="348"
              r="6"
              fill={learnColors.transmitter}
              stroke={learnColors.ink}
              strokeWidth="0.8"
              opacity="0"
            />
          ))}
        </g>
      </Part>
    </svg>
  );
});

function Connexon({ x }: { x: number }) {
  const columns = [-18, 0, 18];
  return (
    <g data-junction={x}>
      <path d={`M ${x - 34} 286 Q ${x} 274, ${x + 34} 286`} fill="none" stroke="#b9cbe0" strokeWidth="8" strokeLinecap="round" />
      <path d={`M ${x - 34} 354 Q ${x} 366, ${x + 34} 354`} fill="none" stroke="#b9cbe0" strokeWidth="8" strokeLinecap="round" />
      {columns.map((offset) => (
        <g key={offset}>
          <rect x={x + offset - 6} y="286" width="12" height="30" rx="5" fill="#f3ecdc" stroke={learnColors.ink} strokeWidth="1" />
          <rect x={x + offset - 6} y="324" width="12" height="30" rx="5" fill="#f3ecdc" stroke={learnColors.ink} strokeWidth="1" />
        </g>
      ))}
      <circle className="learn-junction-ion" cx={x} cy="310" r="4.5" fill={learnColors.receptor} opacity="0" />
    </g>
  );
}

export const ElectricalSynapseArt = forwardRef<
  SVGSVGElement,
  {
    labels?: Partial<Record<"junctions", string>>;
    selectedId?: string | null;
    hintId?: string;
    onSelect?: (id: string) => void;
  }
>(function ElectricalSynapseArt({ labels, selectedId = null, hintId, onSelect }, ref) {
  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${synapseView.width} ${synapseView.height}`}
      width={synapseView.width}
      height={synapseView.height}
      className="learn-electrical-art block h-auto w-full"
      role="group"
    >
      <rect width={synapseView.width} height={synapseView.height} fill={learnColors.paper} />
      <path
        d="M0 0 H900 V250 C 760 292, 620 248, 500 268 C 360 292, 180 250, 0 236 Z"
        fill={learnColors.coral}
        stroke={learnColors.ink}
        strokeWidth="1.6"
      />
      <path
        d="M0 392 C 180 372, 340 404, 500 378 C 640 356, 760 390, 900 368 V 640 H 0 Z"
        fill={learnColors.coral}
        stroke={learnColors.ink}
        strokeWidth="1.6"
      />
      <Part
        id="junctions"
        label={labels?.junctions ?? "Uniones comunicantes"}
        selected={selectedId === "junctions"}
        hinted={hintId === "junctions"}
        onSelect={onSelect}
      >
        {[230, 450, 670].map((x) => (
          <Connexon key={x} x={x} />
        ))}
      </Part>
    </svg>
  );
});
