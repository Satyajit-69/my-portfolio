// Navbar.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">My Portfolio</div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-blue-400">Home</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </li>
          </ul>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
