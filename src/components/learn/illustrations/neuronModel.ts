import { artView, neuronAxon, neuronChains, neuronMeasure, neuronSoma } from "@/components/learn/illustrations/tracedGeometry";

export const neuronView = artView;

export const somaCenter = { x: neuronSoma.cx, y: neuronSoma.cy };

export const signalChains = neuronChains;

export const axonCurves = neuronAxon;

export const measurePoint = neuronMeasure;

export const neuronAnchors = {
  dendrites: { x: 16, y: 22 },
  soma: { x: 22, y: 42 },
  nucleus: { x: 24, y: 48 },
  axon: { x: 58, y: 56 },
  myelin: { x: 48, y: 52 },
  nodes: { x: 72, y: 64 },
} as const;
