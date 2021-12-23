import React from "react";
import FriendlyDate from "./FriendlyDate";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
                <ul className="date">
                    <li><FriendlyDate date={props.data.date} /></li>
                    <li>{props.data.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        {/* <WeatherIcon code={props.data.icon} alt={props.data.description}/> */}
                        <img src={props.data.iconUrl}
                        alt={props.data.description}/>
                        <WeatherTemperature celsius={props.data.temperature}/>
                           
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation : 25%</li>
                            <li>Humidity : {props.data.humidity}%</li>
                            <li>Wind: {props.data.wind} km/h</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}