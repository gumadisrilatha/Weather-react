import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <h3>{props.data.city}</h3>
      <div className="col-6">
        <ul>
          <li>
            {" "}
            <DateFormat date={props.data.date} />{" "}
          </li>
          <li>{props.data.description}</li>

          <li>Humidity: {props.data.humidity}%</li>
          <li> Wind: {Math.round(props.data.wind)}km/hr</li>
        </ul>
      </div>
      <div className="col-6">
        <WeatherIcon code={props.data.icon} />

        <WeatherTemperature celsius={props.data.temperature} />
      </div>
    </div>
  );
}
