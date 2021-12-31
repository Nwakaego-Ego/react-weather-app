import React from "react";
import WeatherIcon from "./WeatherIcon"

export default function ForecastWeather(props) {

    
        let minTemperature = Math.round(props.code.temp.min)
        let maxTemperature = Math.round(props.code.temp.max)

        function temperatureDay () {
        let date = new Date(props.code.dt * 1000);
        let day = date.getDay();
        let days = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

        return days[day];
        }
  
    console.log(props)
     return (
        <div className="WeatherForecast">
           <div className="WeatherForecast-day">{temperatureDay()}</div>
            <div className="WeatherForecast-icon"><WeatherIcon  code={props.code.weather[0].icon} size={36}/></div> 
            
             <div className="WeatherForecast-degree">
                 <span className="WeatherForecast-max">{maxTemperature}° </span>
                 <span className="WeatherForecast-min">{minTemperature}° </span>
             </div>
            </div>
    )
}