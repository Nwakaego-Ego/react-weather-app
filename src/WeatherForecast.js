import React, { useEffect, useState } from "react";

import ForecastWeather from "./ForecastWeather";
import './WeatherForecast.css';
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded ] = useState(false)
    let [forecast, setForecast] = useState([])

 useEffect (() => {
setForecast(false)
 }, [props.cordinates])

    function handleResponse(response) {
       console.log(response.data.daily)
        setForecast(response.data.daily)
        setLoaded(true)
    } 
  
   
  if (loaded && forecast.length > 0 ) { 
    console.log("working")
    return (
        <div className="WeatherForecast">
          <div className="row">
           {forecast.map(function (dailyForecast, index) {
             if (index < 5) {
              return (
                <div className="col" key={index}>
                <ForecastWeather code={dailyForecast}/>
                </div>
              );
             }  return null;  
        })}
         </div>
       </div>
    )
  } else {
    let apiKey = "bea8e5cfc09f2c80726c878f5fd81290";
    let longitude = props.cordinates.lon;
    let latitude = props.cordinates.lat
    let  apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse)

    return null;
  }


}