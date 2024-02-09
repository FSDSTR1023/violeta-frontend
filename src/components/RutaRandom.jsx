import React, { useState, useEffect } from 'react';
import { GetAllRutas } from '../../api/Rutas';

const RandomRuta = () => {
  const [rutas, setRutas] = useState([]);
  const [randomRuta, setRandomRuta] = useState(null);

  useEffect(() => {
    GetAllRutas()
      .then(rutas => {
        setRutas(rutas.data);
      })
      .catch(error => {
        console.error('Error fetching rutas:', error);
      });
  }, []);

  const selectRandomRuta = () => {
    const randomIndex = Math.floor(Math.random() * rutas.length);
    setRandomRuta(rutas[randomIndex]);
  };

  const excludedProperties = ['_id', 'weather', 'createdAt', 'modifiedAt', 'deletedAt', 'date', 'creator', 'user', 'updatedAt', '__v' ];

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Random Route:</h2>
      <button onClick={selectRandomRuta} className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4">
        Select Random Route
      </button>
      {randomRuta && (
        <div>
          {console.log(randomRuta)}
          <div key={randomRuta._id} className="bg-slate-50 rounded-lg shadow-md p-4 mb-4">
            {Object.entries(randomRuta).map(([key, value]) => (
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
      )}
    </div>
  );
}

export default RandomRuta