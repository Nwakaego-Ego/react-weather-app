import React from "react";

export default function FriendlyDate(props) {
    console.log(props.date)
  let  days = [
      "Sunday",
   "Monday",
    "Tuesday",
     "Wednessday", 
     "Thursday",
      "Friday", 
      "Saturday"
    ]
let day = days[props.date.getDay()];
let minutes = props.date.getMinutes();
if (minutes < 10) {
  minutes =  `0${minutes}`
}
let hours = props.date.getHours();
if (hours < 10) {
   hours = `0${hours}`
}


    return (
        <div>{day} {hours} : {minutes}</div>
    )
}