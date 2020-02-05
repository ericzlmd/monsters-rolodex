import React from "react";

import "./SearchBox.styles.css";

export const SearchBox = ({ placeholder, onSearchChange }) => (
  <input
    className="search"
    type="search"
    onChange={onSearchChange}
    placeholder={placeholder}
  />
);
