import React from "react";
import { Blog_Data } from "./blogdeta";
import BlogCard from "./BlogCard";
const RecentlyBlog = () => {
  return (
    <div className="max-w-6xl mx-auto grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {Blog_Data.map((data, index) => (
        <BlogCard data={data} key={index} />
      ))}
    </div>
  );
};

export default RecentlyBlog;
