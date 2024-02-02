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

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Random Route:</h2>
      <button onClick={selectRandomRuta} className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4">
        Select Random Route
      </button>
      {randomRuta && (
        <div className="bg-slate-50 rounded-lg shadow-md p-4">
          <p className="text-lg font-semibold mb-2">
            <span className="text-gray-400">Route Name: </span> 
            <span className="underlined">{randomRuta.name}</span>
          </p>
          <p className="text-lg font-semibold mb-2">
            <span className="text-gray-400">Location: </span> 
            <span className="underlined">{randomRuta.location}</span>
          </p>
          <p className="text-lg font-semibold mb-2">
            <span className="text-gray-400">Distance (km): </span> 
            <span className="underlined">{randomRuta.distance}</span>
          </p>
          <p className="text-lg font-semibold mb-2">
            <span className="text-gray-400">Dificulty: </span> 
            <span className="underlined">{randomRuta.difficulty}</span>
          </p>
          <p className="text-lg font-semibold mb-2">
            <span className="text-gray-400">MaxElevation(m): </span> 
            <span className="underlined">{randomRuta.maxElevation}</span>
          </p>
          <p className="text-lg font-semibold mb-2">
            <span className="text-gray-400">MinElevation(m): </span> 
            <span className="underlined">{randomRuta.minElevation}</span>
          </p>
          <p className="text-lg font-semibold mb-2">
            <span className="text-gray-400">Description: </span> 
            <span className="underlined">{randomRuta.description}</span>
          </p>
          <p className="text-lg font-semibold mb-2">
            <span className="text-gray-400">Time(h): </span> 
            <span className="underlined">{randomRuta.totalTimeSpent}</span>
          </p>
          <p className="text-lg font-semibold mb-2">
            <span className="text-gray-400">TrailType: </span> 
            <span className="underlined">{randomRuta.trailType}</span>
          </p>
          {/* Agrega el resto de la información de la ruta que desees mostrar */}
        </div>
      )}
    </div>
  );
}

export default RandomRuta