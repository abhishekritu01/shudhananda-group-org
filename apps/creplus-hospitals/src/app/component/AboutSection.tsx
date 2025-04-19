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
  { icon: <FaMapMarkedAlt />, label: 'Serving 5 Regions in Karnataka' },
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

const AboutSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      {/* Left side - Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="p-6 border border-purple-100 rounded-2xl shadow-md hover:shadow-lg bg-white transition duration-300"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
          >
            <div className="text-purple-700 text-3xl mb-3 flex justify-center">
              {stat.icon}
            </div>
            <p className="text-base font-semibold text-center text-blue-900">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Right side - Heading & Text */}
      <div>
        <h2 className="text-4xl font-extrabold text-purple-800 mb-6">
          About CurePlus Hospitals
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          CurePlus Hospitals, a distinguished part of Sudhanand Health Care
          Solutions, is transforming rural healthcare through its expansive
          network of over 15 hospitals across Karnataka.
          <br /><br />
          Our state-of-the-art facilities provide round-the-clock medical
          services, cutting-edge diagnostic solutions, specialized treatments,
          and integrated Cure+ Pharma, ensuring access to high-quality,
          affordable medicines for all.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
