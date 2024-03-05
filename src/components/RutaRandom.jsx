import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetAllRutas } from '../../api/Rutas';

const RandomRuta = () => {
  const [rutas, setRutas] = useState([]);
  const [randomRuta, setRandomRuta] = useState(null);
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

  const selectRandomRuta = () => {
    const randomIndex = Math.floor(Math.random() * rutas.length);
    setRandomRuta(rutas[randomIndex]);
  };

  const handleRutaClick = (rutaId) => {
    navigate(`/ruta/${rutaId}`);
  };

  const excludedProperties = ['_id', 'weather', 'createdAt', 'modifiedAt', 'deletedAt', 'date', 'creator', 'user', 'updatedAt', '__v' ];

  return (
    
      <div className="container mx-auto bg-white p-4">
        <h2 className="text-3xl font-bold mb-4 text-center m-10">Ruta Random</h2>
        <p className='font-bold text-center'>Bienvenido a nuestra sección de Rutas Random. ¿Listo para la aventura? ¿Buscas explorar nuevos destinos sin tener que decidirte por uno en particular? ¡Estás en el lugar correcto!

          Con solo un clic, sumérgete en la emoción de lo desconocido mientras nuestro sistema encuentra una ruta aleatoria para ti. Ya sea que estés en busca de paisajes impresionantes, ciudades vibrantes o lugares llenos de historia, nuestra herramienta de Rutas Random te llevará a lugares que nunca imaginaste.

          ¿Listo para dejar que el destino decida por ti? ¡Haz clic en nuestro botón de búsqueda y comienza tu próxima aventura!</p>
        <div className=' items-center flex justify-center m-10'>
          <button onClick={selectRandomRuta} className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 ">
            Crear ruta random
          </button>
        </div>
        {randomRuta && (
          <div>
            {console.log(randomRuta)}
            <div key={randomRuta._id} className="bg-slate-50 rounded-lg shadow-md p-4 mb-4">
              <p className="text-lg font-semibold mb-2 gap-1">
                <span className="text-gray-400 capitalize">Nombre de la ruta: </span>
                <button
                  onClick={() => handleRutaClick(randomRuta._id)}
                  className="underlined cursor-pointer"
                >
                  {randomRuta.name}
                </button>
              </p>
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

export default RandomRuta;