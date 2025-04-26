'use client';
import React from 'react';
// import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Footer from '../component/FooterSection';

const teamMembers = [
  {
    name: 'Dr. Arjun',
    role: 'Managing Director',
    bio: 'Visionary leader with a passion for healthcare and community service.',
    image: '/managment/DR ARJUN-Photoroom.png',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Dr. Sini ',
    role: 'Medical Director',
    bio: 'Expert in healthcare management and patient care, ensuring quality services.',
    image: '/managment/DR. SINI.jpeg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Capt. Raghu',
    role: 'COO',
    bio: 'Strategic planner with a focus on operational excellence and efficiency.',
    image: '/managment/CAPT. RAGHU M DAS-Photoroom.png',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Abhinandan',
    role: ' VP -New Initiatives & Investments',
    bio: 'Innovative thinker driving new projects and investments for growth.',
    image: '/managment/Abhinandan S-Photoroom.png',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Keshavmurthy',
    role: 'VP - Internal Audit & Finance',
    bio: 'Financial strategist ensuring fiscal responsibility and transparency.',
    image: '/managment/Keshav murthy.png',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Diwakar',
    role: 'Senior Operations Manager',
    bio: 'Experienced manager overseeing daily operations and team performance.',
    image: '/managment/Divakar SIR-Photoroom.png',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Srinivas',
    role: 'Senior Operations Manager',
    bio: 'Dedicated manager focused on operational efficiency and patient satisfaction.',
    image: '/managment/SRINIVAC C-Photoroom.png',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Manjunath',
    role: 'Senior Operations Manager',
    bio: 'Expert in healthcare operations with a commitment to quality service.',
    image: '/managment/Manjunath P-Photoroom.png',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Sandeep',
    role: 'Administrative Manager',
    bio: 'Efficient administrator ensuring smooth operations and support services.',
    image: '/managment/Sandeep.jpeg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Krishnadas',
    role: 'Hospital Administrator',
    bio: 'Skilled administrator managing hospital operations and patient care.',
    image: '/managment/krishnadas.JPG',
    linkedin: '#',
    twitter: '#',
  },

];

const TeamPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-20 text-gray-800">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-purple-800">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate professionals dedicated to building a healthier India, one community at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center border ">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border"
              />
              <h2 className="text-xl text-purple-800 font-bold mb-1">{member.name}</h2>
              <p className="text-purple-800  font-bold mb-2">{member.role}</p>
              <p className="text-sm text-zinc-900 mb-4">{member.bio}</p>
              {/* <div className="flex justify-center gap-4">
                <a href={member.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-700 w-5 h-5 hover:text-blue-800 transition" />
                </a>
                <a href={member.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-blue-500 w-5 h-5 hover:text-blue-600 transition" />
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TeamPage;
