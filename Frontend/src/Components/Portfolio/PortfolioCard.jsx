import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ port }) => {
  return (
    <div className="relative w-[400px] border h-[270px] overflow-hidden group">
      <img 
        src={port.images.laptop} 
        alt={port.name} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      
      {/* Overlay Layer */}
      {/* <motion.div 
        initial={{ opacity: 0 }} 
        whileHover={{ opacity: 1 }} 
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></motion.div> */}

      {/* Header Animation */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }} 
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {port.name}
      </motion.div>
    </div>
  );
};

export default PortfolioCard;
