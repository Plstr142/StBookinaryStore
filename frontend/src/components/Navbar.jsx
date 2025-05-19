import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { href, Link } from "react-router-dom";
// import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoSearchOutline, IoTimeSharp } from "react-icons/io5";
// import { HiOutlineUser } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
// import { HiOutlineHeart } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import avatarImg from "../assets/avatar_user.png";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // console.log(isDropdownOpen)

  const currentUser = true;

  return (
    <header className="max-w-screen px-4 sm:px-6 lg:px-8 py-6 bg-[#bcc4a1]">
      <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        {/* LEFT: LOGO + SEARCH */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <span className="text-xl sm:text-2xl font-bold whitespace-nowrap">
            StBookinary Store
          </span>

          <div className="relative w-full sm:w-72">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none" />
            <input
              type="text"
              maxLength={100}
              placeholder="Search here for any book"
              className="pl-10 pr-4 py-1.5 w-full text-sm sm:text-base rounded-md border-[#808570] shadow-lg truncate overflow-hidden whitespace-nowrap focus:outline-none"
            />
          </div>
        </div>

        {/* RIGHT: ICONS + DROPDOWN + TOGGLE */}
        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Avatar + Dropdown */}
          <div className="relative">
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt="avatar"
                    className="w-7 h-7 rounded-full ring-2 ring-black dark:ring-white cursor-pointer"
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <FaRegCircleUser className="w-6 h-6 cursor-pointer" />
              </Link>
            )}
          </div>

          {/* Favorite */}
          <button>
            <FiHeart className="w-6 h-6 cursor-pointer" />
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-2 bg-[#808570] px-3 py-1 rounded text-black dark:text-white"
          >
            <FiShoppingCart className="w-5 h-5" />
            <span className="text-sm font-semibold">0</span>
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggleDarkMode}
            title="Toggle theme"
            className="p-2 rounded hover:bg-[#808570] transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Menu icon */}
          <Link to="/" className="block sm:hidden">
            <HiMiniBars3BottomRight className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
