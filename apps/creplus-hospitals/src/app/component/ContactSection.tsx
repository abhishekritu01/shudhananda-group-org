'use client';

import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage({
          text: 'Your message has been sent successfully. We will get back to you shortly.',
          type: 'success'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage({
          text: data.message || 'Failed to send the message. Please try again later.',
          type: 'error'
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setResponseMessage({
        text: 'An unexpected error occurred. Please try again later.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-white text-lg" />,
      title: "Phone",
      value: "+91 90351 93777",
      href: "tel:+91 90351 93777"
    },
    {
      icon: <FaEnvelope className="text-white text-lg" />,
      title: "Email",
      value: "contact@cureplushospitals.com",
      href: "mailto:contact@cureplushospitals.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-white text-lg" />,
      title: "Address",
      value: "Mysore, Karnataka, India",
      href: "https://maps.google.com/?q=Mysore,Karnataka,India"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Information Panel */}
          <motion.div
            className="bg-footerbackground p-8 md:p-12 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Contact Information
            </h2>
            <p className="text-lg mb-8 text-indigo-100 leading-relaxed">
              Our team is ready to assist you with any inquiries. Reach out through any of these channels and we&apos;ll respond promptly.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <a 
                      href={item.href} 
                      className="text-indigo-100 hover:text-white transition-colors duration-200"
                      aria-label={`Contact us via ${item.title}`}
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 md:p-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full text-zinc-900 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full text-zinc-900 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="How can we assist you today?"
                  className="w-full text-zinc-900 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all "
                  required
                  aria-required="true"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className={`w-full bg-footerbackground text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-300 flex justify-center items-center ${
                    loading ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : 'Send Message'}
                </button>
              </div>
              
              {responseMessage && (
                <div className={`mt-4 p-4 rounded-lg ${
                  responseMessage.type === 'success' 
                    ? 'bg-green-50 text-green-800' 
                    : 'bg-red-50 text-red-800'
                }`}>
                  <p className="text-sm font-medium">{responseMessage.text}</p>
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;