import { FC } from "react";
import styles from "./LoadingSpinner.module.less";
import { SpinnerIcon } from "../../../icons";

interface LoadingSpinnerProps {
  isLoading: boolean;
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = () => {
  return (
    <div className={styles.wrapper}>
      <SpinnerIcon className={styles.icon} />
    </div>
  );
};
