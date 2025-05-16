// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaChartLine, FaUsers, FaCode, FaDatabase, FaShieldAlt } from 'react-icons/fa';
// import { FaBusinessTime } from 'react-icons/fa';
// import { IoBusinessOutline } from 'react-icons/io5';

// const timelineData = [
//   {
//     year: '2020',
//     title: 'Pre-Underwriting Initiation',
//     description: 'Started with a small team of 4 passionate individuals.',
//     icon: <FaUsers className="text-white w-5 h-5" />,
//     color: 'bg-blue-500',
//     textColor: 'text-blue-500'
//   },
//   {
//     year: '2021',
//     title: 'Claims Process',
//     description: 'Streamlined and implemented structured claims handling operations.',
//     icon: <FaChartLine className="text-white w-5 h-5" />,
//     color: 'bg-teal-500',
//     textColor: 'text-teal-500'
//   },
//   {
//     year: '2022',
//     title: 'Tech Kickoff',
//     description: 'Began IT processes and established a Software Testing team',
//     icon: <FaCode className="text-white w-5 h-5" />,
//     color: 'bg-purple-500',
//     textColor: 'text-purple-500'
//   },
//   {
//     year:2022,
//     title: 'New Business and Underwriting Review',
//     description: 'Comprehensive review of new business and key underwriting tasks.',
//     icon: <FaBusinessTime  className="text-white w-5 h-5" />,
//     color: 'bg-purple-500',
//     textColor: 'text-purple-500'
//   },
//   {
//     year: '2023',
//     title: 'Strategic Expansion',
//     description: ' Introduced Accounts, Data Engineering, and Data Analysis functions.',
//     icon: <FaDatabase className="text-white w-5 h-5" />,
//     color: 'bg-orange-500',
//     textColor: 'text-orange-500'
//   },
//   {
//     year: '2023',
//     title: 'PST Scaling Operations to Policy Process',
//     description: 'PST(Policy Service Team) Expanded its Scaling Operations to Policy Process Handling. To meet expanded responsibilities, the team grew to 55 members.',
//     icon: <IoBusinessOutline  className="text-white w-5 h-5" />,
//     color: 'bg-orange-500',
//     textColor: 'text-orange-500'
//   },
//   {
//     year: '2024',
//     title: 'Advanced Risk & Operations',
//     description: '  Launched Book Rolls operations and Risk Analytics through CAT Modeling.',
//     icon: <FaShieldAlt className="text-white w-5 h-5" />,
//     color: 'bg-red-500',
//     textColor: 'text-red-500'
//   }
// ];

// const ProfessionalTimeline = () => {
//   return (
//     <div className="bg-gray-50 py-20 px-4 font-sans">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <motion.h2 
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold text-gray-900 mb-4"
//           >    
//             Our Journey So Far
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-gray-600 text-lg max-w-3xl mx-auto"
//           >
//             Key milestones that shaped our evolution from a small team to an industry leader
//           </motion.p>
//         </div>

//         <div className="relative">
//           {/* Main timeline line */}
//           <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 hidden md:block" />

//           <div className="space-y-12 md:space-y-0 relative z-10">
//             {timelineData.map((event, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
//               >
//                 {/* Year marker */}
//                 <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
//                   <div className={`${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} text-center`}>
//                     <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${event.textColor} bg-white shadow-sm border ${event.textColor.replace('text', 'border')}`}>
//                       {event.year}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Timeline dot */}
//                 <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 items-center justify-center">
//                   <div className={`w-4 h-4 ${event.color} rounded-full z-20`} />
//                   <div className={`absolute w-6 h-6 ${event.color} rounded-full opacity-20 animate-ping`} />
//                 </div>

//                 {/* Content card */}
//                 <div className="w-full md:w-1/2 px-4">
//                   <div className={`p-6 rounded-xl shadow-md bg-white border-t-4 ${event.color.replace('bg', 'border')} transition-all hover:shadow-lg`}>
//                     <div className="flex items-start">
//                       <div className={`${event.color} p-3 rounded-lg mr-4 flex-shrink-0`}>
//                         {event.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-800 mb-1">{event.title}</h3>
//                         <p className="text-gray-600 text-sm">{event.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
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
//           <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
//             <p className="text-gray-600 text-sm font-medium">
//               From 4 members in 2020 to 100+ today, with 200 expected by 2025 Period.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ProfessionalTimeline;












'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaCode, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import { FaBusinessTime } from 'react-icons/fa';
import { IoBusinessOutline } from 'react-icons/io5';

// Consolidated color scheme for professional look
const colorScheme = {
  blue: {
    bg: 'bg-blue-600',
    border: 'border-blue-600',
    text: 'text-blue-600'
  },
  teal: {
    bg: 'bg-teal-600',
    border: 'border-teal-600',
    text: 'text-teal-600'
  },
  purple: {
    bg: 'bg-purple-600',
    border: 'border-purple-600',
    text: 'text-purple-600'
  },
  orange: {
    bg: 'bg-orange-600',
    border: 'border-orange-600',
    text: 'text-orange-600'
  },
  red: {
    bg: 'bg-red-600',
    border: 'border-red-600',
    text: 'text-red-600'
  }
};

const timelineData = [
  {
    year: '2020',
    title: 'Pre-Underwriting Initiation',
    description: 'Started with a small team of 4 passionate individuals.',
    icon: <FaUsers className="text-white w-5 h-5" />,
    color: colorScheme.blue
  },
  {
    year: '2021',
    title: 'Claims Process',
    description: 'Streamlined and implemented structured claims handling operations.',
    icon: <FaChartLine className="text-white w-5 h-5" />,
    color: colorScheme.teal
  },
  {
    year: '2022',
    title: 'Tech Kickoff',
    description: 'Began IT processes and established a Software Testing team',
    icon: <FaCode className="text-white w-5 h-5" />,
    color: colorScheme.purple
  },
  {
    year: '2022',
    title: 'New Business and Underwriting Review',
    description: 'Comprehensive review of new business and key underwriting tasks.',
    icon: <FaBusinessTime className="text-white w-5 h-5" />,
    color: colorScheme.purple
  },
  {
    year: '2023',
    title: 'Strategic Expansion',
    description: 'Introduced Accounts, Data Engineering, and Data Analysis functions.',
    icon: <FaDatabase className="text-white w-5 h-5" />,
    color: colorScheme.orange
  },
  {
    year: '2023',
    title: 'PST Scaling Operations to Policy Process',
    description: 'PST (Policy Service Team) Expanded its Scaling Operations to Policy Process Handling. To meet expanded responsibilities, the team grew to 55 members.',
    icon: <IoBusinessOutline className="text-white w-5 h-5" />,
    color: colorScheme.orange
  },
  {
    year: '2024',
    title: 'Advanced Risk & Operations',
    description: 'Launched Book Rolls operations and Risk Analytics through CAT Modeling.',
    icon: <FaShieldAlt className="text-white w-5 h-5" />,
    color: colorScheme.red
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
            Our Journey So Far
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
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2 hidden md:block" />

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
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${event.color.text} bg-white shadow-sm border ${event.color.border}`}>
                      {event.year}
                    </span>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 items-center justify-center">
                  <div className={`w-4 h-4 ${event.color.bg} rounded-full z-20 border-2 border-white`} />
                  <div className={`absolute w-6 h-6 ${event.color.bg} rounded-full opacity-20 animate-ping`} />
                </div>

                {/* Content card */}
                <div className="w-full md:w-1/2 px-4">
                  <div className={`p-6 rounded-lg shadow-sm bg-white border-l-4 ${event.color.border} transition-all hover:shadow-md`}>
                    <div className="flex items-start">
                      <div className={`${event.color.bg} p-3 rounded-lg mr-4 flex-shrink-0`}>
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
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">
              From 4 members in 2020 to 100+ today, with 200 expected by 2025.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfessionalTimeline;