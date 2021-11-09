// import { useState, useEffect, useCallback } from 'react';
// // import { json } from 'd3';

// export const useData = (defaultSearchTerm) => {
//   const [data, setData] = useState([]);
//   // const [isLoading, setIsLoading] = useState(false);
//   // const [error, setError] = useState(null);

//   const getWeather = useCallback(async (city) => {
//     const response = await fetch(
//       `${process.env.REACT_APP_API_URL}/weather?${new URLSearchParams({
//         appid: process.env.REACT_APP_API_KEY,
//         q: city,
//         units: 'imperial',
//       })}`
//     );
//     const json = await response.json();
//     setData(json);
//   }, []);

//   useEffect(() => {
//     getWeather(defaultSearchTerm);
//   }, [defaultSearchTerm]);
// };

// //   const search = async (city) => {
// //     setIsLoading(true);
// //     setError(null);
// //     try {
// //       const response = await json(
// //         `${process.env.REACT_APP_API_URL}/weather?${new URLSearchParams({
// //           appid: process.env.REACT_APP_API_KEY,
// //           q: city,
// //           units: 'imperial',
// //         })}`
// //       );

// //       if (!response.ok) {
// //         throw new Error('something went wrong!');
// //       }

// //       const result = await json(
// //         `${process.env.REACT_APP_API_URL}/onecall?${new URLSearchParams({
// //           appid: process.env.REACT_APP_API_KEY,
// //           lat: response.coord.lat,
// //           lon: response.coord.lon,
// //           units: 'imperial',
// //         })}`
// //       );
// //       if (!result.ok) {
// //         throw new Error('something went wrong!');
// //       }
// //       setData({ ...data, hourly: result.hourly, current: response });
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //     setIsLoading(false);
// //   };

// //   return [data, search];
// // };
