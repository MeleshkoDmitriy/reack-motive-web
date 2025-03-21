import { FC } from "react";
import { FilterDefault } from "./filter-default/FilterDefault";
import styles from "./Filter.module.less";

type TFilterVariant = "default" | "favorite";

interface FilterProps {
  variant: TFilterVariant;
}

export const Filter: FC<FilterProps> = ({ variant }) => {
  switch (variant) {
    case "default":
      return (
        <div className={styles.wrapper}>
          <FilterDefault />
        </div>
      );
    case "favorite":
      return (
        <div className={styles.wrapper}>
          <h1>Filter Favs</h1>
        </div>
      );
    default:
      return null;
  }
};
