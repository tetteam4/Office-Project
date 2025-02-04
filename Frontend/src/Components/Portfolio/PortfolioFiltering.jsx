import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const PortfolioFiltering = ({ selectedCategory, onCategoryChange, Portfolio_Data, onSortChange }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("A-Z");

  // Extract unique categories
  const categories = ["All", ...new Set(Portfolio_Data.map((project) => project.category))];
  const sortingOptions = ["A-Z", "Z-A"];

  return (
    <div className="relative flex items-center space-x-4 my-5 flex-wrap">
      <span className="text-sm font-medium">Filter by:</span>

      {/* Category Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="px-3 py-1.5 text-sm rounded-md border border-gray-300 font-medium bg-white text-gray-700 hover:bg-gray-100 transition-all shadow-sm flex items-center space-x-2"
        >
          <span>{selectedCategory}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {isCategoryOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  setIsCategoryOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-100 ${
                  selectedCategory === category ? "bg-[#02DB81] text-white" : "text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Sorting Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsSortOpen(!isSortOpen)}
          className="px-3 py-1.5 text-sm rounded-md border border-gray-300 font-medium bg-white text-gray-700 hover:bg-gray-100 transition-all shadow-sm flex items-center space-x-2"
        >
          <span>Sort: {selectedSort}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {isSortOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            {sortingOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelectedSort(option);
                  onSortChange(option);
                  setIsSortOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-100 ${
                  selectedSort === option ? "bg-[#02DB81] text-white" : "text-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Category List (for quick selection) */}
      <div className="flex space-x-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-3 py-1.5 text-sm rounded-md border border-gray-300 font-medium ${
              selectedCategory === category
                ? "bg-[#02DB81] text-white border-[#02DB81]"
                : "bg-white text-gray-700 hover:bg-gray-100"
            } transition-all shadow-sm`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFiltering;
