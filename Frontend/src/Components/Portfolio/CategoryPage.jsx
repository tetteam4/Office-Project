import React from "react";
import { useParams , useNavigate } from "react-router-dom";
import { Portfolio_Data } from "./portfiliodata";// Import your data
import PortfolioCard from "./PortfolioCard";

const CategoryPage = () => {
  const { categoryName } = useParams(); // Extract the category name from the URL
 const navigate = useNavigate();
  // Filter projects based on the category
  const filteredProjects =
    categoryName === "All"
      ? Portfolio_Data
      : Portfolio_Data.filter((project) => project.category === categoryName);

  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      <h1 className="text-2xl font-bold mb-6">Projects in {categoryName}</h1>
      <div className="grid grid-cols-3 gap-5">
        {filteredProjects.map((project, index) => (
          <PortfolioCard key={index} port={project} onClick={() =>
            navigate(
              `/portfolio/${encodeURIComponent(
                project.name.replace(/\s+/g, "-").toLowerCase()
              )}`,
              {
                state: { port: project },
              }
            )
          } />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;