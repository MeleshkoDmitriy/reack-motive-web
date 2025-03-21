import { FC } from "react";
import { HeartFill, HeartOutline } from "../../../icons";
import styles from "./LikeButton.module.less";

interface LikeButton {
  isLiked: boolean;
}

export const LikeButton: FC<LikeButton> = ({ isLiked }) => {
  return (
    <button className={styles.button} onClick={() => {}}>
      {isLiked ? (
        <HeartFill className={styles.icon} />
      ) : (
        <HeartOutline className={styles.icon} />
      )}
    </button>
  );
};
