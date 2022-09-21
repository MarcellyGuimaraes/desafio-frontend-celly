import React, { useEffect, useState } from 'react'
import TableWeather from './Components/TableWeather'
import { getWeather } from './api/fetchApiFunc'
import SearchInput from './Components/SearchInput'

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
        <h1 className="font-bold text-6xl text-white mb-8">
          Previsão do tempo
        </h1>

        <SearchInput />

        <hr className="mt-6" />

        <TableWeather />
      </div>
    )
  }
}
export default App
