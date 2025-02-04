import React from "react";

const CategoryList = ({ Portfolio_Data, selectedCategory, onCategoryChange }) => {
  const categories = ["All", ...new Set(Portfolio_Data.map((project) => project.category))];

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left px-3 py-1.5 rounded-md text-sm font-medium ${
                selectedCategory === category
                  ? "bg-[#02DB81] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } transition-all shadow-sm`}
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