import { useState } from "react";
import Styles from "./Search.module.scss";
import { useQueryClient } from "@tanstack/react-query";

const Search = () => {
  const queryClient = useQueryClient();
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleSearch = async () => {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchPhrase}`);
    const data = await response.json();
    queryClient.setQueryData(["searchResults"], data);
  };

  return (
    <div className={Styles.searchContainer}>
      <input
        type="text"
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.target.value)}
        placeholder="Search for TV shows"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
