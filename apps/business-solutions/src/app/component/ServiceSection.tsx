// import React from "react";
// import { FaLaptopCode, FaChartLine, FaUserShield, FaShieldAlt } from "react-icons/fa";

// const services = [
//   {
//     title: "IT & ITES Solutions",
//     description: "Empowering businesses with next-generation IT solutions, including software development, data science, and BPO services.",
//     icon: <FaLaptopCode className="text-4xl text-white" />,
//   },
//   {
//     title: "Finance & Accounting",
//     description: "Optimizing financial operations with bookkeeping, tax compliance, payroll management, and strategic risk assessment.",
//     icon: <FaChartLine className="text-4xl text-white" />,
//   },
//   {
//     title: "Insurance & Healthcare",
//     description: "Revolutionizing healthcare & insurance with policy processing, claims management, and fraud detection.",
//     icon: <FaUserShield className="text-4xl text-white" />,
//   },
//   {
//     title: "Cybersecurity & Ethical Hacking",
//     description: "Securing businesses with cutting-edge cybersecurity, penetration testing, and blockchain fraud prevention.",
//     icon: <FaShieldAlt className="text-4xl text-white" />,
//   },
// ];

// const ServiceSection = () => {
//   return (
//     <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Section Heading */}
//         <h2 className="text-4xl font-extrabold text-gray-900">
//           Our <span className="text-blue-600">Services</span>
//         </h2>
//         <p className="mt-4 text-lg text-gray-600">
//           Delivering cutting-edge solutions to transform businesses globally.
//         </p>

//         {/* Service Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="relative bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-200"
//             >
//               {/* Icon Container */}
//               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-600 flex items-center justify-center rounded-full shadow-md">
//                 {service.icon}
//               </div>

//               {/* Card Content */}
//               <div className="mt-10 text-center">
//                 <h3 className="text-2xl font-semibold text-gray-800">
//                   {service.title}
//                 </h3>
//                 <p className="mt-3 text-gray-600">{service.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceSection;



'use client';
import React from "react";
import { FaLaptopCode, FaChartLine, FaUserShield } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "IT & ITES Solutions",
    description:
      "Empowering businesses through cutting-edge IT services including Software Development, Testing, Data Science/Analytics, and BPO/KPO operations.",
    icon: <FaLaptopCode className="text-4xl text-orange-600" />,
  },
  {
    title: "Finance & Accounting",
    description:
      "Streamlining financial workflows with expert solutions in bookkeeping, tax compliance, payroll, and strategic risk management.",
    icon: <FaChartLine className="text-4xl text-orange-600" />,
  },
  {
    title: "US Home Insurance",
    description:
      "Safeguarding homes and valuable assets with comprehensive solutions for policy issuance, claims processing, and fraud prevention.",
    icon: <FaUserShield className="text-4xl text-orange-600" />,
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our <span className="text-orange-600">Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Driving growth through tailored, technology-driven business solutions.
          </p>
        </motion.div>

        {/* Services Grid with Enhanced Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border-b-4 border-orange-500 h-full">
                {/* Animated Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-100 flex items-center justify-center rounded-full shadow-md border-2 border-orange-300"
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <div className="mt-10 text-center">
                  <h3 className="text-2xl font-semibold text-orange-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Footer Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 inline-block bg-orange-50 px-6 py-3 rounded-full border border-orange-200"
        >
          <p className="text-gray-700 font-medium">
            Each service designed to solve real business challenges
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;