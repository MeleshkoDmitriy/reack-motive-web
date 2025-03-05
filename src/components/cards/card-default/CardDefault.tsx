import { TCharacter } from "@/reack-motive-web/src/types/CharacterTypes";
import { FC } from "react";
import styles from "./CardDefault.module.less";

interface CardDefaultProps {
  character: TCharacter;
}

export const CardDefault: FC<CardDefaultProps> = ({ character }) => {
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
        <div className={styles.characterInfo}>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Origin: {character.gender}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <p>{character.created}</p>
      </div>
    </div>
  );
};
