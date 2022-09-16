import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card'
import TableWeather from './Components/TableWeather'
function App() {
  const [location, setLocation] = useState(false)
  const [weather, setWeather] = useState(false)

  let getWeather = async (lat, long) => {
    let res = await axios.get(
      'http://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          lang: 'pt',
          units: 'metric',
        },
      },
    )
    setWeather(res.data)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude)
      setLocation(true)
    })
  }, [])

  const handleClick = () => {
    const element = document.querySelector('#test')
    element.classList.toggle('hidden')
  }

  if (location === false) {
    return <>Você precisa habilitar a localização no browser o/</>
  } else if (weather === false) {
    return <>Carregando o clima...</>
  } else {
    return (
      <div
        className="flex flex-col justify-center items-center 
        bg-gradient-to-b from-orange-500 to-yellow-400 w-screen h-screen"
      >
        <h1
          onClick={handleClick}
          className="font-bold text-6xl text-white mb-8"
        >
          Previsão do tempo
        </h1>

        <div id="test" className="m-14 h-48 w-3/4 bg-slate-100 p-9">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={handleClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <span>{weather.name}</span>

          <h3 className="text-4xl font-semibold">
            {weather.main.temp}°C Nublado
          </h3>

          <ul className="flex justify-between">
            <li>Terça</li>
            <li>Quarta</li>
            <li>Quinta</li>
            <li>Sexta</li>
            <li>Sábado</li>
          </ul>
          <ul className="flex justify-between">
            <li> 20°</li>
            <li> 20°</li>
            <li> 20°</li>
            <li> 20 hpa</li>
            <li> 20%</li>
          </ul>
        </div>
        <input
          type="text"
          className="w-96 h-14 px-5"
          placeholder="Insira aqui o nome da cidade"
        />

        <TableWeather />
      </div>
    )
  }
}
export default App
