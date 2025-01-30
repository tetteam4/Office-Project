import React from "react";
import RecentlyBlog from "../Blog/RecentlyBlog";
import Button from "../../Utilities/Button";
const RecentlyHomeBlog = () => {
  return (
    <div className=" h-auto bg-secondary p-5">
      <div className="text-center space-y-4">
        <p className="text-3xl font-semibold">Articles & Events</p>
        <p className="text-xl text-gray-600">
          The latest articles, insights, and events of TET (Tech Elevate Team)
        </p>
      </div>
      <div className="mt-10 w-full border">
        <RecentlyBlog />
      </div>
      <div className="flex justify-center max-w-7xl mx-auto mt-5 px-10">
      <Button text="Read More" onClick={() => console.log("Button Clicked!")} />
    </div>
    </div>
  );
};

export default RecentlyHomeBlog;
