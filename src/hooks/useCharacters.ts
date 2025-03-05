import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../constants/queryKeys";
import { getCharacters } from "../services/charactersService";

export const useCharacters = () => {
  return useQuery({
    queryKey: [QueryKeys.CHARACTERS],
    queryFn: () => getCharacters(),
  });
};
