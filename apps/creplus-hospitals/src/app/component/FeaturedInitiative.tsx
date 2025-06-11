import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const FeaturedInitiative = () => (
  <section className="py-12 bg-white text-center px-4">
    <h2 className="text-3xl font-bold mb-6">Featured Initiative</h2>
    <div className="max-w-2xl mx-auto border p-6 rounded-lg shadow">
      <FaCalendarAlt className="text-pink-600 text-3xl mb-2 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">Free Women’s Health Camp – April 16</h3>
      <p className="mb-2">PCOS | Infertility | Menstrual Disorders | Uterus Check-Up</p>
      <p className="mb-4">At CurePlus T. Narasipura – Expert female doctors, Free of cost.</p>
      <a href="/health-camps" className="inline-block px-5 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition">Learn More</a>
    </div>
  </section>
);

export default FeaturedInitiative;