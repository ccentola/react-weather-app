import { useState, useEffect } from 'react';

export const useFetch = (city) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // set loading state
      setIsLoading(true);

      try {
        // make request
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/weather?${new URLSearchParams({
            appid: process.env.REACT_APP_API_KEY,
            q: city,
            units: 'imperial',
          })}`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();

        setIsLoading(false);
        setData(json);
        setError(null);
      } catch (error) {
        setIsLoading(false);
        setError('could not fetch data');
      }
    };

    fetchData();
  }, [city]);

  return { data, isLoading, error };
};
