import { useState } from "react";
import SearchIcon from "../assets/icon-search.svg";

const SearchBar = (props) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const results = props.data.filter((movie) =>
      movie.title.toLowerCase().includes(input.toLowerCase())
    );
    props.setSearched(results);
  };

  return (
    <form onSubmit={handleSearch} action="submit">
      <img src={SearchIcon} onClick={handleSearch} alt="SearchIcon" />
      <input
        type="text"
        name="searchBar"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        id="searchBar"
        placeholder="search for movies or TV series"
      />
    </form>
  );
};

export default SearchBar;
