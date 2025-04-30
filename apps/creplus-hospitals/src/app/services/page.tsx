'use client';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FaStethoscope,
  FaUserNurse,
  FaXRay,
  FaAmbulance,
  FaBriefcaseMedical,
} from 'react-icons/fa';
import { GiHospitalCross } from 'react-icons/gi';
import { FiArrowRight } from 'react-icons/fi';
import Footer from '../component/FooterSection';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const Page = () => {
  const services = useMemo(() => [
    {
      icon: <FaStethoscope className="text-blue-500 w-7 h-7" />,
      title: 'Outpatient & Inpatient Care',
      desc: 'Comprehensive OPD & IPD services with qualified doctors and nursing staff.',
    },
    {
      icon: <FaXRay className="text-green-500 w-7 h-7" />,
      title: 'Diagnostics & Imaging',
      desc: 'State-of-the-art labs, X-ray, ultrasound, and ECG for accurate diagnosis.',
    },
    {
      icon: <FaAmbulance className="text-red-500 w-7 h-7" />,
      title: '24/7 Emergency Services',
      desc: 'Immediate care with ambulance support across all locations.',
    },
    {
      icon: <FaUserNurse className="text-yellow-500 w-7 h-7" />,
      title: 'Maternal & Child Health',
      desc: 'Antenatal care, deliveries, pediatrics, and vaccinations.',
    },
    {
      icon: <FaBriefcaseMedical className="text-purple-500 w-7 h-7" />,
      title: 'Specialty Consultations',
      desc: 'Access to specialists in cardiology, orthopedics, neurology, and more.',
    },
    {
      icon: <GiHospitalCross className="text-pink-500 w-7 h-7" />,
      title: 'Surgical Procedures',
      desc: 'Minor and major surgeries performed with modern infrastructure.',
    },
  ], []);

  return (
    <>
      <div className="relative max-w-7xl mx-auto px-6 py-16 text-gray-800">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-600">Our Healthcare Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Offering accessible, high-quality healthcare solutions across rural and urban regions.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i + 1}
            >
              <div className="flex items-center gap-3 mb-3">
                {service.icon}
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center pt-10 border-t border-gray-200"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={7}
        >
          <h3 className="text-xl font-semibold mb-4">Looking for a specific treatment?</h3>
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
              Contact Us <FiArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
