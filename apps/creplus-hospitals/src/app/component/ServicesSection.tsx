// import { FaHospitalAlt, FaStethoscope, FaPhoneAlt } from 'react-icons/fa';

// const ServicesSection = () => (
//   <section className="py-20 bg-white">
//     <div className="max-w-6xl mx-auto px-6">
//       <h2 className="text-4xl font-extrabold text-purple-800 text-center mb-12">
//         Our Services
//       </h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         <div className="bg-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
//           <FaHospitalAlt size={50} className="text-purple-800 mb-5 mx-auto" />
//           <h3 className="text-2xl font-semibold text-purple-900 mb-3 text-center">
//             15+ Hospitals
//           </h3>
//           <p className="text-gray-600 text-center">
//             Strategically located across Karnataka, ensuring accessible, quality healthcare for all communities.
//           </p>
//         </div>
//         <div className="bg-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
//           <FaStethoscope size={50} className="text-purple-800 mb-5 mx-auto" />
//           <h3 className="text-2xl font-semibold text-purple-900 mb-3 text-center">
//             24/7 Medical Services
//           </h3>
//           <p className="text-gray-600 text-center">
//             Comprehensive emergency and specialized care available round-the-clock, prioritizing patient well-being at every hour.
//           </p>
//         </div>
//         <div className="bg-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
//           <FaPhoneAlt size={50} className="text-purple-800 mb-5 mx-auto" />
//           <h3 className="text-2xl font-semibold text-purple-900 mb-3 text-center">
//             CurePlus  Pharma
//           </h3>
//           <p className="text-gray-600 text-center">
//             Delivering high-quality, affordable medicines through integrated pharmacy services, supporting holistic healthcare solutions.
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default ServicesSection;



// import React from 'react';
// import {
//   FaClinicMedical,
//   FaHeartbeat,
//   FaCapsules,
//   FaProcedures,
//   FaUsers,
//   FaNotesMedical,
// } from 'react-icons/fa';

// const services = [
//   {
//     icon: <FaHeartbeat />,
//     title: '24/7 Medical Care',
//     description:
//       'Round-the-clock emergency and specialized services prioritizing patient well-being.',
//   },
//   {
//     icon: <FaNotesMedical />,
//     title: 'Advanced Diagnostics',
//     description:
//       'State-of-the-art labs and diagnostic tools to ensure accurate and timely care.',
//   },
//   {
//     icon: <FaClinicMedical />,
//     title: 'Multi-Specialty Clinics',
//     description:
//       'Expert care across disciplines, offering a holistic approach to healthcare.',
//   },
//   {
//     icon: <FaCapsules />,
//     title: 'CurePlus  Pharma',
//     description:
//       'High-quality, affordable medicines through integrated pharmacy services.',
//   },
//   {
//     icon: <FaUsers />,
//     title: 'Community Health Camps',
//     description:
//       'Free health check-ups and awareness drives to reach underserved communities.',
//   },
//   {
//     icon: <FaProcedures />,
//     title: 'Compassionate Service',
//     description:
//       'Empathetic and personalized care by our dedicated healthcare professionals.',
//   },
// ];

// const ServicesSection = () => (
//   <section className="py-20 bg-white">
//     <div className="max-w-6xl mx-auto px-6">
//       <h2 className="text-4xl font-extrabold text-purple-800 text-center mb-12">
//         Our Core Services
//       </h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
//           >
//             <div className="text-purple-800 text-5xl mb-5 flex justify-center">
//               {service.icon}
//             </div>
//             <h3 className="text-2xl font-semibold text-purple-900 mb-3 text-center">
//               {service.title}
//             </h3>
//             <p className="text-gray-600 text-center">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default ServicesSection



// 'use client';

// import React from 'react';
// import {
//   FaClinicMedical,
//   FaHeartbeat,
//   FaCapsules,
//   FaProcedures,
//   FaUsers,
//   FaNotesMedical,
// } from 'react-icons/fa';

// const services = [
//   {
//     icon: <FaHeartbeat />,
//     title: '24/7 Medical Care',
//     description:
//       'Emergency and specialized services prioritizing patient well-being.',
//   },
//   {
//     icon: <FaNotesMedical />,
//     title: 'Advanced Diagnostics',
//     description:
//       'State-of-the-art labs and diagnostic tools for accurate care.',
//   },
//   {
//     icon: <FaClinicMedical />,
//     title: 'Multi-Specialty Clinics',
//     description:
//       'Expert care across disciplines for holistic healthcare.',
//   },
//   {
//     icon: <FaCapsules />,
//     title: 'CurePlus  Pharma',
//     description:
//       'Affordable, high-quality medicines via integrated pharmacy services.',
//   },
//   {
//     icon: <FaUsers />,
//     title: 'Community Health Camps',
//     description:
//       'Free health check-ups and awareness for underserved communities.',
//   },
//   {
//     icon: <FaProcedures />,
//     title: 'Compassionate Service',
//     description:
//       'Empathetic and personalized care by healthcare professionals.',
//   },
// ];

// const ServicesSection = () => (
//   <section className="py-20 bg-gray-50">
//     <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//       {/* Left side: Content */}
//       <div>
//         <h2 className="text-4xl font-extrabold text-purple-800 mb-6">
//           Why Choose CurePlus?
//         </h2>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           At CurePlus Hospitals, we are committed to transforming healthcare
//           with compassion, innovation, and accessibility. Our core services
//           reflect our mission to serve communities with comprehensive medical
//           solutions tailored to every need — from emergency response to
//           diagnostics and pharmaceutical care.
//         </p>
//       </div>

//       {/* Right side: Service cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white p-5 rounded-2xl border border-purple-100 shadow hover:shadow-md transition-all duration-300"
//           >
//             <div className="text-purple-700 text-3xl mb-3 flex justify-center">
//               {service.icon}
//             </div>
//             <h3 className="text-lg font-semibold text-center text-purple-900 mb-1">
//               {service.title}
//             </h3>
//             <p className="text-sm text-gray-600 text-center">
//               {service.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default ServicesSection;




'use client';

import React from 'react';
import {
  FaClinicMedical,
  FaHeartbeat,
  FaCapsules,
  FaProcedures,
  FaUsers,
  FaNotesMedical,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaHeartbeat />,
    title: '24/7 Medical Care',
    description:
      'Emergency and specialized services prioritizing patient well-being.',
  },
  {
    icon: <FaNotesMedical />,
    title: 'Advanced Diagnostics',
    description:
      'State-of-the-art labs and diagnostic tools for accurate care.',
  },
  {
    icon: <FaClinicMedical />,
    title: 'Multi-Specialty Clinics',
    description:
      'Expert care across disciplines for holistic healthcare.',
  },
  {
    icon: <FaCapsules />,
    title: 'CurePlus  Pharma',
    description:
      'Affordable, high-quality medicines via integrated pharmacy services.',
  },
  {
    icon: <FaUsers />,
    title: 'Community Health Camps',
    description:
      'Free health check-ups and awareness for underserved communities.',
  },
  {
    icon: <FaProcedures />,
    title: 'Compassionate Service',
    description:
      'Empathetic and personalized care by healthcare professionals.',
  },
];

const ServicesSection = () => (
  <section
    className="relative py-20 bg-[url('/Hospital-image/whychoose.jpg')] bg-cover bg-center"
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-white bg-opacity-80"></div>

    <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      {/* Left side: Content */}
      <div>
        <h2 className="text-4xl font-extrabold text-purple-600 mb-6">
          Why Choose CurePlus?
        </h2>
        <p className="text-lg text-zinc-600 leading-relaxed">
          At CurePlus Hospitals, we are committed to transforming healthcare
          with compassion, innovation, and accessibility. Our core services
          reflect our mission to serve communities with comprehensive medical
          solutions tailored to every need - from emergency response to
          diagnostics and pharmaceutical care.
        </p>
      </div>

      {/* Right side: Service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl border border-purple-100 shadow hover:shadow-md transition-all duration-300"
          >
            <div className="text-purple-600 text-3xl mb-3 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-center text-purple-600 mb-1">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
