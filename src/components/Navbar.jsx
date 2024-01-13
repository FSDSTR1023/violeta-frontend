import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="w-8 mr-2" />
        <span className="text-xl font-semibold">Trailnest</span>
      </div>
      <div className="flex gap-4">
        <a href="#" className="hover:text-gray-300">Login</a>
        <a href="#" className="hover:text-gray-300">Register</a>
      </div>
    </nav>
  );
};

export default Navbar;
