import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Mountain Routes. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a href="#" className="text-xs hover:underline underline-offset-4">
          About
        </a>
        <a href="#" className="text-xs hover:underline underline-offset-4">
          Contact
        </a>
        <a href="#" className="text-xs hover:underline underline-offset-4">
          Terms of Service
        </a>
      </nav>
      <div className="flex gap-4"> {/*Change to icons*/}
        <a href="#" className="text-xs hover:underline underline-offset-4">Facebook</a>
        <a href="#" className="text-xs hover:underline underline-offset-4">X</a>
        <a href="#" className="text-xs hover:underline underline-offset-4">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
