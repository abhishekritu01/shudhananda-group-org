
import React from 'react';
import { FaBriefcase, FaHistory, FaUsers, FaIndustry, FaBuilding, FaLaptopCode } from 'react-icons/fa';
const AboutSection = () => {
    return (
        <section id="about" className="p-10 bg-white text-orange-800">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-4xl font-bold text-orange-600 mb-6">About Us</h3>
                <p className="text-lg text-gray-700 mb-10">
                    Sudhanand Business Solutions Pvt. Ltd. (SBPL) has transformed from a healthcare pioneer into a multi-industry leader,
                    innovating across IT, finance, and insurance sectors.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                    { icon: FaHistory, title: "Our History", text: "Founded in 2010 as SAS Poorna Arogya Healthcare Pvt. Ltd., we revolutionized healthcare through our award-winning Health Mutual Model before expanding into insurance and IT solutions." },
                    { icon: FaUsers, title: "Leadership Team", text: "Dr. Arjun Sachidanand, Founder Chairman of Sudhanand Group, has driven our mission to provide innovative healthcare and business solutions for the underprivileged." },
                    {
                        icon: FaBriefcase,
                        title: "Our Growth Story",
                        text: (
                          <ul className="list-disc pl-5 space-y-1 text-left">
                            <li>2010 – Founded as SAS Poorna Arogya Healthcare Pvt. Ltd.</li>
                            <li>2012 – Provided affordable healthcare to over 600,000 members across 22 districts</li>
                            <li>2019 – Entered the IT & ITES sector</li>
                            <li>2024 – Rebranded as SBPL for multi-sector expansion</li>
                          </ul>
                        ),
                      },
                      
                    { icon: FaIndustry, title: "Industries We Serve", text: "Our diversified ventures include healthcare, insurance, IT, hospitality, sports, education, organic farming, and more." },
                    { icon: FaBuilding, title: "Our Ventures", text: "From Cure+ Hospitals to Sudhanand Pharmacies, TiaMed Technologies, and Sudhanand Business Solutions, our group spans multiple domains." },
                    { icon: FaLaptopCode, title: "Tech & Innovation", text: "With expertise in software development, data science, and UI/UX, we are shaping the future of IT solutions with cutting-edge technology." }
                ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md border border-orange-300">
                        <item.icon className="text-5xl text-orange-600" />
                        <h4 className="text-xl font-semibold mt-4">{item.title}</h4>
                        <div className="text-sm text-gray-700 mt-2">{item.text}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutSection;
