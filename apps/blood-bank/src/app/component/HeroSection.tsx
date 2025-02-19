'use client'
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white px-4 overflow-hidden bg-gradient-to-r from-red-600 to-red-900">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div 
        className="relative z-10 max-w-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Donate Blood, Save Lives</h1>
        <p className="text-lg md:text-xl mb-6">Your one donation can save up to three lives. Join us in making a difference.</p>
        <div className="flex gap-4 justify-center">
          <motion.button 
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            whileHover={{ scale: 1.1 }}
          >
            Become a Donor
          </motion.button>
          <motion.button 
            className="bg-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
            whileHover={{ scale: 1.1 }}
          >
            Request Blood
          </motion.button>
        </div>
      </motion.div>
      <motion.div 
        className="absolute bottom-10 w-32 h-32 bg-white rounded-full shadow-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 bg-red-400 rounded-full opacity-50"
        animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 right-10 w-24 h-24 bg-red-300 rounded-full opacity-50"
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default HeroSection;
