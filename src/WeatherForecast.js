import React from "react";
import WeatherIcon from "./WeatherIcon";
import './WeatherForecast.css';

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
           <div className="WeatherForecast-day">Tue</div>
            <div className="WeatherForecast-icon"><WeatherIcon  code="02d" size={36}/></div> 
             <div className="WeatherForecast-degree">
                 <span className="WeatherForecast-max">90° </span>
                 <span className="WeatherForecast-min">77° </span>
             </div>
            </div>
    )
}