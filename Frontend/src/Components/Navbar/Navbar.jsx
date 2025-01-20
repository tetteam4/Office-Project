import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll to toggle the navbar's style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Website Design", path: "/website-design", icon: <MdKeyboardArrowDown size={24}  className="absolute top-1 " /> },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services", icon: <MdKeyboardArrowDown   size={24}  className="absolute top-1 " /> },
    { name: "Website SEO", path: "/website-seo" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`w-full z-30 transition-all bg-white py-2 duration-500 ${
        isScrolled
          ? "sticky top-20 bg-white border-gray-800 shadow-md"
          : "fixed top-20 bg-transparent"
      }`}
    >
      <div className="bg-white relative px-4 py-2 flex justify-center items-center">
        {/* Navbar Items */}
        <div
          className={`absolute lg:static top-20 left-0 right-0 bg-white lg:bg-transparent transform lg:transform-none transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:flex lg:justify-center lg:items-center w-full`}
        >
          <ul className="lg:flex lg:gap-9 p-4 lg:p-0 space-y-4 lg:space-y-0 flex justify-center items-center w-full">
            {navItems.map((item, index) => (
              <li key={index} className="flex items-center relative">
                <Link
                  to={item.path}
                  className="text-gray-600 transition-colors flex items-center  text-lg font-sans font-semibold duration-300 hover:text-gray-900"
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  {item.name}
                  {item.icon && <span className="ml-1 ">{item.icon}</span>} {/* Add icon with margin */}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
