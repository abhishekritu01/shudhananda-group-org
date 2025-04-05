'use client';
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTint } from 'react-icons/fa';
import HeaderNavigation from '../component/HeaderNavigation';
import Footer from '../component/Footer';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Who We Are', href: '/story', current: false },
  { name: 'Can I Donate?', href: '/donate', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Blood Facts', href: '/facts', current: false },
];

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const DonorFormPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    bloodGroup: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donor Form Submitted:', formData);
    // Optional: API call or form validation
  };

  return (
    <>
      <HeaderNavigation navigation={navigation} />
      <section className="min-h-screen bg-red-50 py-16 px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-red-700 mb-10 text-center">
          Become a Donor
        </h2>
        <form className="space-y-6 w-full max-w-2xl px-4" onSubmit={handleSubmit}>
          <div className="flex items-center border-b border-gray-300 px-2 py-3">
            <FaUser className="text-red-500 mr-3" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center border-b border-gray-300 px-2 py-3">
            <FaEnvelope className="text-red-500 mr-3" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center border-b border-gray-300 px-2 py-3">
            <FaPhoneAlt className="text-red-500 mr-3" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center border-b border-gray-300 px-2 py-3">
            <FaMapMarkerAlt className="text-red-500 mr-3" />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center border-b border-gray-300 px-2 py-3">
            <FaTint className="text-red-500 mr-3" />
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
            >
              <option value="" disabled>Select Blood Group</option>
              {bloodGroups.map(group => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium transition"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default DonorFormPage;
