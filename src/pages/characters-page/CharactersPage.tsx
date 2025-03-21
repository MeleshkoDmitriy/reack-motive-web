import styles from "./CharactersPage.module.less";
import { useCharacters } from "../../hooks/useCharacters";
import { List, Filter } from "../../components";
import { LoadingSpinner } from "../../components/shared/spinners/loading-spinner/LoadingSpinner";
import { Pagination } from "../../components/pagination/Pagination";

export const CharactersPage = () => {
  const { query, currentPage } = useCharacters();
  // const { data, isError, isLoading, isFetching } = query;

  console.log("CharactersPage---query.data?.results", query.data?.results);
  console.log("currentPage", currentPage);
  console.log("query", query);


  if (query.isError) {
    return <div>Error fetching data</div>;
  }

  if (query.isLoading || query.isFetching) {
    <LoadingSpinner isLoading={true} />;
  }

  return (
    <div className={styles.page}>
      <Filter variant="default" />
      {query.data && <List variant="flex" entities={query.data?.results} />}
      {query.data && <Pagination currentPage={currentPage} pagesInfo={query.data.info} />}
    </div>
  );
};
