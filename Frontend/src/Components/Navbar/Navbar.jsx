import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import Header from "./Header";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

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

  // Array of navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Website Design", path: "/website-design" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Website SEO", path: "/website-seo" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  
  ];

  return (
    <nav className="bg-gray-200 p-4 w-full h-auto fixed">
    
      <div className="container mx-auto flex justify-between items-center">
     

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-3 py-2 rounded"
              onClick={handleLinkClick}
            >
              {item.name}
            </Link>
          ))}
        </div>


       
      </div>

     
    </nav>
  );
};

export default Navbar;
