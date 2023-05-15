import React, { useEffect, useState } from "react";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log("Latitude is:", position.coords.latitude);
      console.log("Longitude is:", position.coords.longitude);
    });
  }, []);

  return (
    <div className="App">
      <h1>Weather Wonder App</h1>
    </div>
  );
}

export default App;
