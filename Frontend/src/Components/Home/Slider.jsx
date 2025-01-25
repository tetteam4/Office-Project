import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const services = [
    {
      title: "Web Development",
      content:
        "We specialize in creating intuitive and engaging interfaces that improve user interaction.",
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
  ];

  return (
    <div className="w-full group mt-5 relative">
      <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 4000 }}
        loop
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        grabCursor={true}
        className="overflow-hidden shadow-lg cursor-pointer"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-700 text-lg">{service.content}</p>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="button-next-slide group-hover:flex hidden w-[40px] h-[40px] items-center justify-center rounded-full absolute right-10 z-20 bottom-10 bg-white shadow-md">
          <MdArrowForwardIos />
        </div>
        <div className="button-prev-slide group-hover:flex hidden w-[40px] h-[40px] items-center justify-center rounded-full absolute left-10 z-20 bottom-10 bg-white shadow-md">
          <MdArrowBackIos />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
