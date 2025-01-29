import React from "react";
import { Blog_Data } from "./blogdeta";
import BlogCard from "./BlogCard";
const RecentlyBlog = () => {
  return (
    <div className="grid grid-cols-3 gap-x-10">
      {Blog_Data.map((data, index) => (
        <BlogCard data={data} key={index} />
      ))}
    </div>
  );
};

export default RecentlyBlog;
