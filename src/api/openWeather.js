import axios from 'axios';

const key = '9a307e5650309c268fc4bbecd601b941';

export default axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
  params: {
    appid: key,
  },
});
