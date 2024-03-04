import React, { useState, useEffect } from 'react';
import { getRutaById } from '../../api/Rutas';
import { useParams } from 'react-router-dom';

function RutaProfile() {
  const { rutaId, rutaUrl } = useParams();
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


  return (
    <>
      <div className="bg-gray-50 py-6 lg:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4 lg:order-last lg:col-start-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{ruta.name}</h1>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <img src='https://www.svgrepo.com/show/533661/chevron-right.svg' className="w-4 h-4" />
                  <p className="text-sm text-gray-500">{ruta.difficulty}</p>
                </div>
                <div className="flex items-center space-x-1">
                <img src='https://www.svgrepo.com/show/533661/chevron-right.svg' className="w-4 h-4" />
                  <p className="text-sm text-gray-500">{ruta.distance} km</p>
                </div>
                <div className="flex items-center space-x-1">
                <img src='https://www.svgrepo.com/show/533661/chevron-right.svg' className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-500">{ruta.totalTimeSpent} h</p>
                </div>
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                <button size="lg" variant="outline">
                  Start Hike
                </button>
                <button size="lg" variant="outline">
                  Save Route
                </button>
              </div>
            </div>
            <div className="flex items-center h-80">
              {console.log(ruta.imageUrl)}
              <img
                alt="Mountain Route"
                className="aspect-video overflow-hidden rounded-xl object-bottom h-max"
                src={ruta.imageUrl}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 lg:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl">Description</h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                {ruta.description}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl">Map</h2>
              <div className="aspect-youtube rounded-xl overflow-hidden">
                <img
                  alt="Map"
                  className="object-cover"
                  height="450"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "800/450",
                    objectFit: "cover",
                  }}
                  width="800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>  
  )
}


export default RutaProfile;
