'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaUserCheck, FaHeartbeat, FaHandHoldingHeart } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserCheck size={40} className="text-red-600" />,
    title: "Register as a Donor",
    description: "Sign up and provide your details to become a donor.",
  },
  {
    icon: <FaHeartbeat size={40} className="text-red-600" />,
    title: "Get a Health Checkup",
    description: "Ensure you are eligible and in good health to donate.",
  },
  {
    icon: <FaHandHoldingHeart size={40} className="text-red-600" />,
    title: "Donate & Save Lives",
    description: "Complete your donation and help those in need.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-900 text-center">
      <motion.h2 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        How It Works
      </motion.h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
