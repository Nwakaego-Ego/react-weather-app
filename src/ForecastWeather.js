import React from "react";
import WeatherIcon from "./WeatherIcon"

export default function ForecastWeather(props) {
    console.log(props)
     return (
        <div className="WeatherForecast">
           <div className="WeatherForecast-day">{props.forecast[0].dt}</div>
            <div className="WeatherForecast-icon"><WeatherIcon  code={props.forecast[0].weather[0].icon} size={36}/></div> 
             <div className="WeatherForecast-degree">
                 <span className="WeatherForecast-max">{props.forecast[0].temp.max}° </span>
                 <span className="WeatherForecast-min">{props.forecast[0].temp.min}° </span>
             </div>
            </div>
    )
}