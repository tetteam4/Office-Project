import React from "react";

const BlogCard = ({ data }) => {
  return (
    <div className="bg-gray-300 flex flex-col justify-between rounded-lg px-6 py-8 h-[550px] w-[400px] border ">
      {/* Image */}
      <div>
        <img src={data.images[0]} alt={data.title} className="rounded-lg w-full h-[200px]" />
      </div>

      {/* Title and Description */}
      <div className="mt-4 space-y-5">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <p className="text-justify">
          {data.description.length > 150 ? data.description.substring(0, 150) + "..." : data.description}
        </p>
      </div>

      {/* Date and Button */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <span>{data.date}</span>
        </div>
        <div>
          <button className="px-4 py-3 border rounded-full">Read More!</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
