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
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center mt-8">Rutas:</h2>
      <div className="space-y-4">
        {rutas.map((ruta) => (
          <div key={ruta._id} className="bg-slate-50 rounded-lg shadow-md p-4 flex items-center">
            <div className="flex-1">
              <p className="text-lg font-semibold mb-2 gap-1">
                <span className="text-gray-400 capitalize">Name: </span>
                <button
                  onClick={() => handleRutaClick(ruta._id)}
                  className="underlined cursor-pointer"
                >
                  {ruta.name}
                </button>
              </p>
              {Object.entries(ruta).map(([key, value]) => (
                !excludedProperties.includes(key) && key !== 'name' && key !== 'imageUrl' && (
                  <p key={key} className="text-lg font-semibold mb-2 gap-1">
                    <span className="text-gray-400 capitalize">{key}: </span>
                    <span className="underlined">{value}</span>
                  </p>
                )
              ))}
            </div>
            {ruta.imageUrl && (
              <img src={ruta.imageUrl} alt="Cloudinary Image" className="w-52 h-52 ml-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
  
    
}

export default ListAllRutas;
