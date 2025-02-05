import React from "react";
import { motion } from "framer-motion";

const TopPortfolioCard = ({ port, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="relative w-[300px] border cursor-pointer h-[300px] overflow-hidden group"
      whileHover="hover"
      initial="initial"
      exit="exit"
    >
      {/* Image */}
      <img
        src={port.images.laptop}
        alt={port.name}
        className="w-full h-full object-cover transition-all duration-300 filter grayscale group-hover:grayscale-0"
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
    </motion.div>
  );
};

export default TopPortfolioCard;