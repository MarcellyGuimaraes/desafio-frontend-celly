import axios from 'axios'

export const getWeather = async (lat, long, set) => {
  let res = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
      lat: lat,
      lon: long,
      lang: 'pt_br',
      units: 'metric',
    },
  })

  set(res.data)
}
