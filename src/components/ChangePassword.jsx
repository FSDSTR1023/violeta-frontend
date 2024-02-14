import React, { useState, useEffect } from 'react';
import { useSession } from '../contexts/SessionContext';
import { updateUser } from '../../api/Users';

const PasswordChangeForm = ({ onPasswordUpdate }) => {
  const { getProfile, profile } = useSession();
  const [newPassword, setNewPassword] = useState('');
  const [passwordUpdateSuccess, setPasswordUpdateSuccess] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(profile._id, newPassword);
      setPasswordUpdateSuccess(true);
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  useEffect(() => {
    if (passwordUpdateSuccess) {
      onPasswordUpdate();
      setPasswordUpdateSuccess(false);
    }
  }, [passwordUpdateSuccess, onPasswordUpdate]);

  useEffect(() => {
    setPasswordUpdateSuccess(false);
  }, [profile]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">New Password:</label>
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={handleChange}
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
  );
};

export default PasswordChangeForm;