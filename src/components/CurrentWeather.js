import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = ({ weather }) => (
  <div className="ui fluid card">
    <div className="center aligned content">
      <div className="header">{weather.name}</div>
      <div className="meta">
        {weather.coord.lat}, {weather.coord.lon}
      </div>
      <div className="description">
        {/* <p id="current-temp">{Math.round(weather.main.temp)}&#8457;</p> */}
        <div className="ui statistic">
          <div className="value">{Math.round(weather.main.temp)}&#8457;</div>
        </div>
        <p>{weather.weather[0].description}</p>
        <p>
          L: {weather.main.temp_min} | H: {weather.main.temp_max}
        </p>
      </div>
    </div>
  </div>
);

export default CurrentWeather;
