import React, { useState, useEffect } from 'react';
import { GetAllRutas, deleteRuta } from '../../api/Rutas';
import { useSession } from '../contexts/SessionContext';
import { useNavigate } from 'react-router-dom';
import deleteCloudinaryImage from './deleteCloudinaryImage';

function OwnRutas() {
  const [rutas, setRutas] = useState([]);
  const { getProfile, profile } = useSession();
  const navigate = useNavigate();

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
      navigate(`/update-ruta/${ruta._id}`);
    } else {
      console.error('You are not the creator of this route. Update not allowed.');
    }
  };
  
  
  const handleRutaDelete = async (ruta) => {
    let publicId;
    if (!ruta || !ruta._id) {
      console.error('Invalid ruta or ruta ID');
      return;
    }
  
    if (ruta.creator === profile._id) {
      try {
        for (const deleteImage of ruta.imageUrl) {
          console.log('Deleting image ', deleteImage);
          const publicId = deleteImage.split('/').pop().split('.')[0];
          console.log('Public Id is : ' + publicId);
          await deleteCloudinaryImage(publicId, 'rutas');
        }
  
        await deleteRuta(ruta._id);
        setRutas((prevRutas) => prevRutas.filter((u) => u._id !== ruta._id));
        console.log(`Ruta with ID ${ruta._id} deleted`);
      } catch (error) {
        console.error(`Error deleting ruta with ID ${ruta._id}:`, error);
      }
    } else {
      console.error('You are not the creator of this route. Deletion not allowed.');
    }
  };

  const handleRutaClick = (rutaId) => {
    navigate(`/ruta/${rutaId}`);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Rutas:</h2>
      <div className="flex flex-wrap space-x-4 gap-2">
        {rutas.map((ruta) => (
          <div key={ruta._id} className="bg-slate-50 rounded-lg shadow-md p-4 w-72">
            <div className="flex flex-col mb-4">
              <p className="text-lg font-semibold mb-2 gap-1">
                <span className="text-gray-400 capitalize">Name: </span>
                <button className="underlined" onClick={() => handleRutaClick(ruta._id)}>
                  {ruta.name}
                </button>
              </p>
              <p className="text-lg font-semibold mb-2 gap-1">
                <span className="text-gray-400 capitalize">Date: </span>
                <span className="underlined">
                  {new Intl.DateTimeFormat('es-ES', {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric',
                  }).format(new Date(ruta.date))}
                </span>
              </p>
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
