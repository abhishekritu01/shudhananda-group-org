// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaUserMd, FaAmbulance, FaUsers, FaBullseye, FaMapMarkedAlt, FaHospital } from 'react-icons/fa';

// const stats = [
//   { icon: <FaHospital />, label: '15+ Hospitals Across Karnataka' },
//   { icon: <FaAmbulance />, label: '24/7 Emergency Services' },
//   { icon: <FaUserMd />, label: '100+ Doctors & Specialists' },
//   { icon: <FaUsers />, label: '1 Lakh+ Patients Served' },
//   { icon: <FaBullseye />, label: 'Goal: 200+ Hospitals by 2028' },
//   { icon: <FaMapMarkedAlt />, label: '5 Regions Served (Mysuru, Coorg, Mandya, Chamarajanagar, Hassan)' },
// ];

// const fadeInVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   }),
// };

// const QuickStats = () => (
//   <section className="py-16 bg-white text-center">
//     <h2 className="text-4xl font-bold mb-12 text-purple-800">Quick Stats</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
//       {stats.map((stat, index) => (
//         <motion.div
//           key={index}
//           className="p-6 border rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white"
//           custom={index}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={fadeInVariants}
//         >
//           <div className="text-purple-800 text-5xl mb-4 flex justify-center">{stat.icon}</div>
//           <p className="text-lg font-semibold text-purple-800">{stat.label}</p>
//         </motion.div>
//       ))}
//     </div>
//   </section>
// );

// export default QuickStats;




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
  { icon: <FaHospital />, label: '15+ Hospitals Across Karnataka' },
  { icon: <FaAmbulance />, label: '24/7 Emergency Services' },
  { icon: <FaUserMd />, label: '100+ Doctors & Specialists' },
  { icon: <FaUsers />, label: '1 Lakh+ Patients Served' },
  { icon: <FaBullseye />, label: 'Goal: 200+ Hospitals by 2028' },
  { icon: <FaMapMarkedAlt />, label: '5 Regions Served (Mysuru, Coorg, Mandya, Chamarajanagar, Hassan)' },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const QuickStats = () => (
  <section className="py-20 bg-gray-50 text-center">
    <h2 className="text-4xl font-bold mb-12 text-purple-800">Quick Stats</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="p-6 border border-purple-100 rounded-2xl shadow-md hover:shadow-lg transition duration-300 bg-white"
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <div className="text-purple-700 text-5xl mb-4 flex justify-center">{stat.icon}</div>
          <p className="text-lg font-semibold text-blue-900">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default QuickStats;
