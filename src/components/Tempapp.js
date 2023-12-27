import React, { useEffect, useState } from "react";
import "./css/style.css"
import WeatherCard from "./WeatherCard";

const Tempapp = () => {
    const[searchValue,setsearchValue]=useState("indore");
    const[tempInfo,settempInfo] = useState({});

    const getWeatherInfo = async()=>{
            try{
                let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=4d5400084e637537bd238bd40506d3ea`;
                const res = await fetch(url);
                const data = await res.json();

                console.log(data);
                const {temp,humidity,pressure} = data.main;
                const {main:weathermood} = data.weather[0];
                const {name} =data;
                const {speed} = data.wind;
                const {country,sunset} = data.sys;

                const myNewweatherInfo = {
                    temp,
                    humidity,
                    pressure,
                    weathermood,
                    name,
                    speed,
                    country,
                    sunset, 
                }

                settempInfo(myNewweatherInfo)

            }catch(error){
                console.log(error)
            }
    }
        useEffect(()=>{
           getWeatherInfo(); 
        },[])
    
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" className="searchTerm" placeholder="search.."
                        autoFocus id="search" value={searchValue} onChange={(e)=>setsearchValue(e.target.value)} ></input>

                    <button className="searchButton" type="button" onClick={getWeatherInfo}>search</button>
                </div>
            </div>

            {/*our temp card*/}
            <WeatherCard tempInfo={tempInfo}/>
           
        </>
    )
}

export default Tempapp;