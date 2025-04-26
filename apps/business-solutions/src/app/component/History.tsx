// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaRegArrowAltCircleRight, FaRegClock, FaRegCircle } from 'react-icons/fa';

// const timelineData = [
//   {
//     year: '2020',
//     title: 'Pre-Underwriting Initiation',
//     description: 'Started with a small team of 4 passionate individuals.',
//     icon: <FaRegArrowAltCircleRight className="text-orange-500 w-5 h-5" />,
//   },
//   {
//     year: '2021',
//     title: 'Claims Process',
//     description: 'Streamlined and implemented structured claims handling operations.',
//     icon: <FaRegClock className="text-orange-500 w-5 h-5" />,
//   },
//   {
//     year: '2022',
//     title: 'Tech Kickoff',
//     description: 'Began IT processes and established a Software Testing team.',
//     icon: <FaRegCircle className="text-orange-500 w-5 h-5" />,
//   },
//   {
//     year: '2023',
//     title: 'Strategic Expansion',
//     description: 'Introduced Accounts, Data Engineering, and Data Analysis functions.',
//     icon: <FaRegArrowAltCircleRight className="text-orange-500 w-5 h-5" />,
//   },
//   {
//     year: '2024',
//     title: 'Advanced Risk & Operations',
//     description: 'Launched Book Rolls operations and Risk Analytics through CAT Modeling.',
//     icon: <FaRegClock className="text-orange-500 w-5 h-5" />,
//   }
// ];

// const HorizontalTimeline = () => {
//   return (
//     <div className="bg-white py-16 px-6 sm:px-8 font-sans">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <motion.h1 
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-3xl sm:text-4xl font-bold text-orange-500 mb-3"
//           >
//             SBPL Growth Timeline
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto"
//           >
//             Key milestones of our journey
//           </motion.p>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl mx-auto"
//           >
//             Starting with four, we have already grown to 100 and will shortly reach 200.
//           </motion.p>
//         </div>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute top-1/2 left-8 right-8 h-[3px] bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 z-0 hidden sm:block" />

//           <div className="grid grid-cols-5 gap-x-2 sm:gap-x-4 relative z-10">
//             {timelineData.map((event, index) => {
//               const isEven = index % 2 === 0;
//               const delay = index * 0.15;

//               return (
//                 <div
//                   key={index}
//                   className="col-span-1 flex flex-col items-center"
//                 >
//                   {/* Top content (for even items) */}
//                   {isEven && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay }}
//                       viewport={{ once: true, margin: "-50px" }}
//                       className="mb-6 w-full px-3 bg-white p-5 rounded-xl shadow-md text-center border-t-4 border-orange-500 mx-1"
//                       style={{ minHeight: '140px' }}
//                     >
//                       <h3 className="text-orange-500 font-bold text-sm mb-2">{event.year}</h3>
//                       <h4 className="text-gray-800 font-bold text-sm mb-3">{event.title}</h4>
//                       <p className="text-gray-600 text-xs leading-relaxed">{event.description}</p>
//                     </motion.div>
//                   )}

//                   {/* Icon with connecting line */}
//                   <div className="relative flex flex-col items-center w-full">
//                     {/* Vertical line for mobile */}
//                     {index !== 0 && (
//                       <div className="absolute h-8 w-[2px] bg-orange-300 top-[-32px] left-1/2 sm:hidden" />
//                     )}
                    
//                     {/* Icon */}
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       whileInView={{ scale: 1 }}
//                       transition={{ duration: 0.3, delay: delay + 0.1 }}
//                       viewport={{ once: true }}
//                       className="bg-white p-3 rounded-full border-2 border-orange-500 shadow-lg z-10 flex items-center justify-center hover:scale-110 transition-transform"
//                     >
//                       {event.icon}
//                     </motion.div>
                    
//                     {/* Vertical line for mobile */}
//                     {index !== timelineData.length - 1 && (
//                       <div className="absolute h-8 w-[2px] bg-orange-300 bottom-[-32px] left-1/2 sm:hidden" />
//                     )}
//                   </div>

//                   {/* Bottom content (for odd items) */}
//                   {!isEven && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay }}
//                       viewport={{ once: true, margin: "-50px" }}
//                       className="mt-6 w-full px-3 bg-white p-5 rounded-xl shadow-md text-center border-t-4 border-orange-500 mx-1"
//                       style={{ minHeight: '140px' }}
//                     >
//                       <h3 className="text-orange-500 font-bold text-sm mb-2">{event.year}</h3>
//                       <h4 className="text-gray-800 font-bold text-sm mb-3">{event.title}</h4>
//                       <p className="text-gray-600 text-xs leading-relaxed">{event.description}</p>
//                     </motion.div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HorizontalTimeline;








// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaChartLine, FaUsers, FaCode, FaDatabase, FaShieldAlt } from 'react-icons/fa';

// const timelineData = [
//   {
//     year: '2020',
//     title: 'Pre-Underwriting Initiation',
//     description: 'Started with a small team of 4 passionate individuals.',
//     icon: <FaUsers className="text-white w-5 h-5" />,
//     color: 'bg-blue-500'
//   },
//   {
//     year: '2021',
//     title: 'Claims Process',
//     description: 'Streamlined and implemented structured claims handling operations.',
//     icon: <FaChartLine className="text-white w-5 h-5" />,
//     color: 'bg-teal-500'
//   },
//   {
//     year: '2022',
//     title: 'Tech Kickoff',
//     description: 'Began IT processes and established a Software Testing team',
//     icon: <FaCode className="text-white w-5 h-5" />,
//     color: 'bg-purple-500'
//   },
//   {
//     year: '2023',
//     title: 'Strategic Expansion',
//     description: ' Introduced Accounts, Data Engineering, and Data Analysis functions.',
//     icon: <FaDatabase className="text-white w-5 h-5" />,
//     color: 'bg-orange-500'
//   },
//   {
//     year: '2024',
//     title: 'Advanced Risk & Operations',
//     description: '  Launched Book Rolls operations and Risk Analytics through CAT Modeling.',
//     icon: <FaShieldAlt className="text-white w-5 h-5" />,
//     color: 'bg-red-500'
//   }
// ];

// const ModernTimeline = () => {
//   return (
//     <div className="bg-gray-50 py-20 px-4 font-sans">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <motion.h1 
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold text-gray-900 mb-4"
//           >    
//             SBPL Growth Timeline
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-gray-600 text-lg max-w-3xl mx-auto"
//           >
//             Key milestones of our journey <br/>
//             Starting with four, we have already grown to 100 and will shortly reach 200.
//           </motion.p>
//         </div>

//         <div className="relative">
//           {/* Progress bar background */}
//           <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full z-0 hidden md:block" />

//           <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
//             {timelineData.map((event, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 {/* Card */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className={`w-full p-6 rounded-2xl shadow-lg bg-white border-l-4 ${event.color.replace('bg', 'border')} mb-4 transition-all hover:shadow-xl`}
//                 >
//                   <div className="flex items-start">
//                     <div className={`${event.color} p-3 rounded-lg mr-4`}>
//                       {event.icon}
//                     </div>
//                     <div>
//                       <span className="text-sm font-medium text-gray-500">{event.year}</span>
//                       <h3 className="text-lg font-bold text-gray-800 mt-1">{event.title}</h3>
//                       <p className="text-gray-600 text-sm mt-2">{event.description}</p>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Connector */}
//                 <div className="hidden md:flex items-center justify-center w-full">
//                   {/* Progress bar fill */}
//                   {index < timelineData.length - 1 && (
//                     <div className={`h-2 ${event.color} flex-grow mr-[-1px] relative`}>
//                       <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full z-20" />
//                     </div>
//                   )}
                  
//                   {/* Current milestone dot */}
//                   <div className={`w-6 h-6 ${event.color} rounded-full flex items-center justify-center relative z-10`}>
//                     <div className="w-3 h-3 bg-white rounded-full"></div>
//                   </div>
                  
//                   {/* Next progress bar fill */}
//                   {index < timelineData.length - 1 && (
//                     <div className="h-2 bg-gray-200 flex-grow ml-[-1px]"></div>
//                   )}
//                 </div>

//                 {/* Mobile connector */}
//                 {index < timelineData.length - 1 && (
//                   <div className="md:hidden w-1 h-8 bg-gray-200 mx-auto"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//             From 4 members in 2020 to 100+ today, with 200 expected by 2025
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ModernTimeline;


// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FaBuilding, 
//   FaChartBar, 
//   FaCogs, 
//   FaDatabase, 
//   FaShieldAlt 
// } from 'react-icons/fa';

// const ProfessionalTimeline = () => {

//   const milestones = [
//     {
//       year: '2020',
//       title: 'Foundation',
//       description: 'Started with a small team of 4 passionate individuals.',
//       icon: <FaBuilding className="text-white w-5 h-5" />,
//       color: 'bg-blue-500',
//       iconBg: 'bg-blue-200'
//     },
//     {
//       year: '2021',
//       title: 'Claims Process',
//       description: 'Streamlined and implemented structured claims handling operations.',
//       icon: <FaChartBar className="text-white w-5 h-5" />,
//       color: 'bg-teal-500',
//       iconBg: 'bg-teal-200'
//     },
//     {
//       year: '2022',
//       title: 'Tech Kickoff',
//       description: 'Began IT processes and established a Software Testing team.',
//       icon: <FaCogs className="text-white w-5 h-5" />,
//       color: 'bg-purple-500',
//       iconBg: 'bg-purple-200'
//     },
//     {
//       year: '2023',
//       title: 'Strategic Expansion',
//       description: 'Introduced Accounts, Data Engineering, and Data Analysis functions.',
//       icon: <FaDatabase className="text-white w-5 h-5" />,
//       color: 'bg-orange-500',
//       iconBg: 'bg-orange-200'
//     },
//     {
//       year: '2024',
//       title: 'Advanced Risk & Operations',
//       description: 'Launched Book Rolls operations and Risk Analytics through CAT Modeling.',
//       icon: <FaShieldAlt className="text-white w-5 h-5" />,
//       color: 'bg-red-500',
//       iconBg: 'bg-red-200'
//     }
   
//   ];

//   return (
//     <div className="bg-white py-20 px-4 font-sans">
//       <div className="max-w-5xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl font-bold text-gray-700 mb-6">SBPL <span className="font-bold text-orange-600 ">Growth Timeline</span></h1>
//           <div className="w-20 h-0.5 bg-orange-600 mx-auto mb-4"></div>
//           <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto ">
//           Key milestones of our journey
// Starting with four, we have already grown to 100 and will shortly reach 200.

//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* Horizontal line - orange 600 as requested */}
//           <div className="absolute top-1/2 left-0 right-0 h-px bg-orange-600 z-0 hidden md:block"></div>

//           <div className="grid md:grid-cols-5 gap-8 md:gap-4 relative z-10">
//             {milestones.map((milestone, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="flex flex-col items-center"
//               >
//                 {/* Year - semi-bold */}
//                 <div className="mb-4">
//                   <span className="text-xs font-semibold text-gray-500 tracking-wider">
//                     {milestone.year}
//                   </span>
//                 </div>

//                 {/* Icon with colored background */}
//                 <div className={`mb-4 w-10 h-10 rounded-full border-2 ${milestone.color} ${milestone.iconBg} flex items-center justify-center`}>
//                   {milestone.icon}
//                 </div>

//                 {/* Card */}
//                 <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow w-full text-center">
//                   {/* Title - bold */}
//                   <h3 className="text-lg font-bold text-gray-800 mb-2">
//                     {milestone.title}
//                   </h3>
//                   {/* Description - normal weight */}
//                   <p className="text-sm text-gray-600 font-normal leading-relaxed">
//                     {milestone.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

      
//       </div>
//     </div>
//   );
// };

// export default ProfessionalTimeline;





'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaCode, FaDatabase, FaShieldAlt } from 'react-icons/fa';

const timelineData = [
  {
    year: '2020',
    title: 'Pre-Underwriting Initiation',
    description: 'Started with a small team of 4 passionate individuals.',
    icon: <FaUsers className="text-white w-5 h-5" />,
    color: 'bg-blue-500',
    textColor: 'text-blue-500'
  },
  {
    year: '2021',
    title: 'Claims Process',
    description: 'Streamlined and implemented structured claims handling operations.',
    icon: <FaChartLine className="text-white w-5 h-5" />,
    color: 'bg-teal-500',
    textColor: 'text-teal-500'
  },
  {
    year: '2022',
    title: 'Tech Kickoff',
    description: 'Began IT processes and established a Software Testing team',
    icon: <FaCode className="text-white w-5 h-5" />,
    color: 'bg-purple-500',
    textColor: 'text-purple-500'
  },
  {
    year: '2023',
    title: 'Strategic Expansion',
    description: ' Introduced Accounts, Data Engineering, and Data Analysis functions.',
    icon: <FaDatabase className="text-white w-5 h-5" />,
    color: 'bg-orange-500',
    textColor: 'text-orange-500'
  },
  {
    year: '2024',
    title: 'Advanced Risk & Operations',
    description: '  Launched Book Rolls operations and Risk Analytics through CAT Modeling.',
    icon: <FaShieldAlt className="text-white w-5 h-5" />,
    color: 'bg-red-500',
    textColor: 'text-red-500'
  }
];

const ProfessionalTimeline = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >    
            Our Strategic Growth Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Key milestones that shaped our evolution from a small team to an industry leader
          </motion.p>
        </div>

        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0 relative z-10">
            {timelineData.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Year marker */}
                <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                  <div className={`${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} text-center`}>
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${event.textColor} bg-white shadow-sm border ${event.textColor.replace('text', 'border')}`}>
                      {event.year}
                    </span>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 items-center justify-center">
                  <div className={`w-4 h-4 ${event.color} rounded-full z-20`} />
                  <div className={`absolute w-6 h-6 ${event.color} rounded-full opacity-20 animate-ping`} />
                </div>

                {/* Content card */}
                <div className="w-full md:w-1/2 px-4">
                  <div className={`p-6 rounded-xl shadow-md bg-white border-t-4 ${event.color.replace('bg', 'border')} transition-all hover:shadow-lg`}>
                    <div className="flex items-start">
                      <div className={`${event.color} p-3 rounded-lg mr-4 flex-shrink-0`}>
                        {event.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{event.title}</h3>
                        <p className="text-gray-600 text-sm">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
            <p className="text-gray-600 text-sm font-medium">
              From 4 members in 2020 to 100+ today, with 200 expected by 2025
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfessionalTimeline;