'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface NavLink {
  name: string;
  href: string;
}

interface HeaderProps {
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/CUREPLUS HOSPITALS.png"
            alt="CurePlus Hospitals Logo"
            width={90}
            height={100}
            className="rounded-full object-cover scale-120"
          />
          {/* <span className="text-xl font-semibold text-purple-800 hidden sm:block">
            CurePlus Hospitals
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium text-lg">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <p className="hover:text-purple-600 hover:underline underline-offset-4 transition-all duration-200">
                {link.name}
              </p>
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md z-40 w-full px-6 py-6 space-y-4 shadow-md">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <p
                onClick={toggleMenu}
                className="block text-gray-800 text-lg font-medium hover:text-purple-600 transition"
              >
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
