'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Lakshmamma',
    location: 'Mysore',
    message:
      'I was treated for a urinary infection at Srinivasa Hospital and received free medicines. I’m truly grateful to the staff and organization.',
  },
  {
    name: 'Neelavathi',
    location: 'Maddur',
    message:
      'I received excellent care at Srinivasa Hospital. The staff follows proper protocols and provides free treatment to those in need.',
  },
  {
    name: 'Gowramma',
    location: 'Mysore',
    message:
      'I underwent surgery at Disha Hospital and received great care. I’m thankful to the organization for supporting low-income families like mine.',
  },
  {
    name: 'Rahman Shariff',
    location: 'Mysore',
    message:
      'My ulcer treatment at Bharath Cancer Hospital was smooth, and the SAS card covered all medical expenses. I’m very grateful.',
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Patients Say
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center font-semibold text-md shadow">
                  {t.name.charAt(0)}
                </div>
                <div className="ml-4 text-left">
                  <h4 className="text-md font-semibold text-gray-900">{t.name}</h4>
                  {t.location && (
                    <p className="text-xs text-purple-500">{t.location}</p>
                  )}
                </div>
              </div>

              <div className="relative bg-white rounded-xl p-4 shadow-inner text-left">
                <Quote className="absolute left-3 top-3 w-5 h-5 text-purple-300 rotate-180" />
                <p className="text-sm text-gray-700 italic leading-relaxed pl-6">
                  {t.message}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xs" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
