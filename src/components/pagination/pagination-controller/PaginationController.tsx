import { FC, useCallback } from "react";
import styles from "./PaginationController.module.less";
import { ArrowLeft, ArrowRight } from "../../icons";
import clsx from "clsx";

type TDirection = "prev" | "next";

interface PaginationControllerProps {
  direction: TDirection;
}

export const PaginationController: FC<PaginationControllerProps> = ({
  direction,
}) => {
  const iconClasses = clsx(styles.icon, {
    [styles.prev]: direction === "prev",
    [styles.next]: direction === "next",
  });

  const defineDirectionIcon = useCallback(() => {
    switch (direction) {
      case "prev":
        return <ArrowLeft className={iconClasses} />;
      case "next":
        return <ArrowRight className={iconClasses} />;
      default:
        return null;
    }
  }, [direction, iconClasses]);

  return <button className={styles.controller}>{defineDirectionIcon()}</button>;
};
