import React, { useState } from "react";
import { Placeholder, Search } from "semantic-ui-react";
import "./../styles.css";

const SearchPlace = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(location);
  };
  console.log("funfou");

  const countries = [
    "Brasil",
    "Canadá",
    "Estados Unidos",
    "França",
    "Alemanha",
    "Itália",
    "Japão",
    "China",
    "Índia",
    "Austrália",
  ];

  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleSearchChange = (e, { value }) => {
    const filtered = countries.filter((country) =>
      country.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <form onSubmit={handleSearch}>
      <Search
        onSearchChange={handleSearchChange}
        results={filteredCountries}
        placeholder="Pesquisar país..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchPlace;
