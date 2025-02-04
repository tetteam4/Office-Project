import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryList = ({ Portfolio_Data = [] }) => {
  const navigate = useNavigate();

  console.log("Portfolio_Data:", Portfolio_Data); // Debugging

  // Ensure Portfolio_Data is an array
  if (!Array.isArray(Portfolio_Data)) {
    console.error("Portfolio_Data is not an array", Portfolio_Data);
    return <p>Error: Portfolio data is not available.</p>;
  }

  // Get unique categories from Portfolio_Data
  const categories = ["All", ...new Set(Portfolio_Data.map((project) => project.category.trim()))];

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              onClick={() => navigate(`/category/${category}`)}
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
