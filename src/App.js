import './App.css'

function App() {
  fetch('https://api.hgbrasil.com/weather?key=ee302ce2')
    .then((response) => response.json())
    .then((data) => {
      //Aqui iremos trabalhar com o JSON
      data.forEach((cities) => {
        // Log de cada nome de filme
        console.log(cities.city)
      })
    })
    .catch((err) => {
      //Fazer algo com os erros aqui
      console.log(err)
    })

  const handleClick = () => {
    const element = document.querySelector('#test')
    element.classList.toggle('hidden')
  }
  return (
    <div
      className="flex flex-col justify-center items-center 
        bg-gradient-to-b from-orange-500 to-yellow-400 w-screen h-screen"
    >
      <h1 onClick={handleClick} className="font-bold text-6xl text-white mb-8">
        Previsão do tempo
      </h1>
      <div id="test" className="bg-slate-100 w-fit h-48 p-9 m-14">
        <span>Niteroi, RJ - Brasil</span>
        <h1>20°C Nublado</h1>
        <p>
          <span>16°C</span> <span>16°C</span> <span>Sensação 19°C</span>
        </p>
        <p>
          <span>Vento 18km/h</span> <span>Humidade 89%</span>
        </p>
      </div>
      <input
        type="text"
        className="w-96 h-14 px-5"
        placeholder="Insira aqui o nome da cidade"
      />

      <div className="">
        <h2 className="m-4 w-96 text-left text-3xl font-bold text-white">
          Capitais
        </h2>
        <table className="content-center">
          <thead>
            <tr>
              <th className="font-thin">Min</th>
              <th className="font-thin">Máx</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>18°</td>
              <td>27°</td>
              <td>Rio de Janeiro</td>
            </tr>
            <tr>
              <td>18°</td>
              <td>27°</td>
              <td>Rio de Janeiro</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
