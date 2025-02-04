import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Portfolio_Data } from "../Components/Portfolio/portfiliodata";
import CategoryList from "../Components/Portfolio/CategoryList";
import PortfolioCard from "../Components/Portfolio/PortfolioCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PortFolioSliderHero from "../Components/Portfolio/PortFolioSliderHero";
import ProjectNameList from "../Components/Portfolio/ProjectNameList";
import PortfolioFiltering from "../Components/Portfolio/PortfolioFiltering";

const Portfolio = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [selectedCategory, setSelectedCategory] = useState("All"); // Selected category state
  const cardsPerPage = 6; // Number of cards to display per page

  // Filter Portfolio_Data based on the selected category
  const filteredData =
    selectedCategory === "All"
      ? Portfolio_Data
      : Portfolio_Data.filter((project) => project.category === selectedCategory);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / cardsPerPage);

  // Get the cards for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredData.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when the category changes
  };
  const handleSortChange = (sortOption) => {
    const sortedData = [...Portfolio_Data].sort((a, b) => {
      return sortOption === "A-Z" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });
    setPortfolioData(sortedData); // Assuming Portfolio_Data is stored in a state
  };

  // Function to generate pagination buttons
  const renderPaginationButtons = () => {
    const buttons = [];

    // Always show the first two pages
    for (let i = 1; i <= 2; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-2 py-1 text-xs rounded-md border border-gray-300 font-medium ${
            currentPage === i
              ? "bg-[#02DB81] text-white border-[#02DB81]"
              : "bg-white text-gray-700 hover:bg-gray-100"
          } transition-all shadow-md`}
        >
          {i}
        </button>
      );
    }

    // Add "..." if currentPage is greater than 4 (to avoid overlapping with the first two pages)
    if (currentPage > 4) {
      buttons.push(
        <button
          key="ellipsis-start"
          className="px-2 py-1 text-xs rounded-md  border-gray-300  font-medium bg-white text-gray-700 cursor-default"
          disabled
        >
          ...
        </button>
      );
    }

    // Add current page and its immediate neighbors
    for (
      let i = Math.max(3, currentPage - 1);
      i <= Math.min(totalPages - 2, currentPage + 1);
      i++
    ) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-2 py-1 text-xs rounded-md border border-gray-300  font-medium ${
            currentPage === i
              ? "bg-[#02DB81] text-white border-[#02DB81]"
              : "bg-white text-gray-700 hover:bg-gray-100"
          } transition-all shadow-md`}
        >
          {i}
        </button>
      );
    }

    // Add "..." if currentPage is less than totalPages - 3 (to avoid overlapping with the last two pages)
    if (currentPage < totalPages - 3) {
      buttons.push(
        <button
          key="ellipsis-end"
          className="px-2 py-1 text-xs rounded-md  border-gray-300  font-medium bg-white text-gray-700 cursor-default"
          disabled
        >
          ...
        </button>
      );
    }

    // Always show the last two pages
    for (let i = totalPages - 1; i <= totalPages; i++) {
      if (i > 2) {
        // Avoid duplicating pages already shown
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-2 py-1 text-xs rounded-md border  border-gray-300  font-medium ${
              currentPage === i
                ? "bg-[#02DB81] text-white border-[#02DB81]"
                : "bg-white text-gray-700 hover:bg-gray-100"
            } transition-all shadow-md`}
          >
            {i}
          </button>
        );
      }
    }

    return buttons;
  };

  return (
    <section className="mx-auto border max-w-7xl ">
      <div className="py-4">
        <h1 className="text-2xl font-bold">Our Works</h1>
      </div>
      <div className="grid grid-cols-4 max-w-7xl mx-auto h-auto items-start gap-x-3">
        {/* Left Aside - Category List */}
        <aside className="col-span-1 border h-auto bg-green-100/95 min-h-0 overflow-auto">
          <CategoryList
            Portfolio_Data={Portfolio_Data}
            
          />
        </aside>

        {/* Middle Section - Portfolio Slider Hero */}
        <div className="col-span-2 border h-[300px] min-h-0 overflow-auto">
          <PortFolioSliderHero Portfolio_Data={Portfolio_Data} />
        </div>

        {/* Right Aside - Project Name List */}
        <aside className="col-span-1 border h-auto bg-green-100/95 min-h-0 overflow-auto">
          <ProjectNameList Portfolio_Data={Portfolio_Data} />
        </aside>
      </div>
      <div>
        <PortfolioFiltering
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          Portfolio_Data={Portfolio_Data} // Pass Portfolio_Data as a prop
        />
      </div>
      {/* Portfolio Card */}
      <div className="grid grid-cols-3 max-w-7xl gap-5 mt-10 mx-auto">
        {currentCards.map((port, index) => (
          <PortfolioCard
            key={index}
            port={port}
            onClick={() =>
              navigate(
                `/portfolio/${encodeURIComponent(
                  port.name.replace(/\s+/g, "-").toLowerCase()
                )}`,
                {
                  state: { port: port },
                }
              )
            }
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-start items-center my-10 space-x-2">
        {/* Previous Button */}
        {currentPage > 1 && (
          <button
            onClick={handlePreviousPage}
            className="flex items-center px-3 text-sm py-1.5 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-[#02DB81] hover:text-white transition-all shadow-sm"
          >
            <FaChevronLeft className="mr-2" /> Previous
          </button>
        )}

        {/* Render Pagination Buttons */}
        {renderPaginationButtons()}

        {/* Next Button */}
        {currentPage < totalPages && (
          <button
            onClick={handleNextPage}
            className="flex items-center px-3 py-1.5 hover:bg-[#02DB81] rounded-md text-sm bg-white border border-gray-300 text-gray-700 hover:text-white  transition-all shadow-sm"
          >
            Next <FaChevronRight className="ml-2 " />
          </button>
        )}
      </div>
    </section>
  );
};

export default Portfolio;