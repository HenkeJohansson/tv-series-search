import { useQuery } from "@tanstack/react-query";
import SerieCard from "../SerieCard/SerieCard";
import Styles from "./Results.module.scss";
import { TShow } from "../../../../common/types";

type TSearchResult = {
  score: number;
  show: TShow;
};

const Results = () => {
  const { data: searchResults = [] } = useQuery<TSearchResult[]>({
    queryKey: ["searchResults"],
    queryFn: async () => {
      return [];
    },
    staleTime: Infinity,
    enabled: false,
  });

  return (
    <ul className={Styles.results}>
      {searchResults.length > 0
        ? searchResults.map((resultItem: TSearchResult) => <SerieCard key={resultItem.show.id} showInfo={resultItem.show} />)
        : null}
    </ul>
  );
};

export default Results;
