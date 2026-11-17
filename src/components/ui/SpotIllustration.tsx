import Image from "next/image";
import { cn } from "@/lib/utils";

export const spotIllustrations = {
  wave: {
    src: "/images/illustrations/portrait-wave.png",
    width: 640,
    height: 640,
  },
  coding: {
    src: "/images/illustrations/portrait-coding.png",
    width: 640,
    height: 640,
  },
  research: {
    src: "/images/illustrations/portrait-research.png",
    width: 640,
    height: 640,
  },
  learn: {
    src: "/images/illustrations/portrait-learn.png",
    width: 640,
    height: 640,
  },
} as const;

export type SpotIllustrationId = keyof typeof spotIllustrations;

const sizeClasses = {
  sm: "size-28",
  md: "size-36",
  card: "size-44 md:size-52",
  lg: "size-48 md:size-56",
  xl: "size-52 md:size-60 lg:size-64",
  hero: "size-64 sm:size-72 lg:size-[22rem] xl:size-[24rem]",
} as const;

export type SpotIllustrationSize = keyof typeof sizeClasses;

interface SpotIllustrationProps {
  id: SpotIllustrationId;
  alt?: string;
  priority?: boolean;
  size?: SpotIllustrationSize;
  className?: string;
  sizes?: string;
}

export function SpotIllustration({
  id,
  alt = "",
  priority = false,
  size = "lg",
  className,
  sizes = "(min-width: 1024px) 296px, 224px",
}: SpotIllustrationProps) {
  const asset = spotIllustrations[id];

  return (
    <Image
      src={asset.src}
      alt={alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      sizes={sizes}
      className={cn(
        "pointer-events-none max-w-none select-none object-contain",
        sizeClasses[size],
        className,
      )}
    />
  );
}
