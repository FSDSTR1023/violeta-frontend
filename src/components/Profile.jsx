import React, { useState, useEffect } from 'react';
import { useSession } from '../contexts/SessionContext';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../api/Users';
import { updateLevel } from '../../api/Rutas';
import ImageUpload from './UploadImage'


const EditProfile = () => {
  const { getProfile, profile, isLoading } = useSession();
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [passwordUpdateSuccess, setPasswordUpdateSuccess] = useState(false);  
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    level:'',
    nickname: '',
    avatar:'',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (!profile || !profile._id) {
      console.error('Invalid profile or profile ID');
      if (profile && !isLoading) {
        navigate('/login');
      }
      return;
    }
  }, [profile, isLoading]);

  useEffect(() => {
    setFormData(profile || {});
    setUpdateSuccess(false);
    setPasswordUpdateSuccess(false);
  }, [profile]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputClick = () => {
    setUpdateSuccess(false);
    setPasswordUpdateSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(profile._id, formData);
      setUpdateSuccess(true);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUser(profile._id, { password: newPassword });
      setPasswordUpdateSuccess(true);
      setNewPassword('');
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  const handleAvatarChange = (newAvatar) => {
    console.log('Nuevo avatar', newAvatar);
    setFormData({
      ...formData,
      avatar: newAvatar,
    });
  };

  const handleOverwriteAvatar = async (e) => {
    e.preventDefault();
    console.log('Image before check:', image); // Add this line
    if (!image) {
      setErrorMessage('Please upload an image.');
      return;
    }
    try {
      console.log('Image before submission:', image);
      const updatedProfile = await updateUser(profile._id, { avatar: image });
      console.log('Avatar updated successfully:', updatedProfile);
      setFormData({
        ...formData,
        avatar: updatedProfile.avatar,
      });
      setUpdateSuccess(true); 
    } catch (error) {
      console.error('Error updating avatar:', error);
    }
  };
  
  

  
  // useEffect(() => {
  //   async function updateUserLevel() {
  //     try {
  //       await updateLevel(profile._id); // Llamar a la función para actualizar el nivel del usuario
  //       const updatedProfile = await GetUserProfile(profile._id); // Obtener el perfil actualizado
  //       setFormData(prevState => ({ ...prevState, level: updatedProfile.level })); // Actualizar el estado con el nivel actualizado
  //     } catch (error) {
  //       console.error('Error updating user level:', error);
  //     }
  //   }
  
  //   updateUserLevel(); // Llamar a la función para actualizar el nivel del usuario cuando el componente se monta
  // }, [profile]);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Update profile</h2>
        {updateSuccess && (
          <div className="bg-green-200 text-green-800 p-2 mb-4 rounded-md">
            Profile successfully updated!
          </div>
        )}
        {passwordUpdateSuccess && (
          <div className="bg-green-200 text-green-800 p-2 mb-4 rounded-md">
            Password successfully updated! Please <strong>re-login</strong> for the changes to take effect.
          </div>
        )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onClick={handleInputClick}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Apellido:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onClick={handleInputClick}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div><div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nombre de usuario:</label>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            onClick={handleInputClick}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          
        </div><div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nivel:</label>
          <input
            type="text"
            name="level"
            value={formData.level}
            readOnly // 
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div><div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Correo electrónico:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onClick={handleInputClick}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Guardar cambios
        </button>
      </form>

      <hr className="my-6" />

      <h2 className="text-xl font-semibold text-center mb-4">Cambiar contraseña</h2>
      <form onSubmit={handlePasswordUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nueva contraseña:</label>
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Cambiar contraseña
        </button>        
      </form>

      <hr className="my-6" />

      <h2 className="text-xl font-semibold text-center mb-4">Actualizar foto de perfil</h2>
      {updateSuccess && (
        <div className="bg-green-200 text-green-800 p-2 mb-4 rounded-md">
          Profile picture successfully updated! Please <strong>re-login</strong> for the changes to take effect.
        </div>
      )}
        <label className="block text-gray-700 text-sm font-bold mb-2">Profile Picture:</label>
        <ImageUpload setImage={setImage} folder="users" className="w-76 rounded-xl m-2"/>
        <button
        type="submit"
        className="bg-blue-500 text-white my-2 py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        onClick={handleOverwriteAvatar}
      >
        Cambiar foto de perfil
      </button>
      {profile && profile.avatar && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Foto de perfil actual:</h3>
            <img src={profile.avatar} alt="Profile" className="w-full rounded-md" />
          </div>
        )}
    </div>
  );
};

export default EditProfile;
