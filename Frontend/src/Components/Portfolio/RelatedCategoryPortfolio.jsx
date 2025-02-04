import React from "react";
import { Portfolio_Data } from "./portfiliodata"; // Import your data
import PortfolioCard from "./PortfolioCard"; // Reuse the PortfolioCard component
import { useNavigate } from "react-router-dom";

const RelatedCategoryPortfolio = ({ category, currentPostId }) => {
  const navigate = useNavigate();

  console.log("Category:", category); // Debugging: Check the category
  console.log("Current Post ID:", currentPostId); // Debugging: Check the currentPostId

  // Filter related projects
  const relatedProjects = Portfolio_Data.filter(
    (project) =>
      project.category === category && // Match the category
      project.id !== currentPostId // Exclude the current project
  );

  console.log("Related Projects:", relatedProjects); // Debugging: Check the filtered projects

  if (relatedProjects.length === 0) {
    return <p className="text-gray-600">No related projects found.</p>;
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {relatedProjects.map((project) => (
          <PortfolioCard
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
    </div>
  );
};

export default RelatedCategoryPortfolio;