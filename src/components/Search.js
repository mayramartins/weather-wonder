import React, { useState } from "react";
import { Placeholder } from "semantic-ui-react";
import "./../styles.css";

const Search = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(location);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={location}
        onChange={handleInputChange}
        placeholder="Enter location"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
