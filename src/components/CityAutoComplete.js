// import React, { useState } from "react";
// import Select from "react-select";

// const cityAutoComplete = () => {
//   const [selectedCity, setSelectedCity] = useState(null);

//   const handleCityChange = (selectedOption) => {
//     setSelectedCity(selectedOption);
//   };

//   const fetchCities = async (inputValue) => {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/find?q=${inputValue}&type=like&appid=5f6903a78bc4cac4fb5772cd878d0e3d`
//     );
//     const data = await response.json();

//     const options = data.list.map((city) => ({
//       value: city.name,
//       label: `${city.name}, ${city.sys.country}`,
//     }));

//     return options;
//   };

//   return (
//     <Select
//       placeholder="Search for a city..."
//       value={selectedCity}
//       onChange={handleCityChange}
//       onInputChange={fetchCities}
//       isAsync
//       cacheOptions
//     />
//   );
// };

// export default cityAutoComplete;
