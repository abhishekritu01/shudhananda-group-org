// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaHospital, FaHeartbeat, FaAmbulance } from 'react-icons/fa';
// import { MdOutlineLocalPharmacy } from 'react-icons/md';

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15 },
//   }),
// };

// const hospitalsList = [
//   'Cure Plus Disha Hospital',
//   'Cure Plus Dharani Hospital',
//   'Cure Plus Kaveri Hospital',
//   'Cure Plus Krishna Hospital',
//   'Cure Plus Narasegowda Memorial Hospital',
//   'Cure Plus Bherya Hospital',
//   'Cure Plus Terakanambi Hospital',
//   'Cure Plus Shanivarasanthe Hospital',
//   'Cure Plus Ramapura Hospital',
//   'Cure Plus T. Narasipura Hospital',
//   'Cure Plus Handpost Hospital',
//   'Cure Plus Hosur Hospital',
//   'Cure Plus Halli Mysore Hospital',
// ];

// const page = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
//       {/* Header */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={fadeUp}
//         custom={0}
//         className="text-center mb-12"
//       >
//         <h1 className="text-4xl font-bold mb-3 text-blue-800">About CurePlus Hospitals</h1>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//           Redefining rural healthcare across Karnataka and beyond.
//         </p>
//       </motion.div>

//       {/* Intro Paragraph */}
//       <motion.p
//         variants={fadeUp}
//         custom={1}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="text-lg leading-relaxed mb-10"
//       >
//         CurePlus Hospitals, a flagship initiative by <strong>Sudhanand Health Care Solutions Pvt. Ltd.</strong>, is
//         transforming rural healthcare through a growing network of 15+ hospitals across Karnataka. With a focus on
//         accessibility, affordability, and quality, CurePlus offers 24/7 services, advanced diagnostics, and
//         specialized treatments across multiple medical disciplines. Each hospital is backed by CurePlus Pharma,
//         ensuring affordable medicines and compassionate care.
//       </motion.p>

//       {/* Vision & Mission */}
//       <div className="grid md:grid-cols-3 gap-8 mb-12">
//         <motion.div
//           className="bg-blue-50 p-6 rounded-xl shadow-md"
//           variants={fadeUp}
//           custom={2}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <h2 className="text-xl font-semibold mb-2 text-blue-700">Vision</h2>
//           <p>
//             To become India’s largest rural hospital network by 2028, delivering accessible, affordable, and
//             high-quality healthcare to underserved communities.
//           </p>
//         </motion.div>

//         <motion.div
//           className="bg-green-50 p-6 rounded-xl shadow-md"
//           variants={fadeUp}
//           custom={3}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <h2 className="text-xl font-semibold mb-2 text-green-700">Mission</h2>
//           <p>
//             To deliver accessible, affordable, and compassionate healthcare to rural India through a strong network of
//             hospitals and continuous innovation.
//           </p>
//         </motion.div>

//         <motion.div
//           className="bg-yellow-50 p-6 rounded-xl shadow-md"
//           variants={fadeUp}
//           custom={4}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <h2 className="text-xl font-semibold mb-2 text-yellow-700">Goal</h2>
//           <p>Launch 200+ CurePlus hospitals by 2028 and become India’s largest rural hospital network.</p>
//         </motion.div>
//       </div>

//       {/* Value Proposition */}
//       <motion.div
//         className="grid md:grid-cols-3 gap-6 mb-14"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {[
//           {
//             icon: <FaAmbulance className="text-red-500 w-6 h-6" />,
//             title: '24/7 Services',
//             desc: 'Emergency and routine care available around the clock.',
//           },
//           {
//             icon: <FaHeartbeat className="text-blue-500 w-6 h-6" />,
//             title: 'Advanced Diagnostics',
//             desc: 'Cutting-edge tools for accurate diagnosis and treatment.',
//           },
//           {
//             icon: <MdOutlineLocalPharmacy className="text-green-600 w-6 h-6" />,
//             title: 'CurePlus Pharma',
//             desc: 'In-house pharmacy ensures access to affordable, quality medicines.',
//           },
//         ].map((item, i) => (
//           <motion.div
//             key={i}
//             className="p-5 bg-white border rounded-xl shadow hover:shadow-md transition"
//             variants={fadeUp}
//             custom={i}
//           >
//             <div className="flex items-center gap-3 mb-2">
//               {item.icon}
//               <h3 className="font-semibold text-lg">{item.title}</h3>
//             </div>
//             <p className="text-gray-600 text-sm">{item.desc}</p>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Hub & Spoke */}
//       <motion.div
//         className="mb-14"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeUp}
//         custom={5}
//       >
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Hub & Spoke Model</h2>
//         <p className="text-lg text-gray-700 mb-2">
//           CurePlus operates on a Hub-and-Spoke model with flagship hubs in{' '}
//           <strong>Mysuru</strong> and <strong>Kushalnagar</strong>, and spoke centers in{' '}
//           <strong>Chamarajanagar, Mandya, Hassan</strong> and surrounding regions — ensuring a wide reach from urban to
//           remote communities.
//         </p>
//       </motion.div>

//       {/* Hospital Network */}
//       <motion.div
//         className="mb-20"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeUp}
//         custom={6}
//       >
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Hospitals Under SHPL</h2>
//         <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
//           {hospitalsList.map((hospital, index) => (
//             <motion.li
//               key={index}
//               className="flex items-center gap-2 p-3 bg-gray-50 rounded shadow-sm hover:shadow-md transition"
//               variants={fadeUp}
//               custom={index}
//             >
//               <FaHospital className="text-blue-600" />
//               <span>{hospital}</span>
//             </motion.li>
//           ))}
//         </ul>
//       </motion.div>
//     </div>
//   );
// };

// export default page

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
//   'Cure Plus Disha Hospital',
//   'Cure Plus Dharani Hospital',
//   'Cure Plus Kaveri Hospital',
//   'Cure Plus Krishna Hospital',
//   'Cure Plus Narasegowda Memorial Hospital',
//   'Cure Plus Bherya Hospital',
//   'Cure Plus Terakanambi Hospital',
//   'Cure Plus Shanivarasanthe Hospital',
//   'Cure Plus Ramapura Hospital',
//   'Cure Plus T. Narasipura Hospital',
//   'Cure Plus Handpost Hospital',
//   'Cure Plus Hosur Hospital',
//   'Cure Plus Halli Mysore Hospital',
// ];

// const AboutPage = () => {
//   return (
//     <>
//       <div className="relative max-w-7xl mx-auto px-6 py-20 text-gray-800 overflow-hidden">
//         {/* Background Circles Animation */}
//         <motion.div
//           animate={{ scale: [1, 1.5, 1] }}
//           transition={{ duration: 8, repeat: Infinity }}
//           className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse "
//         />
//         <motion.div
//           animate={{ scale: [1, 1.3, 1] }}
//           transition={{ duration: 10, repeat: Infinity }}
//           className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse "
//         />

//         {/* Header */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           custom={0}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl font-extrabold mb-4 text-blue-900 leading-tight">
//             Building Healthier Communities
//           </h1>
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
//           CurePlus Hospitals, by Sudhanand Health Care Solutions Pvt. Ltd., is revolutionizing rural healthcare
//           through 15+ hospitals in Karnataka. With flagship hubs in Mysuru and Kushalnagar, our hub-and-spoke
//           model ensures both urban and rural access to 24/7 care, advanced diagnostics, and compassionate
//           treatment. Our in-house CurePlus Pharma further delivers affordable medications to all.
//         </motion.p>

//         {/* Vision / Mission / Goal */}
//         <div className="grid md:grid-cols-3 gap-10 mb-16">
//           {[
//             {
//               title: 'Vision',
//               desc:
//                 'To become India’s largest rural hospital network by 2028, delivering accessible, affordable healthcare.',
//               color: 'blue-100',
//               icon: <FaEye className="text-blue-500 w-8 h-8" />,
//             },
//             {
//               title: 'Mission',
//               desc:
//                 'Deliver compassionate healthcare via a strong hospital network and continuous innovation.',
//               color: 'green-100',
//               icon: <FiTarget className="text-green-500 w-8 h-8" />,
//             },
//             {
//               title: 'Goal',
//               desc: '200+ hospitals across India by 2028.',
//               color: 'yellow-100',
//               icon: <FaBullseye className="text-yellow-500 w-8 h-8" />,
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
//                 <h2 className="text-2xl font-bold">{item.title}</h2>
//               </div>
//               <p className="text-gray-700">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Value Proposition */}
//         <div className="grid md:grid-cols-3 gap-8 mb-20">
//           {[ 
//             {
//               icon: <FaAmbulance className="text-red-500 w-8 h-8" />,
//               title: '24/7 Medical Services',
//               desc: 'Round-the-clock emergency and primary healthcare access.',
//             },
//             {
//               icon: <FaHeartbeat className="text-blue-500 w-8 h-8" />,
//               title: 'Advanced Diagnostics',
//               desc: 'High-tech tools and accurate diagnostic support.',
//             },
//             {
//               icon: <MdOutlineLocalPharmacy className="text-green-500 w-8 h-8" />,
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
//               <div className="flex items-center gap-4 mb-3">{item.icon}<h3 className="text-xl font-semibold">{item.title}</h3></div>
//               <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Hub & Spoke */}
//         <motion.div
//           className="mb-14"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           custom={5}
//         >
//           <h2 className="text-3xl font-bold mb-4">Our Hub-and-Spoke Model</h2>
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
//           <h2 className="text-3xl font-bold mb-6 text-blue-900">Hospitals Under SHPL</h2>
//           <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800">
//             {hospitalsList.map((hospital, index) => (
//               <motion.li
//                 key={index}
//                 className="flex items-center gap-2 p-4 bg-gray-50 rounded-xl border hover:shadow-md transition"
//                 variants={fadeUp}
//                 custom={index}
//               >
//                 <FaHospital className="text-blue-700" />
//                 <span>{hospital}</span>
//               </motion.li>
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
//           <h3 className="text-2xl font-semibold mb-4">Join Us In Building A Healthier Future</h3>
//           <Link href="/careers">
//             <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition">
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
  'Cure Plus Disha Hospital',
  'Cure Plus Dharani Hospital',
  'Cure Plus Kaveri Hospital',
  'Cure Plus Krishna Hospital',
  'Cure Plus Narasegowda Memorial Hospital',
  'Cure Plus Bherya Hospital',
  'Cure Plus Terakanambi Hospital',
  'Cure Plus Shanivarasanthe Hospital',
  'Cure Plus Ramapura Hospital',
  'Cure Plus T. Narasipura Hospital',
  'Cure Plus Handpost Hospital',
  'Cure Plus Hosur Hospital',
  'Cure Plus Halli Mysore Hospital',
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
          <h1 className="text-5xl font-extrabold mb-4 text-blue-900 leading-tight">Building Healthier Communities</h1>
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
          CurePlus Hospitals, by Sudhanand Health Care Solutions Pvt. Ltd., is revolutionizing rural healthcare
          through 15+ hospitals in Karnataka. With flagship hubs in Mysuru and Kushalnagar, our hub-and-spoke
          model ensures both urban and rural access to 24/7 care, advanced diagnostics, and compassionate
          treatment. Our in-house CurePlus Pharma further delivers affordable medications to all.
        </motion.p>

        {/* Vision / Mission / Goal */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {[
            {
              title: 'Vision',
              desc: 'To become India’s largest rural hospital network by 2028, delivering accessible, affordable healthcare.',
              color: 'blue-100',
              icon: <FaEye className="text-blue-500 w-8 h-8" />,
            },
            {
              title: 'Mission',
              desc: 'Deliver compassionate healthcare via a strong hospital network and continuous innovation.',
              color: 'green-100',
              icon: <FiTarget className="text-green-500 w-8 h-8" />,
            },
            {
              title: 'Goal',
              desc: '200+ hospitals across India by 2028.',
              color: 'yellow-100',
              icon: <FaBullseye className="text-yellow-500 w-8 h-8" />,
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
                <h2 className="text-2xl font-bold">{item.title}</h2>
              </div>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <FaAmbulance className="text-red-500 w-8 h-8" />,
              title: '24/7 Medical Services',
              desc: 'Round-the-clock emergency and primary healthcare access.',
            },
            {
              icon: <FaHeartbeat className="text-blue-500 w-8 h-8" />,
              title: 'Advanced Diagnostics',
              desc: 'High-tech tools and accurate diagnostic support.',
            },
            {
              icon: <MdOutlineLocalPharmacy className="text-green-500 w-8 h-8" />,
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
                <h3 className="text-xl font-semibold">{item.title}</h3>
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
          <h2 className="text-3xl font-bold mb-4">Our Hub-and-Spoke Model</h2>
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
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Hospitals Under SHPL</h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800">
            {hospitalsList.map((hospital, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2 p-4 bg-gray-50 rounded-xl border hover:shadow-md transition"
                variants={fadeUp}
                custom={index}
              >
                <FaHospital className="text-blue-700" />
                <span>{hospital}</span>
              </motion.li>
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
          <h3 className="text-2xl font-semibold mb-4">Join Us In Building A Healthier Future</h3>
          <Link href="/careers">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition">
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

