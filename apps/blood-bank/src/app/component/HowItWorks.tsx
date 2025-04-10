// 'use client'
// import React from "react";
// import { motion } from "framer-motion";
// import { FaUserCheck, FaHeartbeat, FaHandHoldingHeart } from "react-icons/fa";

// const steps = [
//   {
//     icon: <FaUserCheck size={40} className="text-red-600" />,
//     title: "Register as a Donor",
//     description: "Sign up and provide your details to become a donor.",
//   },
//   {
//     icon: <FaHeartbeat size={40} className="text-red-600" />,
//     title: "Get a Health Checkup",
//     description: "Ensure you are eligible and in good health to donate.",
//   },
//   {
//     icon: <FaHandHoldingHeart size={40} className="text-red-600" />,
//     title: "Donate & Save Lives",
//     description: "Complete your donation and help those in need.",
//   },
// ];

// const HowItWorks = () => {
//   return (
//     <section className="py-16 bg-gray-100 text-gray-900 text-center">
//       <motion.h2 
//         className="text-4xl font-bold mb-8"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         How It Works
//       </motion.h2>
//       <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
//         {steps.map((step, index) => (
//           <motion.div 
//             key={index} 
//             className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.3 }}
//           >
//             <div className="mb-4">{step.icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//             <p className="text-gray-600">{step.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;



'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaHeartbeat,
  FaHandHoldingHeart,
  FaTint,
  FaInfoCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserCheck size={24} />,
    title: "Register as a Donor",
    description:
      "Sign up and provide your details to become a blood donor. Registration takes only a few minutes.",
  },
  {
    icon: <FaHeartbeat size={24} />,
    title: "Get a Health Checkup",
    description:
      "A mini check-up includes your blood pressure, hemoglobin level, and more to ensure you're eligible to donate.",
  },
  {
    icon: <FaHandHoldingHeart size={24} />,
    title: "Donate & Save Lives",
    description:
      "Donate safely. One unit of blood can save up to 3 lives.",
  },
];

const stats = [
  {
    icon: <FaTint size={24} className="text-red-500" />,
    title: "Every 2 Seconds",
    fact: "Someone in India needs blood.",
  },
  {
    icon: <FaInfoCircle size={24} className="text-red-500" />,
    title: "5 Crore Units Needed",
    fact: "But only 2.5 crore units are available annually, creating a critical shortage.",
  },
  {
    icon: <FaHeartbeat size={24} className="text-red-500" />,
    title: "30 Million+ Transfusions",
    fact: "Done annually to support surgeries, accidents, cancer patients, and more.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-20 px-4">
      {/* Title */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <p className="text-gray-600 mt-4 text-lg">
          Become a hero in just 3 simple steps.
        </p>
      </div>

      {/* Steps Timeline */}
      <div className="max-w-4xl mx-auto space-y-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center md:items-start gap-6`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Icon Circle */}
            <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-md">
              {step.icon}
            </div>

            {/* Content */}
            <div className="bg-gray-50 rounded-xl p-6 shadow w-full md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-24">
        <motion.h3
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Did You Know?
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              <div className="mb-3">{stat.icon}</div>
              <h4 className="text-lg font-bold">{stat.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{stat.fact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
