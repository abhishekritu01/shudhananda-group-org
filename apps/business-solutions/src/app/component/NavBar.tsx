'use client'
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
    { id: "projects", label: "Our Partners" },
    // { id: "testimonials", label: "Testimonials" },
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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="bg-white text-orange-600 sticky top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link href={"/"}>
            <Image
              src="/SBPL.png"
              alt="SBPL Logo"
              width={100}
              height={80}
              className="rounded-full z-10"
              priority={true}
            />
          </Link>
          <Link
            href={"/"}
            className="text-sm sm:text-xl font-bold text-orange-600 tracking-wide"
          >
            Sudhanand Business Solutions
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm lg:text-base font-medium transition-colors duration-300 ${
                activeSection === link.id
                  ? "text-orange-800 border-b-2 border-orange-800"
                  : "text-orange-600 hover:text-orange-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/careers" passHref>
            <p className="text-sm lg:text-base font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300">
              Careers
            </p>
          </Link>
          <Link href="/about" passHref>
            <p className="text-sm lg:text-base font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300">
              Who We Are
            </p>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-600 focus:outline-none hover:text-orange-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`fixed md:hidden top-16 left-0 w-full bg-white shadow-md p-6 transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ maxHeight: "calc(100vh - 64px)", overflowY: "auto" }}
      >
        <nav className="flex flex-col space-y-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className="text-base sm:text-lg font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col space-y-4 text-center mt-4">
          <Link href="/careers" passHref>
            <p className="text-base sm:text-lg font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300 py-2">
              Careers
            </p>
          </Link>

          <Link href="/about" passHref>
            <p className="text-base sm:text-lg font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300 py-2">
              Who We Are
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;