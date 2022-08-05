import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
function Search({ searchButton }) {
  const [search, setSearch] = useState("");
  const searchBar = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <section className="search-container">
      <input
        type="text"
        placeholder="Search Location"
        className="search-input"
        onChange={(e) => searchBar(e)}
      />
      <button className="search-button" onClick={() => searchButton(search)}>
        <AiOutlineSearch style={{ fontSize: "20px" }} />
      </button>
    </section>
  );
}

export default Search;