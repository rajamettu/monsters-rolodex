import React from "react";

import "./searchbox.styles.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <label>
      <input
        className="search"
        type="search"
        name="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
};

export default SearchBox;
