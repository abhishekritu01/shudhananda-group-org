// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15 },
//   }),
// };

// const images = [
//   '/Hospital-image/hero1.jpeg',
//   '/Hospital-image/Hero3.jpeg',

// ];

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden text-white">
//       {/* Background Slideshow */}
//       <div className="absolute inset-0 z-0">
//         {images.map((src, index) => (
//           <motion.img
//             key={index}
//             src={src}
//             alt={`Background Slide ${index + 1}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: currentIndex === index ? 1 : 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 w-full h-full object-cover transition-opacity"
//           />
//         ))}
//         <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark overlay for readability */}
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           custom={0}
//           className="text-center lg:text-left"
//         >
//           <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
//             Excellence in Healthcare, <br />
//             Accessible to Everyone
//           </h1>
//           <p className="text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 mb-8">
//             We deliver compassionate, technology-driven healthcare solutions that prioritize patients at every step.
//             Your well-being is our mission — today and always.
//           </p>
//           <Link href="/services">
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
//             >
//               Explore Services
//             </motion.button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;






// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15 },
//   }),
// };

// const images = [
//   '/Hospital-image/hero1.jpeg',
//   '/Hospital-image/Hero3.jpeg',
// ];

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden text-white">
//       {/* Background Slideshow */}
//       <div className="absolute inset-0 z-0">
//         {images.map((src, index) => (
//           <motion.img
//             key={index}
//             src={src}
//             alt={`Background Slide ${index + 1}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: currentIndex === index ? 1 : 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 w-full h-full object-cover transition-opacity"
//           />
//         ))}
//         <div className="absolute inset-0 bg-black/50 z-10" />
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           custom={0}
//           className="text-center lg:text-left"
//         >
//           {/* Launch Badge - Added here */}
//           <motion.div 
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="mb-6 inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30"
//           >
//             <img 
//               src="/path-to-cure-arogya-logo.png" // Replace with your actual image path
//               alt="Cure+ Arogya"
//               className="h-8 mr-3"
//             />
//             <span className="font-medium text-white">
//               We're launching <span className="font-bold">Cure+ Arogya</span>!
//             </span>
//           </motion.div>

//           <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
//             Excellence in Healthcare, <br />
//             Accessible to Everyone
//           </h1>
//           <p className="text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 mb-8">
//             We deliver compassionate, technology-driven healthcare solutions that prioritize patients at every step.
//             Your well-being is our mission — today and always.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <Link href="/services">
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
//               >
//                 Explore Services
//               </motion.button>
//             </Link>
//             <Link href="/cure-arogya"> {/* Add your actual route */}
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
//               >
//                 Learn About Cure+
//               </motion.button>
//             </Link>
//           </div>
//         </motion.div>

//         {/* Optional: You could also place the launch announcement here as an alternative */}
//         <div className="relative hidden lg:block">
//           <div className="absolute -right-10 -top-10 bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20 max-w-xs">
//             <img 
//               src="/path-to-cure-arogya-logo.png" 
//               alt="Cure+ Arogya"
//               className="h-12 mb-3"
//             />
//             <p className="text-white font-medium">
//               Introducing our new initiative <span className="font-bold">Cure+ Arogya</span> - Revolutionizing healthcare accessibility
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { MdOutlineCurrencyRupee } from 'react-icons/md';
// import { HiOutlineUserGroup } from 'react-icons/hi';


// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15 },
//   }),
// };

// const images = [
//   '/Hospital-image/hero1.jpeg',
//   '/Hospital-image/Hero3.jpeg',
// ];

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden text-white">
//       {/* Background Slideshow */}
//       <div className="absolute inset-0 z-0">
//         {images.map((src, index) => (
//           <motion.img
//             key={index}
//             src={src}
//             alt={`Background Slide ${index + 1}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: currentIndex === index ? 1 : 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 w-full h-full object-cover transition-opacity"
//           />
//         ))}
//         <div className="absolute inset-0 bg-black/50 z-10" />
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           custom={0}
//           className="text-center lg:text-left"
//         >
//           {/* Launch Announcement - More Prominent */}
//           <motion.div 
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="mb-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 shadow-lg border border-white/20"
//           >
//             <div className="flex items-center justify-center lg:justify-start">
//               <img 
//                 src="/card.jpeg" 
//                 alt="Cure+ Arogya"
//                 className="h-10 mr-3"
//               />
//               <div>
//                 <h3 className="font-bold text-white text-lg">Now Launched: Cure+ Arogya Card</h3>
//                 <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-1">
//                   <span className="bg-white/20 px-2 py-1 rounded-md text-sm">Kutumba (Family Plan)</span>
//                   <span className="bg-white/20 px-2 py-1 rounded-md text-sm">Hiriya Nagarika (Seniors Plan)</span>
//                   <span className="bg-green-500 px-2 py-1 rounded-md text-sm font-bold">25% Discount</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
//             Excellence in Healthcare, <br />
//             Accessible to Everyone
//           </h1>
//           <p className="text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 mb-8">
//             We deliver compassionate, technology-driven healthcare solutions that prioritize patients at every step.
//             Your well-being is our mission — today and always.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <Link href="/services">
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
//               >
//                 Explore Services
//               </motion.button>
//             </Link>
//             <Link href="/cure-arogya">
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-md transition flex items-center"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
//                 </svg>
//                 Get Your Card
//               </motion.button>
//             </Link>
//           </div>
//         </motion.div>

//         {/* Value Proposition Cards - Visible on desktop */}
//         <div className="hidden lg:block space-y-4">
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.5 }}
//             className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20"
//           >
//             <div className="flex items-start">
//               <div className="bg-purple-100/20 p-3 rounded-lg mr-4">
//               <HiOutlineUserGroup />
//               </div>
//               <div>
//                 <h3 className="font-bold text-white text-xl mb-1">Kutumba Plan</h3>
//                 <p className="text-gray-200">Comprehensive healthcare coverage for your entire family with exclusive 25% discount</p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.7 }}
//             className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20"
//           >
//             <div className="flex items-start">
//               <div className="bg-blue-100/20 p-3 rounded-lg mr-4">
//               <MdOutlineCurrencyRupee />
//               </div>
//               <div>
//                 <h3 className="font-bold text-white text-xl mb-1">Hiriya Nagarika Plan</h3>
//                 <p className="text-gray-200">Specialized healthcare benefits for seniors with additional 25% savings on all services</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// ==================================================================================================================



'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MdOutlineCurrencyRupee } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FaAddressCard } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const images = [
  '/Hospital-image/hero1.jpeg',
  '/Hospital-image/Hero3.jpeg',
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden text-white">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Background Slide ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover transition-opacity"
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
            Excellence in Healthcare, <br />
            Accessible to Everyone
          </h1>
          <p className="text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 mb-8">
            We deliver compassionate, technology-driven healthcare solutions that prioritize patients at every step.
            Your well-being is our mission — today and always.
          </p>
          <div className="flex text-sm  sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
              >
                Explore Services
              </motion.button>
            </Link>

          </div>
        </motion.div>

        {/* Value Proposition Card - Improved Professional Alignment */}
        <div className="hidden lg:flex flex-col space-y-6">
          <div className="flex items-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg">
            <div className="relative flex-shrink-0">
              <img
                src="/card.jpeg"
                alt="Cure+ Arogya Card"
                className="h-28 w-44 object-cover rounded-lg border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-purple-900 font-bold text-xs px-3 py-1 rounded-full shadow-md">
                25% OFF
              </div>
            </div>
            <div className="ml-6 flex-1">
              <h3 className="text-2xl font-extrabold text-white mb-2">Introducing Cure+ Arogya Card</h3>
              <p className="text-gray-100 mb-4 max-w-lg">
                Exclusive healthcare plans offering comprehensive coverage with a special 25% discount on all services.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="flex items-center bg-white/20 px-3 py-1 rounded-full text-sm">
                  <HiOutlineUserGroup className="mr-2" /> Kutumba (Family Plan)
                </span>
                <span className="flex items-center bg-white/20 px-3 py-1 rounded-full text-sm">
                  <MdOutlineCurrencyRupee className="mr-2" /> Hiriya Nagarika (Seniors)
                </span>
              </div>
              <Link href="/cure-arogya">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 bg-white text-purple-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-md transition flex items-center gap-2"
                  aria-label="Get Your Cure+ Arogya Card"
                >
                  <FaAddressCard />
                  Get Your Card
                </motion.button>
              </Link>
            </div>
          </div>
        </div>


        {/* for mobile view */}
        {/* <div className="lg:hidden flex flex-col space-y-6">
          <div className="flex items-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg">
            <div className="relative flex-shrink-0">
              <img
                src="/card.jpeg"
                alt="Cure+ Arogya Card"
                className="h-28 w-44 object-cover rounded-lg border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-purple-900 font-bold text-xs px-3 py-1 rounded-full shadow-md">
                25% OFF
              </div>
            </div>
            <div className="ml-6 flex-1">
              <h3 className="text-xl font-extrabold text-white mb-2">Introducing Cure+ Arogya Card</h3>
              <p className="text-gray-100 mb-4 max-w-lg">
                Exclusive healthcare plans offering comprehensive coverage with a special 25% discount on all services.
              </p>
              <Link href="/cure-arogya">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 bg-white text-purple-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-md transition flex items-center gap-2"
                  aria-label="Get Your Cure+ Arogya Card"
                >
                  <FaAddressCard />
                  Get Your Card
                </motion.button>
              </Link>
            </div>
          </div>
        </div> */}

        <div className="lg:hidden flex flex-col space-y-4 p-4">
          <div className="flex flex-col bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl">
            <div className="relative flex justify-center mb-4">
              <img
                src="/card.jpeg"
                alt="Cure+ Arogya Card"
                className="h-24 w-40 object-cover rounded-xl border-4 border-white shadow-md hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-purple-900 font-bold text-[10px] px-2 py-0.5 rounded-full shadow-md">
                25% OFF
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                Introducing Cure+ Arogya Card
              </h3>
              <p className="text-gray-100 text-sm mb-4">
                Exclusive healthcare plans offering comprehensive coverage with a special 25% discount on all services.
              </p>
              <Link href="/cure-arogya" className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 bg-white text-purple-700 hover:bg-gray-100 font-semibold px-4 py-2 rounded-lg shadow-md transition flex items-center gap-2 text-sm"
                  aria-label="Get Your Cure+ Arogya Card"
                >
                  <FaAddressCard className="text-base" />
                  Get Your Card
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



