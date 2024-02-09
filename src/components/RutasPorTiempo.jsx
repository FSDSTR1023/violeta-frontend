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

  const excludedProperties = ['_id', 'weather', 'createdAt', 'modifiedAt', 'deletedAt', 'date', 'creator', 'user', 'updatedAt', '__v' ];

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
              {Object.entries(ruta).map(([key, value]) => (
              !excludedProperties.includes(key) && (
                <p key={key} className="text-lg font-semibold mb-2 gap-1">
                  <span className="text-gray-400 capitalize">{key}: </span>
                  {key === 'imageUrl' ? (
                    <img src={value} alt="Cloudinary Image" className="w-52 h-52" />
                  ) : (
                    <span className="underlined">{value}</span>
                  )}
                </p>
              )
            ))}
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


