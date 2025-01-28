import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PortfolioHome = () => {
  const projects = [
    {
      id: 1,
      category: "Web Development",
      name: "E-commerce Platform",
      laptopImage: "https://via.placeholder.com/600x400?text=Laptop+Preview",
      mobileImage: "https://via.placeholder.com/200x400?text=Mobile+Preview",
    },
    {
      id: 2,
      category: "UI/UX Design",
      name: "Portfolio Website",
      laptopImage: "https://via.placeholder.com/600x400?text=Laptop+Preview",
      mobileImage: "https://via.placeholder.com/200x400?text=Mobile+Preview",
    },
    {
      id: 3,
      category: "Software Solution",
      name: "CRM System",
      laptopImage: "https://via.placeholder.com/600x400?text=Laptop+Preview",
      mobileImage: "https://via.placeholder.com/200x400?text=Mobile+Preview",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Works</h2>
      <Swiper
        modules={[ Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        
        className="h-auto"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="flex flex-col items-center gap-8">
              {/* Category Name */}
              <p className="text-lg font-semibold text-gray-500">
                {project.category}
              </p>

              {/* Device Previews */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Laptop Preview */}
                <div className="relative border-2 border-gray-200 rounded-lg shadow-lg w-[400px] h-[300px] md:w-[600px] md:h-[400px]">
                  <img
                    src={project.laptopImage}
                    alt={`${project.name} Laptop`}
                    className="rounded-lg w-full h-full object-cover"
                  />
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded-md">
                    Laptop View
                  </span>
                </div>

                {/* Mobile Preview */}
                <div className="relative border-2 border-gray-200 rounded-lg shadow-lg w-[150px] h-[300px] md:w-[200px] md:h-[400px]">
                  <img
                    src={project.mobileImage}
                    alt={`${project.name} Mobile`}
                    className="rounded-lg w-full h-full object-cover"
                  />
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded-md">
                    Mobile View
                  </span>
                </div>
              </div>

              {/* Project Name */}
              <h3 className="text-2xl font-bold">{project.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioHome;
