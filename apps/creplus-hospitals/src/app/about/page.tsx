'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaHeartbeat, FaAmbulance, FaEye, FaBullseye } from 'react-icons/fa';
import { MdOutlineLocalPharmacy } from 'react-icons/md';
import { FiArrowRight, FiTarget } from 'react-icons/fi';
import Footer from '../component/FooterSection';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const hospitalsList = [
  { id: 1, name: 'Cure Plus Disha Hospital', image: '/hospital/cure+.png' },
  { id: 2, name: 'Cure Plus Dharani Hospital', image: '/hospital/dharni.png' },
  { id: 3, name: 'Cure Plus Kaveri Hospital', image: '/hospital/kaveri.png' },
  { id: 4, name: 'Cure Plus Krishna Hospital', image: '/hospital/krishna.png' },
  { id: 5, name: 'Cure Plus Narasegowda Memorial Hospital', image: '/hospital/Narasegowda.png' },
  { id: 6, name: 'Cure Plus Shanivarasanthe Hospital', image: '/hospital/Shanivarasanth.png' },
  { id: 7, name: 'Cure Plus Ramapura Hospital', image: '/hospital/Ramapura.png' },
  { id: 8, name: 'Cure Plus Terakanambi Hospital', image: '/hospital/Terakanambi.png' },
  { id: 9, name: 'Cure Plus Bherya Hospital', image: '/hospital/Bherya.png' },
  { id: 10, name: 'Cure Plus T. Narasipura Hospital', image: '/hospital/T. Narasipura.png' },
  { id: 11, name: 'Cure Plus Handpost Hospital', image: '/hospital/Handpost.png' },
  { id: 12, name: 'Cure Plus Hosur Hospital', image: '/hospital/Hosur.png' },
  { id: 13, name: 'Cure Plus Halli Mysore Hospital', image: '/hospital/Halli Mysore.png' },
];

const AboutPage = () => {
  return (
    <>
      <div className="relative max-w-7xl mx-auto px-6 py-20 text-gray-800 overflow-hidden">
        {/* Background Circles */}
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        />

        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-purple-600 leading-tight">Building Healthier Communities</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            CurePlus Hospitals is committed to transforming rural healthcare across India.
          </p>
        </motion.div>

        {/* Overview */}
        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg leading-loose mb-12 max-w-5xl mx-auto"
        >
          Founded in August 2013 by Dr. Arjun Sachidanand and Dr. Sini Arjun, Sudhanand Healthcare Solutions Pvt. Ltd. is dedicated to delivering high-quality healthcare services at subsidized rates in India and globally. Central to its mission are the esteemed Cure Plus Hospitals, exemplifying the company’s commitment to healthcare excellence.

          The organization aims to establish, manage, and promote healthcare facilities that offer comprehensive services including preventive care, diagnostics, telemedicine, and educational initiatives. This holistic approach underscores its dedication to enhancing healthcare accessibility and quality.

          Sudhanand Healthcare Solutions Pvt. Ltd. focuses on setting up healthcare centers that cater to both rural and urban underserved populations, contributing significantly to improving health outcomes across India. This effort is supported by Dr. M. D. Sachidananda Murthy Memorial Hospitals and an expanding network of Cure Plus Hospitals across various districts in Karnataka, India.
        </motion.p>

        {/* Vision / Mission / Goal */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {[
            {
              title: 'Vision',
              desc: 'To provide affordable, accessible, inclusive & quality healthcare services to five million rural and urban poor by 2025.',
              color: 'blue-100',
              icon: <FaEye className="text-purple-600 w-8 h-8" />,
            },
            {
              title: 'Mission',
              desc: 'To serve the underserved in restoration and maintenance of their health through implementation of suitable healthcare schemes & development of integrated healthcare infrastructure always keeping the focus on the beneficiary.',
              color: 'green-100',
              icon: <FiTarget className="text-purple-600 w-8 h-8" />,
            },
            {
              title: 'Goal',
              desc: '200+ hospitals across India by 2028 with a focus on rural and underserved areas to ensure equitable healthcare access.',
              color: 'yellow-100',
              icon: <FaBullseye className="text-purple-600 w-8 h-8" />,
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className={`bg-${item.color} p-6 rounded-xl shadow-md`}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <h2 className="text-2xl font-bold text-purple-600">{item.title}</h2>
              </div>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <FaAmbulance className="text-purple-600 w-8 h-8" />,
              title: '24/7 Medical Services',
              desc: 'Round-the-clock emergency and primary healthcare access.',
            },
            {
              icon: <FaHeartbeat className="text-purple-600 w-8 h-8" />,
              title: 'Advanced Diagnostics',
              desc: 'High-tech tools and accurate diagnostic support.',
            },
            {
              icon: <MdOutlineLocalPharmacy className="text-purple-600 w-8 h-8" />,
              title: 'In-house CurePlus Pharma',
              desc: 'Affordable, quality medicines for every patient.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl border shadow hover:shadow-lg transition-all"
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <h3 className="text-xl font-semibold text-purple-600 ">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Hub & Spoke Model */}
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
        >
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Our Hub-and-Spoke Model</h2>
          <p className="text-lg text-gray-700 mb-2">
            Hubs: <strong>Mysuru</strong>, <strong>Kushalnagar</strong> <br />
            Spokes: <strong>Chamarajanagar, Mandya, Hassan</strong> and more — empowering healthcare delivery in remote regions.
          </p>
        </motion.div>

        {/* Hospital List */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={6}
        >
          <h2 className="text-3xl font-bold mb-6 text-purple-600">Hospitals Under SHPL</h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800">
            {hospitalsList.map((hospital, index) => (
                <Link 
                key={index}
                href={`/hospital/${hospital.id}`}>
              <motion.li
                key={index}
                className="flex flex-col bg-gray-50 rounded-xl border hover:shadow-md transition overflow-hidden"
                variants={fadeUp}
                custom={index}
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 p-4">
                  <FaHospital className="text-purple-600" />
                  {/* <Link href={`/hospital/${hospital.id}`}> */}
                    <p className="text-purple-600 hover:underline">{hospital.name}</p>
                  {/* </Link> */}
                </div>
              </motion.li>
              </Link>
            ))}
          </ul>
        </motion.div>



        {/* CTA */}
        <motion.div
          className="text-center py-10 border-t border-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={7}
        >
          <h3 className="text-2xl font-semibold mb-4 text-purple-800">Join Us In Building A Healthier Future</h3>
          <Link href="/careers">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-purple-800 text-white font-medium rounded-full hover:bg-purple-900 transition">
              Explore Careers <FiArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;



