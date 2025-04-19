// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaRegArrowAltCircleRight, FaRegClock, FaRegCircle } from 'react-icons/fa';

// const timelineData = [
//   {
//     year: '2017',
//     title: 'Startup Inception',
//     description: 'Started with a vision to make healthcare accessible.',
//     icon: <FaRegArrowAltCircleRight className="text-orange-500 w-6 h-6" />,
//   },
//   {
//     year: '2019',
//     title: 'Program Launch',
//     description: 'Launched SAS Poorna Arogya to reach rural communities.',
//     icon: <FaRegClock className="text-orange-500 w-6 h-6" />,
//   },
//   {
//     year: '2021',
//     title: 'Tech Expansion',
//     description: 'Collaborated with US firms to grow IT capabilities.',
//     icon: <FaRegCircle className="text-orange-500 w-6 h-6" />,
//   },
//   {
//     year: '2023',
//     title: 'Rebranded to SBPL',
//     description: 'Scaled into multiple sectors and renamed to SBPL.',
//     icon: <FaRegArrowAltCircleRight className="text-orange-500 w-6 h-6" />,
//   }
// ];

// const HorizontalTimeline = () => {
//   return (
//     <div className="bg-white py-20 px-4 font-sans">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-orange-500">SBPL Growth Timeline</h1>
//         <p className="text-gray-600 mt-2">Key milestones of our journey</p>
//       </div>


//       < div className="flex justify-center items-center">
//         <div className="flex items-start relative space-x-20 px-10 min-w-[800px] sm:min-w-[600px] md:min-w-[800px] lg:min-w-[1000px] flex-col sm:flex-row">
//           {/* Vertical line */}
//           <div className="absolute hidden sm:block top-10 left-0 right-0 h-1 bg-gray-200 z-0" />

//           {timelineData.map((event, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true, amount: 0.2 }}
//               className="relative z-10 w-60 flex-shrink-0 text-center mb-10 sm:mb-0"
//             >
//               <div className="flex flex-col items-center mb-4">
//                 <div className="bg-white rounded-full p-3 shadow-md z-10">
//                   {event.icon}
//                 </div>
//                 <div className="w-1 h-6 bg-orange-500 mt-1" />
//               </div>
//               <h3 className="text-orange-500 font-semibold text-md">{event.year}</h3>
//               <h4 className="text-gray-800 font-bold">{event.title}</h4>
//               <p className="text-sm text-gray-600 mt-1">{event.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HorizontalTimeline;


'use client';

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRegArrowAltCircleRight, FaRegClock, FaRegCircle } from 'react-icons/fa';

const timelineData = [
  {
    year: '2017',
    title: 'Startup Inception',
    description: 'Started with a vision to make healthcare accessible.',
    icon: <FaRegArrowAltCircleRight className="text-orange-500 w-6 h-6" />,
  },
  {
    year: '2019',
    title: 'Program Launch',
    description: 'Launched SAS Poorna Arogya to reach rural communities.',
    icon: <FaRegClock className="text-orange-500 w-6 h-6" />,
  },
  {
    year: '2021',
    title: 'Tech Expansion',
    description: 'Collaborated with US firms to grow IT capabilities.',
    icon: <FaRegCircle className="text-orange-500 w-6 h-6" />,
  },
  {
    year: '2023',
    title: 'Rebranded to SBPL',
    description: 'Scaled into multiple sectors and renamed to SBPL.',
    icon: <FaRegArrowAltCircleRight className="text-orange-500 w-6 h-6" />,
  }
];

const HorizontalTimeline = () => {
  return (
    <div className="bg-white py-20 px-4 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-500">SBPL Growth Timeline</h1>
        <p className="text-gray-600 mt-2">Key milestones of our journey</p>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative flex flex-col sm:flex-row items-center sm:space-x-20 sm:px-10">
          
          {/* Horizontal line visible only on sm and above */}
          <div className="absolute hidden sm:block top-10 left-0 right-0 h-1 bg-gray-200 z-0" />

          {timelineData.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative z-10 w-60 flex-shrink-0 text-center mb-10 sm:mb-0"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="bg-white rounded-full p-3 shadow-md z-10">
                  {event.icon}
                </div>
                <div className="w-1 h-6 bg-orange-500 mt-1" />
              </div>
              <h3 className="text-orange-500 font-semibold text-md">{event.year}</h3>
              <h4 className="text-gray-800 font-bold">{event.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
