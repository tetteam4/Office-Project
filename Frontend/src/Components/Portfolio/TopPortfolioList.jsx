import React, { useState } from "react";
import TopPortfolioCard from "./TopPortfolioCard";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TopPortfolioList = ({ Portfolio_Data }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const cardsPerPage = 4; // Number of cards to display per page

  // Filter projects with "top" rating
  const topProjects = Portfolio_Data.filter(
    (project) => project.rating?.top === true
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(topProjects.length / cardsPerPage);

  // Get the cards for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = topProjects.slice(indexOfFirstCard, indexOfLastCard);

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
          className="px-2 py-1 text-xs rounded-md border-gray-300 font-medium bg-white text-gray-700 cursor-default"
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

    // Add "..." if currentPage is less than totalPages - 3 (to avoid overlapping with the last two pages)
    if (currentPage < totalPages - 3) {
      buttons.push(
        <button
          key="ellipsis-end"
          className="px-2 py-1 text-xs rounded-md border-gray-300 font-medium bg-white text-gray-700 cursor-default"
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
    }

    return buttons;
  };

  return (
    <section className="max-w-7xl my-10 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Top Website Design Examples</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {currentCards.map((project) => (
          <TopPortfolioCard
            key={project.id}
            port={project}
            onClick={() =>
              navigate(
                `/portfolio/${encodeURIComponent(
                  project.name.replace(/\s+/g, "-").toLowerCase()
                )}`,
                {
                  state: { port: project },
                }
              )
            }
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
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
              className="flex items-center px-3 py-1.5 hover:bg-[#02DB81] rounded-md text-sm bg-white border border-gray-300 text-gray-700 hover:text-white transition-all shadow-sm"
            >
              Next <FaChevronRight className="ml-2" />
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default TopPortfolioList;