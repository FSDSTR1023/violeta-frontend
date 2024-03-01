import React, { useState, useEffect } from 'react';
import { useSession } from '../contexts/SessionContext';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../api/Users';
// import { updateLevel } from '../../api/Users';


const EditProfile = () => {
  const { getProfile, profile } = useSession();
  const navigate = useNavigate();
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [passwordUpdateSuccess, setPasswordUpdateSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    level:'',
    nickname: '',
    email: '',
    password: '',
    profilePicture: null,
  });
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    if (!profile || !profile._id) {
      console.error('Invalid profile or profile ID');
      navigate('/login');
      return;
    }
  }, [profile]);

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
//Subir foto al perfil
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  const handleSubmitPhoto = async (e) => {
    e.preventDefault();
    try {
      const updatedProfile = new FormData();
      updatedProfile.append('profilePicture', formData.profilePicture);
      await updateUser(profile._id, updatedProfile);
      // Handle success
    } catch (error) {
      console.error('Error updating profile picture:', error);
    }
  };


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
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
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
          <label className="block text-gray-700 text-sm font-bold mb-2">Last name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onClick={handleInputClick}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div><div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nickname:</label>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            onClick={handleInputClick}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          
        </div><div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Level:</label>
          <input
            type="text"
            name="level"
            value={formData.level}
            readOnly // Esto evita que el usuario pueda editar este campo
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div><div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
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
          Save Changes
        </button>
      </form>
      <hr className="my-6" />
      <h2 className="text-xl font-semibold text-center mb-4">Change Password</h2>
      <form onSubmit={handlePasswordUpdate}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">New Password:</label>
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
        Change Password
      </button>
      
    </form>
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Update Profile Picture</h2>
      <form onSubmit={handleSubmitPhoto}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Profile Picture:</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Upload Picture
        </button>
      </form>
      {/* Display current profile picture */}
      {profile && profile.profilePicture && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Current Profile Picture</h3>
            <img src={profile.profilePicture} alt="Profile" className="w-full rounded-md" />
          </div>
        )}
    </div>
    </div>
  );
};

export default EditProfile;
