import React from 'react';
import { FaBriefcase, FaHistory, FaUsers, FaIndustry, FaBuilding, FaLaptopCode } from 'react-icons/fa';

const AboutSection = () => {
    return (
        <section id="about" className="p-10 bg-gray-50 text-gray-800">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-6">About Us</h3>
                <p className="text-lg text-gray-600 mb-10">
                    Sudhanand Business Solutions Pvt. Ltd. (SBPL) has transformed from a healthcare pioneer into a multi-industry leader,
                    innovating across IT, finance, and insurance sectors.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* History and Founding */}
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                    <FaHistory className="text-5xl text-blue-600" />
                    <h4 className="text-xl font-semibold mt-4">Our History</h4>
                    <p className="text-sm text-gray-700 mt-2">
                        Founded in 2010 as SAS Poorna Arogya Healthcare Pvt. Ltd., we revolutionized healthcare through our award-winning
                        Health Mutual Model before expanding into insurance and IT solutions.
                    </p>
                </div>

                {/* Leadership and Team */}
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                    <FaUsers className="text-5xl text-blue-600" />
                    <h4 className="text-xl font-semibold mt-4">Leadership Team</h4>
                    <p className="text-sm text-gray-700 mt-2">
                        Dr. Arjun Sachidanand, Founder Chairman of Sudhanand Group, has driven our mission to provide innovative
                        healthcare and business solutions for the underprivileged.
                    </p>
                </div>

                {/* Growth Story */}
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                    <FaBriefcase className="text-5xl text-blue-600" />
                    <h4 className="text-xl font-semibold mt-4">Our Growth Story</h4>
                    <p className="text-sm text-gray-700 mt-2">
                        2010 – Founded to provide affordable healthcare.<br />
                        2012 – Expanded to 600,000+ members.<br />
                        2019 – Entered IT & ITES sector.<br />
                        2024 – Rebranded as SBPL for multi-sector expansion.
                    </p>
                </div>

                {/* Industries Served */}
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                    <FaIndustry className="text-5xl text-blue-600" />
                    <h4 className="text-xl font-semibold mt-4">Industries We Serve</h4>
                    <p className="text-sm text-gray-700 mt-2">
                        Our diversified ventures include healthcare, insurance, IT, hospitality, sports, education, organic farming, and more.
                    </p>
                </div>

                {/* Business Ventures */}
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                    <FaBuilding className="text-5xl text-blue-600" />
                    <h4 className="text-xl font-semibold mt-4">Our Ventures</h4>
                    <p className="text-sm text-gray-700 mt-2">
                        From Cure+ Hospitals to Sudhanand Pharmacies, TiaMed Technologies, and Sudhanand Business Solutions,
                        our group spans multiple domains.
                    </p>
                </div>

                {/* IT & Innovation */}
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                    <FaLaptopCode className="text-5xl text-blue-600" />
                    <h4 className="text-xl font-semibold mt-4">Tech & Innovation</h4>
                    <p className="text-sm text-gray-700 mt-2">
                        With expertise in software development, data science, and UI/UX, we are shaping the future of IT solutions
                        with cutting-edge technology.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
