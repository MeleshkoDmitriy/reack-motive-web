import { TCharacter } from "@/reack-motive-web/src/types/CharacterTypes";
import { FC } from "react";
import styles from "./ListFlex.module.less";
import { Card } from "../../../components";

interface ListFlexProps {
  entities: TCharacter[];
}

export const ListFlex: FC<ListFlexProps> = ({ entities }) => {
  return (
    <section className={styles.list}>
      {entities.map((item) => (
        <Card variant="default" character={item} key={item.id} />
      ))}
    </section>
  );
};
