import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import backgroundImage from "./weather2.jpg";

export default function App() {
  const [coord, setCoord] = useState({});
  const [data, setData] = useState({});

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100vh", // 100% of the viewport height
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    header: {
      paddingTop: "20px",
      paddingBottom: "20px",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!coord.lat || !coord.lng) return;
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${coord.lat}&lon=${coord.lng}&units=metric&APPID=5f6903a78bc4cac4fb5772cd878d0e3d`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [coord]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoord({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1>Weather Wonder </h1>
        <Search onSelectSearch={setCoord} />
        <Weather weatherData={data} />
      </div>
    </div>
  );
}
