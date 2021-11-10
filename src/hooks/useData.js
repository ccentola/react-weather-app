import { useState, useEffect, useCallback } from 'react';
import openWeather from '../api/openWeather';

export const useData = (searchCity) => {
  // const [data, setData] = useState({ weather: [], onecall: [] });
  const [data, setData] = useState({ hourly: [], daily: [] });
  const [currentWeather, setCurrentWeather] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const search = useCallback(
    async (city) => {
      // setIsError(false);
      // setIsLoading(true);

      // try {
      const weather = await openWeather.get('/weather', {
        params: { q: city },
      });

      setCurrentWeather(weather.data);

      const onecall = await openWeather.get('/onecall', {
        params: { lat: weather.data.coord.lat, lon: weather.data.coord.lon },
      });

      setData({ hourly: onecall.data.hourly, daily: onecall.data.daily });
      // console.log(data);
      // } catch (error) {
      //   setIsError(true);
      // }

      // setIsLoading(false);
    },
    [searchCity]
  );

  useEffect(() => {
    if (data) {
      search(searchCity);
    }
  }, [search]);

  // return [{ data, isLoading, isError }, search];
  return [data, currentWeather, search];
};
