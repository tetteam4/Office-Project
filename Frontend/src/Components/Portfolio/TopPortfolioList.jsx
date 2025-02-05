import React from "react";

import TopPortfolioCard from "./TopPortfolioCard";
import { useNavigate } from "react-router-dom";

const TopPortfolioList = ({ Portfolio_Data }) => {
    const navigate = useNavigate();
  // Filter projects with the "top" rating
   // Filter projects with "top" rating
   const topProjects = Portfolio_Data.filter(
    (project) => project.rating?.top === true
  );

  return (
    <section className="max-w-7xl my-10 mx-auto">
         <h2 className="text-2xl font-bold mb-4">Top Website Design Examples</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {topProjects.map((project) => (
          <TopPortfolioCard key={project.id} port={project}  onClick={() =>
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
    </section>
  );
};

export default TopPortfolioList;
