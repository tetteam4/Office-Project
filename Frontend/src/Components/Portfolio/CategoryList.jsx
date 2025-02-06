import React from "react";
import { useNavigate } from "react-router-dom";
import { Portfolio_Data } from "./portfiliodata";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
const CategoryList = () => {
  const navigate = useNavigate();
  // Get unique categories from Portfolio_Data
  const categories = [
    ...new Set(Portfolio_Data.map((project) => project.category.trim())),
  ];

  return (
    <div className="">
      <ul>
        <li>
          <h1 className="text-lg border-b font-bold py-2  px-4">Categories</h1>
        </li>
        {categories.map((category) => (
          <li key={category} className="">
            <button
              onClick={() => navigate(`/portfolio_ca/${category}`)}
              className="w-full text-left flex items-center gap-x-1    text-md font-medium cursor-pointer p-2 border-gray-300 hover:bg-white text-gray-700  transition-all shadow-sm"
            >
              <span className="">
                <IoMdArrowDropright className="text-2xl text-green-500" />
              </span>
              <p className="">
                <span className="text-md">{category}</span>
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
