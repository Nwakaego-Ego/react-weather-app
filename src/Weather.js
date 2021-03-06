import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo"
import WeatherForecast from "./WeatherForecast"



export default function Weather (props) {
    const [city, setCity] = useState(props.defaultCity)
    const [loaded, setLoaded] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    
    function handleWeather(response) {
        console.log (response.data);
        setWeatherData({
            cordinates: response.data.coord,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon
      
            
        });
        console.log(response.data.weather[0].icon)
        setLoaded(true);
    }

    function search () {
        let apiKey = "bea8e5cfc09f2c80726c878f5fd81290";
        let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      
        axios.get(apiUrl).then(handleWeather);

    }

    function handleSubmit(event){
        event.preventDefault();
        search();

    }

    function handleCityChange(event) {
    setCity(event.target.value);
    }
   
    
    if (loaded) {
        return  (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                <div className="row">
                 <div className="col-9">
                    <input type="search" placeholder="Enter city here...."
                    className="form-control p-2" autoFocus="on" onChange={handleCityChange}/>
                 </div>
                 <div className="col-3">
                    <button className="btn btn-danger w-100 p-2">Search</button>
                    
                </div>
             </div>
             </form>
             <WeatherInfo data={weatherData} alt={props.description}/>
             <WeatherForecast size={36} cordinates={weatherData.cordinates}/>
            </div>
           
        ); 
    } else {
        search();
        return "loading....."
    }
    
   
}