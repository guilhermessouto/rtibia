import { ENDPOINTS } from "@/api/paths"
import { useApiRequest } from "./use-api-request"

export const useGetBoostableBosses = () => {
  return useApiRequest<BoostableBossesResponse>(ENDPOINTS.boostableBosses)
}

export const useGetCharacter = (name: string) => {
  return useApiRequest<CharacterResponse>(ENDPOINTS.character(name))
}

export const useGetCreatures = () => {
  return useApiRequest<CreaturesResponse>(ENDPOINTS.creatures)
}

export const useGetCreatureRace = (race: string) => {
  return useApiRequest<CreatureResponse>(ENDPOINTS.creatureRace(race))
}

export const useGetGuild = (name: string) => {
  return useApiRequest<GuildResponse>(ENDPOINTS.guild(name))
}

export const useGetGuilds = (world: string) => {
  return useApiRequest<GuildsResponse>(ENDPOINTS.guilds(world))
}

export const useGetSpell = (spell_id: string) => {
  return useApiRequest<SpellResponse>(ENDPOINTS.spell(spell_id))
}

export const useGetSpells = () => {
  return useApiRequest<SpellsResponse>(ENDPOINTS.spells)
}

export const useGetWorld = (name: string) => {
  return useApiRequest<WorldResponse>(ENDPOINTS.world(name))
}

export const useGetWorlds = () => {
  return useApiRequest<WorldsResponse>(ENDPOINTS.worlds)
}
