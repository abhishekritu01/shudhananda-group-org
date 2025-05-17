// "use client";
// import { motion } from "framer-motion";
// import { FaMapMarkedAlt, FaLaptop, FaHeadset, FaBolt } from "react-icons/fa";
// import Image from "next/image";

// const cabrilloContent = {
//   name: "Cabrillo Coastal",
//   website: "https://www.cabgen.com/",
//   logo: "/Cabrillo-Coastal1.png",
//   about: `Any insurance company can offer residential property insurance to people living in coastal areas, but it's tougher to find one that's committed to excellent service and specializes in hurricane-exposed property. That's what sets us apart from other insurance providers.

// Through sophisticated pricing techniques, quality and timely claims handling, careful reinsurance pricing, experienced underwriting and a friendly staff, Cabrillo Coastal provides the quality service and competitive pricing our customers deserve.`,
//   features: [
//     {
//       icon: <FaMapMarkedAlt className="text-blue-600 text-4xl" />,
//       title: "Expertise in High-Risk Areas",
//       description:
//         "We specialize in assisting recovery from catastrophic events such as hurricanes and tornadoes.",
//     },
//     {
//       icon: <FaLaptop className="text-purple-600 text-4xl" />,
//       title: "Easy-to-Use System",
//       description:
//         "Access our stable online platform without logging in to make payments, file claims, or check status.",
//     },
//     {
//       icon: <FaHeadset className="text-green-600 text-4xl" />,
//       title: "Exceptional Customer Service",
//       description:
//         "Our knowledgeable team is available 24/7 to help with claims and explain your coverage options clearly.",
//     },
//     {
//       icon: <FaBolt className="text-yellow-500 text-4xl" />,
//       title: "Quick Claims Handling",
//       description:
//         "We act fast. In times of disaster, the entire company supports the claims process for rapid response.",
//     },
//   ],
// };

// const PartnerSection = () => {
//   return (
//     <section className="w-full bg-gray-100 py-20 px-4 md:px-10" id="projects">
//       {/* Header */}
//       <div className="text-center mb-8 max-w-4xl mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
//           Our <span className="text-orange-600">Trusted Partner</span>
//         </h2>
//         <p className="mt-4 text-lg text-gray-600">
//           Cabrillo Coastal is dedicated to providing reliable insurance services in high-risk coastal regions.
//         </p>
//       </div>

//       {/* Partner Content */}
//       <div className="w-full bg-white rounded-3xl shadow-lg px-6 md:px-16 py-12">
//         {/* Logo & About */}
//         <div className="text-center">
//           <Image
//             src={cabrilloContent.logo}
//             alt={`${cabrilloContent.name} logo`}
//             width={180}
//             height={120}
//             className="mx-auto mb-4"
//           />
//           {/* <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">{cabrilloContent.name}</h3> */}
//           <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line max-w-5xl mx-auto">
//             {cabrilloContent.about}
//           </p>
//           <a
//             href={cabrilloContent.website}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-6 inline-block px-6 py-3 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition"
//           >
//             Visit Website →
//           </a>
//         </div>

//         {/* Features */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14 w-full">
//           {cabrilloContent.features.map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.04 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="flex flex-col items-center text-center space-y-4 px-4"
//             >
//               <div>{feature.icon}</div>
//               <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
//               <p className="text-gray-600 text-sm">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
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

Behind Cabrillo Coastal is a strong group of affiliated companies, including US Coastal Insurance Company, Safe Harbor Insurance Company, Orange Insurance Exchange, and US Coastal P&C Insurance Company. Each plays a strategic role in helping us serve coastal homeowners with stability, flexibility, and competitive pricing.
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