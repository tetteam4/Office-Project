import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import CategoryList from "./CategoryList";
import RelatedCategoryPortfolio from "./RelatedCategoryPortfolio";
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
        <div className="md:w-[75%] lg:w-[75%] w-full h-fit border p-2  rounded-md">
          <div className="h-auto ">
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white ">
              {port.name}
            </h1>
          </div>

          <div className="relative w-full mt-3 h-[300px] md:h-[300px] lg:h-[500px] rounded-md overflow-hidden mb-6">
            <img
              src={port.images.laptop}
              alt={port.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
            {port.description.projectOverview}
          </p>

          {/* Add RelatedPosts component */}
        </div>
      </div>
      <RelatedCategoryPortfolio category={port.category} currentPostId={port.id} />
    </div>
  );
};

export default PortfolioDetialsPage;
