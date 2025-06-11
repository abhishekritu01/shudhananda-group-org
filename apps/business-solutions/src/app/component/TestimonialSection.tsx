// 'use client';

// const TestimonialSection = () => {
//   return (
//     <section className="py-24" id="testimonials">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
//           {/* Left Side - Title & Description */}
//           <div className="lg:col-span-5 text-center lg:text-left">
//             <h2 className="text-5xl font-bold text-gray-900">
//               Client <span className="text-orange-600">Testimonials</span>
//             </h2>
//             <p className="mt-6 text-lg text-gray-600">
//               What Our Partners Say About SBPL&apos;s Impact on Their Businesses.
//             </p>
//           </div>

//           {/* Right Side - Testimonial Cards */}
//           <div className="mt-12 lg:mt-0 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {/* Testimonial 1 */}
//             <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
//               <p className="text-xs text-gray-600 italic">“SBPL transformed our insurance operations with their automated underwriting and claims processing solutions. The efficiency boost helped us process 40% more policies in half the time!”</p>
//               <div className="mt-4 flex items-center gap-4">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800">John M.</h3>
//                   <p className="text-sm text-gray-500">CEO, US Insurance Firm</p>
//                 </div>
//               </div>
//             </div>

//             {/* Testimonial 2 */}
//             <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
//               <p className="text-xs text-gray-600 italic">“The SAS Poorna Arogya Program was a game-changer in providing healthcare access to thousands. SBPL’s IT infrastructure made it possible to manage claims seamlessly and provide quality care to underserved communities.”</p>
//               <div className="mt-4 flex items-center gap-4">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
//                 <div>
//                   <h3 className="text-xs font-semibold text-gray-800">Dr. Ramesh K.</h3>
//                   <p className="text-sm text-gray-500">Director, Healthcare Institution</p>
//                 </div>
//               </div>
//             </div>

//             {/* Testimonial 3 */}
//             <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
//               <p className="text-xs text-gray-600 italic">“The predictive analytics model developed by SBPL helped us enhance customer segmentation and improve our lending strategy. The risk assessment model reduced loan defaults by 30%!”</p>
//               <div className="mt-4 flex items-center gap-4">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800">Priya Sharma</h3>
//                   <p className="text-sm text-gray-500">CFO, Leading Banking Institution</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;



'use client';
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-gray-50 to-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Matched to PartnerSection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            Client <span className="text-orange-600">Testimonials</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            What Our Partners Say About SBPL&apos;s Impact on Their Businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Title & Description (now spans 4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-orange-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Clients Trust Us</h3>
              <p className="text-gray-600">
                Our partners consistently highlight three key strengths that set SBPL apart in delivering transformative solutions.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Industry-specific expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Measurable business impact</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Innovative technology solutions</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Testimonial Cards (now spans 8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
              <FaQuoteLeft className="text-gray-200 text-5xl absolute top-4 right-4" />
              <p className="text-gray-600 relative z-10 italic mb-6">
              &apos;SBPL transformed our insurance operations with their automated underwriting and claims processing solutions. The efficiency boost helped us process 40% more policies in half the time!&apos;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center text-white font-bold text-xl">
                  J
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">John M.</h3>
                  <p className="text-sm text-gray-500">CEO, US Insurance Firm</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400"></div>
              <FaQuoteLeft className="text-gray-200 text-5xl absolute top-4 right-4" />
              <p className="text-gray-600 relative z-10 italic mb-6">
              &apos;The SAS Poorna Arogya Program was a game-changer in providing healthcare access to thousands. SBPL&apos;s IT infrastructure made it possible to manage claims seamlessly and provide quality care to underserved communities.&apos;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center text-white font-bold text-xl">
                  R
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Dr. Ramesh K.</h3>
                  <p className="text-sm text-gray-500">Director, Healthcare Institution</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden md:col-span-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-400"></div>
              <FaQuoteLeft className="text-gray-200 text-5xl absolute top-4 right-4" />
              <p className="text-gray-600 relative z-10 italic mb-6">
              &apos;The predictive analytics model developed by SBPL helped us enhance customer segmentation and improve our lending strategy. The risk assessment model reduced loan defaults by 30%!&apos;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-400 flex items-center justify-center text-white font-bold text-xl">
                  P
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Priya Sharma</h3>
                  <p className="text-sm text-gray-500">CFO, Leading Banking Institution</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Matching Footer Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-orange-50 px-6 py-3 rounded-full border border-orange-200">
            <p className="text-gray-700 font-medium">
              Trusted by industry leaders across multiple sectors
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;