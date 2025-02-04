import React from "react";
import { motion } from "framer-motion";

const PortfolioCard = ({ port, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="relative w-[400px] border cursor-pointer h-[270px] overflow-hidden group"
      whileHover="hover"
      initial="initial"
      exit="exit"
    >
      {/* Image */}
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
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full bg-[#02DB81] bg-opacity-70 text-white font-semibold p-4 text-center"
      >
        {port.name}
      </motion.div>
    </motion.div>
  );
};

export default PortfolioCard;
