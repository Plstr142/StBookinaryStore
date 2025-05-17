import React, { useState } from "react";
import { Menu, X, Sun, Moon} from "lucide-react";
import { Link } from "react-router-dom";
// import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
// import { HiOutlineUser } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
// import { HiOutlineHeart } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";


function Navbar({ toggleDarkMode, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6 border-1 border-blue-400 bg-[#bcc4a1]">
      <nav className="flex justify-between items-center gap-4">
        {/* left side */}
          
        {/* StBookinary Store */}
        <div className="flex text-2xl font-bold items-center gap-6 md:gap-16">
          StBookinary Store

          {/* search input */}
          <div className="flex relative px-2 py-1 rounded-md sm:w-72 w-40 space-x-2 gap-3 items-center border-2 border-blue-500">
            <IoSearchOutline className="absolute inline-block left-center inset-y-center text-xl pointer-events-none" />
            <input maxLength={100} type="text" className="text-start w-full pl-8 text-base truncate oveflow-hidden whitespace-nowrap focus:outline-none py-1 md:px-8 px-6 rounded-md" placeholder="Search here for any book"/>
          </div>
        </div>


        

        {/* right side */}
        <div className="flex items-center gap-6">
          {/* <HiOutlineUser className="w-6 h-6 cursor-pointer" /> */}
          <FaRegCircleUser className="w-6 h-6 cursor-pointer" />
          {/* hidden sm:block */}
          <button className="">
            {/* <HiOutlineHeart className="w-6 h-6 cursor-pointer" /> */}
            <FiHeart className="w-6 h-6 cursor-pointer" />
          </button> 
          
          <Link to="/cart">
            <FiShoppingCart className="w-6 h-6" />
          </Link>

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
          
          <Link to="/"><HiMiniBars3BottomRight className="w-6 h-6" /></Link>
        </div>

       
      </nav>
    </header>
  );
}

export default Navbar;
