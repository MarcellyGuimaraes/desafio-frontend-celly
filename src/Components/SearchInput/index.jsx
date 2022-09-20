import React from 'react'
import { IconSearch } from '../Icon'

const SearchInput = () => {
  const search_input = document.querySelector('.form-control')
  const search_button = document.querySelector('.btn')

  return (
    <div>
      <div
        class="input-group relative 
      flex flex-wrap items-stretch w-full mb-4"
      >
        <input
          type="text"
          className="w-96 h-14 px-5"
          placeholder="Insira aqui o nome da cidade"
        />
        <button
          className="btn px-6 py-2.5 
          bg-red-600 text-white font-medium text-xs leading-tight 
          uppercase shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 
          focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg 
          transition duration-150 ease-in-out flex items-center"
          type="button"
          id="button-addon2"
        >
          <IconSearch />
        </button>
      </div>
    </div>
  )
}

export default SearchInput
