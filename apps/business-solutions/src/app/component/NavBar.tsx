"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "team", label: "Our Team" },
    { id: "projects", label: "Projects & Case Studies" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let foundActive = "";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const offset = section.offsetTop - 120;
          if (scrollPosition >= offset) {
            foundActive = link.id;
          }
        }
      });

      setActiveSection(foundActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/SBPL.png" alt="SBPL Logo" width={50} height={50} />
          <h1 className=" text-sm md:text-xl font-semibold text-white tracking-wide">
            Sudhanand Business Solutions
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-lg font-medium transition-colors duration-300 ${
                activeSection === link.id
                  ? "text-indigo-400"
                  : "text-gray-300 hover:text-indigo-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-indigo-400 focus:outline-none"
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`absolute top-16 left-0 w-full bg-gray-900 shadow-md p-6 transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        } md:hidden`}
      >
        <nav className="flex flex-col space-y-4 text-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-lg font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
