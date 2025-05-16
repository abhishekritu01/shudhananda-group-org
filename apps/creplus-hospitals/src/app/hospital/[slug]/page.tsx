// 'use client';

// import React from 'react';
// import { useParams } from 'next/navigation';
// import { hospitals } from '@/app/data/Hospital';
// import Footer from '@/app/component/FooterSection';

// import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
// import { MdLocalHospital, MdOutlineLocalHotel } from 'react-icons/md';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const hospitalsList = [
//   { id: 1, name: 'CurePlus  Disha Hospital', image: '/cureplus/cureplus.png' },
//   { id: 2, name: 'CurePlus  Dharani Hospital', image: '/dharni/dharni.png' },
//   { id: 3, name: 'CurePlus  Kaveri Hospital', image: '/kaveri/kaveri1.png' },
//   { id: 4, name: 'CurePlus  Krishna Hospital', image: '/krishna/krishna1.png' },
//   { id: 5, name: 'CurePlus  Narasegowda Memorial Hospital', image: '/narasegowda/narasaregoda1.png' },
//   { id: 6, name: 'CurePlus  Shanivarasanthe Hospital', image: '/Shanivarasanthe/shanivarasanthe.png' },
//   { id: 7, name: 'CurePlus  Ramapura Hospital', image: '/rampura/rampura.png' },
//   { id: 8, name: 'CurePlus  Terakanambi Hospital', image: '/terakanamb/terakanamb.png' },
//   { id: 9, name: 'CurePlus  Bherya Hospital', image: '/bheraya/bheraya.png' },
//   { id: 10, name: 'CurePlus  T. Narasipura Hospital', image: '/Narasipura/Narasipura.png' },
//   { id: 11, name: 'CurePlus  Handpost Hospital', image: '/HandPost/HandPost1.png' },
//   { id: 12, name: 'CurePlus  Hosur Hospital', image: '/hosur/hosur.png' },
//   { id: 13, name: 'CurePlus  Halli Mysore Hospital', image: '/halli/halli.png' },
// ];

// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.1 },
//   }),
// };

// const Page = () => {
//   const params = useParams();
//   const hospitalId = Number(params.slug);
//   const hospital = hospitals.find((h) => h.id === hospitalId);

//   if (!hospital) {
//     return (
//       <div className="flex items-center justify-center h-screen text-red-600 text-xl font-semibold">
//         Hospital not found.
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="max-w-7xl mx-auto px-6 py-10 text-gray-800 flex gap-8">
//         {/* Main Content */}
//         <div className="w-full lg:w-3/4">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="mb-12"
//           >
//             <img
//               src={hospital.imageUrl}
//               alt={hospital.name}
//               className="w-full h-72 object-cover rounded-xl shadow-lg"
//             />
//             <motion.h1
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl font-extrabold mt-6 text-gray-900"
//             >
//               {hospital.name}
//             </motion.h1>
//             <div className="flex items-center gap-2 text-gray-600 mt-2">
//               <HiOutlineLocationMarker className="text-blue-600 w-5 h-5" />
//               <span className="text-lg">{hospital.location}</span>
//             </div>
//           </motion.div>

//           {/* About Section */}
//           <div className="mb-12 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
//             <h2 className="text-2xl font-semibold mb-3 border-b pb-2">About the Hospital</h2>
//             <p className="text-base leading-relaxed whitespace-pre-line">{hospital.description}</p>
//           </div>

//           {/* Services & Facilities */}
//           <motion.section
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             custom={2}
//             className="grid md:grid-cols-2 gap-10 mb-12"
//           >
//             <div>
//               <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Services</h2>
//               <ul className="space-y-4">
//                 {hospital.services.map((service, i) => (
//                   <motion.li
//                     key={i}
//                     variants={fadeIn}
//                     custom={i + 1}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
//                   >
//                     <MdLocalHospital className="text-blue-600 w-6 h-6" />
//                     <span className="text-gray-700">{service.label}</span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Facilities</h2>
//               <ul className="space-y-4">
//                 {hospital.facilities.map((facility, i) => (
//                   <motion.li
//                     key={i}
//                     variants={fadeIn}
//                     custom={i + 1}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     className="flex items-center gap-3 bg-green-50 p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
//                   >
//                     <MdOutlineLocalHotel className="text-green-600 w-6 h-6" />
//                     <span className="text-gray-700">{facility.label}</span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </motion.section>

//           {/* Infrastructure */}
//           <motion.section
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             custom={3}
//             className="mb-12"
//           >
//             <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Infrastructure</h2>
//             <p className="text-base leading-relaxed">{hospital.infrastructure}</p>
//           </motion.section>

//           {/* Gallery */}
//           <motion.section
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             custom={4}
//             className="mb-12"
//           >
//             <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Gallery</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//               {hospital.gallery.map((img, idx) => (
//                 <motion.img
//                   key={idx}
//                   src={img}
//                   alt={`Hospital Gallery ${idx + 1}`}
//                   className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.98 }}
//                 />
//               ))}
//             </div>
//           </motion.section>

//           {/* Contact */}
//           <motion.section
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             custom={5}
//             className="bg-gray-50 p-6 rounded-xl shadow-md mb-12"
//           >
//             <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Contact Information</h2>
//             <div className="space-y-4 text-gray-700">
//               <div className="flex items-center gap-3">
//                 <HiOutlineLocationMarker className="text-blue-500 w-5 h-5" />
//                 <span>{hospital.contact.address}</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <HiOutlinePhone className="text-green-500 w-5 h-5" />
//                 <span>{hospital.contact.phone}</span>
//               </div>
//             </div>
//           </motion.section>
//         </div>

//         {/* Sidebar Hospital List */}
//         <aside className="hidden lg:block w-1/4 space-y-4 sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
//           <div className="p-4 bg-white rounded-xl shadow-md">
//             <h3 className="text-xl font-bold mb-4 border-b pb-2">Other Hospitals</h3>
//             <ul className="space-y-4">
//               {hospitalsList.map((hosp) => (
//                 <Link
//                   key={hosp.id}
//                   href={`/hospital/${hosp.id}`}
//                   className={`block rounded-lg hover:bg-gray-100 transition-colors duration-200 ${hospitalId === hosp.id ? 'bg-gray-200' : ''
//                     }`}
//                 >
//                   <li className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-md transition duration-200">
//                     <img
//                       src={hosp.image}
//                       alt={hosp.name}
//                       className="w-10 h-10 object-cover rounded-md shadow"
//                     />
//                     <span className="text-sm font-medium text-purple-800">{hosp.name}</span>
//                   </li>
//                 </Link>
//               ))}
//             </ul>
//           </div>
//         </aside>

//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Page;









// 'use client';

// import Footer from '@/app/component/FooterSection';
// import { hospitals } from '@/app/data/Hospital';
// import { useParams } from 'next/navigation';

// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { FaParking, FaProcedures, FaUserMd, FaWifi } from 'react-icons/fa';
// import { HiOutlineClock, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineStar } from 'react-icons/hi';
// import { MdLocalHospital, MdOutlineEmergency, MdOutlineLocalHotel } from 'react-icons/md';

// const hospitalsList = [
//   { id: 1, name: 'CurePlus  Disha Hospital', image: '/cureplus/cureplus.png', status: 'popular' },
//   { id: 2, name: 'CurePlus  Dharani Hospital', image: '/dharni/dharni.png', status: 'normal' },
//   { id: 3, name: 'CurePlus  Kaveri Hospital', image: '/kaveri/kaveri1.png', status: 'featured' },
//   { id: 4, name: 'CurePlus  Krishna Hospital', image: '/krishna/krishna1.png', status: 'normal' },
//   { id: 5, name: 'CurePlus  Narasegowda Memorial Hospital', image: '/narasegowda/narasaregoda1.png', status: 'popular' },
//   { id: 6, name: 'CurePlus  Shanivarasanthe Hospital', image: '/Shanivarasanthe/shanivarasanthe.png', status: 'normal' },
//   { id: 7, name: 'CurePlus  Ramapura Hospital', image: '/rampura/rampura.png', status: 'featured' },
//   { id: 8, name: 'CurePlus  Terakanambi Hospital', image: '/terakanamb/terakanamb.png', status: 'normal' },
//   { id: 9, name: 'CurePlus  Bherya Hospital', image: '/bheraya/bheraya.png', status: 'popular' },
//   { id: 10, name: 'CurePlus  T. Narasipura Hospital', image: '/Narasipura/Narasipura.png', status: 'normal' },
//   { id: 11, name: 'CurePlus  Handpost Hospital', image: '/HandPost/HandPost1.png', status: 'featured' },
//   { id: 12, name: 'CurePlus  Hosur Hospital', image: '/hosur/hosur.png', status: 'normal' },
//   { id: 13, name: 'CurePlus  Halli Mysore Hospital', image: '/halli/halli.png', status: 'popular' },
// ];

// // const statusColors = {
// //   normal: 'bg-gray-100 text-gray-800',
// //   popular: 'bg-yellow-100 text-yellow-800',
// //   featured: 'bg-blue-100 text-blue-800',
// //   emergency: 'bg-red-100 text-red-800'
// // };

// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.1 },
//   }),
// };

// const Page = () => {
//   const params = useParams();
//   const hospitalId = Number(params.slug);
//   const hospital = hospitals.find((h) => h.id === hospitalId);

//   if (!hospital) {
//     return (
//       <div className="flex items-center justify-center h-screen text-red-600 text-xl font-semibold">
//         Hospital not found.
//       </div>
//     );
//   }

//   // Determine hospital status (you can add this to your hospital data)
//   // const hospitalStatus: keyof typeof statusColors = hospitalsList.find(h => h.id === hospitalId)?.status as keyof typeof statusColors || 'normal';

//   return (
//     <>
//       <div className="max-w-7xl mx-auto px-6 py-10 text-gray-800 flex gap-8">
//         {/* Main Content */}
//         <div className="w-full lg:w-3/4">
//           {/* Hospital Header with Status */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="mb-12 relative"
//           >
//             <div className="relative">
//               <img
//                 src={hospital.imageUrl}
//                 alt={hospital.name}
//                 className="w-full h-72 object-cover rounded-xl shadow-lg"
//               />
//               {/* <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${statusColors[hospitalStatus]}`}>
//                 {hospitalStatus === 'popular' && (
//                   <span className="flex items-center gap-1">
//                     <HiOutlineStar className="w-4 h-4" /> Popular
//                   </span>
//                 )}
//                 {hospitalStatus === 'featured' && (
//                   <span className="flex items-center gap-1">
//                     <MdOutlineVerified className="w-4 h-4" /> Featured
//                   </span>
//                 )}
//                 {hospitalStatus === 'normal' && 'Standard'}
//               </div> */}
//             </div>

//             <div className="mt-6 flex justify-between items-start">
//               <div>
//                 <motion.h1
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="text-4xl font-extrabold text-gray-900"
//                 >
//                   {hospital.name}
//                 </motion.h1>
//                 <div className="flex items-center gap-2 text-gray-600 mt-2">
//                   <HiOutlineLocationMarker className="text-blue-600 w-5 h-5" />
//                   <span className="text-lg">{hospital.location}</span>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
//                 <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
//                 <span className="text-green-800 font-medium">Open Now</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Key Highlights */}
//           <motion.section
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             custom={1}
//             className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
//           >
//             <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-3">
//               <FaUserMd className="text-purple-600 w-6 h-6" />
//               <div>
//                 <p className="text-sm text-purple-600 ">Specialists</p>
//                 <p className="font-bold text-purple-600 ">{hospital.specialists || '10+'}</p>
//               </div>
//             </div>
//             <div className="bg-purple-50 p-4 rounded-xl flex items-center gap-3">
//               <FaProcedures className="text-purple-600 w-6 h-6" />
//               <div>
//                 <p className="text-sm text-purple-600 ">Beds</p>
//                 <p className="font-bold text-purple-600 ">{hospital.beds || '20+'}</p>
//               </div>
//             </div>
//             <div className="bg-green-50 p-4 rounded-xl flex items-center gap-3">
//               <MdOutlineEmergency className="text-purple-600 w-6 h-6" />
//               <div>
//                 <p className="text-sm text-purple-600 ">Emergency</p>
//                 <p className="font-bold text-purple-600 ">24/7</p>
//               </div>
//             </div>
//             <div className="bg-orange-50 p-4 rounded-xl flex items-center gap-3">
//               <HiOutlineStar className="text-purple-600  w-6 h-6" />
//               <div>
//                 <p className="text-sm text-purple-600 ">Rating</p>
//                 <p className="font-bold text-purple-600 ">4.8/5</p>
//               </div>
//             </div>
//           </motion.section>

//           {/* About Section */}
//           <div className="mb-12 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
//             <h2 className="text-2xl font-semibold mb-3 border-b pb-2 flex items-center gap-2">
//               <MdLocalHospital className="text-blue-600" />
//               About the Hospital
//             </h2>
//             <p className="text-base leading-relaxed whitespace-pre-line">{hospital.description}</p>
//           </div>

//           {/* Services & Facilities */}
//           <motion.section
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             custom={2}
//             className="grid md:grid-cols-2 gap-10 mb-12"
//           >
//             <div>
//               <h2 className="text-2xl font-semibold mb-3 border-b pb-2 flex items-center gap-2">
//                 <FaProcedures className="text-blue-600" />
//                 Services
//               </h2>
//               <ul className="space-y-4">
//                 {hospital.services.map((service, i) => (
//                   <motion.li
//                     key={i}
//                     variants={fadeIn}
//                     custom={i + 1}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-200"
//                   >
//                     <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
//                       <MdLocalHospital className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <span className="text-gray-700 font-medium">{service.label}</span>
//                       {typeof service.icon === 'function' && (
//                         <p className="text-sm text-gray-500 mt-1">No additional description available</p>
//                       )}
//                     </div>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h2 className="text-2xl font-semibold mb-3 border-b pb-2 flex items-center gap-2">
//                 <MdOutlineLocalHotel className="text-green-600" />
//                 Facilities
//               </h2>
//               <ul className="grid grid-cols-2 gap-4">
//                 {hospital.facilities.map((facility, i) => (
//                   <motion.li
//                     key={i}
//                     variants={fadeIn}
//                     custom={i + 1}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     className="flex items-center gap-3 bg-green-50 p-3 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-200"
//                   >
//                     <div className="p-1.5 rounded-lg bg-green-100 text-green-600">
//                       {facility.icon?.toString() === 'wifi' && <FaWifi className="w-4 h-4" />}
//                       {facility.icon?.toString() === 'parking' && <FaParking className="w-4 h-4" />}
//                       {!facility.icon && <MdOutlineLocalHotel className="w-4 h-4" />}
//                     </div>
//                     <span className="text-gray-700 text-sm font-medium">{facility.label}</span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </motion.section>

//           {/* Infrastructure */}
//           <motion.section
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             custom={3}
//             className="mb-12 bg-white p-6 rounded-xl shadow-md"
//           >
//             <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Infrastructure</h2>
//             <p className="text-base leading-relaxed">{hospital.infrastructure}</p>

//             {hospital.departments && (
//               <div className="mt-6">
//                 <h3 className="text-xl font-semibold mb-3">Departments</h3>
//                 <div className="flex flex-wrap gap-3">
//                   {Array.isArray(hospital.departments) &&
//                     hospital.departments.map((dept, i) => (
//                       <span key={i} className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
//                         {dept}
//                       </span>
//                     ))}
//                 </div>
//               </div>
//             )}
//           </motion.section>

//           {/* Gallery */}
//           <motion.section
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             custom={4}
//             className="mb-12"
//           >
//             <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Gallery</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//               {hospital.gallery.map((img, idx) => (
//                 <motion.div
//                   key={idx}
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="relative group overflow-hidden rounded-lg shadow-md"
//                 >
//                   <img
//                     src={img}
//                     alt={`Hospital Gallery ${idx + 1}`}
//                     className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     {/* <button className="bg-white bg-opacity-90 p-2 rounded-full">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                       </svg>
//                     </button> */}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>

//           {/* Contact & Hours */}
//           <motion.section
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             custom={5}
//             className="grid md:grid-cols-2 gap-8 mb-12"
//           >
//             <div className="bg-gray-50 p-6 rounded-xl shadow-md">
//               <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Contact Information</h2>
//               <div className="space-y-4 text-gray-700">
//                 <div className="flex items-start gap-3">
//                   <HiOutlineLocationMarker className="text-purple-600 w-5 h-5 mt-1" />
//                   <div>
//                     {/* <p className="font-medium">Address</p> */}
//                     <p className='text-purple-600 '>{hospital.contact.address}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <HiOutlinePhone className="text-purple-600 w-5 h-5" />
//                   <div>

//                     <a href={`tel:${hospital.contact.phone}`} className="text-purple-600 underline">
//                       {hospital.contact.phone}
//                     </a>

//                   </div>
//                 </div>
//                 {hospital.contact.email && (
//                   <div className="flex items-center gap-3">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                     <div>
//                       <p className="font-medium">Email</p>
//                       <p>{hospital.contact.email}</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>


//             <div className="bg-gray-50 p-6 rounded-xl shadow-md">
//               <h2 className="text-2xl font-semibold mb-4 border-b pb-2 flex items-center gap-2">
//                 <HiOutlineClock className="text-orange-500" />
//                 Opening Hours
//               </h2>
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Monday - Friday</span>
//                   <span className="font-medium">24 Hours</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Saturday</span>
//                   <span className="font-medium">24 Hours</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Sunday</span>
//                   <span className="font-medium">24 Hours</span>
//                 </div>
//                 <div className="pt-3 mt-3 border-t">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Emergency Services</span>
//                     <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">24/7 Available</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.section>
//         </div>

//         <div className='flex flex-col gap-4'>
//           <div className="p-4 bg-red-50 rounded-xl shadow-md border border-red-100">
//             <h3 className="text-lg font-bold mb-3 text-red-800 flex items-center gap-2">
//               <MdOutlineEmergency className="w-5 h-5" />
//               Emergency Contact
//             </h3>
//             <div className="space-y-2">
//               <div className="flex items-center gap-2">
//                 <HiOutlinePhone className="w-4 h-8 text-red-600 " />
//                 <span className="text-red-800 font-bold text-3xl">+91 90351 93777</span>
//               </div>
//               <p className="text-xs text-red-700 mt-2">Available 24/7 for emergencies</p>
//             </div>
//           </div>

//           {/* Sidebar Hospital List */}
//           <aside className="hidden lg:block w-full space-y-4 sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">

//             <div className="p-4 bg-white rounded-xl shadow-md">
//               <h3 className="text-xl font-bold mb-4 border-b pb-2">Our Network</h3>
//               <ul className="space-y-3">
//                 {hospitalsList.map((hosp) => (
//                   <Link
//                     key={hosp.id}
//                     href={`/hospital/${hosp.id}`}
//                     className={`block rounded-lg transition-colors duration-200 ${hospitalId === hosp.id ? 'bg-gray-200' : 'hover:bg-gray-100'
//                       }`}
//                   >
//                     <li className="flex items-center gap-3 p-3">
//                       <div className="relative">
//                         <img
//                           src={hosp.image}
//                           alt={hosp.name}
//                           className="w-12 h-12 object-cover rounded-md shadow"
//                         />
//                         {/* {hosp.status !== 'normal' && (
//                         <span className={`absolute -top-2 -right-2 text-xs px-1.5 py-0.5 rounded-full ${statusColors[hosp.status as keyof typeof statusColors]}`}>
//                           {hosp.status === 'popular' && '★'}
//                           {hosp.status === 'featured' && '✓'}
//                         </span>
//                       )} */}
//                       </div>
//                       <div>
//                         <span className={`text-sm font-medium ${hospitalId === hosp.id ? 'text-blue-800' : 'text-gray-800'
//                           }`}>
//                           {hosp.name}
//                         </span>
//                         <div className="flex items-center gap-1 mt-1">
//                           <HiOutlineStar className="w-3 h-3 text-yellow-500" />
//                           <span className="text-xs text-gray-500">4.8</span>
//                         </div>
//                       </div>
//                     </li>
//                   </Link>
//                 ))}
//               </ul>
//             </div>
//           </aside>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Page;







'use client';

import Footer from '@/app/component/FooterSection';
import { hospitals } from '@/app/data/Hospital';
import { useParams } from 'next/navigation';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaParking, FaProcedures, FaUserMd, FaWifi } from 'react-icons/fa';
import { HiOutlineClock, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineStar } from 'react-icons/hi';
import { MdLocalHospital, MdOutlineEmergency, MdOutlineLocalHotel } from 'react-icons/md';

const hospitalsList = [
  { id: 1, name: 'CurePlus Disha Hospital', image: '/cureplus/cureplus.png', status: 'popular' },
  { id: 2, name: 'CurePlus Dharani Hospital', image: '/dharni/dharni.png', status: 'normal' },
  { id: 3, name: 'CurePlus Kaveri Hospital', image: '/kaveri/kaveri1.png', status: 'featured' },
  { id: 4, name: 'CurePlus Krishna Hospital', image: '/krishna/krishna1.png', status: 'normal' },
  { id: 5, name: 'CurePlus Narasegowda Memorial Hospital', image: '/narasegowda/narasaregoda1.png', status: 'popular' },
  { id: 6, name: 'CurePlus Shanivarasanthe Hospital', image: '/Shanivarasanthe/shanivarasanthe.png', status: 'normal' },
  { id: 7, name: 'CurePlus Ramapura Hospital', image: '/rampura/rampura.png', status: 'featured' },
  { id: 8, name: 'CurePlus Terakanambi Hospital', image: '/terakanamb/terakanamb.png', status: 'normal' },
  { id: 9, name: 'CurePlus Bherya Hospital', image: '/bheraya/bheraya.png', status: 'popular' },
  { id: 10, name: 'CurePlus T. Narasipura Hospital', image: '/Narasipura/Narasipura.png', status: 'normal' },
  { id: 11, name: 'CurePlus Handpost Hospital', image: '/HandPost/HandPost1.png', status: 'featured' },
  { id: 12, name: 'CurePlus Hosur Hospital', image: '/hosur/hosur.png', status: 'normal' },
  { id: 13, name: 'CurePlus Halli Mysore Hospital', image: '/halli/halli.png', status: 'popular' },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const Page = () => {
  const params = useParams();
  const hospitalId = Number(params.slug);
  const hospital = hospitals.find((h) => h.id === hospitalId);

  if (!hospital) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600 text-xl font-semibold">
        Hospital not found.
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          {/* Hospital Header with Status - Bigger Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-12 relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={hospital.imageUrl}
                alt={hospital.name}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl font-extrabold text-gray-900"
                >
                  {hospital.name}
                </motion.h1>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <HiOutlineLocationMarker className="text-blue-600 w-5 h-5" />
                  <span className="text-base sm:text-lg">{hospital.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg w-full sm:w-auto justify-center sm:justify-start">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-800 font-medium">Open Now</span>
              </div>
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12"
          >
            <div className="bg-blue-50 p-3 sm:p-4 rounded-xl flex items-center gap-3">
              <FaUserMd className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <p className="text-xs sm:text-sm text-purple-600">Specialists</p>
                <p className="font-bold text-purple-600 text-sm sm:text-base">{hospital.specialists || '10+'}</p>
              </div>
            </div>
            <div className="bg-purple-50 p-3 sm:p-4 rounded-xl flex items-center gap-3">
              <FaProcedures className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <p className="text-xs sm:text-sm text-purple-600">Beds</p>
                <p className="font-bold text-purple-600 text-sm sm:text-base">{hospital.beds || '20+'}</p>
              </div>
            </div>
            <div className="bg-green-50 p-3 sm:p-4 rounded-xl flex items-center gap-3">
              <MdOutlineEmergency className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <p className="text-xs sm:text-sm text-purple-600">Emergency</p>
                <p className="font-bold text-purple-600 text-sm sm:text-base">24/7</p>
              </div>
            </div>
            <div className="bg-orange-50 p-3 sm:p-4 rounded-xl flex items-center gap-3">
              <HiOutlineStar className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <p className="text-xs sm:text-sm text-purple-600">Rating</p>
                <p className="font-bold text-purple-600 text-sm sm:text-base">4.8/5</p>
              </div>
            </div>
          </motion.section>

          {/* About Section */}
          <div className="mb-12 p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 border-b pb-2 flex items-center gap-2">
              <MdLocalHospital className="text-blue-600" />
              About the Hospital
            </h2>
            <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line">{hospital.description}</p>
          </div>

          {/* Services & Facilities */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={2}
            className="grid md:grid-cols-2 gap-6 sm:gap-10 mb-12"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 border-b pb-2 flex items-center gap-2">
                <FaProcedures className="text-blue-600" />
                Services
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {hospital.services.map((service, i) => (
                  <motion.li
                    key={i}
                    variants={fadeIn}
                    custom={i + 1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-blue-50 p-3 sm:p-4 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-200"
                  >
                    <div className="p-1.5 sm:p-2 rounded-lg bg-blue-100 text-blue-600">
                      <MdLocalHospital className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{service.label}</span>
                      {typeof service.icon === 'function' && (
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">No additional description available</p>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 border-b pb-2 flex items-center gap-2">
                <MdOutlineLocalHotel className="text-green-600" />
                Facilities
              </h2>
              <ul className="grid grid-cols-2 gap-3 sm:gap-4">
                {hospital.facilities.map((facility, i) => (
                  <motion.li
                    key={i}
                    variants={fadeIn}
                    custom={i + 1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-green-50 p-2 sm:p-3 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-200"
                  >
                    <div className="p-1 sm:p-1.5 rounded-lg bg-green-100 text-green-600">
                      {facility.icon?.toString() === 'wifi' && <FaWifi className="w-3 h-3 sm:w-4 sm:h-4" />}
                      {facility.icon?.toString() === 'parking' && <FaParking className="w-3 h-3 sm:w-4 sm:h-4" />}
                      {!facility.icon && <MdOutlineLocalHotel className="w-3 h-3 sm:w-4 sm:h-4" />}
                    </div>
                    <span className="text-gray-700 text-xs sm:text-sm font-medium">{facility.label}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Infrastructure */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={3}
            className="mb-12 bg-white p-4 sm:p-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 border-b pb-2">Infrastructure</h2>
            <p className="text-sm sm:text-base leading-relaxed">{hospital.infrastructure}</p>

            {hospital.departments && (
              <div className="mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Departments</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {Array.isArray(hospital.departments) &&
                    hospital.departments.map((dept, i) => (
                      <span key={i} className="bg-blue-50 text-blue-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                        {dept}
                      </span>
                    ))}
                </div>
              </div>
            )}
          </motion.section>

          {/* Gallery */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={4}
            className="mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 border-b pb-2">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {hospital.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group overflow-hidden rounded-lg shadow-md aspect-square"
                >
                  <img
                    src={img}
                    alt={`Hospital Gallery ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact & Hours */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={5}
            className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12"
          >
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 border-b pb-2">Contact Information</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <HiOutlineLocationMarker className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" />
                  <div>
                    <p className='text-purple-600 text-sm sm:text-base'>{hospital.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlinePhone className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
                  <div>
                    <a href={`tel:${hospital.contact.phone}`} className="text-purple-600 underline text-sm sm:text-base">
                      {hospital.contact.phone}
                    </a>
                  </div>
                </div>
                {hospital.contact.email && (
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Email</p>
                      <p className="text-sm sm:text-base">{hospital.contact.email}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 border-b pb-2 flex items-center gap-2">
                <HiOutlineClock className="text-orange-500" />
                Opening Hours
              </h2>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">24 Hours</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">24 Hours</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">24 Hours</span>
                </div>
                <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Emergency Services</span>
                    <span className="bg-red-100 text-red-800 px-2 py-0.5 sm:px-2 sm:py-1 rounded text-xs sm:text-sm font-medium">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4 lg:sticky lg:top-6 lg:self-start">
          {/* Emergency Contact Card */}
          <div className="p-4 bg-red-50 rounded-xl shadow-md border border-red-100">
            <h3 className="text-lg font-bold mb-3 text-red-800 flex items-center gap-2">
              <MdOutlineEmergency className="w-5 h-5" />
              Emergency Contact
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <HiOutlinePhone className="w-4 h-8 text-red-600" />
                <span className="text-red-800 font-bold text-2xl sm:text-3xl">+91 90351 93777</span>
              </div>
              <p className="text-xs text-red-700 mt-2">Available 24/7 for emergencies</p>
            </div>
          </div>

          {/* Hospital Network Sidebar */}
          <div className="p-4 bg-white rounded-xl shadow-md">
            <h3 className="text-lg sm:text-xl font-bold mb-4 border-b pb-2">Our Network</h3>
            <ul className="space-y-2 sm:space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {hospitalsList.map((hosp) => (
                <Link
                  key={hosp.id}
                  href={`/hospital/${hosp.id}`}
                  className={`block rounded-lg transition-colors duration-200 ${hospitalId === hosp.id ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                >
                  <li className="flex items-center gap-3 p-2 sm:p-3">
                    <div className="relative">
                      <img
                        src={hosp.image}
                        alt={hosp.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-md shadow"
                      />
                    </div>
                    <div>
                      <span className={`text-xs sm:text-sm font-medium ${hospitalId === hosp.id ? 'text-blue-800' : 'text-gray-800'}`}>
                        {hosp.name}
                      </span>
                      <div className="flex items-center gap-1 mt-0.5">
                        <HiOutlineStar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-500" />
                        <span className="text-xs text-gray-500">4.8</span>
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;