'use client';

import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { MdBusiness, MdHealthAndSafety, MdSecurity } from "react-icons/md";

const HeroSection = () => {
  const words = ["Technology", "Innovation", "Excellence"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white text-gray-900 py-28 px-6 my-10 sm:py-32 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Title */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
          Transforming Industries with <span className="text-indigo-600">{words[index]}</span>
        </h1>

        {/* Hero Description */}
        <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Sudhanand Business Solutions (SBPL) is revolutionizing industries with cutting-edge IT, 
          healthcare, insurance, and cybersecurity solutions. Our mission is to drive innovation 
          and efficiency through AI, automation, and data-driven strategies.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#services"
            className="px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md 
                      hover:bg-indigo-700 transition duration-300 ease-in-out flex items-center gap-2"
          >
            <MdBusiness /> Explore Our Solutions
          </a>
          {/* <a
            href="#contact"
            className="px-6 py-3 text-lg font-semibold text-indigo-600 border border-indigo-600 rounded-lg 
                      hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out flex items-center gap-2"
          >
            <MdHealthAndSafety /> Get in Touch
          </a> */}
        </div>

        {/* Services Overview */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
            <MdBusiness className="text-indigo-600 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">IT & ITES</h3>
              <p className="text-gray-700">Innovative software and AI solutions for businesses.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
            <MdHealthAndSafety className="text-green-600 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Healthcare</h3>
              <p className="text-gray-700">Affordable healthcare solutions with cutting-edge technology.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
            <MdSecurity className="text-red-600 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Cybersecurity</h3>
              <p className="text-gray-700">Protecting businesses with ethical hacking and data security.</p>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-14 flex flex-col items-center">
          <span className="text-gray-600 text-sm">Scroll Down</span>
          <FaArrowDown className="text-gray-600 text-2xl mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
