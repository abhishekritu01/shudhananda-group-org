
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '../component/FooterSection';

const teamMembers = [
  {
    name: 'Dr. Arjun',
    role: 'Founder & Chairman',
    bio: 'Visionary leader with a passion for healthcare and community service.',
    image: '/managment/DR ARJUN-Photoroom.png',
    description : 'Dr. Arjun is a visionary leader with a passion for healthcare and community service. He has dedicated his career to improving healthcare access and quality for underserved populations. With a background in medicine and public health, Dr. Arjun brings a unique perspective to the management team, ensuring that patient care remains at the forefront of all initiatives.',
   
  },
  {
    name: 'Dr. Sini ',
    role: 'Managing Director',
    bio: 'Expert in healthcare management and patient care, ensuring quality services.',
    image: '/managment/sinimam.jpg',
    description : 'Dr. Sini is an expert in healthcare management and patient care, ensuring quality services across all facilities. With years of experience in clinical practice and administration, she is committed to maintaining high standards of care and implementing best practices in healthcare delivery. Dr. Sini is also a strong advocate for patient rights and community health initiatives.',
   
  },
  {
    name: 'Capt. Raghu Das',
    role: 'Cheif Operating Officer',
    bio: 'Strategic planner with a focus on operational excellence and efficiency.',
    image: '/managment/captain.png',
    description : 'Capt. Raghu is a strategic planner with a focus on operational excellence and efficiency. His military background has instilled in him a strong sense of discipline and leadership, which he applies to managing the day-to-day operations of the organization. Capt. Raghu is dedicated to optimizing processes and ensuring that all teams work cohesively towards common goals.',
   
  },
  {
    name: 'Abhinandan S Rao',
    role: ' VP-New Initiatives & Investments',
    bio: 'Innovative thinker driving new projects and investments for growth.',
    image: '/managment/Abhinandan S-Photoroom.png',
    description : 'Abhinandan is an innovative thinker driving new projects and investments for growth. With a keen eye for market trends and opportunities, he is responsible for identifying and developing new initiatives that align with the organization’s mission. Abhinandan’s strategic approach to investments ensures that resources are allocated effectively to maximize impact.',
  },
  {
    name: 'Keshav Murthy C.',
    role: 'VP - Internal Audit & Finance',
    bio: 'Financial strategist ensuring fiscal responsibility and transparency.',
    image: '/managment/Keshav murthy.png',
    description : 'Keshavmurthy is a financial strategist ensuring fiscal responsibility and transparency. He oversees the organization’s financial operations, including budgeting, auditing, and compliance. With a strong background in finance and accounting, Keshavmurthy is committed to maintaining the highest standards of financial integrity and accountability.',
  },
  {
    name: 'Diwakar M. N,',
    role: 'Senior Operations Manager',
    bio: 'Experienced manager overseeing daily operations and team performance.',
    image: '/managment/Divakar SIR-Photoroom.png',
    description : 'Diwakar is an experienced manager overseeing daily operations and team performance. He is responsible for ensuring that all departments work efficiently and effectively to meet organizational goals. Diwakar’s leadership style emphasizes collaboration and communication, fostering a positive work environment for all staff members.',
  },
  {
    name: 'Srinivas C.',
    role: 'Senior Operations Manager',
    bio: 'Dedicated manager focused on operational efficiency and patient satisfaction.',
    image: '/managment/SRINIVAC C-Photoroom.png',
    description : 'Srinivas is a dedicated manager focused on operational efficiency and patient satisfaction. He works closely with clinical and administrative teams to streamline processes and enhance the patient experience. Srinivas is passionate about continuous improvement and regularly seeks feedback from staff and patients to identify areas for enhancement.',
  },
  {
    name: 'Manjunath P.',
    role: 'Senior Operations Manager',
    bio: 'Expert in healthcare operations with a commitment to quality service.',
    image: '/managment/Manjunath P-Photoroom.png',
    description : 'Manjunath is an expert in healthcare operations with a commitment to quality service. He has extensive experience in managing healthcare facilities and ensuring compliance with regulatory standards. Manjunath is dedicated to fostering a culture of excellence within the organization and is always looking for ways to enhance service delivery.',
  },
  {
    name: 'Sandeep',
    role: 'Administrative Manager',
    bio: 'Efficient administrator ensuring smooth operations and support services.',
    image: '/managment/Sandeep.jpeg',
    description : 'Sandeep is an efficient administrator ensuring smooth operations and support services. He plays a crucial role in coordinating various administrative functions, including human resources, facilities management, and procurement. Sandeep’s attention to detail and organizational skills contribute significantly to the overall efficiency of the organization.',
  },
  {
    name: 'Krishnadas',
    role: 'Hospital Administrator',
    bio: 'Skilled administrator managing hospital operations and patient care.',
    image: '/managment/krishnadas.JPG',
    description : 'Krishnadas is a skilled administrator managing hospital operations and patient care. He is responsible for overseeing all aspects of hospital management, including staffing, budgeting, and compliance with healthcare regulations. Krishnadas is committed to providing high-quality care and ensuring that patients receive the best possible experience during their stay.',
  },

];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const TeamPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-20 text-gray-800">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Meet <span className="text-purple-600">Our Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate professionals dedicated to building a healthier India, one community at a time.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="relative bg-white rounded-xl shadow-md overflow-hidden group transition duration-300 ease-in-out hover:shadow-xl h-[380px] border border-gray-200"
            >
              {/* Default View */}
              <motion.div
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10"
              >
                <div className="relative h-32 w-32 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full border-4 border-white shadow-md object-fill"
                  />
                </div>
                <h2 className="text-xl font-bold text-purple-600 mb-1">{member.name}</h2>
                <p className="text-purple-600 font-bold mb-2">{member.role}</p>
                <p className="text-sm text-gray-700 text-center">{member.bio}</p>
              </motion.div>

              {/* Hover View - Description */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white p-6 text-center z-20"
              >
                <div className="relative h-20 w-20 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full border-4 border-white shadow-md object-fill"
                  />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{member.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default TeamPage;








// 'use client';
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import Footer from '../component/FooterSection';
// import { FaLinkedin, FaTwitter, FaEnvelope, FaTimes } from 'react-icons/fa';
// import { FiArrowRight } from 'react-icons/fi';

// const teamMembers = [
//   {
//     name: 'Dr. Arjun',
//     role: 'Managing Director',
//     bio: 'Visionary leader with a passion for healthcare and community service.',
//     image: '/managment/DR ARJUN-Photoroom.png',
//     description : 'Dr. Arjun is a visionary leader with a passion for healthcare and community service. He has dedicated his career to improving healthcare access and quality for underserved populations. With a background in medicine and public health, Dr. Arjun brings a unique perspective to the management team, ensuring that patient care remains at the forefront of all initiatives.',
   
//   },
//   {
//     name: 'Dr. Sini ',
//     role: 'Medical Director',
//     bio: 'Expert in healthcare management and patient care, ensuring quality services.',
//     image: '/managment/sinimam.jpg',
//     description : 'Dr. Sini is an expert in healthcare management and patient care, ensuring quality services across all facilities. With years of experience in clinical practice and administration, she is committed to maintaining high standards of care and implementing best practices in healthcare delivery. Dr. Sini is also a strong advocate for patient rights and community health initiatives.',
   
//   },
//   {
//     name: 'Capt. Raghu',
//     role: 'Cheif Operating Officer',
//     bio: 'Strategic planner with a focus on operational excellence and efficiency.',
//     image: '/managment/captain.png',
//     description : 'Capt. Raghu is a strategic planner with a focus on operational excellence and efficiency. His military background has instilled in him a strong sense of discipline and leadership, which he applies to managing the day-to-day operations of the organization. Capt. Raghu is dedicated to optimizing processes and ensuring that all teams work cohesively towards common goals.',
   
//   },
//   {
//     name: 'Abhinandan',
//     role: ' VP -New Initiatives & Investments',
//     bio: 'Innovative thinker driving new projects and investments for growth.',
//     image: '/managment/Abhinandan S-Photoroom.png',
//     description : 'Abhinandan is an innovative thinker driving new projects and investments for growth. With a keen eye for market trends and opportunities, he is responsible for identifying and developing new initiatives that align with the organization’s mission. Abhinandan’s strategic approach to investments ensures that resources are allocated effectively to maximize impact.',
//   },
//   {
//     name: 'Keshavmurthy',
//     role: 'VP - Internal Audit & Finance',
//     bio: 'Financial strategist ensuring fiscal responsibility and transparency.',
//     image: '/managment/Keshav murthy.png',
//     description : 'Keshavmurthy is a financial strategist ensuring fiscal responsibility and transparency. He oversees the organization’s financial operations, including budgeting, auditing, and compliance. With a strong background in finance and accounting, Keshavmurthy is committed to maintaining the highest standards of financial integrity and accountability.',
//   },
//   {
//     name: 'Diwakar',
//     role: 'Senior Operations Manager',
//     bio: 'Experienced manager overseeing daily operations and team performance.',
//     image: '/managment/Divakar SIR-Photoroom.png',
//     description : 'Diwakar is an experienced manager overseeing daily operations and team performance. He is responsible for ensuring that all departments work efficiently and effectively to meet organizational goals. Diwakar’s leadership style emphasizes collaboration and communication, fostering a positive work environment for all staff members.',
//   },
//   {
//     name: 'Srinivas',
//     role: 'Senior Operations Manager',
//     bio: 'Dedicated manager focused on operational efficiency and patient satisfaction.',
//     image: '/managment/SRINIVAC C-Photoroom.png',
//     description : 'Srinivas is a dedicated manager focused on operational efficiency and patient satisfaction. He works closely with clinical and administrative teams to streamline processes and enhance the patient experience. Srinivas is passionate about continuous improvement and regularly seeks feedback from staff and patients to identify areas for enhancement.',
//   },
//   {
//     name: 'Manjunath',
//     role: 'Senior Operations Manager',
//     bio: 'Expert in healthcare operations with a commitment to quality service.',
//     image: '/managment/Manjunath P-Photoroom.png',
//     description : 'Manjunath is an expert in healthcare operations with a commitment to quality service. He has extensive experience in managing healthcare facilities and ensuring compliance with regulatory standards. Manjunath is dedicated to fostering a culture of excellence within the organization and is always looking for ways to enhance service delivery.',
//   },
//   {
//     name: 'Sandeep',
//     role: 'Administrative Manager',
//     bio: 'Efficient administrator ensuring smooth operations and support services.',
//     image: '/managment/Sandeep.jpeg',
//     description : 'Sandeep is an efficient administrator ensuring smooth operations and support services. He plays a crucial role in coordinating various administrative functions, including human resources, facilities management, and procurement. Sandeep’s attention to detail and organizational skills contribute significantly to the overall efficiency of the organization.',
//   },
//   {
//     name: 'Krishnadas',
//     role: 'Hospital Administrator',
//     bio: 'Skilled administrator managing hospital operations and patient care.',
//     image: '/managment/krishnadas.JPG',
//     description : 'Krishnadas is a skilled administrator managing hospital operations and patient care. He is responsible for overseeing all aspects of hospital management, including staffing, budgeting, and compliance with healthcare regulations. Krishnadas is committed to providing high-quality care and ensuring that patients receive the best possible experience during their stay.',
//   },

// ];
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 }
// };

// const scaleUp = {
//   hidden: { scale: 0.9, opacity: 0 },
//   visible: { scale: 1, opacity: 1 }
// };

// type TeamMember = {
//   name: string;
//   role: string;
//   bio: string;
//   image: string;
//   description: string;
// };

// const TeamPage = () => {
//   const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
//   const [activeFilter, setActiveFilter] = useState('all');

//   const filteredMembers = activeFilter === 'all' 
//     ? teamMembers 
//     : teamMembers.filter(member => member.role.toLowerCase().includes(activeFilter.toLowerCase()));

//   return (
//     <>
//       <div className="max-w-7xl mx-auto px-6 py-20 text-gray-800">
//         <motion.div 
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
//             Meet <span className="text-purple-600">Our Team</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Passionate professionals dedicated to building a healthier India, one community at a time.
//           </p>
//         </motion.div>

//         {/* Filter Buttons */}
//         <motion.div 
//           className="flex flex-wrap justify-center gap-3 mb-12"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: {
//               transition: {
//                 staggerChildren: 0.1
//               }
//             }
//           }}
//         >
//           {['All', 'Director', 'Manager', 'Administrator', 'VP', 'Medical'].map((filter) => (
//             <motion.button
//               key={filter}
//               variants={fadeIn}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                 activeFilter === filter.toLowerCase() 
//                   ? 'bg-purple-600 text-white' 
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//               onClick={() => setActiveFilter(filter.toLowerCase())}
//             >
//               {filter}
//             </motion.button>
//           ))}
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: {
//               transition: {
//                 staggerChildren: 0.1
//               }
//             }
//           }}
//           className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//         >
//           {filteredMembers.map((member, i) => (
//             <motion.div
//               key={i}
//               variants={fadeIn}
//               whileHover={{ y: -5 }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-white rounded-xl shadow-md overflow-hidden group transition duration-300 ease-in-out hover:shadow-xl h-[380px] border border-gray-200 relative cursor-pointer"
//               onClick={() => setSelectedMember(member)}
//             >
//               <div className="h-full flex flex-col items-center justify-center p-6">
//                 <motion.div 
//                   className="relative h-32 w-32 mb-4"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: 'spring', stiffness: 400, damping: 10 }}
//                 >
//                   <Image
//                     src={member.image}
//                     alt={member.name}
//                     fill
//                     className="rounded-full border-4 border-white shadow-md object-fill"
//                   />
//                 </motion.div>
//                 <h2 className="text-xl font-bold text-purple-600 mb-1">{member.name}</h2>
//                 <p className="text-purple-600 font-bold mb-2">{member.role}</p>
//                 <p className="text-sm text-gray-700 text-center mb-4">{member.bio}</p>
                
//                 <motion.button
//                   whileHover={{ x: 5 }}
//                   className="flex items-center text-purple-600 font-medium text-sm"
//                 >
//                   Read more <FiArrowRight className="ml-1" />
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Modal for detailed view */}
//         <AnimatePresence>
//           {selectedMember && (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//               onClick={() => setSelectedMember(null)}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button 
//                   className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//                   onClick={() => setSelectedMember(null)}
//                 >
//                   <FaTimes size={24} />
//                 </button>
                
//                 <div className="p-8">
//                   <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
//                     <motion.div 
//                       className="relative h-40 w-40 min-w-[160px]"
//                       initial={{ scale: 0.9 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.2 }}
//                     >
//                       <Image
//                         src={selectedMember.image}
//                         alt={selectedMember.name}
//                         fill
//                         className="rounded-full border-4 border-purple-100 shadow-md object-fill"
//                       />
//                     </motion.div>
//                     <div>
//                       <h2 className="text-2xl font-bold text-purple-600 mb-1">{selectedMember.name}</h2>
//                       <p className="text-purple-600 font-bold mb-4">{selectedMember.role}</p>
//                       <p className="text-gray-700 mb-4">{selectedMember.bio}</p>
//                       <div className="flex gap-4">
//                         <button className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200">
//                           <FaLinkedin size={20} />
//                         </button>
//                         <button className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200">
//                           <FaTwitter size={20} />
//                         </button>
//                         <button className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200">
//                           <FaEnvelope size={20} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <motion.div
//                     initial="hidden"
//                     animate="visible"
//                     variants={{
//                       visible: {
//                         transition: {
//                           staggerChildren: 0.05
//                         }
//                       }
//                     }}
//                   >
//                     <motion.p 
//                       variants={fadeIn}
//                       className="text-gray-700 leading-relaxed"
//                     >
//                       {selectedMember.description}
//                     </motion.p>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default TeamPage;




