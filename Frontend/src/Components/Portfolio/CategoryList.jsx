import React from "react";
import { useNavigate } from "react-router-dom";
import { Portfolio_Data } from "./portfiliodata";
const CategoryList = () => {
  const navigate = useNavigate();



  // Ensure Portfolio_Data is an array

  // Get unique categories from Portfolio_Data
  const categories = [...new Set(Portfolio_Data.map((project) => project.category.trim()))];

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              onClick={() => navigate(`/portfolio_ca/${category}`)}
              className="w-full text-left px-3 py-1.5 rounded-md text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 transition-all shadow-sm"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
