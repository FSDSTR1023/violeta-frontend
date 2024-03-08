import React, { useState, useEffect } from 'react';
import { GetAllRutas } from '../../api/Rutas';

function ListAllRutas() {
  const [rutas, setRutas] = useState([]);
  const [filteredRutas, setFilteredRutas] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(''); // Estado para almacenar la ubicación seleccionada

  useEffect(() => {
    GetAllRutas()
      .then(rutas => {
        setRutas(rutas.data);
        setFilteredRutas(rutas.data); // Inicialmente mostrar todas las rutas
      })
      .catch(error => {
        console.error('Error fetching rutas:', error);
      });
  }, []);

  const excludedProperties = ['_id', 'weather', 'createdAt', 'modifiedAt', 'deletedAt', 'date', 'creator', 'user', 'updatedAt', '__v'];

  // Función para manejar el cambio en la selección de la ubicación
  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocation(location);
    if (location === '') {
      setFilteredRutas(rutas);
    } else {
      
      const filtered = rutas.filter(ruta => ruta.location.toLowerCase().includes(location.toLowerCase()));
      setFilteredRutas(filtered);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-10 text-center">Rutas por Zona</h2>
      <p className='font-bold text-center my-5'>Descubre las maravillas de tu entorno con nuestra función de búsqueda de rutas por zonas. Explora paisajes pintorescos, senderos naturales y puntos de interés cercanos a ti. Desde las majestuosas montañas hasta las serenas costas, encuentra la ruta perfecta para tu próxima aventura al aire libre. </p>
      
      <div className="mb-4">
        <label htmlFor="location" className="block mb-1">Buscar por zona:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={selectedLocation}
          onChange={handleLocationChange}
          className="border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      
      <div className="flex flex-wrap space-x-4 gap-2">
        {filteredRutas.map((ruta) => (
          <div key={ruta._id} className="bg-slate-50 rounded-lg shadow-md p-4 w-72">
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
    </div>
  );
}

export default ListAllRutas;
