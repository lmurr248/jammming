import React, { useState, useCallback } from "react";
import "./Searchbar.css";

export default function SearchBar(props) {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

  return (
    <div className="searchContainer">
      <div className="search">
        <h4>Search for songs:</h4>
        <input className="searchInput"
          placeholder="Enter a song or artist..."
          onChange={handleTermChange}
        />
        <button className="searchButton" onClick={search}>
          Search
        </button>
      </div>
    </div>
  );
}
