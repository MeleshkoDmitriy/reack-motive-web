import { RICK_MORTY_API_URL } from "../api/api";
import { ICharacterResponse } from "../types/CharacterTypes";

export const getCharacters = async (): Promise<ICharacterResponse> => {
  const response = await fetch(`${RICK_MORTY_API_URL}`);
  const data = await response.json();
  return data;
};

export const getCharactersWithParams = async (
  page?: number
): Promise<ICharacterResponse> => {
  const response = await fetch(`${RICK_MORTY_API_URL}/?page=${page}`);
  const data = await response.json();
  return data;
};
