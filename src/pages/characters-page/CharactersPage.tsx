import styles from "./CharactersPage.module.less";
import { useCharacters } from "../../hooks/useCharacters";
import { List, Filter } from "../../components";

export const CharactersPage = () => {
  const { data } = useCharacters();

  console.log("data", data);

  return (
    <div className={styles.page}>
      <Filter variant="default" />
      {data && <List variant="flex" entities={data.results} />}
    </div>
  );
};
