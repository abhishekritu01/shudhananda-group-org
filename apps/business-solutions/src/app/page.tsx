import React from "react";
import { FaCheckCircle, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Sudhanand Business Solutions</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#industries" className="hover:underline">Industries</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="bg-gray-800 text-white p-20 text-center">
        <h2 className="text-4xl font-bold">Transforming Industries with Technology</h2>
        <p className="mt-4">Innovating business solutions for IT, healthcare, finance, and more.</p>
        <button className="mt-6 bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-700">Explore Solutions</button>
      </section>
      
      {/* About Section */}
      <section id="about" className="p-10 bg-gray-100 text-center">
        <h3 className="text-2xl font-bold">About Us</h3>
        <p className="mt-4 max-w-2xl mx-auto">
          Founded in 2010, Sudhanand Business Solutions has evolved from healthcare to IT & ITES,
          serving over 600,000 members with innovative business solutions.
        </p>
      </section>
      
      {/* Services Section */}
      <section id="services" className="p-10 text-center">
        <h3 className="text-2xl font-bold">Our Services</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {["IT & ITES", "Finance", "Insurance", "Healthcare", "Cybersecurity"].map(service => (
            <div key={service} className="p-6 bg-white shadow-lg rounded-lg">
              <FaCheckCircle className="text-blue-500 text-4xl mx-auto" />
              <h4 className="mt-4 font-semibold">{service}</h4>
            </div>
          ))}
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="p-10 bg-gray-100 text-center">
        <h3 className="text-2xl font-bold">Success Stories</h3>
        <p className="mt-4">&quot;We reduced fraud claims by 30% with AI-driven solutions!&quot; - Client Testimonial</p>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="p-10 text-center">
        <h3 className="text-2xl font-bold">Get in Touch</h3>
        <p className="mt-4">Contact us for consultations and business solutions.</p>
        <button className="mt-6 bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-700">Contact Us</button>
      </section>
      
      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4 text-center">
        <p>© 2024 Sudhanand Business Solutions. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
