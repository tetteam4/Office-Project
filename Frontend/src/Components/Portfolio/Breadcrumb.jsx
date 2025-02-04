import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);
  const portfoliotitle = location.state?.port?.name;

  return (
    <nav className="text-md flex justify-center md:justify-start  text-gray-500 dark:text-gray-100 py-2 px-5 dark:bg-primary bg-gray-100 rounded-lg mb-4">
      <ul className="inline-flex  font-semibold items-center">
        <li>
          <Link to="/" className="hover:text-gray-800">
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;
          const translatedPath =
            path === "Portfolio" ? "portfolio" : decodeURIComponent(path);
          return (
            <li key={index} className="inline-flex items-center">
              <MdOutlineKeyboardArrowLeft size={24} className="" />
              {isLast ? (
                <span className="text-gray-800 dark:text-gray-300 font-semibold">
                  {portfoliotitle || translatedPath}
                </span>
              ) : (
                <Link to={routeTo} className="hover:text-gray-800">
                  {translatedPath}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
