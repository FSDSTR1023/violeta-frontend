import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Mountain Routes. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link to="/about" className="text-xs hover:underline underline-offset-4">
          About
        </Link>
        <Link to="/contact" className="text-xs hover:underline underline-offset-4">
          Contact
        </Link>
        <Link to="/terms" className="text-xs hover:underline underline-offset-4">
          Terms of Service
        </Link>
      </nav>
      <div className="flex gap-4">
        <a href="#" className="text-xs hover:underline underline-offset-4">Facebook</a>
        <a href="#" className="text-xs hover:underline underline-offset-4">X</a>
        <a href="#" className="text-xs hover:underline underline-offset-4">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
