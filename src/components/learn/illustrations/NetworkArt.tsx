"use client";

import { useSyncExternalStore } from "react";
import { learnColors } from "@/components/learn/illustrations/palette";
import { Part } from "@/components/learn/illustrations/Part";
import { Grain, useSvgId } from "@/components/learn/illustrations/shapes";
import { artView, networkNuclei, networkPaths } from "@/components/learn/illustrations/tracedGeometry";

const roles = [
  { id: "n1", part: "cell-a", letter: "A", x: 188.5, y: 200.5 },
  { id: "n2", part: "cell-b", letter: "B", x: 670, y: 151.1 },
  { id: "n3", part: "cell-c", letter: "C", x: 928, y: 383 },
  { id: "n4", part: "cell-d", letter: "D", x: 477.6, y: 449.5 },
] as const;

export const networkAnchors = {
  "cell-a": { x: 12, y: 22 },
  "cell-b": { x: 40, y: 18 },
  "cell-c": { x: 58, y: 34 },
  "cell-d": { x: 30, y: 52 },
} as const;

function along(points: readonly (readonly [number, number])[]) {
  return points.map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
}

const linkGeometry: {
  id: string;
  kind: "excitatory" | "inhibitory";
  sender: "n1" | "n2";
  points: readonly (readonly [number, number])[];
}[] = [
  {
    id: "ab",
    kind: "excitatory",
    sender: "n1",
    points: [
      [224, 212],
      [264, 208],
      [304, 214],
      [344, 216],
      [384, 216],
      [424, 206],
      [464, 192],
      [504, 182],
      [524, 168],
      [544, 156],
      [564, 146],
      [584, 144],
      [604, 136],
      [640, 142],
    ],
  },
  {
    id: "bc",
    kind: "excitatory",
    sender: "n2",
    points: [
      [686, 190],
      [702, 210],
      [716, 230],
      [730, 270],
      [732, 310],
      [728, 350],
      [742, 390],
      [782, 418],
      [822, 422],
      [862, 414],
      [898, 394],
    ],
  },
  {
    id: "bd",
    kind: "inhibitory",
    sender: "n1",
    points: [
      [254, 264],
      [274, 280],
      [292, 300],
      [302, 340],
      [318, 380],
      [338, 400],
      [358, 416],
      [398, 426],
      [438, 432],
      [458, 446],
    ],
  },
];

const links = linkGeometry.map((link) => ({
  id: link.id,
  kind: link.kind,
  d: along(link.points),
}));

function roleAt(x: number, y: number) {
  return roles.find((role) => Math.hypot(role.x - x, role.y - y) < 12);
}

const cellOwner = { n1: 1, n2: 2, n3: 3, n4: 4 } as const;

type Territory = { width: number; height: number; owner: Uint8Array; distance: Uint16Array };

const dendriteReach = 175;
const axonBand = 18;

let territoryCache: Territory | null = null;

function hexChannels(hex: string): [number, number, number] {
  const value = Number.parseInt(hex.slice(1), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function rasterCoral(rule: CanvasFillRule) {
  const { width, height } = artView;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return null;
  context.fillStyle = "#ffffff";
  for (const d of networkPaths.coral) context.fill(new Path2D(d), rule);
  const pixels = context.getImageData(0, 0, width, height).data;
  const coral = new Uint8Array(width * height);
  for (let index = 0; index < coral.length; index += 1) {
    coral[index] = pixels[index * 4 + 3] > 128 && pixels[index * 4] > 200 ? 1 : 0;
  }
  return coral;
}

function buildTerritory(): Territory | null {
  if (territoryCache) return territoryCache;
  const { width, height } = artView;
  let coral = rasterCoral("nonzero");
  if (!coral) return null;
  const nucleusFilled = networkNuclei.some((nucleus) => {
    const x = Math.round(nucleus.cx);
    const y = Math.round(nucleus.cy);
    return coral?.[y * width + x] === 1;
  });
  if (nucleusFilled) {
    const retried = rasterCoral("evenodd");
    if (retried) coral = retried;
  }
  const owner = new Uint8Array(width * height);
  const distance = new Uint16Array(width * height);
  const queue = new Int32Array(width * height);
  let tail = 0;
  const claim = (x: number, y: number, id: number) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const index = y * width + x;
    if (!coral[index] || owner[index]) return;
    owner[index] = id;
    distance[index] = 0;
    queue[tail] = index;
    tail += 1;
  };
  let extra = 5;
  for (const nucleus of networkNuclei) {
    const role = roleAt(nucleus.cx, nucleus.cy);
    const id = role ? cellOwner[role.id] : extra;
    if (!role) extra += 1;
    const cx = Math.round(nucleus.cx);
    const cy = Math.round(nucleus.cy);
    let seeded = false;
    for (let radius = nucleus.r + 2; radius < 90 && !seeded; radius += 2) {
      for (let step = 0; step < 20; step += 1) {
        const angle = (step / 20) * Math.PI * 2;
        const x = Math.round(cx + radius * Math.cos(angle));
        const y = Math.round(cy + radius * Math.sin(angle));
        const index = y * width + x;
        if (x < 0 || y < 0 || x >= width || y >= height || !coral[index] || owner[index]) continue;
        claim(x, y, id);
        seeded = true;
        break;
      }
    }
  }
  let head = 0;
  while (head < tail) {
    const index = queue[head];
    head += 1;
    const id = owner[index];
    const x = index % width;
    const neighbors = [index + 1, index - 1, index + width, index - width];
    if (x === width - 1) neighbors[0] = -1;
    if (x === 0) neighbors[1] = -1;
    for (const next of neighbors) {
      if (next < 0 || next >= coral.length || !coral[next] || owner[next]) continue;
      owner[next] = id;
      distance[next] = distance[index] + 1;
      queue[tail] = next;
      tail += 1;
    }
  }
  territoryCache = { width, height, owner, distance };
  return territoryCache;
}

function segmentDistance(x: number, y: number, points: readonly (readonly [number, number])[]) {
  let best = Number.POSITIVE_INFINITY;
  for (let index = 1; index < points.length; index += 1) {
    const [x1, y1] = points[index - 1];
    const [x2, y2] = points[index];
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = dx * dx + dy * dy;
    const t = length === 0 ? 0 : Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / length));
    const px = x1 + t * dx;
    const py = y1 + t * dy;
    best = Math.min(best, Math.hypot(x - px, y - py));
  }
  return best;
}

function paintTerritory(active: readonly string[], inhibited: readonly string[], litLink: string | null) {
  const territory = buildTerritory();
  if (!territory) return null;
  const signal = hexChannels(learnColors.signal);
  const inhibitory = hexChannels(learnColors.inhibitory);
  const activeOwners = new Set<number>(
    active.flatMap((id) => {
      const ownerId = cellOwner[id as keyof typeof cellOwner];
      return ownerId ? [ownerId] : [];
    }),
  );
  const inhibitedOwners = new Set<number>(
    inhibited.flatMap((id) => {
      const ownerId = cellOwner[id as keyof typeof cellOwner];
      return ownerId ? [ownerId] : [];
    }),
  );
  const link = linkGeometry.find((item) => item.id === litLink) ?? null;
  const hiddenAxon = litLink === "bd" ? null : linkGeometry.find((item) => item.id === "bd");
  if (activeOwners.size === 0 && inhibitedOwners.size === 0 && !link) return null;
  const canvas = document.createElement("canvas");
  canvas.width = territory.width;
  canvas.height = territory.height;
  const context = canvas.getContext("2d");
  if (!context) return null;
  const image = context.createImageData(territory.width, territory.height);
  const pixels = image.data;
  const sender = link ? cellOwner[link.sender] : 0;
  const axonTone = link?.kind === "inhibitory" ? inhibitory : signal;
  for (let index = 0; index < territory.owner.length; index += 1) {
    const ownerId = territory.owner[index];
    if (!ownerId) continue;
    const x = index % territory.width;
    const y = Math.floor(index / territory.width);
    let tone: [number, number, number] | null = null;
    if (territory.distance[index] <= dendriteReach) {
      if (activeOwners.has(ownerId)) tone = signal;
      else if (inhibitedOwners.has(ownerId)) tone = inhibitory;
      if (tone && hiddenAxon && ownerId === cellOwner.n1 && segmentDistance(x, y, hiddenAxon.points) < axonBand) {
        tone = null;
      }
    }
    if (!tone && link && ownerId === sender && segmentDistance(x, y, link.points) < axonBand) {
      tone = axonTone;
    }
    if (!tone) continue;
    const offset = index * 4;
    pixels[offset] = tone[0];
    pixels[offset + 1] = tone[1];
    pixels[offset + 2] = tone[2];
    pixels[offset + 3] = 255;
  }
  context.putImageData(image, 0, 0);
  return canvas.toDataURL("image/png");
}

const tintCache = new Map<string, string | null>();

function tintHref(active: readonly string[], inhibited: readonly string[], litLink: string | null) {
  const key = `${active.join(",")}|${inhibited.join(",")}|${litLink ?? ""}`;
  const cached = tintCache.get(key);
  if (cached !== undefined) return cached;
  const href =
    active.length === 0 && inhibited.length === 0 && !litLink
      ? null
      : paintTerritory(active, inhibited, litLink);
  tintCache.set(key, href);
  return href;
}

function subscribeTint() {
  return () => {};
}

function useNeuronTint(active: readonly string[], inhibited: readonly string[], litLink: string | null) {
  return useSyncExternalStore(
    subscribeTint,
    () => tintHref(active, inhibited, litLink),
    () => null,
  );
}

export function NetworkArt({
  active,
  inhibited,
  local,
  litLink,
  labels,
  selectedId,
  onSelect,
}: {
  active: readonly string[];
  inhibited: readonly string[];
  local?: "n2" | "n3" | "n4" | null;
  litLink?: string | null;
  labels?: Partial<Record<"cell-a" | "cell-b" | "cell-c" | "cell-d", string>>;
  selectedId?: string | null;
  onSelect?: (id: string) => void;
}) {
  const grain = useSvgId("net-grain");
  const tint = useNeuronTint(active, inhibited, litLink ?? null);

  return (
    <svg viewBox={`0 0 ${artView.width} ${artView.height}`} width={artView.width} height={artView.height} className="learn-network-art block h-auto w-full" role="group">
      <defs>
        <Grain id={grain} />
      </defs>
      <rect width={artView.width} height={artView.height} fill={learnColors.paper} />
      <g filter={`url(#${grain})`}>
        {networkPaths.coral.map((d, index) => (
          <path key={index} d={d} fill={learnColors.coral} />
        ))}
      </g>
      {tint ? (
        <image href={tint} x="0" y="0" width={artView.width} height={artView.height} pointerEvents="none" />
      ) : null}
      <g fill="none" stroke={learnColors.coralInk} strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
        {networkPaths.coral.map((d, index) => (
          <path key={index} d={d} />
        ))}
      </g>
      {links.map((link) => {
        const firing = litLink === link.id;
        const tone = link.kind === "inhibitory" ? learnColors.inhibitory : learnColors.signal;
        return (
          <g key={link.id} pointerEvents="none">
            <path d={link.d} fill="none" stroke={firing ? tone : "transparent"} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" opacity={firing ? 0.28 : 0} />
            <path
              className={`learn-link learn-link-${link.id}`}
              data-link={link.id}
              d={link.d}
              fill="none"
              stroke={tone}
              strokeWidth="22"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              strokeDasharray="0.18 1"
              opacity="0"
            />
          </g>
        );
      })}
      {networkNuclei.map((nucleus) => {
        const role = roleAt(nucleus.cx, nucleus.cy);
        const id = role?.id;
        const isLocal = id && local === id;
        const body = (
          <g data-cell={id ?? "context"} opacity={id ? 1 : 0.72}>
            <circle cx={nucleus.cx} cy={nucleus.cy} r={nucleus.r} fill={learnColors.nucleus} stroke={learnColors.violetInk} strokeWidth="1.3" />
            <circle cx={nucleus.cx} cy={nucleus.cy} r={nucleus.r * 0.38} fill={learnColors.nucleolus} />
            {isLocal ? (
              <path
                d={`M ${nucleus.cx - 28} ${nucleus.cy + nucleus.r * 0.2} C ${nucleus.cx - 10} ${nucleus.cy + nucleus.r + 8}, ${nucleus.cx + 18} ${nucleus.cy + nucleus.r + 8}, ${nucleus.cx + 34} ${nucleus.cy + nucleus.r * 0.1}`}
                fill="none"
                stroke={id === "n4" ? learnColors.inhibitory : learnColors.signal}
                strokeWidth="12"
                strokeLinecap="round"
              />
            ) : null}
            {role ? (
              <text x={nucleus.cx - nucleus.r - 22} y={nucleus.cy - nucleus.r - 12} fontSize="72" fontWeight="700" fill={learnColors.ink}>
                {role.letter}
              </text>
            ) : null}
          </g>
        );
        if (!role) return <g key={`${nucleus.cx}-${nucleus.cy}`}>{body}</g>;
        return (
          <Part
            key={role.part}
            id={role.part}
            label={labels?.[role.part] ?? role.letter}
            selected={selectedId === role.part}
            onSelect={onSelect}
          >
            {body}
            <circle cx={role.x} cy={role.y} r="70" fill="transparent" />
          </Part>
        );
      })}
    </svg>
  );
}
