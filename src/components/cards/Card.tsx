import { FC } from "react";
import { CardDefault } from "./card-default/CardDefault";
import { CardFavorite } from "./card-favorite/CardFavorite";
import { TCharacter } from "../../types/CharacterTypes";

type TCardVariant = "default" | "favorite";

interface CardProps {
  variant: TCardVariant;
  character: TCharacter;
}

export const Card: FC<CardProps> = ({ variant, character }) => {
  switch (variant) {
    case "default":
      return <CardDefault character={character} />;
    case "favorite":
      return <CardFavorite character={character} />;
    default:
      return null;
  }
};
