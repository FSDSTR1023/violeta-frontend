import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../api/Connection';

const LogIn = () => {
  const [credentials, setCredentials] = useState({
    nickname: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.post('/users/login', credentials);
      console.log(response.data);
      const { token } = response.data;

      localStorage.setItem('token', token);

      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="nickname" className="block mb-1">
            Nickname:
          </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={credentials.nickname}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
