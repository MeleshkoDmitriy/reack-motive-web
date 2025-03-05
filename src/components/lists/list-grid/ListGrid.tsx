import { TCharacter } from "@/reack-motive-web/src/types/CharacterTypes";
import styles from "./ListGrid.module.less";
import { FC } from "react";
import { Card } from "../../cards/Card";

interface ListGridProps {
  entities: TCharacter[];
}

export const ListGrid: FC<ListGridProps> = ({ entities }) => {
  return (
    <section className={styles.list}>
      {entities.map((item) => (
        <Card variant="favorite" character={item} key={item.id} />
      ))}
    </section>
  );
};
