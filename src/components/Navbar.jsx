import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/SessionContext';
import TrailNestPhoto from '../img/TrailNest-logos_white.png'

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

    return (
      <div className="relative">
        <button className='w-36' onClick={() => setIsOpen(!isOpen)}>{profile.nickname}</button>
        {isOpen && (
          <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-md p-2 w-36 z-10">
            <li className="mb-2"><Link to="/profile" className="text-gray-800">My profile</Link></li>
            <li className="mb-2"><Link to="/createruta" className="text-gray-800">Ruta nueva</Link></li>
            <li className="mb-2"><Link to="/myrutas" className="text-gray-800">Mis rutas</Link></li>
            <li className="mb-2"><button onClick={handleLogout} className="text-gray-800">Logout</button></li>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
       <Link to='/' className="text-xl font-semibold">
      <img src={TrailNestPhoto} alt="Logo" className="w-22 h-10 mr-2 rounded-xl cursor-pointer" />
       </Link>
      </div>
      <ul className="flex gap-4">
        <li><Link to="/rutas" className="hover:text-gray-300">Rutas</Link></li>
        
        {profile ? (
          <Dropdown />
        ) : (
          <>
            <li><Link to="/users" className="hover:text-gray-300">Users</Link></li>
            <li><Link to="/login" className="hover:text-gray-300">Log In</Link></li>
            <li><Link to="/signup" className="hover:text-gray-300">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
