import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { NAV_DATA } from "./navdata";
import MegaMenu from "./MegaMenu";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [delayedItem, setDelayedItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Fix navbar when scrolled 50px down
    };
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
      className={`w-full hidden lg:block z-30 transition-all duration-500 ${
        isScrolled ? "fixed top-0 left-0 bg-white shadow-md border-b border-gray-200" : "relative bg-transparent"
      }`}
    >
      <div className="bg-white px-4 py-1.5 flex justify-center items-center">
        <ul className="lg:flex lg:gap-4 p-4 lg:p-0 space-y-4 lg:space-y-0 flex justify-center items-center w-full">
          {NAV_DATA.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={handleMouseLeave}
              onFocus={() => handleMouseEnter(index)}
              onBlur={handleMouseLeave}
              className="px-1 py-2 group"
              role="menuitem"
            >
              <Link
                to={item.path}
                className="text-gray-600 transition-colors flex items-center text-md font-sans font-semibold duration-300 hover:text-gray-900"
                aria-haspopup={!!item.subCategories}
                aria-expanded={delayedItem === index}
              >
                {item.name}
                {(index === 1 || index === 3) && (
                  <span className="ml-1 transform group-hover:rotate-180 transition-transform duration-300">
                    <IoMdArrowDropdown size={28} />
                  </span>
                )}
              </Link>

              {delayedItem === index && item.subCategories && (
                <>
                  <div
                    className="fixed left-0 right-0 top-40 bottom-0 bg-black opacity-50 z-10"
                    onMouseEnter={handleMouseLeave}
                  ></div>
                  <div
                    className={`${
                      isScrolled ? "fixed top-[50px] " : "absolute top-12"
                    } left-0 w-full  z-40`}
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
