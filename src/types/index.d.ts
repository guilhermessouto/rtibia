interface Information {
  api: {
    commit: string
    release: string
    version: number
  }
  status: {
    error: number
    http_code: number
    message: string
  }
  tibia_urls: string[]
  timestamp: string
}

interface BoostableBoss {
  featured: boolean
  image_url: string
  name: string
}

interface BoostableBossesResponse {
  boostable_bosses: {
    boostable_boss_list: BoostableBoss[]
    boosted: BoostableBoss
  }
  information: Information
}

interface CharacterAchievement {
  grade: number
  name: string
  secret: boolean
}

interface Participant {
  name: string
  player: boolean
  summon: string
  traded: boolean
}

interface CharacterDeath {
  level: number
  reason: string
  time: string
  killers: Participant[]
  assists: Participant[]
}

interface CharacterGuild {
  name: string
  rank: string
}

interface CharacterHouse {
  houseid: number
  name: string
  paid: string
  town: string
}

interface OtherCharacter {
  name: string
  status: string
  position: string
  world: string
  traded: boolean
  deleted: boolean
  main: boolean
}

interface CharacterResponse {
  character: {
    account_status: string
    achievement_points: number
    comment: string
    deletion_date: string
    former_names: string[]
    former_worlds: string[]
    guild: CharacterGuild
    houses: CharacterHouse[]
    last_login: string
    level: number
    married_to: string
    name: string
    position: string
    residence: string
    sex: string
    title: string
    traded: boolean
    unlocked_titles: number
    vocation: string
    world: string
  }
  deaths: CharacterDeath[]
  deaths_truncated: boolean
  other_characters: OtherCharacter[]
  information: Information
}

// one creature
interface Creature {
  be_convinced: boolean
  be_paralysed: boolean
  be_summoned: boolean
  behaviour: string
  convinced_mana: number
  description: string
  experience_points: number
  featured: boolean
  healed: string[]
  hitpoints: number
  image_url: string
  immune: string[]
  is_lootable: boolean
  loot_list: string[]
  name: string
  race: string
  see_invisible: boolean
  strong: string[]
  summoned_mana: number
  weakness: string[]
}

interface CreatureResponse {
  creature: Creature
  information: Information
}

// list
interface CreatureSummary {
  featured: boolean
  image_url: string
  name: string
  race: string
}

interface CreaturesResponse {
  creatures: {
    boosted: CreatureSummary
    creature_list: CreatureSummary[]
  }
  information: Information
}

interface GuildMember {
  joined: string
  level: number
  name: string
  rank: string
  status: string
  title: string
  vocation: string
}

interface Guild {
  active: boolean
  description: string
  disband_condition: string
  disband_date: string
  founded: string
  guildhalls: Array<{ name: string; paid_until: string; world: string }>
  homepage: string
  in_war: boolean
  invites: Array<{ date: string; name: string }>
  logo_url: string
  members: GuildMember[]
  members_invited: number
  members_total: number
  name: string
  open_applications: boolean
  players_offline: number
  players_online: number
  world: string
}

interface GuildResponse {
  guild: Guild
  information: Information
}

interface GuildSummary {
  description: string
  logo_url: string
  name: string
}

interface GuildsResponse {
  guilds: {
    active: GuildSummary[]
    formation: GuildSummary[]
    world: string
  }
  information: Information
}

interface World {
  battleye_date: string
  battleye_protected: boolean
  creation_date: string
  game_world_type: string
  location: string
  name: string
  online_players: Array<{ name: string; level: number; vocation: string }>
  players_online: number
  premium_only: boolean
  pvp_type: string
  record_date: string
  record_players: number
  status: string
  tournament_world_type: string
  transfer_type: string
  world_quest_titles: string[]
}

interface WorldResponse {
  information: Information
  world: World
}

interface WorldSummary {
  battleye_date: string
  battleye_protected: boolean
  game_world_type: string
  location: string
  name: string
  players_online: number
  premium_only: boolean
  pvp_type: string
  status: string
  tournament_world_type: string
  transfer_type: string
}

interface WorldsResponse {
  information: Information
  worlds: {
    players_online: number
    record_date: string
    record_players: number
    regular_worlds: WorldSummary[]
    tournament_worlds: WorldSummary[]
  }
}


interface Spell {
  description: string
  has_rune_information: boolean
  has_spell_information: boolean
  image_url: string
  name: string
  rune_information?: {
    damage_type: string
    group_attack: boolean
    group_healing: boolean
    group_support: boolean
    level: number
    magic_level: number
    vocation: string[]
  }
  spell_id: string
  spell_information?: {
    amount: number
    city: string[]
    cooldown_alone: number
    cooldown_group: number
    damage_type: string
    formula: string
    group_attack: boolean
    group_healing: boolean
    group_support: boolean
    level: number
    mana: number
    premium_only: boolean
    price: number
    soul_points: number
    type_instant: boolean
    type_rune: boolean
    vocation: string[]
  }
}

interface SpellResponse {
  spell: Spell
  information: Information
}

interface SpellSummary {
  formula: string
  group_attack: boolean
  group_healing: boolean
  group_support: boolean
  level: number
  mana: number
  name: string
  premium_only: boolean
  price: number
  spell_id: string
  type_instant: boolean
  type_rune: boolean
}

interface SpellsResponse {
  information: Information
  spells: {
    spell_list: SpellSummary[]
    spells_filter: string
  }
}
