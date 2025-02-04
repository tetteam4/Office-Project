import React , {useEffect} from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from './Breadcrumb';
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
    <div>
        <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-[65%] lg:w-[65%] w-full h-fit border lg:px-10 px-5 rounded-md">
          <div className="h-auto border-b-2 rounded-xl p-5">
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
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
    </div>
  )
}

export default PortfolioDetialsPage
