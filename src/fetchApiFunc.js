import axios from 'axios'

export const getWeather = async (lat, long, set) => {
  let res = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: lat,
      lon: long,
      appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
      lang: 'pt',
      units: 'metric',
    },
  })
  set(res.data)
}
