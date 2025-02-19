'use client'
import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaHeartbeat } from 'react-icons/fa';

const events = [
  {
    date: "March 5, 2025",
    location: "City Hospital",
    description: "Join us for a blood donation drive and help save lives.",
  },
  {
    date: "March 20, 2025",
    location: "Downtown Community Center",
    description: "Donate blood and make a difference in someone's life.",
  },
  {
    date: "April 10, 2025",
    location: "University Campus",
    description: "Participate in our annual blood donation event.",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-semibold text-gray-900 mb-12">
        Upcoming Blood Donation Camps & Events
      </h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-12 px-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white text-gray-900 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="p-8">
              <div className="flex items-center text-lg font-medium text-gray-800 mb-4">
                <FaCalendarAlt className="text-red-600 mr-3" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-lg font-medium text-gray-800 mb-4">
                <FaMapMarkerAlt className="text-red-600 mr-3" />
                <span>{event.location}</span>
              </div>
              <p className="text-gray-600">{event.description}</p>
            </div>
            <div className="bg-gradient-to-r from-red-600 to-red-900 text-center py-4 text-white font-medium text-sm rounded-b-lg">
              <FaHeartbeat className="inline mr-2" />
              <span>Join Us and Save Lives</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
