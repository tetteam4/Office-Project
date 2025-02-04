import React from "react";
import PortfolioCard from "./PortfolioCard"; // Assuming you have a PortfolioCard component

const LatestPortfolioWork = ({ Portfolio_Data }) => {
  // Sort projects by date (assuming each project has a 'date' property)
  const sortedProjects = [...Portfolio_Data].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Get the latest three projects
  const latestProjects = sortedProjects.slice(0, 3);

  return (
    <section className="max-w-7xl my-10 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Latest Works</h2>
      <div className="grid grid-cols-3 gap-5">
        {latestProjects.map((project, index) => (
          <PortfolioCard key={index} port={project} />
        ))}
      </div>
    </section>
  );
};

export default LatestPortfolioWork;
