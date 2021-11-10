import axios from 'axios';

const key = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
  params: {
    appid: key,
    units: 'imperial',
  },
});
