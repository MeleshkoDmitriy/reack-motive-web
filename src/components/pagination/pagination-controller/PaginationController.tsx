import { FC, useCallback } from "react";
import styles from "./PaginationController.module.less";
import { ArrowLeft, ArrowRight } from "../../icons";
import clsx from "clsx";
import { IInfo } from "@/reack-motive-web/src/types/CharacterTypes";
import { useCharacters } from "@/reack-motive-web/src/hooks/useCharacters";

type TDirection = "prev" | "next";

interface PaginationControllerProps {
  direction: TDirection;
  pagesInfo: IInfo;
}

export const PaginationController: FC<PaginationControllerProps> = ({
  direction,
  // pagesInfo,
}) => {
  const { handleNextPageChange, handlePreviousPageChange } = useCharacters();

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

  const defineOnClickHandler = () => {
    if (direction === "next") {
      return handleNextPageChange;
    }

    if (direction === "prev") {
      return handlePreviousPageChange;
    }

    return () => {};
  };

  return (
    <button className={styles.controller} onClick={defineOnClickHandler()}>
      {defineDirectionIcon()}
    </button>
  );
};
