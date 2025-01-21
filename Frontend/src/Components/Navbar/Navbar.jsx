import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { NAV_DATA } from "./navdata";
import MegaMenu from "./MegaMenu";
import Header from "./Header";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [delayedItem, setDelayedItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (index) => {
    hoverTimeout.current = setTimeout(() => setDelayedItem(index), 100);
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setDelayedItem(null);
    setHoveredItem(null);
  };

  return (
    <nav
      className={`w-full mt-20 z-30 transition-all duration-500 ${
        isScrolled ? "sticky bg-white shadow-md border-gray-800" : "relative bg-transparent"
      }`}
      style={{ top: isScrolled ? "20px" : "0" }}
    >
     
      <div className="bg-white px-4 py-2  flex justify-center items-center">
        <ul className="lg:flex lg:gap-4 p-4 lg:p-0 space-y-4 lg:space-y-0 flex justify-center items-center w-full">
          {NAV_DATA.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={handleMouseLeave}
              onFocus={() => handleMouseEnter(index)}
              onBlur={handleMouseLeave}
              className="px-1 py-2  group"
              role="menuitem"
            >
              <Link
                to={item.path}
                className="text-gray-600 transition-colors flex items-center text-lg font-sans font-semibold duration-300 hover:text-gray-900"
                aria-haspopup={!!item.subCategories}
                aria-expanded={delayedItem === index}
              >
                {item.name}
                {item.icon && (
                  <span className="ml-1 transform group-hover:rotate-180 transition-transform duration-300">
                    {item.icon}
                  </span>
                )}
              </Link>

              {delayedItem === index && item.subCategories && (
                <>
                  <div
                    className="fixed left-0 right-0 top-40
                     bottom-0 bg-black opacity-50 z-10"
                     onMouseEnter={handleMouseLeave}
                   
                  ></div>
                  <div
                    className={`${
                      isScrolled ? "fixed top-9" : "absolute top-12"
                    } left-0 w-full  z-20`}
                  >
                    <MegaMenu subCategories={item.subCategories} isVisible={true} />
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
