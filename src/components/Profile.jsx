import React, { useState, useEffect } from 'react';
import { useSession } from '../contexts/SessionContext';
import { updateUser } from '../../api/Users';

const EditProfile = () => {
  const { getProfile, profile } = useSession();
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    nickname: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    setFormData(profile || {});
    setUpdateSuccess(false);
  }, [profile]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputClick = () => {
    setUpdateSuccess(false);
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

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">Edit Profile</h1>
      {updateSuccess && (
        <div className="bg-green-200 text-green-800 p-2 mb-4 rounded-md">
          Profile successfully updated!
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
    </div>
  );
};

export default EditProfile;
