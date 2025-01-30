import React, { useState, useEffect } from "react";
import RespNavbar from "./RespNavbar";
import { IoSearch } from "react-icons/io5";
import { TfiShoppingCart } from "react-icons/tfi";
import { GoSignIn } from "react-icons/go";
import { LuLogIn } from "react-icons/lu";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { FiSun, FiMoon } from "react-icons/fi"; // Icons for light/dark mode
import { MdEmail, MdMenu, MdClose } from "react-icons/md"; // Email icon
import { Menu } from "@mui/material";

const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpne, setIsOpen] = useState(false);
  const [cardItems, setCardItems] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem("darkMode");
    return storedPreference === "true"; // Default to false if not set
  });

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode); // Save to localStorage
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const repsonsiveHandler = () => {
    setIsOpen(!isOpne);
    setIsExpanded(true);
    console.log("IsIpen");
  };

  return (
    <header className="bg-[#FFFFFF] fixed top-0  lg:sticky  z-40 p-2 border  left-0 right-0">
      <div className="container mx-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-2">
        {/* Logo */}
        <div className="flex items-center gap-x-5 md:col-span-2 lg:col-span-1 ">
          <div
            onClick={repsonsiveHandler} // Fixed function name
            className="flex lg:hidden cursor-pointer justify-end items-center"
          >
            <span className="hover:bg-gray-400 rounded-full p-2 hover:text-white transition duration-300">
              {isOpne ? <MdClose size={30} /> : <MdMenu size={30} />}
            </span>
          </div>
          <div className="texFt-3xl  font-bold  text-red-600">
            <Link to="/" className="text-lg font-bold">
              <img
                src={logo}
                alt=""
                className="h-14 w-auto mix-blend-multiply"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-4  hidden  md:flex relative">
            <input
              type="text"
              onClick={() => setIsClick(!isClick)}
              placeholder="Search ..."
              className="w-full py-2 border px-10 border-gray-300 bg-gray-200 rounded-lg focus:outline-none "
            />
            <span
              className={`absolute top-3 text-xl  text-gray-500 right-4  ${
                isClick ? "hidden" : ""
              }`}
            >
              <IoSearch />
            </span>
            {isClick && (
              <div className="absolute top-12 right-0 w-full h-[300px] bg-gray-100 border border-gray-600 rounded-lg"></div>
            )}
          </div>
        </div>
        {/* login in responsive */}
        <div className="flex justify-end lg:hidden">
          <Link
            to="/signup"
            className="flex items-center bg-gray-50 hover:bg-gray-200 rounded-lg border p-1"
          >
            <span className="px-2 text-sm font-semibold">Login</span>
            <span>
              <LuLogIn className="text-gray-700" size={20} />
            </span>
          </Link>
        </div>
        <div className="lg:flex items-center col-span-1 hidden justify-end gap-x-5">
          {/* Actions (Theme Toggle & Email Icon) */}
          <div className="flex items-center justify-between py-2 gap-x-5">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 bg-indigo-500 dark:bg-yellow-400 text-white dark:text-black rounded-full shadow-md transition-all duration-300 hover:scale-105"
            >
              {darkMode ? (
                <FiMoon className="w-6 h-6" />
              ) : (
                <FiSun className="w-6 h-6" />
              )}
            </button>
            <a
              href="mailto:user@example.com"
              className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              <MdEmail className="w-6 h-6" />
            </a>
            <Link
              to="/signup"
              className="flex items-center bg-gray-50 hover:bg-gray-100 rounded-lg border p-2"
            >
              <span className="px-2 text-sm font-semibold">Login</span>
              <span>
                <LuLogIn className="text-gray-700" size={24} />
              </span>
            </Link>
          </div>
        </div>
        {/* Burger Menu for repsonsive navbar */}
        <div></div>
      </div>
      {isOpne && (
        <div>
          <div
            onClick={repsonsiveHandler}
            className="fixed left-0 right-0 top-24
                     bottom-0 bg-black opacity-80 z-10"
          ></div>
          <RespNavbar
            repsonsiveHandler={repsonsiveHandler}
            isExpanded={isExpanded}
            toggleTheme={toggleTheme}
            darkMode={darkMode}
            isClick={isClick}
            setIsClick={setIsClick}
            isOpne={isOpne}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
