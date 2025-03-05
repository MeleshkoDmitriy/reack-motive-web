import { useQuery } from "@tanstack/react-query";
import styles from "./CharactersPage.module.less";
import { QueryKeys } from "../../constants/queryKeys";
import { RICK_MORTY_API_URL } from "../../api/api";
import { ListFlex } from "../../components/lists/list-flex/ListFlex";

export const CharactersPage = () => {
  const { data } = useQuery({
    queryKey: [QueryKeys.CHARACTERS],
    queryFn: () => fetch(RICK_MORTY_API_URL).then((res) => res.json()),
  });

  console.log("data", data);
  return (<div className={styles.page}>
    {data && (
      <ListFlex entities={data.results} />
    )}
  </div>);
};
