import React from "react";
import { motion } from "framer-motion";
import { Smile } from "lucide-react";

const WelcomeDashboard = ({ userName }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-6 bg-white shadow-lg rounded-2xl text-center max-w-md"
      >
        {/* Icon and Greeting */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Smile size={48} className="text-yellow-400 mx-auto" />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            Welcome, {userName}!
          </h1>
          <p className="text-gray-600 mt-2">
            We are glad to have you logged into your account.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WelcomeDashboard;
