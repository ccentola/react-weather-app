import { useState, useEffect } from 'react';
import { json } from 'd3';

export const useData = (defaultSearchTerm) => {
  const [data, setData] = useState({ hourly: null, current: null });

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (city) => {
    const response = await json(
      `${process.env.REACT_APP_API_URL}/weather?${new URLSearchParams({
        appid: process.env.REACT_APP_API_KEY,
        q: city,
        units: 'imperial',
      })}`
    );

    const result = await json(
      `${process.env.REACT_APP_API_URL}/onecall?${new URLSearchParams({
        appid: process.env.REACT_APP_API_KEY,
        lat: response.coord.lat,
        lon: response.coord.lon,
        units: 'imperial',
      })}`
    );

    setData({ ...data, hourly: result.hourly, current: response });
  };

  return [data, search];
};
