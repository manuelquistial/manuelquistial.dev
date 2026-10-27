export const neuronSceneIds = [
  "una-neurona",
  "partes",
  "recibir-y-transmitir",
  "iones-y-membrana",
  "diferencia-de-potencial",
  "glia-y-mielina",
  "sinapsis",
  "red-neuronal",
] as const;

export type NeuronSceneId = (typeof neuronSceneIds)[number];
