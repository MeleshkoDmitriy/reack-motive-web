import { useQuery } from "@tanstack/react-query";
import { getCharactersWithParams } from "../services/charactersService";
import { useState } from "react";

// interface useCharactersProps {
// }

export const useCharacters = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const query = useQuery({
    queryKey: ["characters", currentPage],
    queryFn: () => getCharactersWithParams(currentPage),
  });

  const handleNextPageChange = () => {
    if (query.data?.info.next) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPageChange = () => {
    if (query.data?.info.prev) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // console.log("currentPage", currentPage);
  // console.log("query.data?.info", query.data?.info);
  // console.log("query.data?.results", query.data?.results);

  return {
    query,
    currentPage,
    handleNextPageChange,
    handlePreviousPageChange,
  };
};
