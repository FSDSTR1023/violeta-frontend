import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-around px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Mountain Routes. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="#" className="text-xs hover:underline underline-offset-4">Facebook</a>
        <a href="#" className="text-xs hover:underline underline-offset-4">X</a>
        <a href="#" className="text-xs hover:underline underline-offset-4">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
