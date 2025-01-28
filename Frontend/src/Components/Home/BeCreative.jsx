import React from 'react';
import { FaUsers, FaHeadset, FaRegHandshake, FaRegStar, FaChartLine } from 'react-icons/fa';

import Slider from './Slider';

const BeCreativeAndDistinct = () => {
  return (
    <div className="text-center py-12 px-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Be Creative and Distinct</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        At the heart of our company, we believe in the power of creativity and distinction. We strive to offer solutions
        that not only meet the needs of today but pave the way for tomorrow. Our team is committed to delivering outstanding
        service while maintaining a focus on innovation. Join us in creating a future that stands out!
      </p>

      <div className=" mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 mb-12">
  <div className="flex flex-col items-center">
    <FaUsers size={40} className="text-blue-500 mb-4" />
    <h3 className="text-md font-semibold text-gray-700">1 Years of Customer Loyalty</h3>
  </div>
  <div className="flex flex-col items-center">
    <FaHeadset size={40} className="text-green-500 mb-4" />
    <h3 className="text-md font-semibold text-gray-700">Professional and Expert Team</h3>
  </div>
  <div className="flex flex-col items-center">
    <FaRegHandshake size={40} className="text-yellow-500 mb-4" />
    <h3 className="text-md font-semibold text-gray-700">24/7 Customer Support</h3>
  </div>
  <div className="flex flex-col items-center">
    <FaRegStar size={40} className="text-purple-500 mb-4" />
    <h3 className="text-md font-semibold text-gray-700">Sales Solutions</h3>
  </div>
  <div className="flex flex-col items-center">
    <FaChartLine size={40} className="text-red-500 mb-4" />
    <h3 className="text-md  font-semibold text-gray-700">Full Service Solutions</h3>
  </div>
</div>


      <div className="max-w-5xl mx-auto">
        <Slider />
      </div>
    </div>
  );
};

export default BeCreativeAndDistinct;
