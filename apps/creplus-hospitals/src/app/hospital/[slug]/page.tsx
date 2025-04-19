// 'use client';

// import React from 'react';
// import { useParams } from 'next/navigation';
// import { hospitals } from '@/app/data/Hospital';
// import Footer from '@/app/component/FooterSection';
// import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
// import { MdLocalHospital, MdOutlineLocalHotel } from 'react-icons/md';

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
//       <div className="max-w-7xl mx-auto px-6 py-10 text-gray-800">
//         {/* Header */}
//         <div className="mb-12">
//           <img
//             src={hospital.imageUrl}
//             alt={`Image of ${hospital.name}`}
//             className="w-full h-72 object-cover rounded-xl shadow-lg"
//           />
//           <h1 className="text-4xl font-bold mt-6 text-gray-900">{hospital.name}</h1>
//           <div className="flex items-center gap-3 text-gray-600 mt-2">
//             <HiOutlineLocationMarker className="text-blue-600 w-5 h-5" />
//             <span className="text-lg">{hospital.location}</span>
//           </div>
//         </div>

//         {/* About */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-3 border-b pb-2">About the Hospital</h2>
//           <p className="text-base leading-relaxed whitespace-pre-line">{hospital.description}</p>
//         </section>

//         {/* Services and Facilities */}
//         <section className="grid md:grid-cols-2 gap-10 mb-12">
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Services</h2>
//             <ul className="space-y-3">
//               {hospital.services.map((service, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg shadow-sm"
//                 >
//                   <MdLocalHospital className="text-blue-600 w-5 h-5" />
//                   <span className="text-gray-700">{service.label}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Facilities</h2>
//             <ul className="space-y-3">
//               {hospital.facilities.map((facility, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center gap-3 bg-green-50 p-4 rounded-lg shadow-sm"
//                 >
//                   <MdOutlineLocalHotel className="text-green-600 w-5 h-5" />
//                   <span className="text-gray-700">{facility.label}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>

//         {/* Infrastructure */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Infrastructure</h2>
//           <p className="text-base leading-relaxed">{hospital.infrastructure}</p>
//         </section>

//         {/* Gallery */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Gallery</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//             {hospital.gallery.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt={`Hospital Gallery Image ${idx + 1}`}
//                 className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
//               />
//             ))}
//           </div>
//         </section>

//         {/* Contact Info */}
//         <section className="bg-gray-50 p-6 rounded-xl shadow-sm mb-12">
//           <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Contact Information</h2>
//           <div className="space-y-4 text-gray-700">
//             <div className="flex items-center gap-3">
//               <HiOutlineLocationMarker className="text-blue-500 w-5 h-5" />
//               <span>{hospital.contact.address}</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <HiOutlinePhone className="text-green-500 w-5 h-5" />
//               <span>{hospital.contact.phone}</span>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Page;

'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { hospitals } from '@/app/data/Hospital';
import Footer from '@/app/component/FooterSection';

import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import { MdLocalHospital, MdOutlineLocalHotel } from 'react-icons/md';
import { motion } from 'framer-motion';

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
      <div className="max-w-7xl mx-auto px-6 py-10 text-gray-800">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <img
            src={hospital.imageUrl}
            alt={hospital.name}
            className="w-full h-72 object-cover rounded-xl shadow-lg"
          />
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-extrabold mt-6 text-gray-900"
          >
            {hospital.name}
          </motion.h1>
          <div className="flex items-center gap-2 text-gray-600 mt-2">
            <HiOutlineLocationMarker className="text-blue-600 w-5 h-5" />
            <span className="text-lg">{hospital.location}</span>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-3 border-b pb-2">About the Hospital</h2>
          <p className="text-base leading-relaxed whitespace-pre-line">{hospital.description}</p>
        </motion.section>

        {/* Services & Facilities */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={2}
          className="grid md:grid-cols-2 gap-10 mb-12"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Services</h2>
            <ul className="space-y-4">
              {hospital.services.map((service, i) => (
                <motion.li
                  key={i}
                  variants={fadeIn}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
                >
                  <MdLocalHospital className="text-blue-600 w-6 h-6" />
                  <span className="text-gray-700">{service.label}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Facilities</h2>
            <ul className="space-y-4">
              {hospital.facilities.map((facility, i) => (
                <motion.li
                  key={i}
                  variants={fadeIn}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-green-50 p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
                >
                  <MdOutlineLocalHotel className="text-green-600 w-6 h-6" />
                  <span className="text-gray-700">{facility.label}</span>
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
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Infrastructure</h2>
          <p className="text-base leading-relaxed">{hospital.infrastructure}</p>
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
          <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {hospital.gallery.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Hospital Gallery ${idx + 1}`}
                className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              />
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={5}
          className="bg-gray-50 p-6 rounded-xl shadow-md mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Contact Information</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <HiOutlineLocationMarker className="text-blue-500 w-5 h-5" />
              <span>{hospital.contact.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlinePhone className="text-green-500 w-5 h-5" />
              <span>{hospital.contact.phone}</span>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
