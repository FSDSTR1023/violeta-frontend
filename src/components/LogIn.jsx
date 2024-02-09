import { profileUser, loginUser } from "../../api/Users";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/SessionContext';

function LogIn() {
  const nicknameRef = useRef();
  const passwordRef = useRef();
  const { getProfile, setProfile } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  const logUser = () => {
    const nickname = nicknameRef.current.value;
    const password = passwordRef.current.value;

    loginUser({ nickname, password })
      .then((_res) => {
        getProfile();
        navigate('/');
      })
      .catch((err) => {
        console.log("Error during login: ", err);
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="nickname" className="block mb-1">
            Nickname:
          </label>
          <input
            ref={nicknameRef}
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            ref={passwordRef}
            type="password"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <button
          onClick={logUser}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default LogIn;
