'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';


const testimonials = [
  {
    name: 'Ramesh',
    location: 'Terakanambi',
    message:
      'CurePlus Hospital gives very good care. The doctors and nurses treat with respect and patience. For any basic health issue, we always go there. Very neat and well-maintained hospital.',
  }
  ,
  {
    name: 'Lakshmi Bhat',
    location: 'Mysore',
    message:
      'I had visited CurePlus for fever and general checkup. The treatment was quick and the staff was very polite. Affordable charges and clean facilities. Thank you to the whole team!',
  },
  {
    name: 'Mahesh Gowda',
    location: 'Chinakuruli',
    message:
      'Good experience at CurePlus. I took my mother for sugar and BP checkup. Doctor explained everything clearly. Very helpful and caring service. Definitely recommend for regular health care.',
  },
  
];

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-purple-600 mb-14"
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
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold text-md shadow">
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
