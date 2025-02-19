// 'use client'
// import React from "react";
// import { motion } from "framer-motion";
// import { MdBloodtype } from "react-icons/md";

// const CTASection = () => {
//   return (
//     <section className="py-16 bg-red-900 text-center text-white">
//       <motion.h2 
//         className="text-4xl font-bold mb-4"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Ready to Make a Difference?
//       </motion.h2>
//       <p className="text-lg mb-6">Your blood donation can save lives. Join us in our mission today!</p>
//       <motion.button 
//         className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
//         whileHover={{ scale: 1.1 }}
//       >
//         Donate Now
//         <MdBloodtype className="inline-block ml-2" />
//       </motion.button>
//     </section>
//   );
// };

// export default CTASection;



'use client'
import React from "react";
import { motion } from "framer-motion";
import { MdBloodtype } from "react-icons/md";

const CTASection = () => {
  return (
    <section className="py-16  text-center text-white px-4 bg-gradient-to-r from-red-600 to-red-900">
      <motion.h2 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Ready to Make a Difference?
      </motion.h2>
      <p className="text-lg mb-6">
        Your blood donation can save lives. Join us in our mission today!
      </p>
      <motion.button 
        className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
        whileHover={{ scale: 1.1 }}
      >
        Donate Now
        <MdBloodtype className="inline-block ml-2" />
      </motion.button>
    </section>
  );
};

export default CTASection;
