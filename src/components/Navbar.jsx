import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/SessionContext';
import TrailNestPhoto from '../img/TrailNest-logos_white.png';

const Navbar = () => {
  const { getProfile, profile, closeSession } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
      closeSession();
      navigate('/');
    };

    console.log(profile)
    return (
      <div className="relative">
        <button className='w-36' onClick={() => setIsOpen(!isOpen)}>{profile.nickname}</button>
        {isOpen && (
          <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-md p-2 w-36 z-10 flex flex-col">
            <Link to="/profile" className="text-gray-800 mb-2">Mi cuenta</Link>
            <Link to="/createruta" className="text-gray-800 mb-2">Ruta nueva</Link>
            <Link to="/myrutas" className="text-gray-800 mb-2">Mis rutas</Link>
            <Link to="/nivelusuario" className="text-gray-800 mb-2">Nivel del Usuario</Link>
            <button onClick={handleLogout} className="text-gray-800 mb-2 text-left">Cerrar sesión</button>
          </div>
        )}
      </div>
    );
  };
  return (
    <nav className="bg-lime-800 text-white p-4 flex justify-between items-center ">
      <div className="flex items-center ">
        <Link to='/' className="text-xl font-semibold">
          <img src={TrailNestPhoto} alt="Logo" className="w-22 h-10 mr-2 rounded-xl cursor-pointer" />
        </Link>
        <li><Link to="/rutas" className="hover:text-gray-300">Rutas</Link></li>
        <ul className="flex gap-4 pl-8">
          
        </ul>
      </div>
      <ul className="flex gap-4">
        {profile ? (
          <Dropdown />
        ) : (
          <>
            <li><Link to="/sobrenosotros" className="hover:text-gray-300">Sobre Nosotros</Link></li>
            <li><Link to="/login" className="hover:text-gray-300">Iniciar sesión</Link></li>
            <li><Link to="/signup" className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full shadow-md">Registrarse</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
