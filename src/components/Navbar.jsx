import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="w-8 mr-2" />
        <span className="text-xl font-semibold">Trailnest</span>
      </div>
      <div className="flex gap-4">
        <a href="/users" className="hover:text-gray-300">Users</a>
        <a href="/rutas" className="hover:text-gray-300">Rutas</a>
      </div>
    </nav>
  );
};

export default Navbar;
