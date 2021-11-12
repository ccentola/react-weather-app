import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudRain, faCloud } from '@fortawesome/free-solid-svg-icons';

const DailyCard = ({ data }) => {
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
    <div className="card">
      <div className="center aligned content">
        <div className="Header">{moment(data.dt * 1000).format('dddd')}</div>
        <div className="description">
          <p>{Math.round(data.temp.day)}&#8457;</p>
          {/* {data.weather[0].description}{' '} */}
          <FontAwesomeIcon
            icon={getWeatherIcon(data.weather[0].main)}
            id="current-icon"
          />
          <p>
            L: {Math.round(data.temp.min)} | H: {Math.round(data.temp.max)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyCard;
