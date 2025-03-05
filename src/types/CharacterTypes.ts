interface IInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface IOriginLocation {
  name: string;
  url: string;
}

interface ILocation {
  name: string;
  url: string;
}

export type TCharacterSpecies = "Human" | "Humanoid" | "Alien" | "unknown";
export type TFilterCharacterSpecies = TCharacterSpecies | "all";
export type TCharacterStatus = "Alive" | "Dead" | "unknown";
export type TFilterCharacterStatus = TCharacterStatus | "all";
export type TCharacterGender = "Male" | "Female" | "Genderless" | "unknown";

export type TCharacter = {
  id: number;
  name: string;
  type: string;
  species: TCharacterSpecies;
  status: TCharacterStatus;
  gender: TCharacterGender;
  origin: IOriginLocation;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export interface ICharacterResponse {
  info: IInfo;
  results: TCharacter[];
}

export interface ICharacterRequest {
  page: number;
  species: TFilterCharacterSpecies;
  status: TFilterCharacterStatus;
}
