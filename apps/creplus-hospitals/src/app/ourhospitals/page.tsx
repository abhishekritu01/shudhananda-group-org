// 'use client';

// import React from 'react';
// import Footer from '../component/FooterSection';
// import Image from 'next/image';
// import { FaHospital } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// // Define fadeUp animation variants
// const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const HospitalsPage = () => {
    
//     const hospitals= [
//         { id: 1, name: 'CurePlus  Disha Hospital', image: '/hospital/cure+.png' },
//         { id: 2, name: 'CurePlus  Dharani Hospital', image: '/hospital/dharni.png' },
//         { id: 3, name: 'CurePlus  Kaveri Hospital', image: '/hospital/kaveri.png' },
//         { id: 4, name: 'CurePlus  Krishna Hospital', image: '/hospital/krishna.png' },
//         { id: 5, name: 'CurePlus  Narasegowda Memorial Hospital', image: '/hospital/Narasegowda.png' },
//         { id: 6, name: 'CurePlus  Shanivarasanthe Hospital', image: '/hospital/Shanivarasanth.png' },
//         { id: 7, name: 'CurePlus  Ramapura Hospital', image: '/hospital/Ramapura.png' },
//         { id: 8, name: 'CurePlus  Terakanambi Hospital', image: '/hospital/Terakanambi.png' },
//         { id: 9, name: 'CurePlus  Bherya Hospital', image: '/hospital/Bherya.png' },
//         { id: 10, name: 'CurePlus  T. Narasipura Hospital', image: '/hospital/T. Narasipura.png' },
//         { id: 11, name: 'CurePlus  Handpost Hospital', image: '/hospital/Handpost.png' },
//         { id: 12, name: 'CurePlus  Hosur Hospital', image: '/hospital/Hosur.png' },
//         { id: 13, name: 'CurePlus  Halli Mysore Hospital', image: '/hospital/Halli Mysore.png' },
//       ];

//     const locations = [
//         "T. Narasipura", "Bherya", "Hand Post (H.D. Kote)",
//         "Halli Mysuru", "Hosur", "Ramapura", "Terakanambi"
//     ];

//     return (
//         <>
//             {/* Hero Section with Background Image */}
//             <div className="relative h-[70vh] w-full">
//                 <div className="absolute inset-0 bg-black/50 z-10" />
//                 <Image
//                     src="/Hospital-image/Hero3.jpeg" // Replace with your actual image path
//                     alt="Cureplus Hospital Building"
//                     fill
//                     className="object-cover"
//                     priority
//                 />
//                 <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//                         Cureplus Hospitals
//                     </h1>
//                     <p className="text-xl md:text-2xl text-white max-w-3xl mb-8">
//                         Compassionate Care, Advanced Healing
//                     </p>
//                     <p className="text-lg text-white max-w-4xl">
//                         CurePlus Hospitals & Pharmas provides world-class healthcare, emergency services,
//                         and affordable medication at 15+ state-of-the-art facilities across Karnataka.
//                     </p>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                 {/* Introduction */}
//                 <section className="mb-16">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//                         Our Healthcare <span className="text-purple-600"> Network </span>
//                     </h2>
//                     <div className="grid md:grid-cols-2 gap-8 items-center">
//                         <div>
//                             <p className="text-lg text-gray-600 mb-6">
//                                 Cureplus Hospitals is a growing network of healthcare facilities across the districts
//                                 of Mysore, Chamarajanagar, and Kodagu, committed to providing accessible, affordable,
//                                 and high-quality medical care.
//                             </p>
//                             <p className="text-lg text-gray-600">
//                                 From urban centers to underserved regions, Cureplus Hospitals have established
//                                 themselves as trusted healthcare providers, known for consistent, high-quality
//                                 care and a deep commitment to the communities they serve.
//                             </p>
//                         </div>
//                         <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
//                             <h3 className="text-xl font-semibold text-purple-600 mb-4">Key Features</h3>
//                             <ul className="space-y-3">
//                                 <li className="flex items-start">
//                                     <span className="text-purple-600 mr-2">✓</span>
//                                     <span className='text-gray-600'>Over <strong>15+</strong> state-of-the-art facilities</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="text-purple-600 mr-2">✓</span>
//                                     {/* <span>NABH accredited flagship hospital</span> */}
//                                     <span className='text-gray-600'>NABH accredited flagship hospital</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="text-purple-600 mr-2">✓</span>
//                                     {/* <span>Affordable generic medicines</span> */}
//                                     <span className='text-gray-600'>Affordable generic medicines</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="text-purple-600 mr-2">✓</span>
//                                     {/* <span>Modern diagnostic services</span> */}
//                                     <span className='text-gray-600'>Modern diagnostic services</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="text-purple-600 mr-2">✓</span>
//                                     {/* <span>Experienced medical professionals</span> */}
//                                     <span className='text-gray-600'>Experienced medical professionals</span>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Featured Hospitals */}
//                 <motion.div
//                     className="mb-20"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={fadeUp}
//                     custom={6}
//                 >
//                     <h2 className="text-3xl font-bold mb-6 text-purple-800">Hospitals Under SHPL</h2>
//                     <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800">
//                         {hospitals.map((hospital, index) => (
//                             <Link
//                                 key={index}
//                                 href={`/hospital/${hospital.id}`}>
//                                 <motion.li
//                                     key={index}
//                                     className="flex flex-col bg-gray-50 rounded-xl border hover:shadow-md transition overflow-hidden"
//                                     variants={fadeUp}
//                                     custom={index}
//                                 >
//                                     <div className="w-full h-48 overflow-hidden">
//                                         <img
//                                             src={hospital.image}
//                                             alt={hospital.name}
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                     <div className="flex items-center gap-2 p-4">
//                                         <FaHospital className="text-purple-800" />
//                                         {/* <Link href={`/hospital/${hospital.id}`}> */}
//                                         <p className="text-purple-800 hover:underline">{hospital.name}</p>
//                                         {/* </Link> */}
//                                     </div>
//                                 </motion.li>
//                             </Link>
//                         ))}
//                     </ul>
//                 </motion.div>

//                 {/* Other Locations */}
//                 <section>
//                     <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//                         Additional Locations
//                     </h2>
//                     <div className="bg-gray-50 p-8 rounded-xl">
//                         <p className="text-lg text-gray-600 mb-6 text-center">
//                             We also operate 20-bed hospitals in these locations, offering specialized care
//                             in orthopedics and general medicine:
//                         </p>
//                         <div className="flex flex-wrap justify-center gap-4">
//                             {locations.map((location, index) => (
//                                 <span key={index} className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700">
//                                     {location}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             </div>

//             <Footer />
//         </>
//     );
// };

// export default HospitalsPage;








'use client';

import React from 'react';
import Footer from '../component/FooterSection';
import Image from 'next/image';
import { FaHospital, FaClinicMedical, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Enhanced animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  })
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "backOut"
    }
  }
};

const HospitalsPage = () => {
  const hospitals = [
    { id: 1, name: 'CurePlus  Disha Hospital', image: '/hospital/cure+.png',phone:'0821-2454798' },
    { id: 2, name: 'CurePlus  Dharani Hospital', image: '/hospital/dharni.png',phone:'08226-297298' },
    { id: 3, name: 'CurePlus  Kaveri Hospital', image: '/hospital/kaveri.png' ,phone:'08276 298998' },
    { id: 4, name: 'CurePlus  Krishna Hospital', image: '/hospital/krishna.png' ,phone:'08223-275798' },
    { id: 5, name: 'CurePlus  Narasegowda Memorial Hospital', image: '/hospital/Narasegowda.png' ,phone:'08236-200466' },
    { id: 6, name: 'CurePlus Hospital  Shanivarasanthe', image: '/hospital/Shanivarasanth.png' ,phone:'9035193777' },
    { id: 7, name: 'CurePlus Hospital  Ramapura ', image: '/hospital/Ramapura.png' ,phone:'08225-272200' },
    { id: 8, name: 'CurePlus Hospital  Terakanambi', image: '/hospital/Terakanambi.png' ,phone:'08229-222044' },
    { id: 9, name: 'CurePlus Hospital Bherya ', image: '/hospital/Bherya.png' ,phone:'08223-200604' },
    { id: 10, name: 'CurePlus Hospital  T. Narasipura', image: '/hospital/T. Narasipura.png',phone:'08227-200940' },
    { id: 11, name: 'CurePlus Hospital Handpost ', image: '/hospital/Handpost.png' ,phone:'8228257300' },
    { id: 12, name: 'CurePlus Hospital Hosur ', image: '/hospital/Hosur.png' ,phone:'9035193777' },
    { id: 13, name: 'CurePlus Hospital Halli Mysore ', image: '/hospital/Halli Mysore.png' ,phone:'08175-273114' },
  ];

  const locations = [
    "T. Narasipura", "Bherya", "Hand Post (H.D. Kote)",
    "Halli Mysuru", "Hosur", "Ramapura", "Terakanambi"
  ];

  return (
    <>
      {/* Enhanced Hero Section with Parallax Effect */}
      <motion.div 
        className="relative h-[80vh] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/Hospital-image/Hero3.jpeg"
            alt="Cureplus Hospital Building"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Cureplus Hospitals
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white max-w-3xl mb-8 drop-shadow-md"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Compassionate Care, Advanced Healing
          </motion.p>
          <motion.p 
            className="text-lg text-white max-w-4xl drop-shadow-md"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            CurePlus Hospitals & Pharmas provides world-class healthcare, emergency services,
            and affordable medication at 15+ state-of-the-art facilities across Karnataka.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content with Staggered Animations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mb-12 text-center relative"
            variants={fadeUp}
          >
            <span className="relative inline-block">
              Our Healthcare <span className="text-purple-600">Network</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-1 bg-purple-200"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Cureplus Hospitals is a growing network of healthcare facilities across the districts
                of Mysore, Chamarajanagar, and Kodagu, committed to providing accessible, affordable,
                and high-quality medical care.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From urban centers to underserved regions, Cureplus Hospitals have established
                themselves as trusted healthcare providers, known for consistent, high-quality
                care and a deep commitment to the communities they serve.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              variants={scaleIn}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-purple-600 mb-4 flex items-center gap-2">
                <FaClinicMedical className="text-purple-600" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {[
                  "Over 15+ state-of-the-art facilities",
                  "NABH accredited flagship hospital",
                  "Affordable generic medicines",
                  "Modern diagnostic services",
                  "Experienced medical professionals"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start text-gray-600"
                    variants={fadeUp}
                    custom={i * 0.1}
                  >
                    <span className="text-purple-500 mr-2 mt-1">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Hospitals with Enhanced Grid */}
        <motion.section
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mb-12 text-center relative"
            variants={fadeUp}
          >
            <span className="relative inline-block">
              Hospitals Under SHPL
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-1 bg-purple-200"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {hospitals.map((hospital, index) => (
                <Link href={`/hospital/${hospital.id}`} key={index} passHref>
                  <motion.div
                    className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
                    variants={fadeUp}
                    custom={index % 6 * 0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    exit="hidden"
                  >
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        src={hospital.image}
                        alt={hospital.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                    <div className="p-4 flex items-center gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                        <FaHospital />
                      </div>
                      <h3 className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                        {hospital.name}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Locations Section with Interactive Map-like Display */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mb-12 text-center relative"
            variants={fadeUp}
          >
            <span className="relative inline-block">
              Additional Locations
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-1 bg-purple-200"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h2>
          
          <motion.div 
            className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-inner"
            variants={scaleIn}
          >
            <motion.p 
              className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto"
              variants={fadeUp}
            >
              We also operate 20-bed hospitals in these locations, offering specialized care
              in orthopedics and general medicine:
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  className="bg-white px-5 py-3 rounded-full shadow-sm text-gray-700 flex items-center gap-2 hover:shadow-md transition-all hover:bg-purple-50 hover:text-purple-700"
                  variants={fadeUp}
                  custom={index * 0.1}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaMapMarkerAlt className="text-purple-500" />
                  <span>{location}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </div>

      <Footer />
    </>
  );
};

export default HospitalsPage;
