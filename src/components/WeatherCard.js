import React, { useEffect, useState } from "react";

const WeatherCard = ({ tempInfo }) => {

    const [weatherState, setweatherState] = React.useState("")

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds": setweatherState("wi-day-cloudy")
                    break;

                case "Haze":
                    setweatherState("wi-fog");
                    break;
                case "Clear":
                    setweatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setweatherState("wi-dust");
                    break;

                default:
                    setweatherState("wi-day-sunny");
                    break;


            }
        }
    }, [weathermood])

    //converting second into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`

    return (
        <>
            {/*our temp card*/}


            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">
                            {weathermood}
                        </div>
                        <div className="place">{name},{country}</div>
                    </div>
                </div>

                <div className="date">{new Date().toLocaleString()}</div>

                {/*our 4 colums */}

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside">{timestr}  <br />sunset</p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">{humidity} <br />humidity</p>
                        </div>
                    </div>

                    <div className="weather-extra-info">

                        <div className="two-sided-section">
                            <p><i className={"wi wi-rain"}></i></p>
                            <p className="extra-info-leftside">{pressure}<br />pressure</p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className="extra-info-leftside">{speed}<br />speed</p>
                        </div>

                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard;