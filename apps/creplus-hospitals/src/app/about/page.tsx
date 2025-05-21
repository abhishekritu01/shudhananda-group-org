// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaHospital, FaHeartbeat, FaAmbulance, FaEye, FaBullseye } from 'react-icons/fa';
// import { MdOutlineLocalPharmacy } from 'react-icons/md';
// import { FiArrowRight, FiTarget } from 'react-icons/fi';
// import Footer from '../component/FooterSection';
// import Link from 'next/link';

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15 },
//   }),
// };

// const hospitalsList = [
//   { id: 1, name: 'CurePlus  Disha Hospital', image: '/hospital/cure+.png' },
//   { id: 2, name: 'CurePlus  Dharani Hospital', image: '/hospital/dharni.png' },
//   { id: 3, name: 'CurePlus  Kaveri Hospital', image: '/hospital/kaveri.png' },
//   { id: 4, name: 'CurePlus  Krishna Hospital', image: '/hospital/krishna.png' },
//   { id: 5, name: 'CurePlus  Narasegowda Memorial Hospital', image: '/hospital/Narasegowda.png' },
//   { id: 6, name: 'CurePlus  Shanivarasanthe Hospital', image: '/hospital/Shanivarasanth.png' },
//   { id: 7, name: 'CurePlus  Ramapura Hospital', image: '/hospital/Ramapura.png' },
//   { id: 8, name: 'CurePlus  Terakanambi Hospital', image: '/hospital/Terakanambi.png' },
//   { id: 9, name: 'CurePlus  Bherya Hospital', image: '/hospital/Bherya.png' },
//   { id: 10, name: 'CurePlus  T. Narasipura Hospital', image: '/hospital/T. Narasipura.png' },
//   { id: 11, name: 'CurePlus  Handpost Hospital', image: '/hospital/Handpost.png' },
//   { id: 12, name: 'CurePlus  Hosur Hospital', image: '/hospital/Hosur.png' },
//   { id: 13, name: 'CurePlus  Halli Mysore Hospital', image: '/hospital/Halli Mysore.png' },
// ];

// const AboutPage = () => {
//   return (
//     <>
//       <div className="relative max-w-7xl mx-auto px-6 py-20 text-gray-800 overflow-hidden">
//         {/* Background Circles */}
//         <motion.div
//           animate={{ scale: [1, 1.5, 1] }}
//           transition={{ duration: 8, repeat: Infinity }}
//           className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"
//         />
//         <motion.div
//           animate={{ scale: [1, 1.3, 1] }}
//           transition={{ duration: 10, repeat: Infinity }}
//           className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
//         />

//         {/* Header */}
//         <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-center mb-16">
//           <h1 className="text-5xl font-extrabold mb-4 text-purple-600 leading-tight">Building Healthier Communities</h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             CurePlus Hospitals is committed to transforming rural healthcare across India.
//           </p>
//         </motion.div>

//         {/* Overview */}
//         <motion.p
//           variants={fadeUp}
//           custom={1}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-lg leading-loose mb-12 max-w-5xl mx-auto"
//         >
//           Founded in August 2013 by Dr. Arjun Sachidanand and Dr. Sini Arjun, Sudhanand Healthcare Solutions Pvt. Ltd. is dedicated to delivering high-quality healthcare services at subsidized rates in India and globally. Central to its mission are the esteemed CurePlus  Hospitals, exemplifying the company’s commitment to healthcare excellence.

//           The organization aims to establish, manage, and promote healthcare facilities that offer comprehensive services including preventive care, diagnostics, telemedicine, and educational initiatives. This holistic approach underscores its dedication to enhancing healthcare accessibility and quality.

//           Sudhanand Healthcare Solutions Pvt. Ltd. focuses on setting up healthcare centers that cater to both rural and urban underserved populations, contributing significantly to improving health outcomes across India. This effort is supported by Dr. M. D. Sachidananda Murthy Memorial Hospitals and an expanding network of CurePlus  Hospitals across various districts in Karnataka, India.
//         </motion.p>

//         {/* Vision / Mission / Goal */}
//         <div className="grid md:grid-cols-3 gap-10 mb-16">
//           {[
//             {
//               title: 'Vision',
//               desc: 'To provide affordable, accessible, inclusive & quality healthcare services to five million rural and urban poor by 2025.',
//               color: 'blue-100',
//               icon: <FaEye className="text-purple-600 w-8 h-8" />,
//             },
//             {
//               title: 'Mission',
//               desc: 'To serve the underserved in restoration and maintenance of their health through implementation of suitable healthcare schemes & development of integrated healthcare infrastructure always keeping the focus on the beneficiary.',
//               color: 'green-100',
//               icon: <FiTarget className="text-purple-600 w-8 h-8" />,
//             },
//             {
//               title: 'Goal',
//               desc: '200+ hospitals across India by 2028 with a focus on rural and underserved areas to ensure equitable healthcare access.',
//               color: 'yellow-100',
//               icon: <FaBullseye className="text-purple-600 w-8 h-8" />,
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={item.title}
//               className={`bg-${item.color} p-6 rounded-xl shadow-md`}
//               variants={fadeUp}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center gap-4 mb-3">
//                 {item.icon}
//                 <h2 className="text-2xl font-bold text-purple-600">{item.title}</h2>
//               </div>
//               <p className="text-gray-700">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Value Proposition */}
//         <div className="grid md:grid-cols-3 gap-8 mb-20">
//           {[
//             {
//               icon: <FaAmbulance className="text-purple-600 w-8 h-8" />,
//               title: '24/7 Medical Services',
//               desc: 'Round-the-clock emergency and primary healthcare access.',
//             },
//             {
//               icon: <FaHeartbeat className="text-purple-600 w-8 h-8" />,
//               title: 'Advanced Diagnostics',
//               desc: 'High-tech tools and accurate diagnostic support.',
//             },
//             {
//               icon: <MdOutlineLocalPharmacy className="text-purple-600 w-8 h-8" />,
//               title: 'In-house CurePlus Pharma',
//               desc: 'Affordable, quality medicines for every patient.',
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               className="bg-white p-6 rounded-2xl border shadow hover:shadow-lg transition-all"
//               variants={fadeUp}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center gap-4 mb-3">
//                 {item.icon}
//                 <h3 className="text-xl font-semibold text-purple-600 ">{item.title}</h3>
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Hub & Spoke Model */}
//         <motion.div
//           className="mb-14"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           custom={5}
//         >
//           <h2 className="text-3xl font-bold mb-4 text-purple-600">Our Hub-and-Spoke Model</h2>
//           <p className="text-lg text-gray-700 mb-2">
//             Hubs: <strong>Mysuru</strong>, <strong>Kushalnagar</strong> <br />
//             Spokes: <strong>Chamarajanagar, Mandya, Hassan</strong> and more — empowering healthcare delivery in remote regions.
//           </p>
//         </motion.div>

//         {/* Hospital List */}
//         <motion.div
//           className="mb-20"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           custom={6}
//         >
//           <h2 className="text-3xl font-bold mb-6 text-purple-600">Hospitals Under SHPL</h2>
//           <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800">
//             {hospitalsList.map((hospital, index) => (
//                 <Link 
//                 key={index}
//                 href={`/hospital/${hospital.id}`}>
//               <motion.li
//                 key={index}
//                 className="flex flex-col bg-gray-50 rounded-xl border hover:shadow-md transition overflow-hidden"
//                 variants={fadeUp}
//                 custom={index}
//               >
//                 <div className="w-full h-48 overflow-hidden">
//                   <img
//                     src={hospital.image}
//                     alt={hospital.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex items-center gap-2 p-4">
//                   <FaHospital className="text-purple-600" />
//                   {/* <Link href={`/hospital/${hospital.id}`}> */}
//                     <p className="text-purple-600 hover:underline">{hospital.name}</p>
//                   {/* </Link> */}
//                 </div>
//               </motion.li>
//               </Link>
//             ))}
//           </ul>
//         </motion.div>



//         {/* CTA */}
//         <motion.div
//           className="text-center py-10 border-t border-gray-200"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           custom={7}
//         >
//           <h3 className="text-2xl font-semibold mb-4 text-purple-800">Join Us In Building A Healthier Future</h3>
//           <Link href="/careers">
//             <button className="inline-flex items-center gap-2 px-6 py-3 bg-purple-800 text-white font-medium rounded-full hover:bg-purple-900 transition">
//               Explore Careers <FiArrowRight className="w-5 h-5" />
//             </button>
//           </Link>
//         </motion.div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default AboutPage;





// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaHospital, FaHeartbeat, FaAmbulance, FaEye, FaBullseye } from 'react-icons/fa';
// import { MdOutlineLocalPharmacy } from 'react-icons/md';
// import { FiArrowRight, FiTarget } from 'react-icons/fi';
// import Footer from '../component/FooterSection';
// import Link from 'next/link';

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { 
//       delay: i * 0.15,
//       type: "spring",
//       stiffness: 100,
//       damping: 10
//     },
//   }),
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1]
//     }
//   }
// };

// const hospitalsList = [
//   { id: 1, name: 'CurePlus  Disha Hospital', image: '/hospital/cure+.png' },
//   { id: 2, name: 'CurePlus  Dharani Hospital', image: '/hospital/dharni.png' },
//   { id: 3, name: 'CurePlus  Kaveri Hospital', image: '/hospital/kaveri.png' },
//   { id: 4, name: 'CurePlus  Krishna Hospital', image: '/hospital/krishna.png' },
//   { id: 5, name: 'CurePlus  Narasegowda Memorial Hospital', image: '/hospital/Narasegowda.png' },
//   { id: 6, name: 'CurePlus  Shanivarasanthe Hospital', image: '/hospital/Shanivarasanth.png' },
//   { id: 7, name: 'CurePlus  Ramapura Hospital', image: '/hospital/Ramapura.png' },
//   { id: 8, name: 'CurePlus  Terakanambi Hospital', image: '/hospital/Terakanambi.png' },
//   { id: 9, name: 'CurePlus  Bherya Hospital', image: '/hospital/Bherya.png' },
//   { id: 10, name: 'CurePlus  T. Narasipura Hospital', image: '/hospital/T. Narasipura.png' },
//   { id: 11, name: 'CurePlus  Handpost Hospital', image: '/hospital/Handpost.png' },
//   { id: 12, name: 'CurePlus  Hosur Hospital', image: '/hospital/Hosur.png' },
//   { id: 13, name: 'CurePlus  Halli Mysore Hospital', image: '/hospital/Halli Mysore.png' },
// ];

// const AboutPage = () => {
//   return (
//     <>
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-gray-800 overflow-hidden">
//         {/* Animated Background Elements */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.3 }}
//           transition={{ duration: 2 }}
//           className="absolute -left-20 -top-20 w-96 h-96 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl"
//         />
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.2 }}
//           transition={{ duration: 2, delay: 0.5 }}
//           className="absolute -right-20 -bottom-20 w-96 h-96 bg-gradient-to-r from-green-200 to-teal-200 rounded-full mix-blend-multiply filter blur-3xl"
//         />
        
//         {/* Floating Particles */}
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ y: 0, x: 0 }}
//             animate={{
//               y: [0, 20, 0],
//               x: i % 2 === 0 ? [0, 10, 0] : [0, -10, 0]
//             }}
//             transition={{
//               duration: 8 + Math.random() * 5,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//             className={`absolute rounded-full bg-purple-100 opacity-40`}
//             style={{
//               width: `${Math.random() * 10 + 5}px`,
//               height: `${Math.random() * 10 + 5}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}

//         {/* Hero Section */}
//         <motion.div 
//           initial="hidden"
//           animate="visible"
//           variants={scaleIn}
//           className="text-center mb-16 md:mb-24 relative z-10"
//         >
//           <div className="inline-block mb-4 px-4 py-1 bg-purple-100 rounded-full">
//             <span className="text-sm font-medium text-purple-800">About CurePlus</span>
//           </div>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-purple-900 leading-tight">
//             Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Healthier</span> Communities
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//             CurePlus Hospitals is committed to transforming rural healthcare across India.
//           </p>
//         </motion.div>

//         {/* Overview Section */}
//         <motion.div 
//           className="relative mb-16 md:mb-24"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={fadeUp}
//           custom={1}
//         >
//           <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-purple-200 to-blue-200 rounded-full hidden md:block"></div>
//           <p className="text-lg md:text-xl leading-relaxed md:leading-loose text-gray-700 max-w-5xl mx-auto pl-0 md:pl-8">
//             Founded in August 2013 by Dr. Arjun Sachidanand and Dr. Sini Arjun, Sudhanand Healthcare Solutions Pvt. Ltd. is dedicated to delivering high-quality healthcare services at subsidized rates in India and globally. Central to its mission are the esteemed CurePlus  Hospitals, exemplifying the company's commitment to healthcare excellence.
//             <br /><br />
//             The organization aims to establish, manage, and promote healthcare facilities that offer comprehensive services including preventive care, diagnostics, telemedicine, and educational initiatives. This holistic approach underscores its dedication to enhancing healthcare accessibility and quality.
//             <br /><br />
//             Sudhanand Healthcare Solutions Pvt. Ltd. focuses on setting up healthcare centers that cater to both rural and urban underserved populations, contributing significantly to improving health outcomes across India. This effort is supported by Dr. M. D. Sachidananda Murthy Memorial Hospitals and an expanding network of CurePlus  Hospitals across various districts in Karnataka, India.
//           </p>
//         </motion.div>

//         {/* Vision/Mission/Goal Cards */}
//         <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
//           {[
//             {
//               title: 'Vision',
//               desc: 'To provide affordable, accessible, inclusive & quality healthcare services to five million rural and urban poor by 2025.',
//               color: 'from-purple-100 to-blue-50',
//               icon: <FaEye className="text-purple-600 w-8 h-8" />,
//               delay: 0
//             },
//             {
//               title: 'Mission',
//               desc: 'To serve the underserved in restoration and maintenance of their health through implementation of suitable healthcare schemes & development of integrated healthcare infrastructure always keeping the focus on the beneficiary.',
//               color: 'from-green-50 to-teal-50',
//               icon: <FiTarget className="text-purple-600 w-8 h-8" />,
//               delay: 0.2
//             },
//             {
//               title: 'Goal',
//               desc: '200+ hospitals across India by 2028 with a focus on rural and underserved areas to ensure equitable healthcare access.',
//               color: 'from-yellow-50 to-amber-50',
//               icon: <FaBullseye className="text-purple-600 w-8 h-8" />,
//               delay: 0.4
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={item.title}
//               className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all`}
//               variants={fadeUp}
//               custom={i + 2}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="p-3 bg-white rounded-xl shadow-sm">
//                   {item.icon}
//                 </div>
//                 <h2 className="text-2xl font-bold text-purple-800">{item.title}</h2>
//               </div>
//               <p className="text-gray-700">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Value Proposition */}
//         <div className="relative mb-16 md:mb-24">
//           <motion.div 
//             className="grid md:grid-cols-3 gap-6"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             custom={5}
//           >
//             {[
//               {
//                 icon: <FaAmbulance className="text-purple-600 w-8 h-8" />,
//                 title: '24/7 Medical Services',
//                 desc: 'Round-the-clock emergency and primary healthcare access.',
//                 color: 'bg-blue-50'
//               },
//               {
//                 icon: <FaHeartbeat className="text-purple-600 w-8 h-8" />,
//                 title: 'Advanced Diagnostics',
//                 desc: 'High-tech tools and accurate diagnostic support.',
//                 color: 'bg-purple-50'
//               },
//               {
//                 icon: <MdOutlineLocalPharmacy className="text-purple-600 w-8 h-8" />,
//                 title: 'In-house CurePlus Pharma',
//                 desc: 'Affordable, quality medicines for every patient.',
//                 color: 'bg-teal-50'
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 className={`${item.color} p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all`}
//                 variants={fadeUp}
//                 custom={i + 5}
//                 whileHover={{ 
//                   y: -5,
//                   boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
//                 }}
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-2 bg-white rounded-lg shadow-xs">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold text-purple-800">{item.title}</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Hub & Spoke Model */}
//         <motion.div
//           className="mb-16 md:mb-24 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           custom={8}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-900">Our Hub-and-Spoke Model</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <p className="text-lg text-gray-700 mb-6">
//                 Hubs: <strong className="text-purple-800">Mysuru</strong>, <strong className="text-purple-800">Kushalnagar</strong> <br />
//                 Spokes: <strong className="text-purple-800">Chamarajanagar, Mandya, Hassan</strong> and more — empowering healthcare delivery in remote regions.
//               </p>
//             </div>
//             <div className="relative h-64 bg-white rounded-xl shadow-inner border border-gray-200 overflow-hidden">
//               {/* This would be replaced with an actual map visualization */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="relative w-full h-full">
//                   {/* Hub dots */}
//                   <div className="absolute left-1/4 top-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2"></div>
//                   <div className="absolute right-1/4 top-1/3 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2"></div>
                  
//                   {/* Spoke dots */}
//                   {[...Array(6)].map((_, i) => (
//                     <div 
//                       key={i}
//                       className="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm"
//                       style={{
//                         left: `${Math.random() * 80 + 10}%`,
//                         top: `${Math.random() * 80 + 10}%`
//                       }}
//                     ></div>
//                   ))}
                  
//                   {/* Connection lines */}
//                   <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                     {[...Array(6)].map((_, i) => (
//                       <line 
//                         key={i}
//                         x1={i % 2 === 0 ? "25%" : "75%"} 
//                         y1={i % 2 === 0 ? "50%" : "33%"}
//                         x2={`${Math.random() * 80 + 10}%`}
//                         y2={`${Math.random() * 80 + 10}%`}
//                         stroke="#8b5cf6"
//                         strokeWidth="2"
//                         strokeDasharray="5,5"
//                       />
//                     ))}
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Hospital List */}
//         <motion.div
//           className="mb-16 md:mb-24"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           custom={9}
//         >
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
//             <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 md:mb-0">Hospitals Under SHPL</h2>
//             <div className="text-sm text-gray-500">13 locations and growing</div>
//           </div>
          
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {hospitalsList.map((hospital, index) => (
//               <Link href={`/hospital/${hospital.id}`} key={index}>
//                 <motion.div
//                   className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all border border-gray-100"
//                   variants={fadeUp}
//                   custom={index + 10}
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={hospital.image}
//                       alt={hospital.name}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//                   </div>
//                   <div className="p-4 flex items-center gap-3">
//                     <div className="flex-shrink-0 p-2 bg-purple-100 rounded-lg text-purple-600">
//                       <FaHospital className="w-5 h-5" />
//                     </div>
//                     <h3 className="text-lg font-semibold text-purple-900 group-hover:underline">{hospital.name}</h3>
//                   </div>
//                 </motion.div>
//               </Link>
//             ))}
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           className="text-center py-12 md:py-16 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl shadow-xl mb-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={scaleIn}
//         >
//           <div className="max-w-2xl mx-auto px-4">
//             <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">Join Us In Building A Healthier Future</h3>
//             <p className="text-purple-200 mb-6">Be part of our mission to bring quality healthcare to underserved communities</p>
//             <Link href="/careers">
//               <motion.button 
//                 className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-900 font-medium rounded-full hover:bg-gray-100 transition-all shadow-lg"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Explore Careers <FiArrowRight className="w-5 h-5" />
//               </motion.button>
//             </Link>
//           </div>
//         </motion.div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default AboutPage;



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
    transition: { 
      delay: i * 0.15,
      type: "spring",
      stiffness: 100,
      damping: 10
    },
  }),
};

const hospitalsList = [
  { id: 1, name: 'CurePlus  Disha Hospital', image: '/hospital/cure+.png' },
  { id: 2, name: 'CurePlus  Dharani Hospital', image: '/hospital/dharni.png' },
  { id: 3, name: 'CurePlus  Kaveri Hospital', image: '/hospital/kaveri.png' },
  { id: 4, name: 'CurePlus  Krishna Hospital', image: '/hospital/krishna.png' },
  { id: 5, name: 'CurePlus  Narasegowda Memorial Hospital', image: '/hospital/Narasegowda.png' },
  { id: 6, name: 'CurePlus  Shanivarasanthe Hospital', image: '/hospital/Shanivarasanth.png' },
  { id: 7, name: 'CurePlus  Ramapura Hospital', image: '/hospital/Ramapura.png' },
  { id: 8, name: 'CurePlus  Terakanambi Hospital', image: '/hospital/Terakanambi.png' },
  { id: 9, name: 'CurePlus  Bherya Hospital', image: '/hospital/Bherya.png' },
  { id: 10, name: 'CurePlus  T. Narasipura Hospital', image: '/hospital/T. Narasipura.png' },
  { id: 11, name: 'CurePlus  Handpost Hospital', image: '/hospital/Handpost.png' },
  { id: 12, name: 'CurePlus  Hosur Hospital', image: '/hospital/Hosur.png' },
  { id: 13, name: 'CurePlus  Halli Mysore Hospital', image: '/hospital/Halli Mysore.png' },
];

const AboutPage = () => {
  return (
    <>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-gray-800">
        {/* Header */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp} 
          custom={0} 
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-purple-700 leading-tight">
            Building Healthier Communities
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            CurePlus Hospitals is committed to transforming rural healthcare across India.
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 md:mb-20 max-w-5xl mx-auto"
        >
          <p className="text-lg leading-relaxed text-gray-700">
            Founded in August 2013 by Dr. Arjun Sachidanand and Dr. Sini Arjun, Sudhanand Healthcare Solutions Pvt. Ltd. is dedicated to delivering high-quality healthcare services at subsidized rates in India and globally. Central to its mission are the esteemed CurePlus  Hospitals, exemplifying the company&apos;s commitment to healthcare excellence.
            <br /><br />
            The organization aims to establish, manage, and promote healthcare facilities that offer comprehensive services including preventive care, diagnostics, telemedicine, and educational initiatives. This holistic approach underscores its dedication to enhancing healthcare accessibility and quality.
            <br /><br />
            Sudhanand Healthcare Solutions Pvt. Ltd. focuses on setting up healthcare centers that cater to both rural and urban underserved populations, contributing significantly to improving health outcomes across India. This effort is supported by Dr. M. D. Sachidananda Murthy Memorial Hospitals and an expanding network of CurePlus  Hospitals across various districts in Karnataka, India.
          </p>
        </motion.div>

        {/* Vision / Mission / Goal */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {[
            {
              title: 'Vision',
              desc: 'To provide affordable, accessible, inclusive & quality healthcare services to five million rural and urban poor by 2030.',
              color: 'bg-blue-50',
              icon: <FaEye className="text-purple-600 w-8 h-8" />,
            },
            {
              title: 'Mission',
              desc: 'To serve the underserved in restoration and maintenance of their health through implementation of suitable healthcare schemes & development of integrated healthcare infrastructure always keeping the focus on the beneficiary.',
              color: 'bg-green-50',
              icon: <FiTarget className="text-purple-600 w-8 h-8" />,
            },
            {
              title: 'Goal',
              desc: '200+ hospitals across India by 2028 with a focus on rural and underserved areas to ensure equitable healthcare access.',
              color: 'bg-yellow-50',
              icon: <FaBullseye className="text-purple-600 w-8 h-8" />,
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className={`${item.color} p-6 rounded-xl shadow-md hover:shadow-lg transition-all`}
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <h2 className="text-2xl font-bold text-purple-700">{item.title}</h2>
              </div>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 md:mb-20">
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
              className="bg-white p-6 rounded-xl border shadow hover:shadow-lg transition-all"
              variants={fadeUp}
              custom={i + 5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-purple-700">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Hub & Spoke Model */}
        <motion.div
          className="mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={8}
        >
          <h2 className="text-3xl font-bold mb-4 text-purple-700">Our Hub-and-Spoke Model</h2>
          <p className="text-lg text-gray-700 mb-2">
            Hubs: <strong className="text-purple-800">Mysuru</strong>, <strong className="text-purple-800">Kushalnagar</strong> <br />
            Spokes: <strong className="text-purple-800">Chamarajanagar, Mandya, Hassan</strong> and more — empowering healthcare delivery in remote regions.
          </p>
        </motion.div>

        {/* Enhanced Hospitals Under SHPL Section */}
        <motion.div
          className="mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={9}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-purple-700 mb-2">Hospitals Under SHPL</h2>
            <p className="text-gray-600">Our growing network of healthcare facilities</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitalsList.map((hospital, index) => (
              <Link href={`/hospital/${hospital.id}`} key={index}>
                <motion.div
                  className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all border border-gray-100"
                  variants={fadeUp}
                  custom={index + 10}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4 flex items-center gap-3">
                    <div className="flex-shrink-0 p-2 bg-purple-100 rounded-lg text-purple-600">
                      <FaHospital className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-purple-800 group-hover:underline">
                      {hospital.name}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center py-12 bg-gradient-to-r from-purple-700 to-purple-600 rounded-xl shadow-lg mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={23}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Join Us In Building A Healthier Future</h3>
          <Link href="/careers">
            <motion.button 
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-800 font-medium rounded-full hover:bg-gray-100 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Careers <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;