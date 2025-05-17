import React, { useState } from "react";
import { Menu, X, Sun, Moon} from "lucide-react";
import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

function Navbar({ toggleDarkMode, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-0 py-0 border-1 border-blue-400 bg-[#bcc4a1]">
      <nav className="flex justify-between items-center m-6 gap-4">
        {/* left side */}
          
        {/* StBookinary Store */}
        <div className="flex text-2xl font-bold items-center gap-6">
          StBookinary Store

          {/* search input */}
          <div className="flex gap-3 items-center border-2 border-blue-500">
            <IoSearchOutline />
            <input type="text" className="text-center" placeholder="Search here for any book"/>
          </div>
        </div>


        

        {/* right side */}
        <div className="flex items-center gap-6">
          <ul className="flex text-lg items-center gap-6"> 
            <li className="flex items-center justify-center px-4 py-2 rounded hover:bg-gray-800 transition">
              <button
                onClick={toggleDarkMode}
                className="hover:text-yellow-400"
                title="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
          
          <Link to="/"><HiMiniBars3CenterLeft className="w-6 h-6" /></Link>
        </div>

       
      </nav>
    </header>
  );
}

export default Navbar;
