import moment from 'moment';

const DailyCard = ({ data }) => (
  <div className="card">
    <div className="center aligned content">
      <div className="Header">{moment(data.dt * 1000).format('dddd')}</div>
      <div className="description">
        <p>{Math.round(data.temp.day)}&#8457;</p>
        <p>{data.weather[0].description}</p>
        <p>
          L: {Math.round(data.temp.min)} | H: {Math.round(data.temp.max)}
        </p>
      </div>
    </div>
  </div>
);

export default DailyCard;
