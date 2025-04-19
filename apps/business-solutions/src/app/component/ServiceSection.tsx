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


import React from "react";
import {
  FaLaptopCode,
  FaChartLine,
  FaUserShield,
} from "react-icons/fa";

const services = [
  {
    title: "IT & ITES Solutions",
    description:
      "Empowering businesses through cutting-edge IT services including software development, data analytics, and BPO operations.",
    icon: <FaLaptopCode className="text-4xl text-orange-600" />,
  },
  {
    title: "Finance & Accounting",
    description:
      "Streamlining financial workflows with expert solutions in bookkeeping, tax compliance, payroll, and strategic risk management.",
    icon: <FaChartLine className="text-4xl text-orange-600" />,
  },
  {
    title: "Home Insurance",
    description:
      "Safeguarding homes and valuable assets with comprehensive solutions for policy issuance, claims processing, and fraud prevention.",
    icon: <FaUserShield className="text-4xl text-orange-600" />,
  },
  // {
  //   title: "Cybersecurity & Ethical Hacking",
  //   description:
  //     "Defending organizations with robust cybersecurity strategies, ethical hacking, and blockchain-based fraud prevention.",
  //   icon: <FaShieldAlt className="text-4xl text-orange-600" />,
  // },
];

const ServiceSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900">
          Our <span className="text-orange-600">Services</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Driving growth through tailored, technology-driven business solutions.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl border border-orange-300"
            >
              {/* Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-100 flex items-center justify-center rounded-full shadow-md border border-orange-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="mt-10 text-center">
                <h3 className="text-2xl font-semibold text-orange-800">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
