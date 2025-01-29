import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import img from "../../assets/website.png";
import img1 from "../../assets/mobile.png";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PortfolioHome = () => {
  const projects = [
    {
      id: 1,
      category: "Web Development",
      name: "E-commerce Platform",
      laptopImage: img,
      mobileImage: img1,
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
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        autoplay={{ delay: 3000 }}
        loop
        grabCursor={true}
        className="h-auto border"
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
                <div className="relative border-2 border-gray-200 p-1 rounded-lg shadow-lg w-[400px] h-[300px] md:w-[650px] md:h-[400px]">
                  <img
                    src={project.laptopImage}
                    alt={`${project.name} Laptop`}
                    className="w-full h-full"
                  />
                </div>

                {/* Mobile Preview */}
                <div className="relative border-2 p-1 border-gray-200 rounded-lg shadow-lg w-[150px] h-[300px] md:w-[220px] md:h-[400px]">
                  <img
                    src={project.mobileImage}
                    alt={`${project.name} Mobile`}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Project Name */}
              <h3 className="text-2xl font-bold">{project.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination flex justify-center gap-2 mt-4"></div>

      {/* Custom Navigation Buttons */}
      <div className="button-next-slide flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white absolute right-10 bottom-10 z-20 cursor-pointer hover:bg-gray-900">
        <MdArrowForwardIos />
      </div>
      <div className="button-prev-slide flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white absolute left-10 bottom-10 z-20 cursor-pointer hover:bg-gray-900">
        <MdArrowBackIos />
      </div>
    </div>
  );
};

export default PortfolioHome;
