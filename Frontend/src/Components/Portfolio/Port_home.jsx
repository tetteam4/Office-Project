import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import lap_frame from "../../../public/frame/laptop_frame.png";
import mob_frame from "../../../public/frame/mobile_frame.png";
import img from "../../assets/img.jpg";
import img1 from '../../assets/website.png'

const projects = [
  {
    id: 1,
    category: "Web Development",
    name: "E-commerce Platform",
    laptopImage: img1,
    mobileImage: img,
  },
];

const Port_home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="h-[320px] md:h-[80vh] border container mx-auto relative group flex flex-col items-center justify-center">
      {/* Arrows */}
      <div className="group-hover:block absolute top-[50%] left-10 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevImage} size={30} />
      </div>
      <div className="group-hover:block absolute top-[50%] right-10 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextImage} size={30} />
      </div>

      {/* Image Frames */}
      <div className="relative w-full max-w-6xl flex justify-center gap-10">
        {/* Laptop Frame */}
        <div className="relative w-[800px] h-[500px] flex items-center justify-center">
          <img src={lap_frame} alt="Laptop Frame" className="absolute z-10 w-full h-full" />
          <img
            src={projects[currentIndex].laptopImage}
            className="absolute w-[78%] h-[78%] top-[12%] left-[11%] object-cover rounded-lg"
          />
        </div>

        {/* Mobile Frame */}
        <div className="relative w-[400px] h-[500px] flex items-center justify-center">
          <img src={mob_frame} alt="Mobile Frame" className="absolute z-10 w-full h-full" />
          <img
            src={projects[currentIndex].mobileImage}
            className="absolute w-[61%] h-[85%] top-[8%] left-[20%] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex absolute bottom-9 w-full justify-center py-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`mx-1 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-5 h-2 bg-yellow-300"
                : "w-3 h-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Port_home;
