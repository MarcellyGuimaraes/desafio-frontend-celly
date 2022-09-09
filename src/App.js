import './App.css'

function App() {
  return (
    <div className="text-center bg-gradient-to-b from-orange-500 to-yellow-400">
      <h1 className="font-bold text-4xl text-white mb-8">Previsão do tempo</h1>
      <input type="text" placeholder="Insira aqui o nome da cidade" />

      <div className="flex justify-center">
        <h2 className="font-bold text-2xl text-white m-4">Capitais</h2>
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
