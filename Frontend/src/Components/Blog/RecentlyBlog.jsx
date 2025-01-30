import React from "react";
import { Blog_Data } from "./blogdeta";
import BlogCard from "./BlogCard";
const RecentlyBlog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 w-full ">
      {Blog_Data.map((data, index) => (
        <BlogCard data={data} key={index} />
      ))}
    </div>
  );
};

export default RecentlyBlog;
