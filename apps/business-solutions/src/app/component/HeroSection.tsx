

'use client'
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GrCloudComputer } from "react-icons/gr";
import { MdBusiness, MdSecurity } from "react-icons/md";

const HeroSection = () => {
  const words = ["Technology", "Innovation", "Excellence"];
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12 px-6 lg:py-20 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight my-8"
          >
            Transforming Industries with{" "}
            <span className="text-orange-600 relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
              {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 animate-pulse"></span> */}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-base lg:text-lg leading-relaxed"
          >
            Sudhanand Business Solutions Pvt. Ltd. (SBPL) is revolutionizing industries with IT, ITES and US Home Insurance. Our mission is to drive innovation and efficiency through AI, automation, and data-driven strategies.
          </motion.p>

          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : {}}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
          >
            <motion.div 
              variants={cardVariants}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-indigo-600 hover:-translate-y-1"
            >
              <div className="bg-indigo-100 p-2 rounded-lg">
                <MdBusiness className="text-indigo-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">IT</h3>
                <p className="text-gray-600 text-sm">Innovative software and AI solutions for businesses.</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-green-600 hover:-translate-y-1"
            >
              <div className="bg-green-100 p-2 rounded-lg">
                <GrCloudComputer className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">ITES</h3>
                <p className="text-gray-600 text-sm">Transforming business performance through digitization and deep analytics.</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-red-600 sm:col-span-2 hover:-translate-y-1"
            >
              <div className="bg-red-100 p-2 rounded-lg">
                <MdSecurity className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">US Home Insurance</h3>
                <p className="text-gray-600 text-sm">Safeguarding homes and valuable assets with comprehensive solutions for policy issuance, claims processing, and fraud prevention.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform duration-500 group">
            <img
              src="busi.jpg"
              alt="SBPL Hero"
              className="w-full h-auto object-cover aspect-video lg:aspect-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/10 transition-all duration-500"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;