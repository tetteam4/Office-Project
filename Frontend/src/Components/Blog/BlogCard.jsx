import React from "react";
import { RxArrowRight } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

const BlogCard = ({ data }) => {
  return (
    <div className="bg-gray-300 flex flex-col justify-between rounded-t-xl  h-[500px] w-[380px] shadow-xl">
      {/* Image */}
      <div>
        <img
          src={data.images[0]}
          alt={data.title}
          className="w-full  h-[200px] rounded-t-xl"
        />
      </div>
      <div className="text-gray-600 flex gap-4 px-4 items-center justify-between dark:text-gray-300 mr-6 text-sm">
        <div className="flex gap-x-2 items-center">
          <div className="border rounded-full bg-gray-600 h-8 w-8 p-1 flex justify-center items-center">
            <FaUser size={20} className="text-gray-50" />
          </div>
          <p className="text-lg font-bold">TET</p>
        </div>
        <div className="">
          <span className="text-lg">{data.date} </span>
        </div>
      </div>
      {/* Title and Description */}
      <div className="mt-1 space-y-5 px-4 ">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <p className="text-justify">
          {data.description.length > 150
            ? data.description.substring(0, 150) + "..."
            : data.description}
        </p>
      </div>

      {/* Read More Button with Animated Hover Effect */}
      <div className="mt-4 relative group cursor-pointer overflow-hidden">
        {/* Background animation effect */}
        <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#02DB81] to-[#2d9469] transition-all duration-500 group-hover:w-full"></div>

        {/* Button Content */}
        <div className="relative py-3 px-4 flex items-center  justify-between border z-10 transition-all duration-500 group-hover:text-white">
          <span>Read Article</span>
          <RxArrowRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
