// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import {
//   FaShieldAlt,
//   FaUsers,
//   FaBug,
//   FaDatabase,
//   FaChartLine,
//   FaMoneyCheckAlt,
//   FaBook,
// } from "react-icons/fa";
// import { RiEarthquakeLine } from "react-icons/ri";

// const teams = [
//   {
//     id: 'team-001',
//     icon: <FaShieldAlt className="text-blue-600 text-6xl" />,
//     title: "Policy Processing ",
//     description:
//       "Ensuring seamless policy handling with precision, speed, and compliance.",
//     highlights: [
//       "Led by Ms. Ashwini A., 10+ years experience",
//       "50+ professionals ensuring streamlined execution",
//       "End-to-End Processing – from underwriting to claims",
//     ],
//   },
//   {
//     id: 'team-002',
//     icon: <FaUsers className="text-green-600 text-6xl" />,
//     title: "Pre-Claims ",
//     description:
//       "Efficient, compliant, and client-focused claims support — when it matters most",
//     highlights: [
//       "Led by Ms. Chandana, senior claims expert",
//       "15+ professionals handling claims across industries",
//       "Expertise in fraud prevention and regulatory adherence",
//     ],
//   },
//   {
//     id: 'team-004',
//     icon: <FaBug className="text-red-600 text-6xl" />,
//     title: "Software Testing ",
//     description:
//       "Ensuring software excellence through rigorous testing, automation, and continuous improvement.",
//     highlights: [
//       "Led by Nagashree Nagaraj, 10+ years experience",
//       "20+ experts in manual & automated testing",
//       "Specialized in Selenium, API testing, and performance analysis",
//     ],
//   },
//   {
//     id: 'team-005',
//     icon: <FaDatabase className="text-orange-600 text-6xl" />,
//     title: "Data Engineering",
//     description:
//       "Transforming raw data into valuable insights with smart integration and automation.",
//     highlights: [
//       "Led by Panduranga B P, expert in Python & SQL",
//       "Managing ETL, data pipelines, and cloud data storage",
//       "Expertise in Power BI, AWS, and insurance data management",
//     ],
//   },
//   {
//     id: 'team-006',
//     icon: <FaDatabase className="text-orange-600 text-6xl" />,
//     title: "Data Analysis",
//     description:
//       "Driving insurance analytics and automation through advanced data tools and insights.",
//     highlights: [
//       "Led by Sourav Singh ,expert in Python & SQL",
//       "Team of 4+ skilled data analysts",
//       "Expertise in Pandas, NumPy, SQL, and ASTEC",
//       "Specialization in raters, data transformation, and report generation",
//     ],
//   },
//   {
//     id: 'team-007',
//     icon: <FaMoneyCheckAlt className="text-emerald-600 text-6xl" />,
//     title: "Accounts",
//     description:
//       "Specializing in all financial operations in compliance with US GAAP and regulations.",
//     highlights: [
//       "Led by Mr. Akshay Othayoth - 4+ years’ experience",
//       "10+ professionals handling client finance",
//       "Expertise in invoicing, bookkeeping, AR/AP, and reconciliation",
//     ],
//   },
//   {
//     id: 'team-008',
//     icon: <FaBook className="text-purple-600 text-6xl" />,
//     title: "Bookrolls ",
//     description:
//       "Delivering personalized insurance solutions through expert risk assessment, transparent communication, and client-focused coverage.",
//     highlights: [
//       "Led by Ms. Chandana, experienced team lead with 4+ years of expertise",
//       "6+ dedicated professionals working collaboratively on client-specific insurance needs",
//       "Specialized in coverage recommendations, risk evaluation, and precise policy application drafting",
//     ],
//   },
//   {
//     id: 'team-009',
//     icon: <RiEarthquakeLine className="text-purple-600 text-6xl" />,
//     title: "CAT",
//     description:
//       "Delivering advanced catastrophe risk solutions through simulation-based modeling, strategic risk planning, and proactive disaster readiness..",
//     highlights: [
//       " Led by Bharti Kaushik, CAT modeling specialist with 3+ years of experience",
//       "Expert in high-impact peril modeling including hurricanes, floods, and large-scale natural disasters",
//       "Skilled in portfolio analysis, reinsurance strategy, and scenario-based stress testing",
//     ],
//   }
// ];

// const TeamSection = () => {
//   return (
//     <section className="bg-gray-50" id="team">
//       <motion.div
//         whileHover={{ scale: 1.02 }}
//         transition={{ type: "spring", stiffness: 200 }}
//         className="w-full p-10"
//       >
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-5xl font-bold text-gray-800">Our Teams</h2>
//           <p className="text-lg text-gray-600 mt-2">
//             Meet the expert teams driving our success with innovation and precision.
//           </p>
//         </div>

//         {/* Zig-Zag Content Layout */}
//         <div className="max-w-7xl mx-auto space-y-16 px-6">
//           {teams.map((team, index) => (
//             <Link
//               href={`/teams/${team.id}`}
//               key={team.id}
//               className="no-underline hover:no-underline block"
//             >
//               <div
//                 className={`flex flex-col md:flex-row items-center rounded-xl shadow-sm p-4 transition-all duration-300 hover:shadow-xl hover:border hover:border-blue-300 ${
//                   index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                 }`}
//               >
//                 {/* Icon */}
//                 <div className="md:w-1/3 flex justify-center items-center">
//                   <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full shadow-lg">
//                     {team.icon}
//                   </div>
//                 </div>

//                 {/* Text Content */}
//                 <div className="md:w-2/3 p-6">
//                   <p className="text-3xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300">
//                     {team.title}
//                   </p>
//                   <p className="text-gray-600 mt-2">{team.description}</p>
//                   <ul className="mt-4 space-y-2 text-gray-700">
//                     {team.highlights.map((highlight, i) => (
//                       <li key={i} className="flex items-center space-x-2">
//                         <span className="text-green-500">✔</span>
//                         <span>{highlight}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default TeamSection;







// =========================================================
'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const teams = [
  {
    id: 'team-001',
    icon: "/icons/1.png",
    title: "Policy Processing",
    description: "Ensuring seamless policy handling with precision, speed, and compliance.",
    highlights: [
      "Led by Ms. Ashwini A., 10+ years experience",
      "50+ professionals ensuring streamlined execution",
      "End-to-End Processing – from underwriting to claims",
    ],
  },
  {
    id: 'team-002',
    icon: "/icons/2.png",
    title: "Pre-Claims",
    description: "Efficient, compliant, and client-focused claims support — always.",
    highlights: [
      "Led by Ms. Chandana, senior claims expert",
      "15+ professionals handling all kinds of claims tasks.",
      "Expertise in fraud prevention and regulatory adherence",
    ],
  },
  {
    id: 'team-004',
    icon: '/icons/3.png',
    title: "Software Testing",
    description: "Ensuring software excellence through rigorous testing, automation, and continuous improvement.",
    highlights: [
      "Led by Nagashree Nagaraj, 5+ years experience",
      "15+ experts in manual & automated testing",
      "Specialized in Selenium, API testing, and performance analysis",
    ],
  },
  {
    id: 'team-005',
    icon: '/icons/4.png',
    title: "Data Engineering",
    description: "Transforming raw data into valuable insights with smart integration and automation.",
    highlights: [
      "Led by Panduranga B P, expert in Python & SQL",
      "Managing ETL, data pipelines, and cloud data storage",
      "Expertise in Power BI, AWS, and insurance data management",
    ],
  },
  {
    id: 'team-006',
    icon: '/icons/5.png',
    title: "Data Analysis",
    description: "Driving insurance analytics and automation through advanced data tools and insights.",
    highlights: [
      "Led by Sourav Singh, expert in Python & SQL",
      "Team of 4+ Highly skilled team of data analysts.",
      "Expertise in Pandas, NumPy, SQL, and ASTEC",
      "Specialization in raters, data transformation, and report generation",
    ],
  },
  {
    id: 'team-007',
    icon: '/icons/6.png',
    title: "Accounts",
    description: "Specializing in all financial operations in compliance with US GAAP and regulations.",
    highlights: [
      "Led by Mr. Akshay Othayoth - 5+ years experience",
      "10+ professionals handling client finance",
      "Expertise in invoicing, bookkeeping, AR/AP, and reconciliation",
    ],
  },
  {
    id: 'team-008',
    icon: '/icons/7.png',
    title: "Bookrolls",
    description: "Delivering personalized insurance solutions through expert risk assessment, transparent communication, and client-focused coverage.",
    highlights: [
      "Led by Ms. Chandana, experienced team lead with 5+ years of expertise",
      "6+ dedicated professionals working collaboratively on client-specific insurance needs",
      "Specialized in coverage recommendations, risk evaluation, and precise policy application drafting",
    ],
  },
  {
    id: 'team-009',
    icon: '/icons/8.png',
    title: "CAT Modeling",
    description: "Delivering advanced catastrophe risk solutions through simulation-based modeling, strategic risk planning, and proactive disaster readiness.",
    highlights: [
      "Led by Bharti Kaushik, CAT modeling specialist with 3+ years of experience",
      "Expert in high-impact peril modeling including hurricanes, floods, and large-scale natural disasters",
      "Skilled in portfolio analysis, reinsurance strategy, and scenario-based stress testing",
    ],
  }
];


const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-orange-600"> Teams</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the specialized teams driving our success with innovation and precision
          </p>
        </motion.div>

        {/* Advanced Zig-Zag Layout */}
        <div className="space-y-16">
          {teams.map((team, index) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                damping: 10
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link 
                href={`/teams/${team.id}`} 
                className="block no-underline hover:no-underline focus:no-underline"
              >
                <motion.div
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl bg-white shadow-xl transition-all duration-500 ${getBorderGradient(index)}`}
                >
                  {/* Animated Icon */}
                  <div className={`w-full md:w-1/3 flex justify-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 5,
                        backgroundColor: "rgba(255,255,255,0.9)"
                      }}
                      className="w-auto h-auto flex items-center justify-center rounded-2xl shadow-lg border-4 border-white bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm"
                      style={{
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                    
                      <Image
                        src={team.icon}
                        alt={team.title}
                        width={200}
                        height={200}
                        // className={`w-16 h-16 ${getIconColor(index)}`}
                      />
                    </motion.div>
                  </div>

                  {/* Content with color transitions */}
                  <div className={`w-full md:w-2/3 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} transition-colors duration-500`}>
                    <motion.h3 
                      whileHover={{ color: getTitleHoverColor(index) }}
                      className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-900"
                    >
                      {team.title}
                    </motion.h3>
                    <motion.p 
                      whileHover={{ color: "#4b5563" }}
                      className="text-gray-500 mb-6 text-lg"
                    >
                      {team.description}
                    </motion.p>
                    <ul className="space-y-3">
                      {team.highlights.map((highlight, i) => (
                        <motion.li 
                          key={i}
                          whileHover={{ 
                            x: 8,
                            color: "#111827"
                          }}
                          className="flex items-start text-gray-600 text-base"
                        >
                          <span className={`${getBulletColor(index)} mr-3 mt-1 text-xl`}>•</span>
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Glowing Footer Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-orange-50 to-amber-50 px-8 py-4 rounded-full border border-orange-200 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-center">
              <motion.span 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-orange-500 mr-3"
              ></motion.span>
              <p className="text-gray-700 font-medium text-lg">
                Each team is specialized to deliver excellence in their domain
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Color helper functions
const getBorderGradient = (index: number): string => {
  const gradients: string[] = [
    "hover:border-b-blue-500 border-b-4",
    "hover:border-b-green-500 border-b-4",
    "hover:border-b-red-500 border-b-4",
    "hover:border-b-orange-500 border-b-4",
    "hover:border-b-emerald-500 border-b-4",
    "hover:border-b-purple-500 border-b-4"
  ];
  return gradients[index % gradients.length];
};

// const getIconColor = (index: number): string => {
//   const colors: string[] = [
//     "text-blue-600",
//     "text-green-600",
//     "text-red-600",
//     "text-orange-600",
//     "text-emerald-600",
//     "text-purple-600"
//   ];
//   return colors[index % colors.length];
// };

const getTitleHoverColor = (index: number): string => {
  const colors: string[] = [
    "#3b82f6", // blue
    "#10b981", // green
    "#ef4444", // red
    "#f97316", // orange
    "#059669", // emerald
    "#8b5cf6"  // purple
  ];
  return colors[index % colors.length];
};

interface BulletColorConfig {
  colors: string[];
}

const getBulletColor = (index: number): string => {
  const colors: BulletColorConfig["colors"] = [
    "text-blue-500",
    "text-green-500",
    "text-red-500",
    "text-orange-500",
    "text-emerald-500",
    "text-purple-500"
  ];
  return colors[index % colors.length];
};

export default TeamSection;