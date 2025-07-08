// 'use client'
// import React from "react";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white px-4 overflow-hidden bg-gradient-to-r from-red-600 to-red-900">
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//       <motion.div 
//         className="relative z-10 max-w-2xl"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Donate Blood, Save Lives</h1>
//         <p className="text-lg md:text-xl mb-6">Your one donation can save up to three lives. Join us in making a difference.</p>
//         <div className="flex gap-4 justify-center">
//           <motion.button 
//             className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
//             whileHover={{ scale: 1.1 }}
//           >
//             Become a Donor
//           </motion.button>
//           <motion.button 
//             className="bg-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
//             whileHover={{ scale: 1.1 }}
//           >
//             Request Blood
//           </motion.button>
//         </div>
//       </motion.div>
//       <motion.div 
//         className="absolute bottom-10 w-32 h-32 bg-white rounded-full shadow-lg"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.div 
//         className="absolute top-20 left-10 w-40 h-40 bg-red-400 rounded-full opacity-50"
//         animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div 
//         className="absolute top-1/2 right-10 w-24 h-24 bg-red-300 rounded-full opacity-50"
//         animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />
//     </section>
//   );
// };

// export default HeroSection;




// 'use client'
// import React from "react";
// import { motion } from "framer-motion";
// import { FaTint } from "react-icons/fa";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white px-4 overflow-hidden bg-gradient-to-r from-red-700 via-red-800 to-red-900">
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-40" />

//       {/* Main Content */}
//       <motion.div
//         className="relative z-10 max-w-3xl"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
//           Saving Lives, One Donation at a Time
//         </h1>
//         <p className="text-lg sm:text-xl mb-6 text-gray-200">
//           Welcome to <span className="font-semibold text-white">CurePlus Blood Bank</span>, a platform dedicated to connecting donors with those in need. Every drop of blood you donate makes a life-saving difference.
//         </p>

//         <div className="flex flex-wrap gap-4 justify-center">
//           <motion.button
//             className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
//             whileHover={{ scale: 1.05 }}
//           >
//             Join the Community
//           </motion.button>
//           <motion.button
//             className="bg-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition text-white"
//             whileHover={{ scale: 1.05 }}
//           >
//             Book an Appointment
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Animated Blood Icons */}
//       <motion.div
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-red-500 text-5xl opacity-80"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//       >
//         <FaTint />
//       </motion.div>

//       <motion.div
//         className="absolute top-20 left-10 text-red-400 text-6xl opacity-40"
//         animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       >
//         <FaTint />
//       </motion.div>

//       <motion.div
//         className="absolute top-1/2 right-10 text-red-300 text-4xl opacity-40"
//         animate={{ x: [0, -30, 30, 0], y: [0, 30, -30, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       >
//         <FaTint />
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;




// 'use client'
// import React from "react";
// import { motion } from "framer-motion";
// import { FaTint } from "react-icons/fa";

// const bloodGroups = ["O+", "A+", "B+", "AB+", "O-", "A-", "B-", "AB-"];

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-white">
      
//       {/* Animated Blood Group Background */}
//       {bloodGroups.map((group, index) => (
//         <motion.div
//           key={index}
//           className="absolute text-red-500 text-5xl font-bold flex items-center gap-1 opacity-10"
//           style={{
//             top: `${Math.random() * 90}%`,
//             left: `${Math.random() * 90}%`,
//           }}
//           animate={{ y: [0, -20, 20, 0], x: [0, 10, -10, 0] }}
//           transition={{ duration: 12 + index, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <FaTint />
//           <span>{group}</span>
//         </motion.div>
//       ))}

//       {/* Main Content */}
//       <motion.div
//         className="relative z-10 max-w-3xl"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight leading-tight text-red-800">
//           Saving Lives, One Donation at a Time
//         </h1>
//         <p className="text-lg sm:text-xl mb-6 text-gray-700">
//           Welcome to <span className="font-semibold text-red-700">CurePlus Blood Bank</span>, a platform dedicated to connecting donors with those in need. Every drop of blood you donate makes a life-saving difference.
//         </p>

//         <div className="flex flex-wrap gap-4 justify-center">
//           <motion.button
//             className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
//             whileHover={{ scale: 1.05 }}
//           >
//             Join the Community
//           </motion.button>
//           <motion.button
//             className="bg-white border border-red-600 text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-100 transition"
//             whileHover={{ scale: 1.05 }}
//           >
//             Book an Appointment
//           </motion.button>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;



'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const imageSources = [
  "/1.png", "/2.png", "/3.png", "/4.png",
  "/5.png", "/6.png", "/7.png", "/8.png",
];

// Only place images outside the center (like a 3x3 grid, avoid center block)
const generateSafePositions = () => {
  return imageSources.map(() => {
    const positions = [
      { top: `${Math.random() * 30}%`, left: `${Math.random() * 30}%` },              // top-left
      { top: `${Math.random() * 30}%`, left: `${70 + Math.random() * 30}%` },         // top-right
      { top: `${70 + Math.random() * 30}%`, left: `${Math.random() * 30}%` },         // bottom-left
      { top: `${70 + Math.random() * 30}%`, left: `${70 + Math.random() * 30}%` },    // bottom-right
      { top: `${Math.random() * 20}%`, left: `${40 + Math.random() * 20}%` },         // top-center
      { top: `${80 + Math.random() * 20}%`, left: `${40 + Math.random() * 20}%` },    // bottom-center
      { top: `${40 + Math.random() * 20}%`, left: `${Math.random() * 20}%` },         // center-left
      { top: `${40 + Math.random() * 20}%`, left: `${80 + Math.random() * 20}%` },    // center-right
    ];
    return positions[Math.floor(Math.random() * positions.length)];
  });
};

const HeroSection = () => {
  const [positions, setPositions] = useState<Array<{ top: string; left: string }>>([]);

  useEffect(() => {
    setPositions(generateSafePositions());
  }, []);

  const getSize = (index: number) => {
    const mod = index % 3;
    if (mod === 0) return 40;
    if (mod === 1) return 70;
    return 100;
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-white">
      
      {/* Floating Blood Drops (Background Layer) */}
      <div className="absolute inset-0 z-0">
        {positions.length > 0 &&
          imageSources.map((src, index) => {
            const size = getSize(index);
            return (
              <motion.div
                key={index}
                className="absolute opacity-20 select-none pointer-events-none"
                style={positions[index]}
                animate={{ y: [0, -10, 10, 0], x: [0, 8, -8, 0] }}
                transition={{ duration: 12 + index, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src={src} alt={`Blood Drop ${index + 1}`} width={size} height={size} />
              </motion.div>
            );
          })}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight leading-tight text-red-800">
          Saving Lives, One Donation at a Time
        </h1>
        <p className="text-lg sm:text-xl mb-4 text-gray-700">
          Welcome to <span className="font-semibold text-red-700">CurePlus Blood Center</span>, a platform dedicated to connecting donors with those in need. Every drop of blood you donate can make a difference in someone&apos;s life.
        </p>
        <p className="text-base sm:text-lg mb-6 text-gray-600">
          Join us in our mission to save lives by donating blood today. Whether you&apos;re a first-time donor or a regular contributor, your act of kindness counts.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <motion.button
            className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
            whileHover={{ scale: 1.05 }}
          >
           <Link href="/join">Join the Community</Link>
          </motion.button>
          {/* <motion.button
            className="bg-white border border-red-600 text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-100 transition"
            whileHover={{ scale: 1.05 }}
          >
            Book an Appointment
          </motion.button> */}
        </div>

        <div className="bg-red-50 border border-red-100 rounded-lg px-6 py-4 shadow-sm">
          <h2 className="text-xl font-bold text-red-800 mb-2">
            Be a part of something bigger
          </h2>
          <p className="text-gray-700">
            Saving lives is its own reward, but at CurePlus, we like to thank our donors with something special. Every donor receives a certificate of appreciation and exclusive event invites.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
