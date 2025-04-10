// 'use client'
// import React from "react";
// import { motion } from "framer-motion";

// const AboutBloodDonation = () => {
//   return (
//     <section className="py-16 bg-gray-100 text-gray-900 text-center px-6">
//       <motion.div 
//         className="max-w-4xl mx-auto"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-4xl font-bold mb-6">About Blood Donation</h2>
//         <p className="text-lg mb-6">
//           Blood donation is a simple yet powerful act that can save lives. Every drop counts, 
//           and your contribution can make a significant impact on those in need.
//         </p>
//         <div className="grid md:grid-cols-3 gap-6">
//           <motion.div 
//             className="p-6 bg-white rounded-lg shadow-md"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h3 className="text-xl font-semibold mb-3">Who Can Donate?</h3>
//             <p>Healthy individuals aged 18-65 with a weight above 50kg.</p>
//           </motion.div>
//           <motion.div 
//             className="p-6 bg-white rounded-lg shadow-md"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h3 className="text-xl font-semibold mb-3">Benefits</h3>
//             <p>Regular donation helps improve overall health and reduces heart disease risk.</p>
//           </motion.div>
//           <motion.div 
//             className="p-6 bg-white rounded-lg shadow-md"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h3 className="text-xl font-semibold mb-3">Donation Process</h3>
//             <p>Quick, safe, and painless, the donation process takes about 15 minutes.</p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default AboutBloodDonation;





'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  FaHandHoldingWater,
  FaHeartbeat,
  FaTint,
  FaRegSmileBeam,
  FaRegClock,
  FaHandsHelping,
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaHandHoldingWater size={28} className="text-red-600" />,
    title: 'Improves Heart Health',
    description: 'Regular blood donation can improve cardiovascular health and reduce harmful iron stores.',
  },
  {
    icon: <FaHeartbeat size={28} className="text-red-600" />,
    title: 'Stimulates Blood Cell Production',
    description: 'The body works to replenish blood loss, stimulating the production of new blood cells.',
  },
  {
    icon: <FaTint size={28} className="text-red-600" />,
    title: 'Balances Iron Levels',
    description: 'Helps maintain healthy iron levels, lowering the risk of hemochromatosis.',
  },
  {
    icon: <FaRegSmileBeam size={28} className="text-red-600" />,
    title: 'Mental Satisfaction',
    description: 'Knowing you’ve helped save lives can provide a sense of purpose and fulfillment.',
  },
  {
    icon: <FaRegClock size={28} className="text-red-600" />,
    title: 'Quick & Easy Process',
    description: 'The donation process is safe, simple, and takes less than an hour.',
  },
  {
    icon: <FaHandsHelping size={28} className="text-red-600" />,
    title: 'Community Impact',
    description: 'Your donation helps patients in your community and beyond.',
  },
];

const AboutBloodDonation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        type: 'spring',
        stiffness: 80,
      },
    }),
  };

  return (
    <section ref={ref} className="bg-gray-50 py-20 px-4">
      {/* Heading */}
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold">Why Donate Blood?</h2>

        {/* Animated red underline */}
        <motion.div
          className="h-1 w-24 bg-red-500 rounded-full mx-auto mt-2"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5 }}
          style={{ originX: 0 }}
        />

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Donating blood not only saves lives but also provides numerous health benefits to donors.
        </p>
      </motion.div>

      {/* Benefit Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center"
            custom={index}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <div className="flex justify-center mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutBloodDonation;
