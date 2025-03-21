import { FC } from "react";
import styles from "./Pagination.module.less";
import { PaginationController } from "./pagination-controller/PaginationController";
import { IInfo } from "../../types/CharacterTypes";
import { PaginationList } from "./pagination-list/PaginationList";

interface PaginationProps {
  currentPage: number;
  pagesInfo: IInfo;
}

export const Pagination: FC<PaginationProps> = ({ currentPage, pagesInfo }) => {
  return (
    <section className={styles.pagination}>
      <PaginationController direction="prev" pagesInfo={pagesInfo} />
      <PaginationList currentPage={currentPage} pagesQuantity={pagesInfo.pages} />
      <PaginationController direction="next" pagesInfo={pagesInfo} />
    </section>
  );
};
