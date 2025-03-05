import { RICK_MORTY_API_URL } from "../api/api";
import { ICharacterResponse } from "../types/CharacterTypes";

export const getCharacters = async (
): Promise<ICharacterResponse> => {
  const response = await fetch(`${RICK_MORTY_API_URL}`);
  const data = await response.json();
  return data;
};
