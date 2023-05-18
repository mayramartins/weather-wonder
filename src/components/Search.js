import React, { useState } from "react";
import { Placeholder, Search } from "semantic-ui-react";
// import "./../styles.css";

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
    { title: "Brasil" },
    { title: "Canadá" },
    { title: "Estados Unidos" },
    { title: "França" },
    { title: "Alemanha" },
    { title: "Itália" },
    { title: "Japão" },
    { title: "China" },
    { title: "Índia" },
    { title: "Austrália" },
  ];

  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleSearchChange = (e, { value }) => {
    const filtered = countries.filter((country) =>
      country.title.toLowerCase().includes(value.toLowerCase())
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
