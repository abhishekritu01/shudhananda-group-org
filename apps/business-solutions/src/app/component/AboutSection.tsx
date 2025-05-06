// import { FaBuilding, FaHistory, FaIndustry, FaLaptopCode, FaUsers } from 'react-icons/fa';

// const aboutItems = [
//   {
//     icon: FaHistory,
//     title: 'Our History',
//     text: 'Founded in 2010 as SAS Poorna Arogya Healthcare Pvt. Ltd., we revolutionized healthcare through our award-winning Health Mutual Model before expanding into US Home Insurance and IT solutions..',
//   },
//   {
//     icon: FaUsers,
//     title: 'Leadership Team',
//     text: 'Dr. Arjun Sachidanand, Founder Chairman and serial entrepreneur of Sudhanand Group, has built and scaled disruptive companies at the intersection of technology, capital, and global opportunity. Specialized in turning early-stage concepts into scalable, fundable, and acquirable ventures.',
//   },
//   {
//     icon: FaBuilding,
//     title: 'Our Other Ventures',
//     text: 'CurePlus Hospitals, Sudhanand Pharmacies, TiaMed Technologies, Sudhanand Business Solutions, ARC SportZone, Sachidananda Murthy Memorial Educational Trust, Sudhanand Hospitalities',
//   },
//   {
//     icon: FaLaptopCode,
//     title: 'Tech & Innovation',
//     text: 'With expertise in Software Development and Testing, Data Science/Analytics, UI/UX, Digital Marketing, Accounting. We are shaping the future of IT solutions with cutting-edge technology.',
//   },
// ];

// const AboutSection = () => {
//   return (
//     <section id="about" className="p-10 bg-white text-orange-800">
//       <div className="max-w-6xl mx-auto text-center">
//         <h3 className="text-4xl font-bold text-orange-600 mb-6">About Us</h3>
//         <p className="text-lg text-gray-700 mb-10">
//           Sudhanand Business Solutions offer end-to-end support, from policy implementation and claims processing to software quality assurance and data-driven insights. Our dedicated teams across various domains are committed to delivering exceptional results.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//         {aboutItems.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md border border-orange-300 h-full"
//           >
//             <item.icon className="text-5xl text-orange-600" />
//             <h4 className="text-xl font-semibold mt-4">{item.title}</h4>
//             <div className="text-sm text-gray-700 mt-2 text-center">{item.text}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AboutSection;




// 'use client';

// import { motion } from 'framer-motion';
// import { FaBuilding, FaHistory, FaIndustry, FaLaptopCode, FaUsers } from 'react-icons/fa';

// const aboutItems = [
//   {
//     icon: FaHistory,
//     title: 'Our History',
//     text: 'Founded in 2010 as SAS Poorna Arogya Healthcare Pvt. Ltd., we revolutionized healthcare through our award-winning Health Mutual Model before expanding into US Home Insurance and IT solutions.',
//   },
//   {
//     icon: FaUsers,
//     title: 'Leadership Team',
//     text: 'Dr. Arjun Sachidanand, Founder Chairman and serial entrepreneur of Sudhanand Group, has built and scaled disruptive companies at the intersection of technology, capital, and global opportunity. Specialized in turning early-stage concepts into scalable, fundable, and acquirable ventures.',
//   },
//   {
//     icon: FaBuilding,
//     title: 'Our Other Ventures',
//     text: 'CurePlus Hospitals, Sudhanand Pharmacies, TiaMed Technologies, Sudhanand Business Solutions, ARC SportZone, Sachidananda Murthy Memorial Educational Trust, Sudhanand Hospitalities',
//   },
//   {
//     icon: FaLaptopCode,
//     title: 'Tech & Innovation',
//     text: 'With expertise in Software Development and Testing, Data Science/Analytics, UI/UX, Digital Marketing, Accounting. We are shaping the future of IT solutions with cutting-edge technology.',
//   },
// ];

// const AboutSection = () => {
//   return (
//     <section id="about" className="py-20 px-4 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <motion.h3 
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold text-orange-600 mb-4"
//           >
//             About Us
//           </motion.h3>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-gray-600 text-lg max-w-3xl mx-auto"
//           >
//             Sudhanand Business Solutions offer end-to-end support, from policy implementation and claims processing to software quality assurance and data-driven insights. Our dedicated teams across various domains are committed to delivering exceptional results.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {aboutItems.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-500 transition-all hover:shadow-lg h-full">
//                 <div className="flex items-start">
//                   <div className="bg-orange-500 p-3 rounded-lg mr-6 flex-shrink-0">
//                     <item.icon className="text-white text-xl" />
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h4>
//                     <p className="text-gray-600">{item.text}</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
//             <p className="text-gray-600 text-sm font-medium">
//               Combining decades of industry experience with cutting-edge innovation
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


'use client';

import { motion } from 'framer-motion';
import { FaBuilding, FaHistory, FaLaptopCode, FaUsers } from 'react-icons/fa';

const aboutItems = [
  {
    icon: FaHistory,
    title: 'Our History',
    text: 'Founded in 2010 as SAS Poorna Arogya Healthcare Pvt. Ltd., we revolutionized healthcare through our award-winning Health Mutual Model before expanding into US Home Insurance and IT solutions.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FaUsers,
    title: 'Leadership Team',
    text: 'Dr. Arjun Sachidanand, Founder Chairman and serial entrepreneur of Sudhanand Group, has built and scaled disruptive companies at the intersection of technology, capital, and global opportunity. Specialized in turning early-stage concepts into scalable, fundable, and acquirable ventures.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: FaLaptopCode,
    title: 'Tech & Innovation',
    text: 'With expertise in Software Development and Testing, Data Science/Analytics, UI/UX , Digital Marketing, Accounting, we are shaping the future of IT solutions with cutting-edge technology.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: FaBuilding,
    title: 'Our Other Ventures',
    text: 'CurePlus Hospitals, Sudhanand Pharmacies, TiaMed Technologies, ARC SportZone, Dr. M. D. Sachidananda Murthy Memorial Educational Trust ®, Sudhanand Hospitalities, and more.',
    color: 'from-purple-500 to-purple-600'
  },
 
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900">
              About <span className="text-orange-600">Us</span>
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Sudhanand Business Solutions offers end-to-end support, from policy implementation and  <br/>claims processing to software quality assurance and data-driven insights.
            </p>
          </motion.div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg`}></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl h-full border border-gray-100 group-hover:border-transparent transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl`}>
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center bg-white px-6 py-4 rounded-full shadow-sm border border-gray-200 group">
            <div className="w-3 h-3 rounded-full bg-orange-500 mr-3 group-hover:animate-pulse"></div>
            <p className="text-gray-600 font-medium">
              Combining decades of industry experience with cutting-edge innovation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;