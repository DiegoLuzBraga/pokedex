export interface BaseAPIType {
  count: number;
  next: string | null;
  previous: string | null;
}

interface BaseResult {
  name: string;
  url: string;
}

export interface GameVersion extends BaseAPIType {
  results: BaseResult[];
}
