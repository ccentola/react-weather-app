import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloudRain, faCloud } from "@fortawesome/free-solid-svg-icons";
import "./CurrentWeather.css";
import { Button, Icon } from "semantic-ui-react";

const CurrentWeather = ({ weather }) => {
  const [expanded, setExpanded] = useState(false);

  const getWeatherIcon = (weatherDesc) => {
    if (weatherDesc === "Rain") {
      return faCloudRain;
    }
    if (weatherDesc === "Clouds") {
      return faCloud;
    }
    return faSun;
  };

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{weather.name}</div>
        <div className="meta">
          {weather.coord.lat}, {weather.coord.lon}
        </div>
      </div>
      <div className="center aligned content">
        <div className="ui statistic">
          <div className="value">{Math.round(weather.main.temp)}&#8457;</div>
        </div>
        <div className="description">
          <p>
            {weather.weather[0].description}{" "}
            <FontAwesomeIcon
              icon={getWeatherIcon(weather.weather[0].main)}
              id="current-icon"
            />
          </p>
          <p>
            L: {Math.round(weather.main.temp_min)}&#176; | H:{" "}
            {Math.round(weather.main.temp_max)}&#176;
          </p>
        </div>
      </div>

      <div className="content">
        <div className="extra content">
          <Button
            className="ui compact orange button icon"
            icon
            size="tiny"
            onClick={() => setExpanded(!expanded)}
          >
            <Icon name="angle down icon" />
          </Button>
          {expanded && (
            <div style={{ height: 80 }}>
              {" "}
              <div className="item">Humidity: {weather.main.humidity}%</div>
              <div className="item">Pressure: {weather.main.pressure}</div>
              <div className="item">
                Feels Like: {Math.round(weather.main.feels_like)}&#176;
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
