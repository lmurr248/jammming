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
        <input placeholder="Search songs..." onChange={handleTermChange} />
        <button onClick={search}>Search</button>
      </div>
    </div>
  );
}
