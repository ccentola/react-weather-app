import { useState, useEffect} from 'react'
  import openWeather from '../api/openWeather';



export const useData = (defaultSearchTerm) => {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    search(defaultSearchTerm)
  }, [defaultSearchTerm]);

  const search = async city => {
    const response = await openWeather.get('/weather', {
      params: {
        q: city,
        units: 'imperial'
      }
    });

    const result = await openWeather.get('/onecall', {
      params: {
        lat: response.data.coord.lat,
        lon: response.data.coord.lon,
        units: 'imperial'
      }
    });

    console.log(result)
    setData(result)
  }
  
    return [data, search]
  }