import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudRain, faCloud } from '@fortawesome/free-solid-svg-icons';
import './CurrentWeather.css';
import { Button, Icon } from 'semantic-ui-react';

const CurrentWeather = ({ weather }) => {
  const [expanded, setExpanded] = useState(false);

  const getWeatherIcon = (weatherDesc) => {
    if (weatherDesc === 'Rain') {
      return faCloudRain;
    }
    if (weatherDesc === 'Clouds') {
      return faCloud;
    }
    return faSun;
  };

  return (
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
          <p>
            {weather.weather[0].description}{' '}
            <FontAwesomeIcon
              icon={getWeatherIcon(weather.weather[0].main)}
              id="current-icon"
            />
          </p>
          <p>
            L: {Math.round(weather.main.temp_min)}&#176; | H:{' '}
            {Math.round(weather.main.temp_max)}&#176;
          </p>
          {/* add accodion here */}
          <div className="extra content">
            <Button
              basic
              circular
              icon
              size="tiny"
              onClick={() => setExpanded(!expanded)}
            >
              <Icon name="plus circle" />
            </Button>
            {expanded && (
              <div style={{ height: 50 }}>Extra content expanded for card</div>
            )}
            Show More
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
