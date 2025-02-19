'use client'

'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
            <div className="flex justify-center gap-6 mb-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-600 transition"
                whileHover={{ scale: 1.1 }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition"
                whileHover={{ scale: 1.1 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-500 transition"
                whileHover={{ scale: 1.1 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-700 transition"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-400">Email: support@blooddonation.org</p>
              <p className="text-gray-400">Phone: +1 234 567 890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
              <ul className="text-gray-400">
                <li><a href="#hero" className="hover:text-red-600 transition">Home</a></li>
                <li><a href="#how-it-works" className="hover:text-red-600 transition">How It Works</a></li>
                <li><a href="#about" className="hover:text-red-600 transition">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md text-black mb-4"
              />
              <motion.button
                className="bg-gradient-to-r from-red-600 to-red-900 hover:bg-red-900 text-white py-2 px-4 rounded-lg"
                whileHover={{ scale: 1.1 }}
                
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
        <div className="py-4 bg-gray-800">
          <p className="text-gray-400">&copy; 2025 Blood Donation. All Rights Reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
