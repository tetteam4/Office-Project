import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomerSlider = () => {
  const testimonials = [
    {
      text: "The team exceeded our expectations, offering innovative solutions and incredible support!",
      customer: "Customer A",
    },
    {
      text: "We’ve been working with them for years, and their service just gets better and better!",
      customer: "Customer B",
    },
    {
      text: "A truly professional team that always delivers on time and with quality!",
      customer: "Customer C",
    },
    {
      text: "The best decision we've made for our business growth!",
      customer: "Customer D",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto relative group mt-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
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
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="h-[400px] flex items-center justify-center px-8">
              <p className="text-lg italic text-gray-600 text-center">
                "{testimonial.text}" - <span className="font-bold">{testimonial.customer}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="button-next-slide group-hover:flex hidden w-[40px] h-[40px] items-center justify-center rounded-full absolute right-10 z-20 bottom-10 bg-white shadow-md">
          <MdArrowForwardIos />
        </div>
        <div className="button-prev-slide group-hover:flex hidden w-[40px] h-[40px] items-center justify-center rounded-full absolute right-24 z-20 bottom-10 bg-white shadow-md">
          <MdArrowBackIos />
        </div>
      </Swiper>
    </div>
  );
};

export default CustomerSlider;
