import { useState, useEffect, useCallback } from "react";
import openWeather from "../api/openWeather";
import { timeParse } from "d3";

const parseDay = timeParse("%m/%d/%y");

// const transform = rawData => {
//   const days
// }

export const useData = (searchCity) => {
  const [data, setData] = useState({ hourly: [], daily: [] });
  const [currentWeather, setCurrentWeather] = useState("");

  const search = useCallback(
    async (city) => {
      // try {
      const weather = await openWeather.get("/weather", {
        params: { q: city },
      });

      setCurrentWeather(weather.data);

      const onecall = await openWeather.get("/onecall", {
        params: { lat: weather.data.coord.lat, lon: weather.data.coord.lon },
      });

      setData({ hourly: onecall.data.hourly, daily: onecall.data.daily });
    },
    [searchCity]
  );

  useEffect(() => {
    if (data) {
      search(searchCity);
    }
  }, [search]);

  return [data, currentWeather, search];
};
