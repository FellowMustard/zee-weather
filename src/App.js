import React, { useState, useEffect } from "react";
import Card from "./components/card";
import axios from "axios";
import Search from "./components/search";
import { AiFillGithub } from "react-icons/ai";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchError, setSearchError] = useState(false);
  const [bgSetting, setBgSetting] = useState("morning");
  const [locationName, setLocationName] = useState("");

  const getIP = async () => {
    const currIP = await axios
      .get("https://geolocation-db.com/json/")
      .then((res) => {
        return res;
      });
    return currIP;
  };

  const searchButton = (data) => {
    console.log(data);
    setSearchError(false);
    let options = {
      params: { q: data },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      },
    };
    fetchData(options);
  };

  const fetchData = async (options) => {
    const data = await axios
      .get(process.env.REACT_APP_API_LINK, options)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    if (data.status === 200) {
      updateData(data.data);
    } else {
      setSearchError(true);
    }
  };

  const updateData = (data) => {
    let today = new Date();

    let currDayName = today.toLocaleString("en-UK", {
      timeZone: data.location.tz_id,
      weekday: "long",
    });

    let currDate = today.toLocaleString("en-UK", {
      timeZone: data.location.tz_id,
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    let currTime = today
      .toLocaleTimeString("en-UK", {
        timeZone: data.location.tz_id,
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
      })
      .substr(0, 5);

    let isPM =
      today.toLocaleTimeString("en-UK", {
        timeZone: data.location.tz_id,
        hour: "2-digit",
      }) >= 12
        ? true
        : false;

    let currHour = today
      .toLocaleTimeString("en-UK", {
        timeZone: data.location.tz_id,
        hour: "2-digit",
      })
      .substr(0, 5);
    bgChange(currHour);

    let isDay = data.location.is_day;
    let currLocation = data.location.name;
    let currCountry = data.location.country;
    let currTempC = data.current.temp_c;
    let currTempF = data.current.temp_f;

    setWeatherData({
      day: currDayName,
      date: currDate,
      time: currTime,
      isPM,
      isDay,
      location: currLocation,
      country: currCountry,
      tempC: currTempC,
      tempF: currTempF,
    });
    setLocationName(currLocation);
  };

  const bgChange = (hour) => {
    hour = parseInt(hour);
    console.log(hour);
    switch (hour) {
      case 0:
      case 1:
      case 2:
      case 24:
      case 23:
      case 22:
      case 21:
      case 20:
      case 19:
        console.log("sini");
        setBgSetting("night");
        break;
      case 18:
      case 17:
      case 16:
      case 15:
        setBgSetting("evening");
        break;
      case 14:
      case 13:
      case 12:
      case 11:
        setBgSetting("noon");
        break;
      case 10:
      case 9:
      case 8:
      case 7:
      case 6:
        setBgSetting("morning");
        break;
      case 5:
      case 4:
      case 3:
      default:
        setBgSetting("midnight");
        break;
    }
  };
  return (
    <main className={`background-main ${bgSetting}`}>
      <Search searchButton={searchButton} locationName={locationName} />
      <button
        className="current-location-button"
        onClick={() => getIP().then((res) => searchButton(res.data.IPv4))}
      >
        Use My Current Location
      </button>
      {searchError && <p className="error-message">Location Not Found</p>}
      {weatherData && !searchError ? <Card weather={weatherData} /> : null}
      <a
        href="https://github.com/FellowMustard/zee-weather"
        className="github-logo"
      >
        <AiFillGithub className="logo" />
      </a>
    </main>
  );
}

export default App;
