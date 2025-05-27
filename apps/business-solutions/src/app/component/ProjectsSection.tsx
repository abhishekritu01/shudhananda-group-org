// 'use client';
// import { motion } from "framer-motion";
// import { FaMapMarkedAlt, FaLaptop, FaHeadset, FaBolt } from "react-icons/fa";
// import Image from "next/image";

// const cabrilloContent = {
//   name: "Cabrillo Coastal",
//   website: "https://www.cabgen.com/",
//   logo: "/Cabrillo-Coastal1.png",
//   about: `Any insurance company can offer residential property insurance to people living in coastal areas, but it's tougher to find one that's committed to excellent service and specializes in hurricane-exposed property. That's what sets us apart from other insurance providers.

// Through sophisticated pricing techniques, quality and timely claims handling, careful reinsurance pricing, experienced underwriting and a friendly staff, Cabrillo Coastal provides the quality service and competitive pricing our customers deserve.

// Behind Cabrillo Coastal is a strong group of affiliated companies, including US Coastal Insurance Company, Safe Harbor Insurance Company, Orange Insurance Exchange, and US Coastal P&C Insurance Company. Each plays a strategic role in helping us serve coastal homeowners with stability, flexibility, and competitive pricing.
// `,


//   features: [
//     {
//       icon: <FaMapMarkedAlt className="text-white text-4xl" />,
//       title: "Expertise in High-Risk Areas",
//       description:
//         "We specialize in assisting recovery from catastrophic events such as hurricanes and tornadoes.",
//     },
//     {
//       icon: <FaLaptop className="text-white text-4xl" />,
//       title: "Easy-to-Use System",
//       description:
//         "Access our stable online platform without logging in to make payments, file claims, or check status.",
//     },
//     {
//       icon: <FaHeadset className="text-white text-4xl" />,
//       title: "Exceptional Customer Service",
//       description:
//         "Our knowledgeable team is available 24/7 to help with claims and explain your coverage options clearly.",
//     },
//     {
//       icon: <FaBolt className="text-white text-4xl" />,
//       title: "Quick Claims Handling",
//       description:
//         "We act fast. In times of disaster, the entire company supports the claims process for rapid response.",
//     },
//   ],
// };

// const PartnerSection = () => {
//   return (
//     <section id="projects" className="py-20 bg-gradient-to-t from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header - Matched to TeamSection */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-extrabold text-gray-900">
//             Our <span className="text-orange-600">Trusted Partner</span>
//           </h2>
//           <p className="mt-4 text-lg text-gray-700">
//           Cabrillo Coastal General Insurance Agency is dedicated to providing reliable Home Insurance services in high-risk coastal regions.
//           </p>
//         </motion.div>

//         {/* Partner Card - Enhanced to Match Style */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-orange-500"
//         >
//           {/* Logo & About */}
//           <div className="p-8 text-center">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="inline-block mb-6"
//             >
//               <Image
//                 src={cabrilloContent.logo}
//                 alt={`${cabrilloContent.name} logo`}
//                 width={280}
//                 height={120}
//                 className="mx-auto"
//               />
//             </motion.div>

//             <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto whitespace-pre-line">
//               {cabrilloContent.about}
//             </p>

//             <motion.a
//               whileHover={{ scale: 1.05, backgroundColor: "#c2410c" }}
//               whileTap={{ scale: 0.98 }}
//               href={cabrilloContent.website}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-8 inline-block px-6 py-3 bg-orange-600 text-white rounded-full font-medium shadow-md"
//             >
//               Visit Website →
//             </motion.a>
//           </div>

//           {/* Features Grid - Matched to ServiceSection */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-gray-50">
//             {cabrilloContent.features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//                 className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-transparent transition-all"
//               >
//                 <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${getFeatureColor(index)} flex items-center justify-center mb-4`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-center text-sm">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Matching Footer Element */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="text-center mt-16"
//         >
//           <div className="inline-block bg-orange-50 px-6 py-3 rounded-full border border-orange-200">
//             <p className="text-gray-700 font-medium">
//               Delivering specialized insurance solutions with exceptional service
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Helper function for feature card colors
// const getFeatureColor = (index: number): string => {
//   const colors: string[] = [
//     'from-blue-500 to-blue-600',
//     'from-purple-500 to-purple-600',
//     'from-green-500 to-green-600',
//     'from-yellow-500 to-yellow-600'
//   ];
//   return colors[index % colors.length];
// };

// export default PartnerSection;





'use client';
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaLaptop, FaHeadset, FaBolt } from "react-icons/fa";
import Image from "next/image";

const cabrilloContent = {
  name: "Cabrillo Coastal",
  website: "https://www.cabgen.com/",
  logo: "/Cabrillo-Coastal1.png",
  about: `Any insurance company can offer residential property insurance to people living in coastal areas, but it's tougher to find one that's committed to excellent service and specializes in hurricane-exposed property. That's what sets us apart from other insurance providers.

Through sophisticated pricing techniques, quality and timely claims handling, careful reinsurance pricing, experienced underwriting and a friendly staff, Cabrillo Coastal provides the quality service and competitive pricing our customers deserve.
`,


  features: [
    {
      icon: <FaMapMarkedAlt className="text-white text-4xl" />,
      title: "Expertise in High-Risk Areas",
      description:
        "We specialize in assisting recovery from catastrophic events such as hurricanes and tornadoes.",
    },
    {
      icon: <FaLaptop className="text-white text-4xl" />,
      title: "Easy-to-Use System",
      description:
        "Access our stable online platform without logging in to make payments, file claims, or check status.",
    },
    {
      icon: <FaHeadset className="text-white text-4xl" />,
      title: "Exceptional Customer Service",
      description:
        "Our knowledgeable team is available 24/7 to help with claims and explain your coverage options clearly.",
    },
    {
      icon: <FaBolt className="text-white text-4xl" />,
      title: "Quick Claims Handling",
      description:
        "We act fast. In times of disaster, the entire company supports the claims process for rapid response.",
    },
  ],
  otherPatners: [
    {
      image: "/US  costal Insurance logo.jpeg",
      description:
        "US Coastal Insurance, offers specialized homeowners insurance for coastal properties with a focus on reliability and expertise. Backed by Cabrillo Coastal, it combines strong claims service with over 150 years of industry experience.",
    },
    {
      image: "/Harbor claims.jpeg",
      description:
        "Harbor Claims, LLC, is a Florida based claims management firm specializing in timely, equitable, and ethical resolution of property and casualty insurance claims. Representing insurers like US Coastal and Safe Harbor, Harbor Claims emphasizes prompt communication and fair handling to support policyholders during loss events.",
    },
    {
      image: "/Us Costal Property logo.jpeg",
      description:
        "US Coastal Property & Casualty Insurance Company, is a Florida based insurer specializing in homeowners insurance for coastal properties. Administered by Cabrillo Coastal, it boasts over 150 years of combined industry experience and holds an A, Exceptional Financial Stability Rating from Demotech.",
    },
    {
      image: "/Safe harbor logo.jpeg",
      description:
        "Safe Harbor Insurance Company, is a Florida based insurer specializing in homeowners coverage for coastal properties, offering tailored protection against risks like hurricanes and flooding. Administered by Cabrillo Coastal and supported by Harbor Claims.",
    },
    {
      image: "/Orange Insurance exchange logo.jpeg",
      description:
        "Orange Insurance Exchange, is a Florida based, member-owned reciprocal insurer offering tailored homeowners, flood, and commercial property coverage. Established in 2023, Orange partners with Cabrillo Coastal and Harbor Claims to deliver responsive service and holds an A Excellent rating from Demotech.",
    },
  ],
};


const PartnerSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-t from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Matched to TeamSection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our <span className="text-orange-600">Trusted Partner</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Cabrillo Coastal General Insurance Agency is dedicated to providing reliable Home Insurance services in high-risk coastal regions.
          </p>
        </motion.div>

        {/* Partner Card - Enhanced to Match Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-orange-500"
        >
          {/* Logo & About */}
          <div className="p-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-6"
            >
              <Image
                src={cabrilloContent.logo}
                alt={`${cabrilloContent.name} logo`}
                width={280}
                height={120}
                className="mx-auto"
              />
            </motion.div>

            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto whitespace-pre-line">
              {cabrilloContent.about}
            </p>
            {/* Image Grid with Hover Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10 mb-6">
              {cabrilloContent.otherPatners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:border-transparent transition-all"
                >
                  <div className="relative w-full h-40 mb-3">
                    <Image
                      src={partner.image}
                      alt={`Logo of partner ${index + 1}`}
                      fill 
                      
                      className="object-fill h-40"
                    />
                  </div>
                  <p className="text-gray-600 text-xs">
                    {partner.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#c2410c" }}
              whileTap={{ scale: 0.98 }}
              href={cabrilloContent.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block px-6 py-3 bg-orange-600 text-white rounded-full font-medium shadow-md"
            >
              Visit Website →
            </motion.a>
          </div>

          {/* Features Grid - Matched to ServiceSection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-gray-50">
            {cabrilloContent.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-transparent transition-all"
              >
                <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${getFeatureColor(index)} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Matching Footer Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-orange-50 px-6 py-3 rounded-full border border-orange-200">
            <p className="text-gray-700 font-medium">
              Delivering specialized insurance solutions with exceptional service
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper function for feature card colors
const getFeatureColor = (index: number): string => {
  const colors: string[] = [
    'from-blue-500 to-blue-600',
    'from-purple-500 to-purple-600',
    'from-green-500 to-green-600',
    'from-yellow-500 to-yellow-600'
  ];
  return colors[index % colors.length];
};

export default PartnerSection;