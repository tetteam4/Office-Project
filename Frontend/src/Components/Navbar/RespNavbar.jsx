import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpg";
import { NAV_DATA } from "./navdata";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { MdEmail, MdMenu } from "react-icons/md"; // Email icon
function RespNavbar({
  repsonsiveHandler,
  isExpanded,
  toggleTheme,
  darkMode,
  isClick,
  setIsClick,
}) {
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isExpanded]);
  return (
    <div
      className={`fixed  top-0 right-0 h-screen transition-all duration-300 ease-in-out  ${
        isExpanded ? "w-[350px]" : "w-0"
      }   z-20 bg-gray-600 text-white shadow-md`}
    >
      <div className="flex justify-between p-3 bg-white items-center">
        <div>
          <img src={logo} alt="" className="mix-blend-multiply w-[150px] " />
        </div>
         <a
                      href="mailto:user@example.com"
                      className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
                    >
                      <MdEmail className="w-6 h-6" />
                    </a>
      </div>
      {/* Search Bar */}
      <form className="flex-1 mt-5 px-5 relative">
        <input
          type="text"
          placeholder="Search ..."
          className="w-full py-2 border text-gray-600 px-10 border-gray-300 bg-gray-200 rounded-lg focus:outline-none "
        />
        <span
          className={`absolute top-3 text-xl  text-gray-500 right-8  ${
            isClick ? "hidden" : ""
          }`}
        >
          <IoSearch />
        </span>
      </form>
      <ul className="flex flex-col justify-start space-y-1  p-4">
        {NAV_DATA.map((navitem, index) => (
          <li className="hover:bg-gray-200 border border-gray-500 py-2 px-3 rounded-lg hover:text-black">
            <Link
              onClick={repsonsiveHandler}
              to={navitem.path}
              className="flex items-center justify-between"
            >
              <span className="text-xl">{navitem.name}</span>
              <MdKeyboardArrowRight size={28} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-5  flex items-center w-full  justify-between px-5">
      
        <div>
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
        </div>
        <Link
          to="/signup"
          className="flex items-center bg-gray-100 hover:bg-gray-100 rounded-lg border p-2"
        >
          <span className="px-2 text-sm font-semibold text-gray-800">
            Login
          </span>
          <span>
            <LuLogIn className="text-gray-700" size={24} />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default RespNavbar;
