import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="w-8 mr-2" />
        <Link to='/' className="text-xl font-semibold">Trailnest</Link>
      </div>
      <ul className="flex gap-4">
        <li><Link to="/users" className="hover:text-gray-300">Users</Link></li>
        <li><Link to="/rutas" className="hover:text-gray-300">Rutas</Link></li>
        <li><Link to="/createruta" className="hover:text-gray-300">Ruta nueva</Link></li>
        <li><Link to="/login" className="hover:text-gray-300">Log In</Link></li>
        <li><Link to="/signup" className="hover:text-gray-300">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
