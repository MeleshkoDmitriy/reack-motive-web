import { FC } from "react";
import { TCharacter } from "../../types/CharacterTypes";
import { ListFlex } from "./list-flex/ListFlex";
import { ListGrid } from "./list-grid/ListGrid";

type TListVariant = "flex" | "grid";

interface ListProps {
  variant: TListVariant;
  entities: TCharacter[];
}

export const List: FC<ListProps> = ({ variant, entities }) => {
  switch (variant) {
    case "flex":
      return <ListFlex entities={entities} />;
    case "grid":
      return <ListGrid entities={entities} />;
    default:
      return null;
  }
};
