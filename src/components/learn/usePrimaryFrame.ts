"use client";

import { useEffect, useId, useState } from "react";

type Slot = {
  element: HTMLElement;
  ratio: number;
  visible: number;
  notify: (primary: boolean) => void;
};

function visibleSpan(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const top = Math.max(rect.top, 0);
  const bottom = Math.min(rect.bottom, window.innerHeight);
  return { visible: Math.max(0, bottom - top), rect };
}

function isUseful(element: HTMLElement) {
  const { visible, rect } = visibleSpan(element);
  const view = window.innerHeight || 1;
  const target = Math.min(rect.height * 0.4, view * 0.32);
  return visible >= Math.max(120, target);
}

const slots = new Map<number, Slot>();
let nextSlotId = 1;
let activeId: number | null = null;
let observer: IntersectionObserver | null = null;
let listening = false;

function publish() {
  const hidden = typeof document !== "undefined" && document.hidden;
  for (const slot of slots.values()) {
    const span = visibleSpan(slot.element);
    slot.visible = span.visible;
    slot.ratio = span.visible / Math.max(span.rect.height, 1);
  }
  const active = activeId != null ? slots.get(activeId) : undefined;
  const stillVisible = active != null && active.visible >= 72;

  let bestId: number | null = null;
  let bestDistance = Number.POSITIVE_INFINITY;
  const mid = window.innerHeight * 0.46;

  for (const [id, slot] of slots) {
    if (!isUseful(slot.element)) continue;
    const rect = slot.element.getBoundingClientRect();
    const distance = Math.abs(rect.top + rect.height / 2 - mid);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestId = id;
    }
  }

  if (!stillVisible) {
    activeId = bestId;
  } else if (bestId != null && bestId !== activeId && active) {
    const rect = active.element.getBoundingClientRect();
    const currentDistance = Math.abs(rect.top + rect.height / 2 - mid);
    if (bestDistance + 72 < currentDistance) activeId = bestId;
  }

  for (const [id, slot] of slots) {
    slot.notify(!hidden && id === activeId);
  }
}

function ensureObserver() {
  if (observer || typeof IntersectionObserver === "undefined") return;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        for (const slot of slots.values()) {
          if (slot.element === entry.target) slot.ratio = entry.intersectionRatio;
        }
      }
      publish();
    },
    { threshold: [0, 0.05, 0.15, 0.3, 0.5, 0.75] },
  );
}

export function usePrimaryFrame<T extends HTMLElement>() {
  const reactId = useId();
  const [element, setElement] = useState<T | null>(null);
  const [primary, setPrimary] = useState(false);

  useEffect(() => {
    if (!element) return;
    ensureObserver();
    const id = nextSlotId;
    nextSlotId += 1;
    slots.set(id, { element, ratio: 0, visible: 0, notify: setPrimary });
    observer?.observe(element);

    if (!listening) {
      listening = true;
      document.addEventListener("visibilitychange", publish);
      window.addEventListener("resize", publish);
      window.addEventListener("scroll", publish, { passive: true });
    }

    return () => {
      observer?.unobserve(element);
      slots.delete(id);
      if (activeId === id) activeId = null;
      publish();
    };
  }, [element, reactId]);

  return [setElement, primary] as const;
}
