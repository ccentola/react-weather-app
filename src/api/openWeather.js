import axios from "axios";

let key;

if (process.env.NODE_ENV !== "production") {
  key = process.env.REACT_APP_API_KEY;
} else {
  key = process.env.API_KEY;
}

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: key,
    units: "imperial",
  },
});
