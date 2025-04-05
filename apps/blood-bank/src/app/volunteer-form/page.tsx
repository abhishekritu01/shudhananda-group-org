'use client';
import React from 'react';
import HeaderNavigation from '../component/HeaderNavigation';
import Footer from '../component/Footer';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Who We Are', href: '/story', current: false },
  { name: 'Can I Donate?', href: '/donate', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Blood Facts', href: '/facts', current: false },
];

const page = () => {
  return (
    <>
      <HeaderNavigation navigation={navigation} />
      <section className="bg-red-50 py-16 px-4 flex flex-col items-center min-h-screen">
        <div className="max-w-2xl w-full">
          <h1 className="text-4xl font-bold text-center text-red-700 mb-4">Volunteer Sign Up</h1>
          <p className="text-center text-gray-700 mb-10">
            Join our mission to save lives. As a volunteer, you’ll help us spread awareness, organize blood drives, and
            support donors. Together, we can make a real impact in our community.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border-b border-gray-300 px-3 py-2 bg-transparent focus:outline-none focus:border-red-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border-b border-gray-300 px-3 py-2 bg-transparent focus:outline-none focus:border-red-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="Your contact number"
                className="w-full border-b border-gray-300 px-3 py-2 bg-transparent focus:outline-none focus:border-red-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                placeholder="City / Area"
                className="w-full border-b border-gray-300 px-3 py-2 bg-transparent focus:outline-none focus:border-red-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Why do you want to volunteer?</label>
              <textarea
                placeholder="Share your motivation with us..."
                className="w-full border-b border-gray-300 px-3 py-2 bg-transparent h-28 resize-none focus:outline-none focus:border-red-600"
                required
              ></textarea>
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
