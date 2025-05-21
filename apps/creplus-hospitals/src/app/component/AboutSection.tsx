// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   FaUserMd,
//   FaAmbulance,
//   FaUsers,
//   FaBullseye,
//   FaMapMarkedAlt,
//   FaHospital,
// } from 'react-icons/fa';

// const stats = [
//   { icon: <FaHospital />, label: '15+ Hospitals Across Karnataka' },
//   { icon: <FaAmbulance />, label: '24/7 Emergency Services' },
//   { icon: <FaUserMd />, label: '100+ Doctors & Specialists' },
//   { icon: <FaUsers />, label: '1 Lakh+ Patients Served' },
//   { icon: <FaBullseye />, label: 'Goal: 200+ Hospitals by 2028' },
//   { icon: <FaMapMarkedAlt />, label: 'Serving 5 Regions in Karnataka' },
// ];

// const fadeInVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   }),
// };

// const AboutSection = () => (
//   <section className="py-20 bg-gray-50">
//     <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//       {/* Left side - Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {stats.map((stat, index) => (
//           <motion.div
//             key={index}
//             className="p-6 border border-purple-100 rounded-2xl shadow-md hover:shadow-lg bg-white transition duration-300"
//             custom={index}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={fadeInVariants}
//           >
//             <div className="text-purple-700 text-3xl mb-3 flex justify-center">
//               {stat.icon}
//             </div>
//             <p className="text-base font-semibold text-center text-blue-900">
//               {stat.label}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Right side - Heading & Text */}
//       <div>
//         <h2 className="text-4xl font-extrabold text-purple-800 mb-6">
//           About CurePlus Hospitals
//         </h2>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           CurePlus Hospitals, a distinguished part of Sudhanand Health Care
//           Solutions, is transforming rural healthcare through its expansive
//           network of over 15 hospitals across Karnataka.
//           <br /><br />
//           Our state-of-the-art facilities provide round-the-clock medical
//           services, cutting-edge diagnostic solutions, specialized treatments,
//           and integrated CurePlus  Pharma, ensuring access to high-quality,
//           affordable medicines for all.
//         </p>
//       </div>
//     </div>
//   </section>
// );

// export default AboutSection;




'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUserMd,
  FaAmbulance,
  FaUsers,
  FaBullseye,
  FaMapMarkedAlt,
  FaHospital,
} from 'react-icons/fa';

const stats = [
  { icon: <FaHospital />, label: '15+ Hospitals Across Karnataka', bg: 'bg-gradient-to-r from-purple-100 to-purple-200' },
  { icon: <FaAmbulance />, label: '24/7 Emergency Services', bg: 'bg-gradient-to-r from-sky-100 to-sky-200' },
  { icon: <FaUserMd />, label: '100+ Doctors & Specialists', bg: 'bg-gradient-to-r from-indigo-100 to-indigo-200' },
  { icon: <FaUsers />, label: '5 Lakh+ Patients Served', bg: 'bg-gradient-to-r from-pink-100 to-pink-200' },
  { icon: <FaBullseye />, label: 'Goal: 200+ Hospitals by 2028', bg: 'bg-gradient-to-r from-orange-100 to-orange-200' },
  { icon: <FaMapMarkedAlt />, label: 'Serving 5 Districts in Karnataka', bg: 'bg-gradient-to-r from-teal-100 to-teal-200' },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AboutSection = () => (
  <section className="py-24 bg-purple-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading and Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-600 mb-4">
          About CurePlus Hospitals
        </h2>
        <p className="text-lg md:text-xl text-zinc-600 max-w-4xl mx-auto leading-relaxed">
          CurePlus Hospitals, a part of Sudhanand Health Care Solutions, is transforming rural healthcare with a growing network across Karnataka.
          <br /><br />
          Our 24/7 medical care, advanced diagnostics, and CurePlus  Pharma make quality treatment accessible and affordable to everyone.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`min-h-[200px] p-6 flex flex-col justify-center items-center text-center rounded-2xl shadow-md hover:shadow-xl transition duration-300 ${stat.bg}`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
          >
            <div className="bg-white text-purple-600 p-3 rounded-full shadow mb-4 text-3xl">
              {stat.icon}
            </div>
            <p className="text-base md:text-lg font-semibold text-purple-600">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
