import React, { useEffect, useState } from 'react'
import TableWeather from './Components/TableWeather'
import { getWeather } from './api/fetchApiFunc'
import { IconClose, IconDown, IconUp } from './Components/Icon'
import SearchInput from './Components/SearchInput'

export const handleClick = () => {
  const element = document.querySelector('#test')
  element.classList.toggle('hidden')
}

function App() {
  const [location, setLocation] = useState(false)
  const [weather, setWeather] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(
        position.coords.latitude,
        position.coords.longitude,
        setWeather,
      )
      setLocation(true)
    })
  }, [])

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

        <div id="test" className="m-14 h-48 w-96 bg-slate-100 p-9">
          <IconClose onClick={handleClick} />

          <span className="text-xs text-gray-600">{weather.name}</span>

          <h3 className="text-2xl font-semibold">
            {Math.floor(weather.main.temp)}°C{' - '}
            {weather['weather'][0]['description']}
          </h3>

          <table class="table">
            <tr>
              <td>
                <IconDown /> {Math.floor(weather.main.temp_min)}°C
              </td>
              <td>
                <IconUp /> {Math.floor(weather.main.temp_max)}°C
              </td>
              <td>
                {' '}
                <p class="text-xs text-gray-600">Sensação</p>{' '}
                {Math.floor(weather.main.feels_like)}°C
              </td>
            </tr>
            <tr>
              <td>
                {' '}
                <p class="text-xs text-gray-600">Vento</p>{' '}
                {Math.floor(weather.wind.speed)}km/h
              </td>
              <td>
                {' '}
                <p class="text-xs text-gray-600">Humidade</p>{' '}
                {Math.floor(weather.main.humidity)}%
              </td>
            </tr>
          </table>
        </div>

        <SearchInput />

        <hr class="mt-6" />

        <TableWeather />
      </div>
    )
  }
}
export default App
