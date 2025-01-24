import React from "react";
import hero from "../../assets/hero.mp4";
import { Link } from "react-router-dom";

const Hero_Home = () => {
  return (
    <div className="relative w-full h-[81vh]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
        <h1 className="text-4xl md:text-4xl font-bold mb-6">
          Crafting Modern Websites That Empower Your Business
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Website design, UI/UX design, and digital marketing.
        </p>
        <Link
          to="/services"
          className="px-7 py-3 bg-[#02DB81] hover:bg-[#2d9469] text-white rounded-full font-semibold transition shadow-md duration-200 hover:shadow-[1px_5px_20px_2px_rgba(2,219,129,0.5)]"
        >
          Discover Our Services
        </Link>
      </div>
    </div>
  );
};

export default Hero_Home;
