import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRuta } from '../../api/Rutas';
import { useSession } from '../contexts/SessionContext';


const CreateRuta = () => {
  const { getProfile, profile, closeSession } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  console.log('Profile ', profile);

  const [rutaData, setRutaData] = useState({
    name: '',
    location: '',
    distance: 0,
    difficulty: 'Fácil',
    maxElevation: 0,
    minElevation: 0,
    description: '',
    date: new Date(),
    totalTimeSpent: 0,
    trailType: 'Loop',
    imageUrl: '',
    creator:  profile._id
  });

  const handleChange = (e) => {
    setRutaData({
      ...rutaData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Submitting rutaData:', rutaData);
      const response = await createRuta(rutaData);
      console.log('Route created successfully:', response.data);
      navigate('/rutas');

    } catch (error) {
      console.error('Error creating route:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New Route</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Route Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={rutaData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
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
            value={rutaData.location}
            onChange={handleChange}
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
            value={rutaData.distance}
            onChange={handleChange}
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
            value={rutaData.difficulty}
            onChange={(e) => setRutaData({ ...rutaData, difficulty: e.target.value })}
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
            value={rutaData.maxElevation}
            onChange={handleChange}
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
            value={rutaData.minElevation}
            onChange={handleChange}
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
            value={rutaData.description}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block mb-1">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={rutaData.date.toISOString().split('T')[0]}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="totalTimeSpent" className="block mb-1">
            Total Time Spent (in minutes):
          </label>
          <input
            type="number"
            id="totalTimeSpent"
            name="totalTimeSpent"
            value={rutaData.totalTimeSpent}
            onChange={handleChange}
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
            value={rutaData.trailType}
            onChange={(e) => setRutaData({ ...rutaData, trailType: e.target.value })}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="Loop">Loop</option>
            <option value="Point-to-Point">Point-to-Point</option>
            <option value="Out-and-Back">Out-and-Back</option>
            <option value="Circuito">Circuito</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="imageUrl" className="block mb-1">
            Image URL:
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={rutaData.imageUrl}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Create Route
        </button>
      </form>
    </div>
  );

};

export default CreateRuta;
