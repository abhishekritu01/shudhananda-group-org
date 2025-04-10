'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeaderNavigation from '../component/HeaderNavigation';
import Footer from '../component/Footer';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Who We Are', href: '/story', current: false },
  { name: 'Can I Donate?', href: '/donate', current: false },
  { name: 'Blood Facts', href: '/facts', current: false },
  { name: 'Join Us', href: '/join', current: true },
];

const JoinPage = () => {
  return (
    <>
      <HeaderNavigation navigation={navigation} />

      <main className="min-h-screen bg-white py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-red-700 mb-4">Be a Part of the Cure</h1>
          <p className="text-lg text-gray-700">
            Whether you&apos;re donating blood or volunteering your time, you&apos;re helping save lives. Choose how you&apos;d like to join us below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Donor Card */}
          <motion.div 
            className="border border-red-200 rounded-xl p-6 shadow-md hover:shadow-xl transition bg-red-50"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-semibold text-red-700 mb-2">🩸 Sign Up as a Donor</h2>
            <p className="text-gray-700 mb-4 text-sm">
              Your blood donation can save up to three lives. It’s quick, safe, and one of the most generous acts you can do.
            </p>
            <ul className="text-left text-gray-600 text-sm mb-6 list-disc list-inside">
              <li>Donate at your convenience</li>
              <li>Get regular health checkups</li>
              <li>Help in emergency situations</li>
            </ul>
            <Link href="/donor-form">
              <button className="bg-red-700 text-white px-5 py-2 rounded-lg hover:bg-red-800 transition">
                Become a Donor
              </button>
            </Link>
          </motion.div>

          {/* Volunteer Card */}
          <motion.div 
            className="border border-red-200 rounded-xl p-6 shadow-md hover:shadow-xl transition bg-red-50"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-semibold text-red-700 mb-2">🤝 Join as a Volunteer</h2>
            <p className="text-gray-700 mb-4 text-sm">
              Help us spread awareness, organize donation camps, and support our events. No medical background needed—just a kind heart.
            </p>
            <ul className="text-left text-gray-600 text-sm mb-6 list-disc list-inside">
              <li>Community outreach programs</li>
              <li>Event and logistics support</li>
              <li>Assist blood drive coordination</li>
            </ul>
            <Link href="/volunteer-form">
              <button className="bg-red-700 text-white px-5 py-2 rounded-lg hover:bg-red-800 transition">
                Become a Volunteer
              </button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default JoinPage;
