import React, { useState, useEffect } from 'react';
import { getRutaById, updateRuta } from '../../api/Rutas';
import { useSession } from '../contexts/SessionContext';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateRuta() {
  const { profile } = useSession();
  const { rutaId } = useParams();
  const [ updateRutaFormData, setUpdateRutaFormData ] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getRutaById(rutaId)
      .then((response) => {
        const rutaInfo = response.data;
        setUpdateRutaFormData({
          name: rutaInfo.name,
          location: rutaInfo.location,
          distance: rutaInfo.distance,
          difficulty: rutaInfo.difficulty,
          maxElevation: rutaInfo.maxElevation,
          minElevation: rutaInfo.minElevation,
          description: rutaInfo.description,
          totalTimeSpent: rutaInfo.totalTimeSpent,
          trailType: rutaInfo.trailType,
          imageUrl: rutaInfo.imageUrl,
        });
      })
      .catch((error) => {
        console.error('Error fetching rutas:', error);
      });
  }, [rutaId, profile._id]);

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateRutaFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateRuta(rutaId, updateRutaFormData);
      console.log('¡La ruta se ha actualizado correctamente!');
      navigate('/myrutas');
    } catch (error) {
      console.error('Error updating ruta:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Update Ruta:</h2>
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
        
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Route Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={updateRutaFormData.name || ''}
            onChange={handleUpdateChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block mb-1">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={updateRutaFormData.location || ''}
            onChange={handleUpdateChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="distance" className="block mb-1">
            Distance (in km):
          </label>
          <input
            type="number"
            id="distance"
            name="distance"
            value={updateRutaFormData.distance || ''}
            onChange={handleUpdateChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="difficulty" className="block mb-1">
            Difficulty:
          </label>
          <select
            id="difficulty"
            name="difficulty"
            value={updateRutaFormData.difficulty || ''}
            onChange={(e) => setUpdateRutaFormData({ ...updateRutaFormData, difficulty: e.target.value })}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="Fácil" selected="selected">Fácil</option>
            <option value="Moderado">Moderado</option>
            <option value="Difícil">Difícil</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="maxElevation" className="block mb-1">
            Max Elevation:
          </label>
          <input
            type="number"
            id="maxElevation"
            name="maxElevation"
            value={updateRutaFormData.maxElevation || ''}
            onChange={handleUpdateChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="minElevation" className="block mb-1">
            Min Elevation:
          </label>
          <input
            type="number"
            id="minElevation"
            name="minElevation"
            value={updateRutaFormData.minElevation || ''}
            onChange={handleUpdateChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={updateRutaFormData.description || ''}
            onChange={handleUpdateChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="totalTimeSpent" className="block mb-1">
            Total Time Spent (in minutes):
          </label>
          <input
            type="number"
            id="totalTimeSpent"
            name="totalTimeSpent"
            value={updateRutaFormData.totalTimeSpent || ''}
            onChange={handleUpdateChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="trailType" className="block mb-1">
            Trail Type:
          </label>
          <select
            id="trailType"
            name="trailType"
            value={updateRutaFormData.trailType || ''}
            onChange={(e) => setUpdateRutaFormData({ ...updateRutaFormData, trailType: e.target.value })}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="Loop">Loop</option>
            <option value="Point-to-Point">Point-to-Point</option>
            <option value="Out-and-Back">Out-and-Back</option>
            <option value="Circuito">Circuito</option>
          </select>
        </div>
        
        <div className="flex justify-between">
          <button onClick={handleFormSubmit} type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Update</button>
          <button onClick={() => navigate('/myrutas')} className="bg-blue-500 text-white py-2 px-4 rounded-md">Cancel</button>
        </div>
      </form>
    </div>
  );

}

export default UpdateRuta;