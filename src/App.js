import React, { useEffect, useState } from 'react'
import TableWeather from './Components/TableWeather'
import { getWeather } from './fetchApiFunc'
import IconClose from './Components/Icon'
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

          <span>{weather.name}</span>

          <h3 className="text-4xl font-semibold">
            {Math.floor(weather.main.temp)}°C{' '}
            {weather['weather'][0]['description']}
          </h3>
        </div>

        <SearchInput />

        <hr class="mt-6" />

        <TableWeather />
      </div>
    )
  }
}
export default App
