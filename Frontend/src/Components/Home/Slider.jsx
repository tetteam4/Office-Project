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
      image: "https://images.unsplash.com/photo-1622838320000-4b3b3b3b3b3b",
      text: "The team exceeded our expectations, offering innovative solutions and incredible support!",
      customer: "Customer A",
    },
    {
      image: "https://images.unsplash.com/photo-1622838320000-4b3b3b3b3b3b",
      text: "We’ve been working with them for years, and their service just gets better and better! We’ve been working with them for years, and their service just gets better and better!",
      customer: "Customer B",
    },
    {
      image: "https://images.unsplash.com/photo-1622838320000-4b3b3b3b3b3b",
      text: "A truly professional team that always delivers on time and with quality!",
      customer: "Customer C",
    },
    {
      image: "https://images.unsplash.com/photo-1622838320000-4b3b3b3b3b3b",
      text: "The best decision we've made for our business growth!",
      customer: "Customer D",
    },
  ];

  return (
    <div className=" max-w-6xl mx-auto border rounded-lg bg-[#f0f4ff] shadow-lg group mt-6">
      <div className=" h-14 flex border-b-2 mx-10 ">
        <p className="text-xl font-semibold h-full  content-center  ">
          What our business partners say about our team
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={50}
        slidesPerView={2}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        grabCursor={true}
        className=" shadow-lg cursor-pointer"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="h-[250px] flex flex-col  justify-center items-start  px-8">
              <div className="flex items-center gap-x-5 ">
                <img
                  src={testimonial.image}
                  alt=""
                  className="h-[90px] w-[90px] "
                />
                <div className=" italic  text-gray-600 space-y-2 ">
                  <p className="text-start text-lg">{testimonial.customer}</p>
                  <p className="text-justify text-sm">
                    {testimonial.text.length > 140
                      ? `${testimonial.text.substring(0, 137)}...`
                      : testimonial.text}
                  </p>
                </div>
              </div>
            </div>
         
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        
        <div className="button-next-slide group-hover:flex hidden w-[40px] h-[40px] items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 left-10 bottom-10 z-20 bg-white shadow-md">
          
          <MdArrowBackIos />
        </div>
        <div className="button-prev-slide group-hover:flex hidden w-[40px] h-[40px] items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 right-1 z-20 bottom-10 bg-white shadow-md">
        <MdArrowForwardIos />
        </div>
      </Swiper>
    </div>
  );
};

export default CustomerSlider;
