import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRuta } from '../../api/Rutas';
import { useSession } from '../contexts/SessionContext';
import ImageUpload from './UploadImage';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const CreateRuta = () => {
  const { getProfile, profile } = useSession();
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    getProfile();
  }, []);

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
    creator: profile._id
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
      console.log('Image before submission:', image);
      const response = await createRuta({ ...rutaData, imageUrl: image });
      console.log('Route created successfully:', response.data);
      navigate('/rutas');

    } catch (error) {
      console.error('Error creating route:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Crear Nueva Ruta</h2>
      {profile ? (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Nombre de la Ruta:
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
            Localización:
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
            Distancia (km):
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
            Dificultad:
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
            Elevación máxima:
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
          <label htmlFor="description" className="block mb-1">
            Descripción:
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
          <DatePicker
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={
              (date) => setDate(date)
            } 
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
            Tipo de Ruta:
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
            <option value="Point-to-Point">Punto a punto</option>
            <option value="Out-and-Back">De ida y vuelta</option>
            <option value="Circuito">Circuito</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="imageUrl" className="block mb-1">
            Añadir Imagen:
          </label>
          <ImageUpload setImage={setImage}/>
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Crear Ruta
        </button>
        </form>
        ) : (
          <p>Not logged</p>
        )} 
    </div>
  );

};

export default CreateRuta;
