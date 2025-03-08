import styles from "./CharactersPage.module.less";
import { useCharacters } from "../../hooks/useCharacters";
import { List, Filter } from "../../components";
import { LoadingSpinner } from "../../components/shared/spinners/loading-spinner/LoadingSpinner";
import { Pagination } from "../../components/pagination/Pagination";

export const CharactersPage = () => {
  const { query, page } = useCharacters();
  const { data, isError, isLoading, isFetching } = query;

  // console.log("data", data);

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (isLoading || isFetching) {
    <LoadingSpinner isLoading={true} />;
  }

  return (
    <div className={styles.page}>
      <Filter variant="default" />
      {data && <List variant="flex" entities={data.results} />}
      {data && <Pagination page={page} />}
    </div>
  );
};
