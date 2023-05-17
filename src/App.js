import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";
import { Dimmer, Loader } from "semantic-ui-react";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setData(result);
        });
    };
    fetchData();
  }, [lat, long]);

  const handleSearch = (location) => {
    console.log("Search location", location);
  };

  return (
    <div className="App">
      <div>
        <Navbar />
        {/* App content */}
      </div>
      <Search onSearch={handleSearch} />

      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
}
