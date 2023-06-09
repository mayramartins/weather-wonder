import React, { useState } from "react";
import { Search } from "semantic-ui-react";

const SearchPlace = ({ onSelectSearch }) => {
  const handleResultSelect = (e, { result }) => {
    onSelectSearch(result.value);
  };

  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleSearchChange = async (event, { value }) => {
    if (value.toLowerCase().length < 2) return;

    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${value.toLowerCase()}&limit=5&key=da23ef3cfb8b440fb03dcff72260af98`
    );
    const data = await response.json();
    const filtered = data.results.map(({ formatted, geometry }) => {
      return { title: formatted, value: geometry, id: formatted };
    });
    setFilteredCountries(filtered);
  };

  return (
    <Search
      onResultSelect={handleResultSelect}
      onSearchChange={handleSearchChange}
      results={filteredCountries}
      placeholder="Search city..."
    />
  );
};

export default SearchPlace;
