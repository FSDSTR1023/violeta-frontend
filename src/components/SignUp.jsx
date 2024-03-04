import React, { useState } from 'react';
import { registerUser } from '../../api/Users';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../img/forest.jpg'
import ImageUpload from './UploadImage';

const SignUp = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    nickname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setErrorMessage('Please upload an image.');
      return;
    }
    try {
      console.log('Image before submission:', image);
      const response = await registerUser(formData);
      console.log('User registered successfully:', response.data);
      navigate('/');

    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="bg-cover bg-center min-h-screen" style={{backgroundImage: `url(${backgroundImage})`}}>
    <div className="flex items-center justify-center h-full">
        <div className="bg-neutral-100 p-10 px-36 rounded-lg shadow-lg my-20">
          <h2 className="text-2xl font-bold mb-4 text-center">Registrarse</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto ">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 ">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-1">
            Apellido:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nickname" className="block mb-1">
            Nombre de usuario:
          </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
          Correo electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block mb-1">
            Añadir Imagen:
          </label>
          <ImageUpload setImage={setImage} folder="users" className="w-76 rounded-xl"/>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
        <div className="container mx-auto text-center">
        <button type="submit" className="bg-lime-500 text-white py-2 px-4 rounded-md">
          Registrarse
        </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default SignUp;
