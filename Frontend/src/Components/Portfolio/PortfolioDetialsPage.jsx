import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import CategoryList from "./CategoryList";
import RelatedCategoryPortfolio from "./RelatedCategoryPortfolio";
import { MdDashboard, MdRoomService, MdSettings } from "react-icons/md";
const PortfolioDetialsPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const port = location.state?.port;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!port) {
    return (
      <div id="postdetails" className="text-center mt-10">
        <h1 className="text-2xl font-bold">No Blog Data Available</h1>
        <button
          onClick={() => navigate("/portfolio")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back to Blogs
        </button>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-5">
        <div className="lg:w-[25%] border bg-green-100/95 h-full">
          <CategoryList />
        </div>
        <div className="md:w-[75%] lg:w-[75%]  w-full h-fit mt-5 p-2  rounded-md">
          <div className="h-auto ">
            <h1 className="text-2xl font-extrabold mb-5 text-gray-900 dark:text-white ">
              {port.name}
            </h1>
          </div>
          <div className="">
            <p className="text-justify text-gray-600 text-base">
              {port.description.projectOverview}
            </p>
            <p className="text-gray-600">
              For more information about{" "}
              <span className="font-bold text-green-600">
                {port.category} website design
              </span>{" "}
              , contact Tech Elevate Team consultants.
            </p>
            <p className="mt-5 text-black font-semibold">
              In the image below, you can see the overall layout of the{" "}
              {port.name} website and the elements used in its design.
            </p>
          </div>
          <div className="w-full flex justify-center items-center my-10">
            <button class="cursor-pointer font-semibold rounded-md overflow-hidden relative z-100 border border-green-500 group px-4 py-2">
              <span class="relative z-10 text-green-500 group-hover:text-white text-md duration-300">
                View Website
              </span>
              <span class="absolute w-full h-full bg-[#02DB81] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
              <span class="absolute w-full h-full bg-[#02DB81]  -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </button>
          </div>
          <div className="relative w-full mt-3 h-[300px] md:h-[300px]  lg:h-[400px] rounded-md overflow-hidden mb-6">
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="relative border rounded-md border-gray-200   shadow-2xl w-[400px] h-[300px] md:w-[650px] md:h-[400px]">
                  <img
                    src={port.images.laptop}
                    alt={port.name}
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="relative border border-gray-200 rounded-md shadow-lg w-[150px] h-[300px] md:w-[250px] md:h-[400px]">
                  <img
                    src={port.images.log}
                    alt={port.name}
                    className="w-full h-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 w-full h-auto">
            <h3 className="text-center text-xl font-bold">{port.name}</h3>
            {/* dashboard image */}
            <div className="mt-5 border-t border-gray-500">
              <div className="mt-5 flex justify-between text-gray-700 items-center ">
                <span className="text-md font-bold">Dashboard Design</span>
                <span>
                  <MdDashboard size={32} />
                </span>
              </div>
              <div className="flex items-center justify-center mt-10">
                <div className="relative border rounded-md border-gray-200   shadow-2xl w-[400px] h-[300px] md:w-[750px] md:h-[400px]">
                  <img
                    src={port.images.laptop}
                    alt={port.name}
                    className="w-full h-full rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12">
            <p className="text-justify text-gray-600 text-base">
              {port.description.projectOverview}
            </p>
            </div>
            <div className="mt-10 border-t border-gray-500">
            <div className="mt-5 flex justify-between text-gray-700 items-center ">
                <span className="text-md font-bold">Technology</span>
                <span>
                  <MdSettings size={32} />
                </span>
              </div>
            </div>
          </div>
          {/* Add RelatedPosts component */}
        </div>
      </div>
      <RelatedCategoryPortfolio
        category={port.category}
        currentPostId={port.id}
      />
    </div>
  );
};

export default PortfolioDetialsPage;
