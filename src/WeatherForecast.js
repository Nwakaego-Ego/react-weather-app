import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import ForecastWeather from "./ForecastWeather";
import './WeatherForecast.css';
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded ] = useState(false)
    let [forecast, setForecast] = useState("")


    function handleResponse(response) {
       console.log(response.data.daily)
        setForecast(response.data.daily)
        setLoaded(true)
    }
    console.log(props)
   
  if (loaded) {
    <ForecastWeather code={forecast[0]}/>
  } else {
    let apiKey = "bea8e5cfc09f2c80726c878f5fd81290";
    let longitude = props.cordinates.lon;
    let latitude = props.cordinates.lat
    let  apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse)

    return null;
  }


}