export interface BaseAPIType {
  count: number;
  next: string | null;
  previous: string | null;
}

interface BaseResult {
  name: string;
  url: string;
}

interface PokedexResult {
  entry_number: number;
  pokemon_species: BaseResult;
}

export interface GameVersion extends BaseAPIType {
  results: BaseResult[];
}

export interface GameVersionDetails {
  name: string;
  version_group: BaseResult;
}

export interface GameVersionGroupDetails {
  generation: BaseResult;
  regions: BaseResult[];
  pokedexes: BaseResult[];
}

export interface Pokedex {
  pokemon_entries: PokedexResult[];
}
