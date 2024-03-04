import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetAllRutas } from '../../api/Rutas';

function ListAllRutas() {
  const [rutas, setRutas] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    GetAllRutas()
      .then(rutas => {
        setRutas(rutas.data);
      })
      .catch(error => {
        console.error('Error fetching rutas:', error);
      });
  }, []);

  const handleRutaClick = (rutaId) => {
    navigate(`/ruta/${rutaId}`);
  };

  const excludedProperties = ['_id', 'weather', 'createdAt', 'modifiedAt', 'deletedAt', 'date', 'creator', 'user', 'updatedAt', '__v' ];

  return (
    <div className="container mx-auto w-2/3">
      <h2 className="text-4xl font-bold mb-4 text-left mt-8">Explora:</h2>
      <div className="space-y-4">
        {rutas.map((ruta) => (
          <div key={ruta._id} className="bg-gray-200 rounded-lg shadow-md p-4 flex items-center">
            <div className="flex-1">
              <p className="text-lg font-semibold mb-2">
                <span className="text-gray-950 capitalize font-bold	text-lg">Nombre: </span>
                <button
                  onClick={() => handleRutaClick(ruta._id)}
                  className="text-gray-950  cursor-pointer"
                >
                  {ruta.name}
                </button>
              </p>
              {Object.entries(ruta).map(([key, value]) => (
                (key === 'location' || key === 'distance' || key === 'trailType') &&
                !excludedProperties.includes(key) && (
                  <p key={key} className="text-lg font-semibold mb-2">
                    <span className="text-gray-950 capitalize font-bold	">
                      {key === 'location' ? 'Localización' : 
                      key === 'distance' ? 'Distancia' :
                      key === 'trailType' ? 'Tipo de Ruta' : key}: 
                    </span>
                    {key === 'distance' ? `${value} km` : value}
                  </p>
                )
              ))}
              <button className="mt-5 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full shadow-md cursor-pointer" onClick={() => handleRutaClick(ruta._id)}>
                Ver Ruta 
              </button>
            </div>
            {ruta.imageUrl && (
              <img src={ruta.imageUrl} alt="Cloudinary Image" className="w-52 h-52 ml-4 rounded-2xl	" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListAllRutas;

