'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaRegSadTear } from 'react-icons/fa';
//import axios from "axios";
import Image from "next/image";


interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  image: string;
}

export default function Testimonials() {
  //const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [testimonials] = useState<Testimonial[]>([]);

  // useEffect(() => {
  //   const fetchTestimonials = async () => {
  //     try {
  //       const response = await axios.get('/api/testimonial');
  //       setTestimonials(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchTestimonials();
  // }, []);

  const noTestimonialsTemplate = (
    <motion.div
      className="flex flex-col items-center justify-center h-full text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full hover:scale-105 transition-all duration-300">
        <FaRegSadTear className="text-red-600 text-6xl mb-6 mx-auto" />
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">No Success Stories Yet</h3>
        <p className="text-gray-600 mb-6">
          We are looking forward to sharing inspiring stories from our amazing donors and recipients soon!
        </p>
        <div className="bg-gradient-to-r from-red-600 to-red-900 text-white py-3 px-6 rounded-lg font-medium">
          Stay Tuned for Heartwarming Stories
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gray-50 min-h-[500px] flex flex-col items-center justify-center text-center">
      <motion.h2
        className="text-4xl font-bold mb-16 text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Success Stories
      </motion.h2>
      <div className="container mx-auto">
        {testimonials.length === 0 ? (
          noTestimonialsTemplate
        ) : (
          <div className="grid md:grid-cols-3 gap-12 px-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-8 rounded-lg shadow-xl hover:scale-105 transition-all duration-300 text-zinc-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <div className="flex justify-center mb-6">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}'s avatar`}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <p className="italic text-zinc-900 mb-4 relative">
                  <FaQuoteLeft className="absolute top-0 left-0 text-2xl text-zinc-900 -ml-6" />
                  <span>{testimonial.feedback}</span>
                  <FaQuoteRight className="absolute bottom-0 right-0 text-2xl text-zinc-900 -mr-6" />
                </p>
                <h3 className="text-xl font-semibold text-zinc-900">{testimonial.name}</h3>
                <p className="text-zinc-900 text-sm">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
