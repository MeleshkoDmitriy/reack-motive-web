import { TFilterCharacterGender, TFilterCharacterSpecies, TFilterCharacterStatus } from "../types/CharacterTypes";

export const speciesOptions: TFilterCharacterSpecies[] = ["All", "Human", "Humanoid", "Alien", "unknown"];
export const statusOptions: TFilterCharacterStatus[] = ["All", "Alive", "Dead", "unknown"];
export const genderOptions: TFilterCharacterGender[] = ["All", "Male", "Female", "Genderless", "unknown"];
