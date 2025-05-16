import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react'; // เพิ่ม Sun, Moon

function Navbar({ toggleDarkMode, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">StBookinary shop</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex text-lg items-center gap-6">
          <li className='flex items-center justify-center px-4 py-2 rounded hover:bg-gray-800 transition'>
            <a href="#" className="hover:text-yellow-400">Home</a>
          </li>
          <li className='flex items-center justify-center px-4 py-2 rounded hover:bg-gray-800 transition'>
            <a href="#" className="hover:text-yellow-400">About</a>
          </li>
          <li className='flex items-center justify-center px-4 py-2 rounded hover:bg-gray-800 transition'>
            <a href="#" className="hover:text-yellow-400">Services</a>
          </li>
          <li className='flex items-center justify-center px-4 py-2 rounded hover:bg-gray-800 transition'>
            <a href="#" className="hover:text-yellow-400">Contact</a>
          </li>
          <li className='flex items-center justify-center px-4 py-2 rounded hover:bg-gray-800 transition'>
            <button
              onClick={toggleDarkMode}
              className="hover:text-yellow-400"
              title="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>

        {/* Hamburger + toggle button (Mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDarkMode} title="Toggle theme">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-4 text-lg">
          <li><a href="#" className="block hover:text-yellow-400">Home</a></li>
          <li><a href="#" className="block hover:text-yellow-400">About</a></li>
          <li><a href="#" className="block hover:text-yellow-400">Services</a></li>
          <li><a href="#" className="block hover:text-yellow-400">Contact</a></li>
          <li>
            <button
              onClick={toggleDarkMode}
              className="block hover:text-yellow-400"
              title="Toggle theme"
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
