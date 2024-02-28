import { loginUser } from "../../api/Users";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/SessionContext';
import backgroundImage from '../img/forest.jpg'

function LogIn() {
  const nicknameRef = useRef();
  const passwordRef = useRef();
  const { getProfile, setProfile } = useSession();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  const logUser = () => {
    const nickname = nicknameRef.current.value;
    const password = passwordRef.current.value;
    setError(null);

    loginUser({ nickname, password })
      .then((_res) => {
        getProfile();
        navigate('/');
      })
      .catch((err) => {
        console.log("Error during login: ", err);
        setError(true)
      });
  };

  return (
    <div className="bg-cover bg-center min-h-screen" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="flex items-center justify-center h-full ">
        <div className="bg-neutral-100 p-10 px-36 rounded-lg shadow-lg my-20">
          <h2 className="text-2xl font-bold mb-4 text-center mt-8">Acceder</h2>
          <div className="max-w-md mx-auto">
            {error && (
              <div className="bg-green-200 text-green-800 p-2 mb-4 rounded-md">
                Incorrect nickname or password. Please try again.
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="nickname" className="block mb-1">
                Nombre de usuario:
              </label>
              <input
                ref={nicknameRef}
                type="text"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">
                Contraseña:
              </label>
              <input
                ref={passwordRef}
                type="password"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="text-center">
              <button
                onClick={logUser}
                className={`bg-blue-500 text-white py-2 px-5 rounded-md `}
              >
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
