import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Weather (props) {

    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity]=useState(props.defaultCity);
    
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date (response.data.dt * 1000),
            description:response.data.weather[0].description,
            iconUrl:`https://openweathermap.org/img/wn/${response.data.wetaher[0].icon}@2x.png`,
            wind: response.data.wind.speed,
            city: response.data.main.name,
        });

        setTemperature(response.data.main.temp)
    }

    function search() {
    const apiKey="311f1f45fee82242ab4086372ab360f5";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    }

function handleSubmit (event){
    event.preventDefault();
}

function handleCityChange(event){
    setCity(event.target,value);
    alert (city);

}

if (weatherData.ready) {
      return (
        <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
            <div className="col-9">
            <input type="search"
            placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
            />
            </div>
            <div className="col-3">
            <input type="submit" 
            value="Search"
            className="btn btn-primary w-100"/>
            </div>
            </div>
        </form>
        
        <WeatherInfo data={weatherData}/>

        </div>
    );

    }else{
    search();
    return "Loading.."
    }
  
}