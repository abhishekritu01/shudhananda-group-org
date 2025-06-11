'use client';
import React, { useState } from 'react';
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

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    answer: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('/api/volunteer', {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        answer: formData.answer,
        location: formData.location,
      });

      if (res.status === 201) {
        toast.success('Volunteer application submitted successfully!', {
          autoClose: 2000,
          position: 'top-right',
        });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          location: '',
          answer: '',
        });
      }
    } catch (error:unknown) {
      const message = axios.isAxiosError(error) && error.response?.data?.message 
        ? error.response.data.message 
        : 'Submission failed';
      toast.error(message, {
        autoClose: 2000,
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderNavigation navigation={navigation} />
      <section className="bg-red-50 py-16 px-4 flex flex-col items-center min-h-screen">
        <div className="max-w-2xl w-full">
          <h1 className="text-4xl font-bold text-center text-red-700 mb-4">
            Volunteer Sign Up
          </h1>
          <p className="text-center text-gray-700 mb-10">
            Join our mission to save lives. As a volunteer, you’ll help us
            spread awareness, organize blood drives, and support donors.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full border-b border-gray-300 px-3 py-2 bg-transparent focus:outline-none focus:border-red-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border-b border-gray-300 px-3 py-2 bg-transparent focus:outline-none focus:border-red-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your contact number"
                className="w-full border-b border-gray-300 px-3 py-2 bg-transparent focus:outline-none focus:border-red-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City / Area"
                className="w-full border-b border-gray-300 px-3 py-2 bg-transparent focus:outline-none focus:border-red-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Why do you want to volunteer?
              </label>
              <textarea
                name="answer"
                value={formData.answer}
                onChange={handleChange}
                placeholder="Share your motivation with us..."
                className="w-full border-b border-gray-300 px-3 py-2 bg-transparent h-28 resize-none focus:outline-none focus:border-red-600"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium transition flex justify-center items-center gap-2"
              >
                {loading && (
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
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                )}
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default VolunteerPage;
