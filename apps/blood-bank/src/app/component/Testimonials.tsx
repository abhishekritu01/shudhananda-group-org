// 'use client'
// import React from "react";
// import { motion } from "framer-motion";
// import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "Donor",
//     feedback: "Donating blood is an amazing experience. I feel proud to have helped save lives!",
//     image: "https://randomuser.me/api/portraits/men/1.jpg", // Add an image URL or placeholder
//   },
//   {
//     name: "Sarah Smith",
//     role: "Recipient",
//     feedback: "I received blood during an emergency. I'm forever grateful to the donors.",
//     image: "https://randomuser.me/api/portraits/women/2.jpg", // Add an image URL or placeholder
//   },
//   {
//     name: "Michael Johnson",
//     role: "Donor",
//     feedback: "It feels great knowing that my blood could make a difference in someone's life.",
//     image: "https://randomuser.me/api/portraits/men/2.jpg", // Add an image URL or placeholder
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100 text-center">
//       <motion.h2 
//         className="text-4xl font-bold mb-16 text-gray-900"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Success Stories
//       </motion.h2>
//       <div className="container mx-auto grid md:grid-cols-3 gap-12 px-6">
//         {testimonials.map((testimonial, index) => (
//           <motion.div 
//             key={index} 
//             className="bg-gradient-to-r from-purple-200 to-indigo-300 p-8 rounded-lg shadow-xl hover:scale-105 transition-all duration-300"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.3 }}
//           >
//             <div className="flex justify-center mb-6">
//               <img 
//                 src={testimonial.image}
//                 alt={`${testimonial.name}'s avatar`} 
//                 className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
//               />
//             </div>
//             <p className="italic text-gray-600 mb-4 relative">
//               <FaQuoteLeft className="absolute top-0 left-0 text-2xl text-gray-500 -ml-6" />
//               <span>{testimonial.feedback}</span>
//               <FaQuoteRight className="absolute bottom-0 right-0 text-2xl text-gray-500 -mr-6" />
//             </p>
//             <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
//             <p className="text-gray-500 text-sm">{testimonial.role}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;









// 'use client'
// import React from "react";
// import { motion } from "framer-motion";
// import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "Donor",
//     feedback: "Donating blood is an amazing experience. I feel proud to have helped save lives!",
//     image: "https://randomuser.me/api/portraits/men/1.jpg", // Add an image URL or placeholder
//   },
//   {
//     name: "Sarah Smith",
//     role: "Recipient",
//     feedback: "I received blood during an emergency. I'm forever grateful to the donors.",
//     image: "https://randomuser.me/api/portraits/women/2.jpg", // Add an image URL or placeholder
//   },
//   {
//     name: "Michael Johnson",
//     role: "Donor",
//     feedback: "It feels great knowing that my blood could make a difference in someone's life.",
//     image: "https://randomuser.me/api/portraits/men/2.jpg", // Add an image URL or placeholder
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-20 bg-gradient-to-r from-red-100 via-red-300 to-red-500 text-center">
//       <motion.h2 
//         className="text-4xl font-bold mb-16 text-gray-900"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Success Stories
//       </motion.h2>
//       <div className="container mx-auto grid md:grid-cols-3 gap-12 px-6">
//         {testimonials.map((testimonial, index) => (
//           <motion.div 
//             key={index} 
//             className="bg-gradient-to-r from-red-200 to-red-400 p-8 rounded-lg shadow-xl hover:scale-105 transition-all duration-300"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.3 }}
//           >
//             <div className="flex justify-center mb-6">
//               <img 
//                 src={testimonial.image}
//                 alt={`${testimonial.name}'s avatar`} 
//                 className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
//               />
//             </div>
//             <p className="italic text-gray-600 mb-4 relative">
//               <FaQuoteLeft className="absolute top-0 left-0 text-2xl text-gray-500 -ml-6" />
//               <span>{testimonial.feedback}</span>
//               <FaQuoteRight className="absolute bottom-0 right-0 text-2xl text-gray-500 -mr-6" />
//             </p>
//             <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
//             <p className="text-gray-500 text-sm">{testimonial.role}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;









'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "John Doe",
    role: "Donor",
    feedback: "Donating blood is an amazing experience. I feel proud to have helped save lives!",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Add an image URL or placeholder
  },
  {
    name: "Sarah Smith",
    role: "Recipient",
    feedback: "I received blood during an emergency. I'm forever grateful to the donors.",
    image: "https://randomuser.me/api/portraits/women/2.jpg", // Add an image URL or placeholder
  },
  {
    name: "Michael Johnson",
    role: "Donor",
    feedback: "It feels great knowing that my blood could make a difference in someone's life.",
    image: "https://randomuser.me/api/portraits/men/2.jpg", // Add an image URL or placeholder
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <motion.h2 
        className="text-4xl font-bold mb-16 text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Success Stories
      </motion.h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-12 px-6">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            // className="bg-gradient-to-r from-red-600 to-red-900 p-8 rounded-lg shadow-xl hover:scale-105 transition-all duration-300"
            className="bg-gray-100 p-8 rounded-lg shadow-xl hover:scale-105 transition-all duration-300 text-zinc-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className="flex justify-center mb-6">
              <img 
                src={testimonial.image}
                alt={`${testimonial.name}'s avatar`} 
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <p className="italic text-zinc-900 mb-4 relative">
              <FaQuoteLeft className="absolute top-0 left-0 text-2xl text-zinc-900  -ml-6" />
              <span>{testimonial.feedback}</span>
              <FaQuoteRight className="absolute bottom-0 right-0 text-2xl text-zinc-900 -mr-6" />
            </p>
            <h3 className="text-xl font-semibold text-zinc-900 ">{testimonial.name}</h3>
            <p className="text-zinc-900  text-sm">{testimonial.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
