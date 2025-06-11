
'use client'
import Link from 'next/link'
import SecondNavBar from '../component/SecondNavBar';
import FooterSection from '../component/FooterSection';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLightbulb, FaUsers, FaLaptopCode, FaHandsHelping, FaChartLine } from 'react-icons/fa';

const navItems = [
  { name: "Home", link: "/" },
  { name: "Careers", link: "/careers" },
  { name: "About Us", link: "/about" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const CareerSection = () => {
  return (
    <div className="bg-white">
      <SecondNavBar navItems={navItems} />
      <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <svg
            className="relative left-[calc(50%-11rem)] -top-[10rem] h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#gradient)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="gradient"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F97316" />
                <stop offset={1} stopColor="#FB923C" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-28">
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
            className="text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Join Our <span className="text-orange-600">Team</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="mt-8 text-lg font-medium text-gray-600 sm:text-xl/8"
            >
              We are looking for passionate individuals to join our team and help us make a difference in the KPO/BPO and in IT / ITES industry. Whether you are a developer, test engineer, designer, or data science professional, we have a place for you.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="careers/apply"
                className="rounded-md bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:from-orange-700 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all duration-300 hover:shadow-orange-200 hover:scale-105"
              >
                View Open Positions
              </Link>
              <Link
                href="/about"
                className="flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors duration-300 group"
              >
                Learn About Us <FaArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mt-16 bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-sm border border-orange-100"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <FaLightbulb className="text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Make an impact in the IT / ITES industry.</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaLaptopCode className="text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Work in a dynamic and innovative environment.</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaChartLine className="text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Work with cutting-edge technology.</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaUsers className="text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Collaborate with a passionate, supportive team.</p>
                </div>
                <div className="flex items-start gap-3 md:col-span-2">
                  <FaHandsHelping className="text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Enjoy flexible work arrangements and competitive benefits.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}

export default CareerSection