import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather (props) {

    const [weatherData, setWeatherData] = useState({ready: false});
    const [temperature, setTemperature]=useState(null);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date:"Monday 08:00",
            description:response.data.weather[0].description,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: response.data.wind.speed,
            city: response.data.main.name,
        });

        setTemperature(response.data.main.temp)
    }

if (weatherData.ready) {
      return (
        <div className="Weather">
        <form>
            <div className="row">
            <div className="col-9">
            <input type="search"
            placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"
            />
            </div>
            <div className="col-3">
            <input type="submit" 
            value="Search"
            className="btn btn-primary w-100"/>
            </div>
            </div>
        </form>

        <h1>{weatherData.city}</h1>

        <ul>
            <li>{weatherData.date}</li>
            <li clossName="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row mt-3">
            <div className="col-6">
                <img src= {weatherData.iconUrl}
                alt={weatherData.description} 
                className="float-left"
                />
            <div className="float-left">
            <span className="temperature">{Math.round(temperature)}</span>
            <span className="unit">°C</span>
            </div>
            </div>
        </div>

        <div className="col-6">
            <ul>
                <li> Precipitation: 46% </li>
                <li> Humidity: {weatherData.humidity} </li>
                <li> Wind: {weatherData.wind} km/h </li>
            </ul>
        </div>

        </div>
    );
    }else{
    const apiKey="311f1f45fee82242ab4086372ab360f5";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading.."
    }
  
}