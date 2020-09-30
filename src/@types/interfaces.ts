export interface BaseAPIType {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface BaseResult {
  name: string;
  url: string;
}

interface DetailsNames {
  language: BaseResult;
  name: string;
}

export interface GameVersion extends BaseAPIType {
  results: BaseResult[];
}

export interface GameVersionDetails {
  name: string;
  names: DetailsNames[];
  pokemon_species: BaseResult[];
  main_region: BaseResult;
  types: BaseResult[];
}
