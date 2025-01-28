import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import { NAV_DATA } from "./navdata";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { LuLogIn } from "react-icons/lu";

function RespNavbar({
  repsonsiveHandler,
  isExpanded,
  toggleTheme,
  darkMode,
  isOpne,
}) {
  const [expandedMenus, setExpandedMenus] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});

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

  const toggleMenu = (index) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleCategory = (parentIndex, categoryIndex) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [`${parentIndex}-${categoryIndex}`]:
        !prev[`${parentIndex}-${categoryIndex}`],
    }));
  };

  return (
    <div
      className={`fixed top-0 right-0 h-screen z-20 bg-gray-600 text-white shadow-md transform transition-transform duration-300 ease-in-out ${
        isOpne ? "translate-x-0" : "translate-x-full"
      } w-[390px]`}
    >
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-white flex justify-between p-3 items-center">
        <div>
          <img src={logo} alt="Logo" className="mix-blend-multiply w-[150px]" />
        </div>
        <a
          href="mailto:user@example.com"
          className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
        >
          <MdEmail className="w-6 h-6" />
        </a>
      </div>

      {/* Scrollable Content */}
      <div className="mt-[80px] h-[calc(100vh-70px)] overflow-y-scroll">
        {/* Search Bar */}
        <form className="flex-1 px-5 mt-5 relative">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full py-2 border text-gray-600 px-10 border-gray-300 bg-gray-200 rounded-lg focus:outline-none"
          />
          <span className="absolute top-3 text-xl text-gray-500 right-8">
            <IoSearch />
          </span>
        </form>

        {/* Navigation Links */}
        <ul className="flex flex-col space-y-2 p-4">
          {NAV_DATA.map((navItem, index) => (
            <li key={index} className="border-b border-gray-500 pb-2">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleMenu(index)}
              >
                <span className="text-xl">{navItem.name}</span>
                {navItem.subCategories ? (
                  expandedMenus[index] ? (
                    <IoMdRemove size={20} />
                  ) : (
                    <IoMdAdd size={20} />
                  )
                ) : null}
              </div>
              {navItem.subCategories && expandedMenus[index] && (
                <ul className="ml-4 mt-2 space-y-2">
                  {navItem.subCategories.map((category, catIndex) => (
                    <li key={catIndex}>
                      <div
                        className="flex items-center justify-between cursor-pointer text-lg"
                        onClick={() => toggleCategory(index, catIndex)}
                      >
                        <span className="flex items-center">
                          {category.icon}
                          <span className="ml-2">{category.category}</span>
                        </span>
                        {expandedCategories[`${index}-${catIndex}`] ? (
                          <IoMdRemove size={18} />
                        ) : (
                          <IoMdAdd size={18} />
                        )}
                      </div>
                      {expandedCategories[`${index}-${catIndex}`] && (
                        <ul className="ml-6 mt-1 space-y-1">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                to={item.path}
                                className="block text-gray-300 hover:text-white"
                                onClick={repsonsiveHandler}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="fixed  bottom-0 z-20 flex border bg-white p-3  items-center w-full justify-between px-5">
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
        <Link
          to="/signup"
          className="flex items-center bg-gray-50 hover:bg-gray-100 rounded-lg border p-2"
        >
          <span className="px-2 text-sm text-gray-700 font-semibold">
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
