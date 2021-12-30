import React from "react";
import WeatherIcon from "./WeatherIcon"

export default function ForecastWeather(props) {
    console.log(props)
     return (
        <div className="WeatherForecast">
           <div className="WeatherForecast-day">{props.code.dt}</div>
            <div className="WeatherForecast-icon"><WeatherIcon  code={props.code.weather[0].icon} size={36}/></div> 
             <div className="WeatherForecast-degree">
                 <span className="WeatherForecast-max">{props.code.temp.max}° </span>
                 <span className="WeatherForecast-min">{props.code.temp.min}° </span>
             </div>
            </div>
    )
}