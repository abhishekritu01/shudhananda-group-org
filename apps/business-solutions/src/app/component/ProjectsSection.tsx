"use client";
import { motion } from "framer-motion";
import { FaChartLine, FaShieldAlt, FaStethoscope } from "react-icons/fa";

const projects = [
  {
    icon: <FaShieldAlt className="text-blue-600 text-6xl" />,
    title: "US-Based Home Insurance Software",
    description:
      "AI-powered digital insurance platform, automating policy management, underwriting, and claims processing. Reduced processing time by 40% and integrated fraud detection for enhanced security.",
  },
  {
    icon: <FaChartLine className="text-purple-600 text-6xl" />,
    title: "AI-Powered Predictive Analytics for Banking",
    description:
      "Developed a predictive model for customer segmentation and risk assessment, reducing default rates by 30% while enhancing fraud detection in financial transactions.",
  },
  {
    icon: <FaStethoscope className="text-green-600 text-6xl" />,
    title: "SAS Poorna Arogya Healthcare Program",
    description:
      "Enabled affordable healthcare for 600,000+ members across Karnataka and Assam, processing over 35,000 surgeries and $1.5 million in claims.",
  },
  // {
  //   icon: <FaServer className="text-red-600 text-6xl" />,
  //   title: "Enterprise ERP System",
  //   description:
  //     "Designed a cloud-based ERP solution for HR, finance, and customer operations, improving efficiency by 50% through workflow automation.",
  // },
  // {
  //   icon: <FaVoteYea className="text-indigo-600 text-6xl" />,
  //   title: "Blockchain-Based Smart Voting System",
  //   description:
  //     "Developed a secure, tamper-proof voting system using blockchain technology, ensuring transparency and fraud prevention in government elections.",
  // },
];

const ProjectsSection = () => {
  return (
    <section className="bg-gray-50 py-20" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800">Projects & Case Studies</h2>
          <p className="text-lg text-gray-600 mt-2">
            Driving Innovation Across IT, Healthcare, Banking & Insurance.
          </p>
        </div>

        {/* Full-Width Project List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center space-x-6"
            >
              {/* Icon */}
              <div>{project.icon}</div>
              {/* Content */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2 max-w-4xl">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
