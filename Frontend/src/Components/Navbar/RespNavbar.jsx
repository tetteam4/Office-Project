import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import { NAV_DATA } from "./navdata";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { MdWbSunny, MdNightlight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function RespNavbar({
  repsonsiveHandler,
  isExpanded,
  darkMode,
  setDarkMode,
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
    <AnimatePresence mode="wait">
      {isOpne && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }} // Start from left
          animate={{ opacity: 1, x: 0 }} // Move to original position
          exit={{ opacity: 0, x: "-100%" }} // Exit to left
          transition={{ duration: 0.1, ease: "easeInOut" }}
          role="dialog"
          aria-hidden={!isOpne}
          className={`fixed top-[75px] left-0 h-[100vh] bottom-0 z-20 bg-white text-black shadow-md transform transition-transform duration-300 ease-in-out w-[80%] sm:w-[75%] lg:w-[390px]`}
        >
          {/* Scrollable Content */}
          <div className="h-[calc(100vh-70px-70px)] overflow-y-auto  pb-16">
            {/* Search Bar */}
            <form className="flex-1 px-5 mt-5 relative">
              <input
                type="text"
                placeholder="Search ..."
                className="w-full py-2 border text-gray-600 px-10 border-gray-100 bg-gray-200 rounded-lg focus:outline-none"
              />
              <span className="absolute top-3 text-xl text-gray-500 right-8">
                <IoSearch />
              </span>
            </form>

            {/* Navigation Links */}
            <ul className="flex flex-col space-y-2 p-4">
              {NAV_DATA.map((navItem, index) => (
                <li key={index} className="border-b border-gray-300 pb-2">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleMenu(index)}
                    aria-expanded={expandedMenus[index]}
                    aria-controls={`menu-${index}`}
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
                    <ul
                      id={`menu-${index}`}
                      className=" mt-2 space-y-3 "
                      role="list"
                    >
                      {navItem.subCategories.map((category, catIndex) => (
                        <li
                          key={catIndex}
                          className="border-t border-gray-300 "
                        >
                          <div
                            className="flex items-center justify-between cursor-pointer text-md"
                            onClick={() => toggleCategory(index, catIndex)}
                            aria-expanded={
                              expandedCategories[`${index}-${catIndex}`]
                            }
                            aria-controls={`category-${index}-${catIndex}`}
                          >
                            <span className="flex items-center">
                              <span className="">{category.category}</span>
                            </span>
                            {expandedCategories[`${index}-${catIndex}`] ? (
                              <IoMdRemove size={18} />
                            ) : (
                              <IoMdAdd size={18} />
                            )}
                          </div>
                          {expandedCategories[`${index}-${catIndex}`] && (
                            <ul
                              id={`category-${index}-${catIndex}`}
                              className="ml-5 mt-2 space-y-2"
                              role="list"
                            >
                              {category.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="border-t border-gray-300 py-1"
                                >
                                  <Link
                                    to={item.path}
                                    className="block text-gray-700 hover:text-white"
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
          <div className="absolute  z-20 flex border bg-white p-3 items-center w-full justify-between px-5">
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
                             darkMode ? "opacity-100 text-blue-700" : "opacity-50 text-black"
                           }`}
                         />
                       </div>
            <a
              href="mailto:user@example.com"
              className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              <MdEmail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default RespNavbar;
