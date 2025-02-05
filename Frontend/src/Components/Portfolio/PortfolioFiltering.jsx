import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CiFilter } from "react-icons/ci";
import { FaSortAlphaDown } from "react-icons/fa";

const PortfolioFiltering = ({
  selectedCategory,
  onCategoryChange,
  Portfolio_Data,
  onSortChange,
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("A-Z");

  // Extract unique categories
  const categories = [
    "All",
    ...new Set(Portfolio_Data.map((project) => project.category)),
  ];
  const sortingOptions = ["A-Z", "Z-A"];

  return (
    <div className="relative flex items-center space-x-4 my-5 flex-wrap">
      <span className="text-md font-medium">Filter by:</span>

      {/* Category Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="px-3 py-1.5 min-w-[150px] text-sm rounded-md border h-9 border-gray-300 font-medium bg-white text-gray-700 hover:bg-gray-100 transition-all shadow-sm flex items-center justify-between space-x-2"
        >
          <div className="flex items-center space-x-2">
            <span>
              <CiFilter size={24} />
            </span>
            <span>{selectedCategory}</span>
          </div>
          <ChevronDown className="w-5 h-5 font-bold" />
        </button>

        {isCategoryOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  setIsCategoryOpen(false); // Close dropdown on selection
                }}
                className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-100 ${
                  selectedCategory === category
                    ? "bg-[#02DB81] text-white"
                    : "text-gray-700"
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
          className="px-3 py-1.5 text-sm rounded-md border h-9 min-w-[150px] border-gray-300 font-medium bg-white text-gray-700 hover:bg-gray-100 transition-all shadow-sm flex items-center justify-between space-x-2"
        >
          <div className="flex items-center space-x-2">
            <span>
              <FaSortAlphaDown size={24} className="text-gray-500" />
            </span>
            <span>Sort: {selectedSort}</span>
          </div>
          <ChevronDown className="w-5 h-5" />
        </button>

        {isSortOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            {sortingOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelectedSort(option);
                  onSortChange(option);
                  setIsSortOpen(false); // Close dropdown on selection
                }}
                className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-100 ${
                  selectedSort === option
                    ? "bg-[#02DB81] text-white"
                    : "text-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioFiltering;