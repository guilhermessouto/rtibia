import { API_VERSION } from "@/api/constants";

export const ENDPOINTS = {
  boostableBosses: `/v${API_VERSION}/boostablebosses`,
  character: (name: string) => `/v${API_VERSION}/character/${name}`,
  creatureRace: (race: string) => `/v${API_VERSION}/creature/${race}`,
  creatures: `/v${API_VERSION}/creatures`,
  guild: (name: string) => `/v${API_VERSION}/guild/${name}`,
  guilds: (world: string) => `/v${API_VERSION}/guilds/${world}`,
  spell: (spell_id: string) => `/v${API_VERSION}/spell/${spell_id}`,
  spells: `/v${API_VERSION}/spells`,
  world: (name: string) => `/v${API_VERSION}/world/${name}`,
  worlds: `/v${API_VERSION}/worlds`
}
