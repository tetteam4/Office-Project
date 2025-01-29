import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import lap1 from "../../assets/website.png";
import lap2 from "../../assets/web2.jpg";
import lap3 from "../../assets/web3.png";
import img1 from "../../assets/mobile.png";
import img3 from "../../assets/mobile3.png";
import img2 from "../../assets/mobile2.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PortfolioHome = () => {
  const projects = [
    {
      id: 1,
      category: "Web Development",
      name: "E-commerce Platform",
      laptopImage: lap1,
      mobileImage: img1,
    },
    {
      id: 2,
      category: "UI/UX Design",
      name: "Portfolio Website",
      laptopImage: lap2,
      mobileImage: img2,
    },
    {
      id: 3,
      category: "Software Solution",
      name: "CRM System",
      laptopImage: lap3,
      mobileImage:img3,
    },
  ];

  const [activeProject, setActiveProject] = useState(projects[0].name);

  return (
    <div className="max-w-7xl mx-auto  px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Website Design Portfolio
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        loop
        grabCursor={true}
        onSlideChange={(swiper) =>
          setActiveProject(projects[swiper.realIndex].name)
        } 
        className="w-full"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative border-2 border-gray-200 p-1 rounded-lg shadow-2xl w-[400px] h-[300px] md:w-[650px] md:h-[400px]">
                  <img
                    src={project.laptopImage}
                    alt={project.name}
                    className="w-full h-full"
                  />
                </div>
                <div className="relative border-2 p-1 border-gray-200 rounded-lg shadow-lg w-[150px] h-[300px] md:w-[220px] md:h-[400px]">
                  <img
                    src={project.mobileImage}
                    alt={project.name}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination, Project Name, and View More Button in One Line */}
      <div className="grid grid-cols-3 place-content-center  items-center w-[80%] mx-auto px-5 mt-4">
        {/* Custom Pagination */}
        <div className="custom-pagination min-w-[100px]  flex gap-1"></div>

        {/* Project Name */}
        <div className="   px-4 py-2 text-center items-center flex gap-x-1.5">
          <span className="font-semibold text-lg">Project :</span>
          <span>{activeProject}</span>
        </div>

        {/* View More Button */}
        <div className="px-4 py-2  flex items-center justify-end">
          <button className="relative py-2.5 px-5 rounded-full text-white transition-transform duration-300  bg-[#003871] hover:scale-105  border-transparent group">
            <span className="absolute inset-0 w-full h-full rounded-full border-2  border-[#02DB81] animate-border hidden group-hover:block"></span>
            <span className="relative z-10">View More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHome;
