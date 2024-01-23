import React, { useState, useEffect } from 'react';
import { GetAllRutas, deleteRuta } from '../../api/Rutas';

function ListAllRutas() {
  const [rutas, setRutas] = useState([]);
  
  useEffect(() => {
    GetAllRutas()
      .then(rutas => {
        setRutas(rutas.data);
      })
      .catch(error => {
        console.error('Error fetching rutas:', error);
      });
  }, []);

  const handleRutaDelete = async (ruta) => {
    console.log('ruta object:', ruta);
  
    if (!ruta || !ruta._id) {
      console.error('Invalid ruta or ruta ID');
      return;
    }
  
    try {
      await deleteRuta(ruta._id);
      setRutas(prevRutas => prevRutas.filter(u => u._id !== ruta._id));
      console.log(`Ruta with ID ${ruta._id} deleted`);

    } catch (error) {
      console.error(`Error deleting ruta with ID ${ruta._id}:`, error);
    }
  };

  const excludedProperties = ['_id', 'weather', 'createdAt', 'modifiedAt', 'deletedAt', 'date', 'imageUrl', 'creator', 'user', 'updatedAt', '__v' ];

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Rutas:</h2>
      <div className="flex flex-wrap space-x-4 gap-2">
        {rutas.map((ruta) => (
          <div key={ruta._id} className="bg-slate-50 rounded-lg shadow-md p-4 w-72">
            {Object.entries(ruta).map(([key, value]) => (
              !excludedProperties.includes(key) && (
                <p key={key} className="text-lg font-semibold mb-2 gap-1">
                  <span className="text-gray-400 capitalize">{key}: </span> 
                  <span className="underlined">{value}</span>
                </p>
              )
            ))}
            <button onClick={() => handleRutaDelete(ruta)}>Delete</button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ListAllRutas;
