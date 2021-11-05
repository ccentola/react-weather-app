import { useState, useEffect } from 'react';
import { json } from 'd3';

export const useData = (defaultSearchTerm) => {
  const [data, setData] = useState({ hourly: null, current: null });

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (city) => {
    const response = await json(
      `http://api.openweathermap.org/data/2.5/weather?${new URLSearchParams({
        appid: '9a307e5650309c268fc4bbecd601b941',
        q: city,
        units: 'imperial',
      })}`
    );

    // console.log(response);

    // setData({ ...data, current: { response } });

    const result = await json(
      `http://api.openweathermap.org/data/2.5/onecall?${new URLSearchParams({
        appid: '9a307e5650309c268fc4bbecd601b941',
        lat: response.coord.lat,
        lon: response.coord.lon,
        units: 'imperial',
      })}`
    );

    setData({ ...data, hourly: result.hourly, current: response });
  };

  // console.log(data);

  return [data, search];
};
