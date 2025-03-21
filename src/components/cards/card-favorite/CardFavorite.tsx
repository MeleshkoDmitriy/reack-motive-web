import { TCharacter } from "@/reack-motive-web/src/types/CharacterTypes";
import { FC } from "react";
import styles from "./CardFavorite.module.less";

interface CardFavoriteProps {
  character: TCharacter;
}

export const CardFavorite: FC<CardFavoriteProps> = ({ character }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{character.name}</h3>
      </div>
      <div className={styles.body}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={character.image}
            alt={character.name}
            title={character.name}
          />
        </div>
      </div>
    </div>
  );
};
