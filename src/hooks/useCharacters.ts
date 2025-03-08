import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../constants/queryKeys";
import { getCharactersWithParams } from "../services/charactersService";
import { useState } from "react";

// interface useCharactersProps {
// }

export const useCharacters = () => {
  const [page] = useState(1);

  const query = useQuery({
    queryKey: [QueryKeys.CHARACTERS],
    queryFn: () => getCharactersWithParams(page),
  });

  return {
    query,
    page,
  };
};
