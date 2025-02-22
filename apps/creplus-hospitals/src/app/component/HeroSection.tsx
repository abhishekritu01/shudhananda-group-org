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


















'use client'
import { FaHospitalAlt, FaStethoscope, FaPhoneAlt, FaMapMarkerAlt, FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className=" flex flex-col bg-gray-50">
      <section
        className="relative w-full bg-cover bg-center text-white py-20 px-6 md:px-16 lg:px-24 flex-grow"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?modern-hospital,healthcare')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 bg-opacity-90"></div>
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 mt-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              Excellence in <span className="text-purple-400">Healthcare</span>,
              Accessible for <span className="text-purple-300">Everyone</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              <strong className="text-white">CurePlus Hospitals & Pharmas</strong> provides world-class healthcare, emergency services, and affordable medication at 15+ state-of-the-art facilities across Karnataka.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-8 py-4 font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-transparent border-2 border-white px-8 py-4 font-semibold rounded-2xl hover:bg-white hover:text-purple-950 flex items-center gap-3 transition-all duration-300 shadow-lg"
              >
                <FaPhoneAlt /> Contact Us
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Icons & Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-8 lg:gap-12"
          >
            {[
              {
                icon: <FaHospitalAlt size={50} />, 
                title: "15+ Hospitals",
                desc: "Across Karnataka",
              },
              {
                icon: <FaStethoscope size={50} />, 
                title: "24/7 Care",
                desc: "Specialized & Emergency Services",
              },
              {
                icon: <FaMapMarkerAlt size={50} />, 
                title: "Expanding Reach",
                desc: "Coming Soon: Goa & Maharashtra",
              },
              {
                icon: <FaHeartbeat size={50} />, 
                title: "Cure+ Pharmas",
                desc: "Affordable In-House Medicines",
              },
            ].map((item, idx) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                key={idx}
                className="flex items-start gap-4 bg-white text-purple-950 p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-transform duration-300"
              >
                {item.icon}
                <div>
                  <h3 className="font-semibold text-xl mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;