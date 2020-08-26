import React, { useEffect } from "react";
import axios from "axios";

function Weather(props) {
  const apiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;
  // Component did mount

  useEffect(() => {
    const promise = axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=Gothenburg&APPID=${apiKey}`
    );
    console.log(promise);
    // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={YOUR API KEY}
  }, []);

  return <div>Weather</div>;
}

export default Weather;
