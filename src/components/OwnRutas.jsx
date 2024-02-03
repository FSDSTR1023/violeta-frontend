import React, { useState, useEffect } from 'react';
import { GetAllRutas } from '../../api/Rutas';
import { useSession } from '../contexts/SessionContext';

function OwnRutas() {
  const [rutas, setRutas] = useState([]);
  const { getProfile, profile } = useSession();

  useEffect(() => {
    getProfile();
    GetAllRutas()
      .then((response) => {
        const allRutas = response.data;
        const filteredRutas = allRutas.filter((ruta) => ruta.creator === profile._id);
        setRutas(filteredRutas);
      })
      .catch((error) => {
        console.error('Error fetching rutas:', error);
      });
  }, [profile._id]);

  

  const handleRutaUpdate = (ruta) => {
    if (ruta.creator === profile._id) {
      setUpdateRutaFormData({
        name: ruta.name,
        location: ruta.location,
        distance: ruta.distance,
        difficulty: ruta.difficulty,
        maxElevation: ruta.maxElevation,
        minElevation: ruta.minElevation,
        description: ruta.description,
        totalTimeSpent: ruta.totalTimeSpent,
        trailType: ruta.trailType,
        imageUrl: ruta.imageUrl,
      });
      setUpdatingRutaId(ruta._id);
    } else {
      console.error('You are not the creator of this route. Update not allowed.');
    }
  };
  
  
  const handleRutaDelete = async (ruta) => {
    console.log('ruta object:', ruta);
  
    if (!ruta || !ruta._id) {
      console.error('Invalid ruta or ruta ID');
      return;
    }
    
    if (ruta.creator === profile._id) {
      try {
        await deleteRuta(ruta._id);
        setRutas(prevRutas => prevRutas.filter(u => u._id !== ruta._id));
        console.log(`Ruta with ID ${ruta._id} deleted`);

      } catch (error) {
        console.error(`Error deleting ruta with ID ${ruta._id}:`, error);
      }
    } else {
      console.error('You are not the creator of this route. Deletion not allowed.');
    }
  };

  const excludedProperties = ['_id', 'weather', 'createdAt', 'modifiedAt', 'deletedAt', 'date', 'imageUrl', 'creator', 'user', 'updatedAt', '__v' ];

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Rutas:</h2>
      <div className="flex flex-wrap space-x-4 gap-2">
        {rutas.map((ruta) => (
          <div key={ruta._id} className="bg-slate-50 rounded-lg shadow-md p-4 w-72">
            <div className="flex flex-col mb-4">
              {Object.entries(ruta).map(([key, value]) => (
                !excludedProperties.includes(key) && (
                  <p key={key} className="text-lg font-semibold mb-2 gap-1">
                    <span className="text-gray-400 capitalize">{key}: </span> 
                    <span className="underlined">{value}</span>
                  </p>
                )
              ))}
            </div>
            <div className="flex justify-between">
              <button onClick={() => handleRutaUpdate(ruta)}>Update</button>
              <button onClick={() => handleRutaDelete(ruta)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default OwnRutas;
