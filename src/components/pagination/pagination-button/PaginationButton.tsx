import clsx from "clsx";
import styles from "./PaginationButton.module.less";
import { FC } from "react";

interface PaginationButtonProps {
  currentPage: number;
  pageNumber: number | null;
}

export const PaginationButton: FC<PaginationButtonProps> = ({
  currentPage,
  pageNumber,
}) => {
  const buttonClasses = clsx(styles.button, {
    [styles.active]: currentPage === pageNumber,
  });

  return (
    <button className={buttonClasses}>{pageNumber ? pageNumber : "..."}</button>
  );
};
