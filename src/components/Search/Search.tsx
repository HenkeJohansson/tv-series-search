import { useState } from 'react';
import Styles from './Search.module.scss';

const Search = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  
  return (
    <div className={Styles.searchContainer}>
      <input
        type="text"
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.target.value)}
        placeholder='Search for TV shows'
      />
      <button>Search</button>
    </div>
  )
};

export default Search;
