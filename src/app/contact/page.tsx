'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import Footer from '../component/FooterSection';
import Head from 'next/head';
import { useEffect } from 'react';


const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2 },
  }),
};

const ContactUs = () => {
  useEffect(() => {
  document.title = 'Contact | CurePlus Hospitals';
}, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatusMessage('Failed to send. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatusMessage('Error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.cureplushospitals.com/contact" />
      </Head>
      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            custom={0}
          >
            <h2 className="text-4xl font-bold text-purple-600">Let’s Connect</h2>
            <p className="text-gray-600">
              Whether you have a question, need support, or just want to say hello — we&apos;re here to help.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FiPhone className="text-blue-600 w-6 h-6 mt-1" />
                <div>
                  {/* <h4 className="text-lg font-semibold text-gray-700">Phone</h4> */}
                  <p className="text-gray-700">+91 90351 93777</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FiMail className="text-green-600 w-6 h-6 mt-1" />
                <div>
                  {/* <h4 className="text-lg font-semibold text-gray-700">Email</h4> */}
                  <p className="text-gray-700">support@cureplushospitals.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FiMapPin className="text-red-600 w-6 h-6 mt-1" />
                <div>
                  {/* <h4 className="text-lg font-semibold text-gray-700">Address</h4> */}
                  <p className="text-gray-700">Mysuru, Karnataka, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border"
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            custom={1}
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-600">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-zinc-900"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-zinc-900"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-900 transition"
              >
                <FiSend className="w-5 h-5" />
                {loading ? 'Sending...' : 'Submit'}
              </button>
              {statusMessage && <p className="text-sm mt-2 text-green-600">{statusMessage}</p>}
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
