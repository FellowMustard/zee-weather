import React, { useState, useEffect } from "react";
import Card from "./components/card";
import axios from "axios";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const [weatherData, setWeatherData] = useState(null);
  const [searchError, setSearchError] = useState(false);

  const options = {
    params: { q: "london" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
    },
  };

  const fetchData = async () => {
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
    // GET FULL DATE
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

    //GET TIME
    let currTime = today
      .toLocaleTimeString("en-UK", {
        timeZone: data.location.tz_id,
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
      })
      .substr(0, 5);

    let currHour = currTime.substr(0, 2);

    let isPM =
      today.toLocaleTimeString("en-UK", {
        timeZone: data.location.tz_id,
        hour: "2-digit",
      }) >= 12
        ? true
        : false;

    let isDay = data.location.is_day;
    let currLocation = data.location.name;
    let currCountry = data.location.country;
    let currTempC = data.current.temp_c;
    let currTempF = data.current.temp_f;
    console.log(data);
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
  };
  return (
    <main className="background-main morning">
      {weatherData && !searchError ? <Card weather={weatherData} /> : null}
    </main>
  );
}

export default App;
