import { FC } from "react"
import styles from './Pagination.module.less';
import { PaginationController } from "./pagination-controller/PaginationController";

interface PaginationProps {
  page: number;
}

export const Pagination: FC<PaginationProps> = ({ page }) => {
  return (
    <section className={styles.pagination}>
      <PaginationController direction="prev" />
      <PaginationController direction="next" />
    </section>
  )
}