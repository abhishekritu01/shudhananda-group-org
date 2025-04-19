// "use client";
// import { FaHospitalAlt, FaStethoscope, FaPhoneAlt, FaMapMarkerAlt, FaHeartbeat } from "react-icons/fa";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     <div className="h-screen flex flex-col bg-gray-50">
//       <section
//         className="relative w-full bg-cover bg-center text-white py-24 px-8 md:px-20 lg:px-32 flex-grow"
//         style={{
//           backgroundImage:
//             "url('https://source.unsplash.com/1600x900/?premium-hospital,healthcare')",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 opacity-90"></div>
//         <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-center lg:text-left max-w-3xl"
//           >
//             <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 tracking-tight text-gray-100">
//               Leading <span className="text-blue-400">Healthcare Excellence</span>,<br />
//               Tailored for <span className="text-green-400">Your Well-being</span>
//             </h1>
//             <p className="mt-6 text-lg text-gray-300 leading-relaxed">
//               <strong className="text-white">CurePlus Hospitals & Pharmas</strong> delivers world-class healthcare solutions, 24/7 emergency services, and affordable medication at 15+ premium facilities across Karnataka.
//             </p>
//             <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-10 py-4 font-semibold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
//               >
//                 Explore Services
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-transparent border-2 border-white px-10 py-4 font-semibold rounded-3xl hover:bg-white hover:text-blue-950 flex items-center gap-3 transition-all duration-300 shadow-xl"
//               >
//                 <FaPhoneAlt /> Contact Us
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* Right Content - Icons & Visuals */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="grid grid-cols-2 gap-10 lg:gap-16"
//           >
//             {[
//               {
//                 icon: <FaHospitalAlt size={60} className="text-blue-500" />, 
//                 title: "15+ Hospitals",
//                 desc: "State-of-the-art Facilities in Karnataka",
//               },
//               {
//                 icon: <FaStethoscope size={60} className="text-green-500" />, 
//                 title: "24/7 Expert Care",
//                 desc: "Specialized & Emergency Services Anytime",
//               },
//               {
//                 icon: <FaMapMarkerAlt size={60} className="text-yellow-500" />, 
//                 title: "Expanding Horizons",
//                 desc: "Upcoming Locations: Goa & Maharashtra",
//               },
//               {
//                 icon: <FaHeartbeat size={60} className="text-red-500" />, 
//                 title: "Cure+ Pharmas",
//                 desc: "Affordable, In-House Medicines",
//               },
//             ].map((item, idx) => (
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 key={idx}
//                 className="flex items-start gap-5 bg-white text-blue-950 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-transform duration-300"
//               >
//                 {item.icon}
//                 <div>
//                   <h3 className="font-semibold text-2xl mb-2">{item.title}</h3>
//                   <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;


// 'use client';

// import { motion } from 'framer-motion';

// const HeroSection = () => {
//   return (
//     <section
//       className="relative w-full min-h-screen bg-cover bg-center text-white flex items-center justify-center px-6 md:px-16 lg:px-24"
//       style={{
//         backgroundImage:
//           "url('https://s3-alpha-sig.figma.com/img/5883/70b2/d9fa2192c64402e1758d345ef8262e74?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UH0n4pl7fLm0VXJQzXoOqj59sUjmohyogam7SWJWx4FaRZ0JoM9uNzLuRfUOCTpjCqPiLA8XjWzCpM-MeXo4Amu2H~x0DA5gSdUm7UvjNo6KcVROc9apK5CzXdKKJwi3g1ApLmnB~tvHfVfGjCkMk3BI-6Yr8EUV0J70yqmdYENiKreM2ZDEzftx68u3TB5VNMNuj37tyDo4SotuxYPl-SZWed-oY8xIdVpo1OHRmbqadTvAZLCDB6ZkhEysD2gx0E1gs9wECFMG3qtHa8zqzlKEAN6SNXFk5NI1XYPCwLSZulfV80s-a59xc6BGE7df5lfDhysz0zAh8~1NQTDmWw__')"
//       }}
//     >
//       {/* Overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

//       {/* Text Content */}
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9 }}
//         className="relative z-10 text-center max-w-4xl"
//       >
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-balance">
//           Excellence in Healthcare <br className="hidden md:inline-block" />
//           Accessible for Everyone
//         </h1>

//         <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
//           Delivering compassionate, technology-driven healthcare that puts patients first —
//           because your well-being is our purpose, every step of the way.
//         </p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-10"
//         >
//           <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 font-semibold rounded-xl shadow-xl transition-all duration-300">
//             Explore Services
//           </button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;



// 'use client';

// import { motion } from 'framer-motion';

// const HeroSection = () => {
//   return (
//     <section className="min-h-screen w-full bg-white flex items-center px-6 md:px-16 lg:px-24">
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.9 }}
//           className="w-full lg:w-1/2 text-center lg:text-left"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
//             Excellence in Healthcare <br />
//             <span className="text-purple-600">Accessible for Everyone</span>
//           </h1>

//           <p className="text-lg md:text-xl text-gray-600 mb-8">
//             Delivering compassionate, technology-driven healthcare that puts patients first — 
//             because your well-being is our purpose, every step of the way.
//           </p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 font-semibold rounded-xl shadow-xl transition-all duration-300">
//               Explore Services
//             </button>
//           </motion.div>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.9 }}
//           className="w-full lg:w-1/2"
//         >
//           <img
//             src="https://s3-alpha-sig.figma.com/img/5883/70b2/d9fa2192c64402e1758d345ef8262e74?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UH0n4pl7fLm0VXJQzXoOqj59sUjmohyogam7SWJWx4FaRZ0JoM9uNzLuRfUOCTpjCqPiLA8XjWzCpM-MeXo4Amu2H~x0DA5gSdUm7UvjNo6KcVROc9apK5CzXdKKJwi3g1ApLmnB~tvHfVfGjCkMk3BI-6Yr8EUV0J70yqmdYENiKreM2ZDEzftx68u3TB5VNMNuj37tyDo4SotuxYPl-SZWed-oY8xIdVpo1OHRmbqadTvAZLCDB6ZkhEysD2gx0E1gs9wECFMG3qtHa8zqzlKEAN6SNXFk5NI1XYPCwLSZulfV80s-a59xc6BGE7df5lfDhysz0zAh8~1NQTDmWw__"
//             alt="Healthcare Illustration"
//             className="w-full h-auto object-cover rounded-2xl shadow-lg"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative bg-[#f9fafb] w-full min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl font-extrabold text-blue-900 leading-tight mb-6">
            Excellence in Healthcare, <br />
            Accessible to Everyone
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8">
            We deliver compassionate, technology-driven healthcare solutions that prioritize patients at every step.
            Your well-being is our mission — today and always.
          </p>
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              Explore Services
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center lg:justify-end"
        >
          <div className="w-full h-full max-w-xl lg:max-w-full lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://s3-alpha-sig.figma.com/img/5883/70b2/d9fa2192c64402e1758d345ef8262e74?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UH0n4pl7fLm0VXJQzXoOqj59sUjmohyogam7SWJWx4FaRZ0JoM9uNzLuRfUOCTpjCqPiLA8XjWzCpM-MeXo4Amu2H~x0DA5gSdUm7UvjNo6KcVROc9apK5CzXdKKJwi3g1ApLmnB~tvHfVfGjCkMk3BI-6Yr8EUV0J70yqmdYENiKreM2ZDEzftx68u3TB5VNMNuj37tyDo4SotuxYPl-SZWed-oY8xIdVpo1OHRmbqadTvAZLCDB6ZkhEysD2gx0E1gs9wECFMG3qtHa8zqzlKEAN6SNXFk5NI1XYPCwLSZulfV80s-a59xc6BGE7df5lfDhysz0zAh8~1NQTDmWw__"
              alt="Healthcare Professionals"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
