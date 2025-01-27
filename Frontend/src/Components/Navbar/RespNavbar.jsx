import React from "react";

function RespNavbar() {
  return (
    <div className="fixed top-0 right-0 h-screen  text-center w-[300px] z-20 bg-gray-600 text-white shadow-md">
      <ul className="flex flex-col space-y-4 p-4">
        <li>
          <a href="#home" className="hover:text-yellow-400">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-yellow-400">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-yellow-400">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default RespNavbar;
