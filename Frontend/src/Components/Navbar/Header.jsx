import React, { useState, useEffect } from "react";
import RespNavbar from "./RespNavbar";
import { IoSearch } from "react-icons/io5";

import { LuLogIn } from "react-icons/lu";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

import { MdEmail, MdMenu, MdClose } from "react-icons/md"; // Email icon
import { MdWbSunny, MdNightlight } from "react-icons/md";

const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpne, setIsOpen] = useState(false);
  const [cardItems, setCardItems] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkmode");
    return savedMode === "false";
  });

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
    console.log("IsOpen");
  };

  return (
    <header className="bg-[#FFFFFF] dark:bg-gray-950 fixed top-0 lg:sticky z-30 p-2 border dark:border-gray-950 left-0 right-0">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
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
          <div className="texFt-3xl font-bold text-red-600">
            <Link to="/" className="text-lg font-bold">
              <img
                src={logo}
                alt=""
                className="h-14 w-auto mix-blend-multiply dark:mix-blend-normal dark:rounded-md"
              />
            </Link>
          </div>
        </div>

        {/* Login in responsive */}
        <div className="flex justify-end lg:hidden">
          <Link to="/signup" className="flex items-center bg-gray-50 p-1">
            <span className="px-2 text-sm font-semibold">Login</span>
            <span>
              <LuLogIn className="text-gray-700" size={20} />
            </span>
          </Link>
        </div>

        {/* Desktop Login and Icons */}
        <div className="lg:flex items-center col-span-1 hidden justify-end gap-x-5">
          {/* Actions (Theme Toggle & Email Icon) */}
          <div className="flex items-center justify-between py-1.5 gap-x-5">
            {/* Dark Mode Toggle */}
            <div
              className={`relative flex items-center w-[110px] h-[40px] cursor-pointer rounded-full border 
      ${
        darkMode ? "bg-zinc-700" : "bg-white"
      } shadow-sm transition-all duration-300`}
            >
              {/* Toggle Circle */}
              <div
                className={`absolute w-[35px] h-[35px] rounded-full top-[2px] transition-all duration-300 shadow-md
        ${
          darkMode
            ? "left-[102px] translate-x-[-100%] bg-zinc-900"
            : "left-[4px] bg-gradient-to-r from-orange-500 to-yellow-400"
        }`}
              ></div>

              {/* Sun Icon (Light Mode) */}
              <MdWbSunny
                onClick={() => setDarkMode(false)}
                className={`absolute left-[13px] w-5 h-5 transition-all ${
                  darkMode ? "opacity-50" : "opacity-100"
                }`}
              />

              {/* Moon Icon (Dark Mode) */}
              <MdNightlight
                onClick={() => setDarkMode(true)}
                className={`absolute right-[13px] w-5 h-5 transition-all ${
                  darkMode
                    ? "opacity-100 text-blue-700"
                    : "opacity-50 text-black"
                }`}
              />
            </div>
            {/* Email Icon */}
            <a
              href="mailto:user@example.com"
              className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              <MdEmail className="w-6 h-6" />
            </a>

            {/* Login Button */}
            <Link
              to="/signup"
              className="flex items-center bg-gray-50 hover:bg-gray-100 lg:rounded-lg lg:border py-1 lg:p-2"
            >
              <span className="px-2 text-sm font-semibold">Login</span>
              <span>
                <LuLogIn className="text-gray-700" size={24} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Responsive Navbar */}
      {isOpne && (
        <div>
          <div
            onClick={repsonsiveHandler}
            className="fixed left-0 right-0 top-24 bottom-0 bg-black opacity-80 z-10"
          ></div>
          <RespNavbar
            repsonsiveHandler={repsonsiveHandler}
            isExpanded={isExpanded}
            setDarkMode={setDarkMode}
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
