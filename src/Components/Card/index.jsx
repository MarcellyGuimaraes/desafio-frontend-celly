import React from 'react'

const Card = (clima, cidade, graus, dia) => {
  const handleClick = () => {
    const element = document.querySelector('#test')
    element.classList.toggle('hidden')
  }

  return (
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

      <span>Niteroi - RJ, Brasil</span>

      <h3 className="text-4xl font-semibold">20°C Nublado</h3>

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
  )
}

export default Card
