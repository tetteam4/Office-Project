import React from "react";
import { RxArrowRight } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

const BlogCard = ({ data }) => {
  return (
    <div className="bg-white flex flex-col justify-between rounded-t-xl h-[500px] w-[370px] shadow-xl">
      {/* Image Section */}
      <div className="h-[200px]">
        <img
          src={data.images[0]}
          alt={data.title}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>

      {/* User & Date Section */}
      <div className="text-gray-600 flex gap-4 px-4  items-center justify-between dark:text-gray-300 text-sm h-[50px]">
        <div className="flex gap-x-2 items-center">
          <div className="border rounded-full bg-gray-600 h-8 w-8 p-1 flex justify-center items-center">
            <FaUser size={20} className="text-gray-50" />
          </div>
          <p className="text-lg font-bold">TET</p>
        </div>
        <div>
          <span className="text-lg">{data.date}</span>
        </div>
      </div>

      {/* Title and Description Section */}
      <div className="px-4 h-[160px]  overflow-hidden">
        <h3 className="text-md font-semibold h-[40px] overflow-hidden text-ellipsis">
          {data.title}
        </h3>
        <p className=" text-justify text-md h-[110px] mt-4 overflow-hidden text-ellipsis">
        {data.description.length > 130
            ? data.description.substring(0, 130) + "..."
            : data.description}
        </p>
      </div>

      {/* Read More Button */}
      <div className="relative group cursor-pointer  overflow-hidden h-[50px]">
        {/* Background animation effect */}
        <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#02DB81] to-[#2d9469] transition-all duration-500 group-hover:w-full"></div>

        {/* Button Content */}
        <div className="relative py-3 px-4 flex items-center justify-between border z-10 transition-all duration-500 group-hover:text-white">
          <span>Read Article</span>
          <RxArrowRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
