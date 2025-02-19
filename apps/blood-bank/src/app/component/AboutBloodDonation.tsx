'use client'
import React from "react";
import { motion } from "framer-motion";

const AboutBloodDonation = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-900 text-center px-6">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-6">About Blood Donation</h2>
        <p className="text-lg mb-6">
          Blood donation is a simple yet powerful act that can save lives. Every drop counts, 
          and your contribution can make a significant impact on those in need.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            className="p-6 bg-white rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-3">Who Can Donate?</h3>
            <p>Healthy individuals aged 18-65 with a weight above 50kg.</p>
          </motion.div>
          <motion.div 
            className="p-6 bg-white rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <p>Regular donation helps improve overall health and reduces heart disease risk.</p>
          </motion.div>
          <motion.div 
            className="p-6 bg-white rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-3">Donation Process</h3>
            <p>Quick, safe, and painless, the donation process takes about 15 minutes.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutBloodDonation;
