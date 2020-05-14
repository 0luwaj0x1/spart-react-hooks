import React, { useContext } from "react";
import AppContext from "../contexts/search";

const SearchBar = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <div className="search-bar">
      <input
        type="search"
        id="search"
        className="search-bar--search"
        placeholder="Start typing to highlight..."
        onChange={(evt) => {
          dispatch({ type: "SEARCH", payload: evt.target.value });
        }}
      />
    </div>
  );
};

export default SearchBar;
