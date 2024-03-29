import React, { useState, useEffect } from 'react';
import { GetAllRutas, deleteRuta } from '../../api/Rutas';
import { useSession } from '../contexts/SessionContext';
import { useNavigate } from 'react-router-dom';

function OwnRutas() {
  const [rutas, setRutas] = useState([]);
  const { getProfile, profile, isLoading } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!profile || !profile._id) {
      console.error('Invalid profile or profile ID');
      if (!isLoading) {
        navigate('/login');
      }
      return;
    }
    GetAllRutas()
      .then((response) => {
        const allRutas = response.data;
        const filteredRutas = allRutas.filter((ruta) => ruta.creator === profile._id);
        setRutas(filteredRutas);
      })
      .catch((error) => {
        console.error('Error fetching rutas:', error);
      });
  }, [profile, isLoading]);
 

  const handleRutaUpdate = (ruta) => {
    if (ruta.creator === profile._id) {
      navigate(`/update-ruta/${ruta._id}`);
    } else {
      console.error('You are not the creator of this route. Update not allowed.');
    }
  };
  
  
  const handleRutaDelete = async (ruta) => {
    if (!ruta || !ruta._id) {
      console.error('Invalid ruta or ruta ID');
      return;
    }
  
    if (ruta.creator === profile._id) {
      try {
        let publicId;
        if (ruta.imageUrl && ruta.imageUrl.length > 0) {
          const deleteImage = ruta.imageUrl[0];
          publicId = deleteImage.split('/').pop().split('.')[0];
        } else {
          console.error('No image found for the ruta.');
          return;
        }
  
        await deleteRuta(ruta._id, { publicId });
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
      <h2 className="text-2xl font-bold mb-4 text-center mt-8">Mis rutas:</h2>
      <div className="flex flex-wrap gap-2">
        {rutas.map((ruta) => (
          <div key={ruta._id} className="bg-slate-50 rounded-lg shadow-md p-4 w-72 flex flex-col justify-between">
            <div className="mb-4">
              <p className="text-lg font-semibold mb-2 gap-1">
                <button className="underlined text-left" onClick={() => handleRutaClick(ruta._id)}>
                  {ruta.name}
                </button>
              </p>
              <p className="text-lg font-semibold mb-2 gap-1">
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
              <button onClick={() => handleRutaUpdate(ruta)}>Editar</button>
              <button onClick={() => handleRutaDelete(ruta)}>Borrar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
  
}

export default OwnRutas;
