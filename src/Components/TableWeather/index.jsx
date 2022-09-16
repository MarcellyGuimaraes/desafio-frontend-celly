import React from 'react'

const TableWeather = () => {
  return (
    <div>
      <hr className="" />
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
  )
}

export default TableWeather
