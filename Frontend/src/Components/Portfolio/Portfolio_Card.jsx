import React from "react";
import { useNavigate } from "react-router-dom";

const Portfolio_Card = ({ port }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() =>
        navigate(`/portfolio/${encodeURIComponent(port.name.replace(/\s+/g, "-").toLowerCase())}`)
      }
    >
      <img
        src={port.images.laptop}
        alt={port.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{port.name}</h3>
        <p className="text-sm text-gray-600">{port.category}</p>
      </div>
    </div>
  );
};

export default Portfolio_Card;