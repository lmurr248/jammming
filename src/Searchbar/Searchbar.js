import React, { useState, useCallback } from "react";
import "./Searchbar.css";

export default function SearchBar(props) {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(
    (event) => {
      event.preventDefault();
      props.onSearch(term);
    },
    [props.onSearch, term]
  );

  return (
    <div className="searchContainer">
      <form className="search" onSubmit={search}>
        <h4>Search for songs:</h4>
        <input
          className="searchInput"
          placeholder="Enter a song or artist..."
          value={term}
          onChange={handleTermChange}
        />
        <button type="submit" className="searchButton">
          Search
        </button>
      </form>
    </div>
  );
}
