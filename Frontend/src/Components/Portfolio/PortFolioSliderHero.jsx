import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination ,Autoplay } from 'swiper/modules';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { motion } from 'framer-motion';

const PortFolioSliderHero = ({ Portfolio_Data }) => {
    const navigate = useNavigate();
  return (
    <div className="w-full  h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        grabCursor={true}
        className="h-full"
      >
        {Portfolio_Data.map((port, index) => (
          <SwiperSlide  onClick={() =>
            navigate(
              `/portfolio/${encodeURIComponent(
                port.name.replace(/\s+/g, "-").toLowerCase()
              )}`,
              {
                state: { port: port },
              }
            )
          } key={index}>
            <div className="w-full h-full flex flex-col items-center justify-center">
              {/* Card Container */}
              <motion.div
                className="relative w-full border cursor-pointer h-[270px] overflow-hidden group"
                whileHover="hover"
                initial="initial"
                exit="exit"
              >
                {/* Project Image */}
                <img
                  src={port.images.laptop}
                  alt={port.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay Layer */}
                <motion.div
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-[#02DB81] bg-opacity-30"
                ></motion.div>

                {/* Name Section (Animate from bottom to top) */}
                <motion.div
                  variants={{
                    initial: { y: 100, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                    exit: { y: 100, opacity: 0 },
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute bottom-0 left-0 w-full bg-[#02DB81] bg-opacity-70 text-white font-semibold p-4 text-center"
                >
                  {port.name}
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
       {/* Navigation Buttons */}
       <div className="button-prev-slide cursor-pointer hidden md:flex w-[40px] h-[40px] items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 -left-5 z-20 bg-white shadow-md">
            <MdArrowBackIos />
          </div>
          <div className="button-next-slide hidden cursor-pointer md:flex w-[40px] h-[40px] items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 -right-5 z-20 bg-white shadow-md">
            <MdArrowForwardIos />
          </div>
    </div>
  );
};

export default PortFolioSliderHero;