import React, { useState, useEffect } from 'react';
import { GetAllRutas } from '../../api/Rutas';

const RutaPorTiempo = () => {
  const [rutas, setRutas] = useState([]);
  const [tiempoDeseado, setTiempoDeseado] = useState(0);
  const [rutasFiltradas, setRutasFiltradas] = useState([]);

  useEffect(() => {
    GetAllRutas()
      .then(rutas => {
        setRutas(rutas.data);
        setRutasFiltradas(rutas.data); // Inicialmente todas las rutas disponibles
      })
      .catch(error => {
        console.error('Error fetching rutas:', error);
      });
  }, []);

  const handleTiempoChange = (e) => {
    setTiempoDeseado(e.target.value);
  };

  const filtrarRutasPorTiempo = () => {
    const rutasFiltradas = rutas.filter(ruta => ruta.totalTimeSpent <= tiempoDeseado);
    setRutasFiltradas(rutasFiltradas);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Ruta por Tiempo:</h2>
      <div className="mb-4">
        <label htmlFor="tiempoDeseado" className="block mb-1">
          Tiempo máximo deseado (minutos):
        </label>
        <input
          type="number"
          id="tiempoDeseado"
          name="tiempoDeseado"
          value={tiempoDeseado}
          onChange={handleTiempoChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      <button onClick={filtrarRutasPorTiempo} className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4">
        Filtrar Rutas por Tiempo
      </button>
      {rutasFiltradas.length > 0 ? (
        <div>
          {rutasFiltradas.map(ruta => (
            <div key={ruta._id} className="bg-slate-50 rounded-lg shadow-md p-4 mb-4">
              <p className="text-lg font-semibold mb-2">
                <span className="text-gray-400">Route Name: </span> 
                <span className="underlined">{ruta.name}</span>
              </p>
              <p className="text-lg font-semibold mb-2">
                <span className="text-gray-400">Location: </span> 
                <span className="underlined">{ruta.location}</span>
              </p>
              <p className="text-lg font-semibold mb-2">
                <span className="text-gray-400">Total Time Spent (min): </span> 
                <span className="underlined">{ruta.totalTimeSpent}</span>
              </p>

              <p className="text-lg font-semibold mb-2">
                <span className="text-gray-400">Distance (km): </span> 
                <span className="underlined">{ruta.distance}</span>
              </p>
              <p className="text-lg font-semibold mb-2">
                <span className="text-gray-400">Dificulty:</span> 
                <span className="underlined">{ruta.difficulty}</span>
              </p>
              <p className="text-lg font-semibold mb-2">
                <span className="text-gray-400">MaxElevation(m):</span> 
                <span className="underlined">{ruta.maxElevation}</span>
              </p>
              <p className="text-lg font-semibold mb-2">
                <span className="text-gray-400">MinElevation(m):</span> 
                <span className="underlined">{ruta.minElevation}</span>
              </p>
              <p className="text-lg font-semibold mb-2">
                <span className="text-gray-400">Description: </span> 
                <span className="underlined">{ruta.description}</span>
              </p>
              <p className="text-lg font-semibold mb-2">
                <span className="text-gray-400">TrailType:</span> 
                <span className="underlined">{ruta.trailType}</span>
              </p>
              {/* Agrega el resto de la información de la ruta que desees mostrar */}
            </div>
          ))}
        </div>
      ) : (
        <p>No hay rutas disponibles para el tiempo deseado.</p>
      )}
    </div>
  );
}

export default RutaPorTiempo;


