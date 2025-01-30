import React from "react";
import RecentlyBlog from "../Blog/RecentlyBlog";

const RecentlyHomeBlog = () => {
  return (
    <div className="max-w-7xl mx-auto h-auto p-5">
      <div className="text-center space-y-4">
        <p className="text-3xl font-semibold">Articles & Events</p>
        <p className="text-xl text-gray-600">
          The latest articles, insights, and events of TET (Tech Elevate Team)
        </p>
      </div>
      <div className="mt-10 w-full">
        <RecentlyBlog />
      </div>
    </div>
  );
};

export default RecentlyHomeBlog;
