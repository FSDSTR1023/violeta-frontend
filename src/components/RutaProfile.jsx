import React, { useState, useEffect } from 'react';
import { getRutaById } from '../../api/Rutas';
import { useParams } from 'react-router-dom';

function RutaProfile() {
  const { rutaId } = useParams();
  const [ruta, setRuta] = useState({});

  useEffect(() => {
    getRutaById(rutaId)
      .then((rutaData) => {
        setRuta(rutaData.data);
      })
      .catch((error) => {
        console.error('Error fetching ruta:', error);
      });
  }, [rutaId]);

  const excludedProperties = ['_id', 'weather', 'createdAt', 'modifiedAt', 'deletedAt', 'date', 'creator', 'user', 'updatedAt', '__v'];

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Ruta Details:</h2>
      <div className="flex flex-wrap space-x-4 gap-2">
        <div className="bg-slate-50 rounded-lg shadow-md p-4 w-72">
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
      </div>
    </div>
  );
}

export default RutaProfile;
