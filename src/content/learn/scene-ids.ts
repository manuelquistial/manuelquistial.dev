export const neuronSceneIds = [
  "una-neurona",
  "partes",
  "recibir-y-transmitir",
  "glia-y-mielina",
  "sinapsis",
  "iones-y-membrana",
  "diferencia-de-potencial",
  "red-neuronal",
] as const;

export type NeuronSceneId = (typeof neuronSceneIds)[number];
