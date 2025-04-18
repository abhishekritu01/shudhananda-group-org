"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "team", label: "Our Team" },
    { id: "projects", label: "Projects" },
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="bg-white text-orange-600 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Image
            src="/SBPL.png"
            alt="SBPL Logo"
            width={60}
            height={50}
            className="rounded-full z-10"
            priority={true}
          />
          <h1 className="text-sm md:text-sm font-semibold text-orange-600 tracking-wide">
            Sudhanand Business Solutions
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === link.id
                  ? "text-orange-800 border-b-2 border-orange-800"
                  : "text-orange-600 hover:text-orange-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/careers" passHref>
            <p className="text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300">
              Careers
            </p>
          </Link>
          <Link href="/about" passHref>
            <p className="text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300">
            Who We Are
            </p>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-600 focus:outline-none hover:text-orange-800"
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`absolute top-16 left-0 w-full bg-white shadow-md p-6 transition-all duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className="text-lg font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col space-y-4 text-center mt-4">
        <Link href="/careers" passHref>
          <p className="text-lg font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300">
            Careers
          </p>
        </Link>

        <Link href="/about" passHref>
          <p className="text-lg font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300">
          Who We Are
          </p>
        </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
