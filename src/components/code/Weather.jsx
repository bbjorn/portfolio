import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather(props) {
  const [data, setData] = useState({
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: [
      {
        id: 0,
        main: "",
        description: "",
        icon: "",
      },
    ],
    base: "",
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0,
    },
    clouds: {
      all: 0,
    },
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      country: "",
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: "",
    cod: 0,
  });

  // Component did mount

  useEffect(() => {
    const fetchData = async () => {
      const city = "Gothenburg";
      const apiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
      );
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Weather in {data.name}:</p>
      <p>
        {data.weather[0].main} - {data.weather[0].description}
      </p>
      <p>{kelvinToCelcius(data.main.temp)}</p>
    </div>
  );
}

export default Weather;

function farenheightToCelcius(temp) {
  //To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by . 5556 (or 5/9).
  return Math.floor((temp - 32.0) * (5.0 / 9.0) * 100.0) / 100.0;
}

function kelvinToCelcius(temp) {
  return Math.floor((temp - 273.15) * 100.0) / 100.0;
}
