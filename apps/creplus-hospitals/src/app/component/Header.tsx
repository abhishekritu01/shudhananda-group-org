'use client'


'use client';

import { useState } from 'react';
import { FaBars, FaTimes, FaHospital } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-purple-900/80 backdrop-blur-lg text-white shadow-lg fixed w-full z-50 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaHospital size={32} className="text-purple-300" />
          <h1 className="text-2xl font-bold tracking-wide">CurePlus Hospitals</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-lg">
          {['Home', 'About', 'Services', 'Locations', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-purple-300 hover:underline underline-offset-8 transition-all duration-200"
            >
              {link}
            </a>
          ))}
          <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full font-semibold transition-all duration-300">
            Book Now
          </button>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none transition-transform"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-purple-800/95 backdrop-blur-lg text-white absolute w-full top-full left-0 py-8 px-6 space-y-6 text-center text-lg transition-transform duration-500 ${
          isOpen ? 'translate-y-0' : '-translate-y-[100vh]'
        }`}
      >
        {['Home', 'About', 'Services', 'Locations', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="block hover:text-purple-300 transition-all duration-300"
            onClick={toggleMenu}
          >
            {link}
          </a>
        ))}
        <button
          onClick={toggleMenu}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold transition-all duration-300"
        >
          Book Now
        </button>
      </nav>
    </header>
  );
};

export default Header;
