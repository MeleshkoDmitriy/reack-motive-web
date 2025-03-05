import { FC } from "react";
import { FilterDefault } from "./filter-default/FilterDefault";

type TFilterVariant = "default" | "favorite" ;

interface FilterProps {
  variant: TFilterVariant;
}

export const Filter: FC<FilterProps> = ({ variant }) => {
  switch (variant) {
    case "default": return <FilterDefault />;
    case "favorite": return <h1>Filter Favs</h1>;
    default: return null;
  }
}