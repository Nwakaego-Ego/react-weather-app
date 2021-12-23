import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius")

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function showCelsius (event) {
    event.preventDefault();
    setUnit("celsius")
    }

    if (unit === "celsius") {
        return (
            <span className="WeatherTemperature">
                  <span className="degree">{Math.round(props.celsius)}</span> 
                      <span className="farenheit"> °C | <a href="/" onClick={showFahrenheit}>°F </a></span>
            </span>
        )
    } else {
      
        let fahrenheit = (props.celsius * 9/5) + 32;
        
        return (
            <span className="WeatherTemperature">
                  <span className="degree">{Math.round(fahrenheit)}</span> 
                      <span className="farenheit"> <a href="/" onClick={showCelsius}>°C</a> | °F </span>
            </span>
        )
    }

 
}