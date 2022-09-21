import React, { useState } from 'react'
import { IconClose, IconDown, IconSearch, IconUp } from '../Icon'

export const handleAddClass = () => {
  const element = document.querySelector('#test')
  element.classList.toggle('hidden')
}

const SearchInput = () => {
  const [city, setCity] = useState('São Paulo')
  const [weatherForecast, setWeatherForecast] = useState(null)

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSearch = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},br&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric&lang=pt_br`,
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
      })
      .then((data) => {
        setWeatherForecast(data)
      })
  }

  const handleClick = () => {
    handleAddClass()
    handleSearch()
  }

  return (
    <div>
      <div
        className="input-group relative 
    flex flex-wrap items-stretch w-full mb-4"
      >
        <input
          type="text"
          onChange={handleChange}
          className="w-96 h-14 px-5"
          placeholder="Insira aqui o nome da cidade"
          value={city}
        />
        <button
          className="btn px-6 py-2.5 
          bg-red-600 text-white font-medium"
          type="button"
          onClick={handleClick}
          id="button-addon2"
        >
          <IconSearch />
        </button>
      </div>
      <div id="test" className="hidden m-14 h-48 w-96 bg-slate-100 p-9">
        {weatherForecast ? (
          <div>
            <div onClick={handleClick}>
              <IconClose />
            </div>
            <span className="text-xs text-gray-600">
              {weatherForecast.name}
            </span>

            <h3 className="text-2xl font-semibold">
              {Math.floor(weatherForecast.main.temp)}°C{' - '}
              {weatherForecast['weather'][0]['description']}
            </h3>

            <table className="table">
              <tr>
                <td>
                  <IconDown /> {Math.floor(weatherForecast.main.temp_min)}°C
                </td>
                <td>
                  <IconUp /> {Math.floor(weatherForecast.main.temp_max)}°C
                </td>
                <td>
                  <p className="text-xs text-gray-600">Sensação</p>
                  {Math.floor(weatherForecast.main.feels_like)}°C
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-xs text-gray-600">Vento</p>
                  {Math.floor(weatherForecast.wind.speed)}km/h
                </td>
                <td>
                  <p className="text-xs text-gray-600">Humidade</p>
                  {Math.floor(weatherForecast.main.humidity)}%
                </td>
              </tr>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default SearchInput
