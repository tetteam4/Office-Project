import React, { useState } from "react";

const Tet_Detials = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className=" lg:max-w-6xl mx-auto grid  bg-white grid-cols-1 md:grid-cols-2 gap-x-16  lg:h-[90vh] py-10">
      {/* First Section: Story about Tet Company */}
      <div className="mb-10 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-4">TET , In one Look</h2>
        <p className="text-lg text-justify text-gray-700 mt-5">
          Tet Company has been a leader in innovative solutions, offering
          cutting-edge services to help businesses thrive in the digital world.
          With expertise in UI/UX design, server management, and digital
          marketing, we have successfully helped companies grow and achieve
          their goals. Tet Company has been a leader in innovative solutions,
          offering cutting-edge services to help businesses thrive in the
          digital world. With expertise in UI/UX design, server management, and
          digital marketing, we have successfully helped companies grow and
          achieve their goals.
        </p>
        <div className="flex justify-end mt-5">
          <button className="border px-6 py-2 rounded-full hover:bg-gray-300 border-gray-500">
            All Services
          </button>
        </div>
      </div>

      {/* Second Section: Services */}
      <div className="flex flex-col justify-center">
        {/* List of Services */}
        <div className="">
          {[
            {
              title: "Web Development",
              content:
                "We specialize in creating intuitive and engaging interfaces that improve user interaction We specialize in creating intuitive and engaging interfaces that improve user interaction.",
            },
            {
              title: "UI / UX",
              content:
                "We specialize in creating intuitive and engaging interfaces that improve user interaction.",
            },

            {
              title: "Server & Domain",
              content:
                "Our team provides fast, secure server hosting and domain registration services.",
            },

            {
              title: "Google Ads",
              content:
                "Our experts create custom Google Ads campaigns to drive traffic and conversions.",
            },

            {
              title: "SEO Services",
              content:
                "Our SEO strategies improve your website's ranking, driving more organic traffic.",
            },
          ].map((item, index) => (
            <div key={index} className=" border-gray-300 rounded-lg">
              {/* Collapsible Button */}
              <button
                onClick={() => handleToggle(index)}
                className="w-full px-6 py-3 text-left border-b hover:bg-gray-200 rounded-t-lg font-semibold flex justify-between items-center"
              >
                <span className="text-lg text-gray-800">{item.title}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openItem === index ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Collapsible Content */}
              {openItem === index && (
                <div className="px-6 py-4 bg-gray-100 border-b-2 text-gray-700">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tet_Detials;
