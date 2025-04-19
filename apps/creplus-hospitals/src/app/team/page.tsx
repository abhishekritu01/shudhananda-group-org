'use client';
import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Footer from '../component/FooterSection';

const teamMembers = [
  {
    name: 'Dr. Sudhanand R',
    role: 'Founder & CEO',
    bio: 'A visionary in rural healthcare, leading the charge in delivering accessible medical services.',
    image: '/team/sudhanand.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Dr. Meera Sharma',
    role: 'Chief Medical Officer',
    bio: 'Oversees clinical excellence across all CurePlus hospitals with compassion and care.',
    image: '/team/meera.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Rajiv Sinha',
    role: 'Operations Head',
    bio: 'Ensures smooth operation and expansion of the hospital network across Karnataka.',
    image: '/team/rajiv.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Priya Das',
    role: 'Head of Pharma',
    bio: 'Leads CurePlus Pharma in delivering affordable medications to rural communities.',
    image: '/team/priya.jpg',
    linkedin: '#',
    twitter: '#',
  },
];

const TeamPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-20 text-gray-800">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-blue-900">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate professionals dedicated to building a healthier India, one community at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center border">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border"
              />
              <h2 className="text-xl font-bold mb-1">{member.name}</h2>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
              <div className="flex justify-center gap-4">
                <a href={member.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-700 w-5 h-5 hover:text-blue-800 transition" />
                </a>
                <a href={member.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-blue-500 w-5 h-5 hover:text-blue-600 transition" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TeamPage;
