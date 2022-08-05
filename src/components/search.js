import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
function Search({ searchButton, locationName }) {
  const [search, setSearch] = useState("");
  const searchBar = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchButton(search);
    }
  };
  return (
    <section className="search-container">
      <input
        type="text"
        placeholder="Search Location"
        defaultValue={locationName.length > 0 ? locationName : ""}
        className="search-input"
        onChange={(e) => searchBar(e)}
        onKeyDown={handleKeyDown}
      />
      <button className="search-button" onClick={() => searchButton(search)}>
        <AiOutlineSearch style={{ fontSize: "20px" }} />
      </button>
    </section>
  );
}

export default Search;
