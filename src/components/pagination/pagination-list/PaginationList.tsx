import { FC } from "react";
import styles from "./PaginationList.module.less";
import { PaginationButton } from "../pagination-button/PaginationButton";

interface PaginationListPros {
  pagesQuantity: number;
  currentPage: number;
}

export const PaginationList: FC<PaginationListPros> = ({
  pagesQuantity,
  currentPage,
}) => {
  const pagesArray = Array.from(
    { length: pagesQuantity },
    (_, index) => index + 1
  );
  const visiblePagesArray = pagesArray.filter(
    (page) => page >= currentPage - 2 && page <= currentPage + 2
  );

  const lastPage = pagesArray.length;

  return (
    <div className={styles.list}>
      {lastPage - currentPage < 3 && (
        <>
          <PaginationButton
            pageNumber={pagesArray[0]}
            currentPage={currentPage}
          />
          <PaginationButton pageNumber={null} currentPage={currentPage} />
        </>
      )}

      {visiblePagesArray.map((pageNumber) => (
        <PaginationButton pageNumber={pageNumber} currentPage={currentPage} />
      ))}

      {lastPage - currentPage > 2 && (
        <>
          <PaginationButton pageNumber={null} currentPage={currentPage} />
          <PaginationButton pageNumber={lastPage} currentPage={currentPage} />
        </>
      )}
    </div>
  );
};
