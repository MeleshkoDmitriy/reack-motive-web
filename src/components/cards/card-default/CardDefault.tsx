import { TCharacter } from "@/reack-motive-web/src/types/CharacterTypes";
import { FC } from "react";
import styles from "./CardDefault.module.less";
import { Indicator } from "../../../components";
import { getFormattedDate } from "@/reack-motive-web/src/utils/getFormattedDate";
import { LikeButton } from "../../shared/buttons/like-button/LikeButton";

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
          <p className={styles.info}>
            <Indicator info={character.status} />
            <span>{character.status}</span>
          </p>
          <p className={styles.info}>
            <Indicator info={character.species} />
            <span>{character.species}</span>
          </p>
          <p className={styles.info}>
            <Indicator info={character.gender} />
            <span>{character.gender}</span>
          </p>
        </div>
        <p>Created: {getFormattedDate(character.created)}</p>
        <LikeButton isLiked={false} />
      </div>
    </div>
  );
};
