
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBug, FaDatabase, FaLaptopCode, FaShieldAlt, FaUsers } from "react-icons/fa";

const teams = [
  {
    id:'team-001',
    icon: <FaShieldAlt className="text-blue-600 text-6xl" />, 
    title: "Policy Processing Team",
    description:
      "Ensuring accuracy, compliance, and efficiency in policy management across insurance, banking, and healthcare sectors.",
    highlights: [
      "Led by Ms. Ashwini A., 10+ years experience",
      "50+ professionals ensuring streamlined execution",
      "End-to-End Processing – from underwriting to claims",
    ],
  },
  {
    id:'team-002',
    icon: <FaUsers className="text-green-600 text-6xl" />, 
    title: "Pre-Claims Team",
    description:
      "Specializing in accurate and efficient claims processing, fraud detection, and compliance.",
    highlights: [
      "Led by Ms. Chandana, senior claims expert",
      "15+ professionals handling claims across industries",
      "Expertise in fraud prevention and regulatory adherence",
    ],
  },
  {
    id:'team-003',
    icon: <FaLaptopCode className="text-purple-600 text-6xl" />, 
    title: "Software Development Team",
    description:
      "Delivering scalable, secure, and data-driven solutions for enterprise applications and AI-powered systems.",
    highlights: [
      "Expertise in Java, AI, Web Tech, and Cybersecurity",
      "Built ERP, AI analytics, and enterprise solutions",
      "Security-driven development with encryption compliance",
    ],
  },
  {
    id:'team-004',
    icon: <FaBug className="text-red-600 text-6xl" />, 
    title: "Software Testing Team",
    description:
      "Ensuring software excellence through rigorous testing, automation, and continuous improvement.",
    highlights: [
      "Led by Nagashree Nagaraj, 10+ years experience",
      "20+ experts in manual & automated testing",
      "Specialized in Selenium, API testing, and performance analysis",
    ],
  },
  {
    id:'team-005',
    icon: <FaDatabase className="text-orange-600 text-6xl" />, 
    title: "Data Engineering & Analysis Team",
    description:
      "Transforming raw data into actionable insights for business intelligence and decision-making.",
    highlights: [
      "Led by Panduranga B P, expert in Python & SQL",
      "Managing ETL, data pipelines, and cloud data storage",
      "Expertise in Power BI, AWS, and insurance data management",
    ],
  },
];

const TeamSection = () => {

  return (
    <section className="bg-gray-50" id="team">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-full bg-white shadow-xl rounded-3xl p-10"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-gray-800">Our Teams</h2>
          <p className="text-lg text-gray-600 mt-2">
            Meet the expert teams driving our success with innovation and precision.
          </p>
        </div>

        {/* Zig-Zag Content Layout */}
        <div className="max-w-7xl mx-auto space-y-16 px-6">
          {teams.map((team, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div className="md:w-1/3 flex justify-center items-center">
                <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full shadow-lg">
                  {team.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="md:w-2/3 p-6">
                {/* <h3 className="text-3xl font-semibold text-gray-800">{team.title}</h3> */}
                <Link href={`/teams/${team.id}`} className="text-3xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
                  {team.title}
                </Link>

                <p className="text-gray-600 mt-2">{team.description}</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {team.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="text-green-500">✔</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TeamSection;