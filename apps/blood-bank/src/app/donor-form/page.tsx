'use client';
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTint } from 'react-icons/fa';
import HeaderNavigation from '../component/HeaderNavigation';
import Footer from '../component/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';

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

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('/api/doner', {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        bloodGroup: formData.bloodGroup,
      });

      if (res.status === 201) {
        toast.success('Donor registered successfully!', { autoClose: 2000, position: "top-right" });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          location: '',
          bloodGroup: '',
        });
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.message || 'An error occurred!', { autoClose: 2000, position: "top-right" });
      }
      else {
        toast.error('An unexpected error occurred!', { autoClose: 2000, position: "top-right" });
      }
    } finally {
      setLoading(false);
    }
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
              required
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
              required
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
              required
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
              required
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
              required
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
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium transition flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default DonorFormPage;
