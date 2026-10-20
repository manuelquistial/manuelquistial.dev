import { useId } from "react";

export function svgId(prefix: string, raw: string) {
  return `${prefix}-${raw.replace(/:/g, "")}`;
}

export function useSvgId(prefix: string) {
  return svgId(prefix, useId());
}

/** Fine static grain, clipped to the shape's alpha so it cannot leave a rectangle. */
export function Grain({ id }: { id: string }) {
  return (
    <filter id={id} x="-4%" y="-4%" width="108%" height="108%" colorInterpolationFilters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" stitchTiles="stitch" result="noise" />
      <feColorMatrix
        in="noise"
        type="matrix"
        values="0 0 0 0 0.28  0 0 0 0 0.18  0 0 0 0 0.14  0 0 0 1 0"
        result="gray"
      />
      <feComponentTransfer in="gray" result="faint">
        <feFuncA type="linear" slope="0.04" />
      </feComponentTransfer>
      <feComposite in="faint" in2="SourceAlpha" operator="in" result="clipped" />
      <feBlend in="clipped" in2="SourceGraphic" mode="multiply" />
    </filter>
  );
}
