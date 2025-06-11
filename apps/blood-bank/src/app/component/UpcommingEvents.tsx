'use client';
import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaHeartbeat, FaRegSadCry } from 'react-icons/fa';

interface Event {
  date: string;
  location: string;
  description: string;
}

const events: Event[] = [
  // Keep data here. For now, comment out to test "No Camps" template.
  // {
  //   date: "March 5, 2025",
  //   location: "City Hospital",
  //   description: "Join us for a blood donation drive and help save lives.",
  // },
];

const UpcomingEvents: React.FC = () => {
  const noEventsTemplate = (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="bg-white text-gray-900 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 p-8 max-w-md w-full">
        <FaRegSadCry className="text-red-600 text-6xl mb-6 mx-auto" />
        <h3 className="text-2xl font-semibold mb-4">No Blood Donation Camps Right Now</h3>
        <p className="text-gray-600 mb-6 text-center">
          Currently, there are no scheduled blood donation events.<br />
          Please stay tuned — new camps will be announced soon!
        </p>
        <div className="bg-gradient-to-r from-red-600 to-red-900 text-center py-3 px-6 rounded-lg text-white font-medium">
          Stay Connected & Save Lives
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50 min-h-[500px] flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-semibold text-gray-900 mb-12">
        Upcoming Blood Donation Camps & Events
      </h2>
      <div className="container mx-auto">
        {events.length === 0 ? (
          noEventsTemplate
        ) : (
          <div className="grid md:grid-cols-3 gap-12 px-6">
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
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
