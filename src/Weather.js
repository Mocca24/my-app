import React from "react";
import "./Weather.css";

export default function Weather () {
    return (
        <div className="Weather">
        <h1>New York</h1>
        <ul>
            <li>Monday 08:00</li>
            <li>Light rain showers</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src= "https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                alt="Light rain showers">

                </img>
        </div> 
        </div>
        </div>
    )
}