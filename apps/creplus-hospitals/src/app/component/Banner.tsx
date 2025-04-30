// 'use client';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { FaAddressCard } from "react-icons/fa";

// const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: { delay: i * 0.15 },
//     }),
// };

// const Banner = () => {
//     return (
//         <section className="relative w-full h-auto flex items-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden text-white">
//             {/* Static Background Image with Right Side Focus */}
//             <div className="absolute inset-0 z-0">
//                 <img
//                     src="/card.jpeg"
//                     alt="Background"
//                     className="absolute inset-0 w-full h-auto object-cover object-right sm:object-center transition-all duration-500"
//                 />
//                 <div className="absolute inset-0  z-10" />
//             </div>

//             {/* Foreground Content */}
//             <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//                 <motion.div
//                     initial="hidden"
//                     animate="visible"
//                     variants={fadeUp}
//                     custom={0}
//                     className="text-center lg:text-left"
//                 >
//                     <h1 className="text-4xl md:text-5xl font-extrabold text-purple-600 leading-tight mb-6">
//                         Introducing CurePlus Arogya Card
//                     </h1>
//                     <p className="text-lg md:text-xl text-purple-600 max-w-xl mx-auto lg:mx-0 mb-8">
//                         Exclusive healthcare plans offering comprehensive coverage with a special 25% discount on all services.
//                     </p>
//                     <div className="flex text-sm sm:flex-row gap-4 justify-center lg:justify-start">
//                         <Link href="/cure-arogya">
//                             <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="mt-2 bg-white text-purple-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-md transition flex items-center gap-2"
//                                 aria-label="Get Your Cure+ Arogya Card"
//                             >
//                                 <FaAddressCard />
//                                 Get Your Card
//                             </motion.button>
//                         </Link>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Banner;



'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaAddressCard } from "react-icons/fa";
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const Banner = () => {
  return (
    <section className="relative w-full flex items-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden text-white min-h-[600px]">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-screen">
          <Image
            src="/card.jpeg"
            alt="Background"
            fill
            className="object-cover object-right"
            priority
          />
        </div>
        <div className="absolute z-10" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white md:text-purple-600 leading-tight mb-6">
            Introducing CurePlus Arogya Card
          </h1>
          <p className="text-lg md:text-xl text-white md:text-purple-600 max-w-xl mx-auto lg:mx-0 mb-8">
            Exclusive healthcare plans offering comprehensive coverage with a special 25% discount on all services.
          </p>
          <div className="flex text-sm sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/cure-arogya">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 bg-white text-purple-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-md transition flex items-center gap-2"
                aria-label="Get Your Cure+ Arogya Card"
              >
                <FaAddressCard />
                Get Your Card
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
