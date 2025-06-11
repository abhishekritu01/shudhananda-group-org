'use client';
import { FaHandsHelping, FaHeartbeat, FaRegClock, FaUserMd } from 'react-icons/fa';
import { GiGrowth, GiHealthNormal } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';
import Footer from "../component/FooterSection";
import { FiArrowRight } from 'react-icons/fi';

const CareersPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Explore Careers at CurePlus
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Join our mission to revolutionize healthcare across rural India. Be part of a passionate team dedicated to
            making a difference.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-blue-600">Current progress</span>
            <span className="text-sm font-medium text-gray-500">65% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
              style={{ width: '65%' }}
            ></div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg max-w-4xl mx-auto mb-16 border border-gray-100">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <FaRegClock className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exciting Opportunities Coming Soon!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              We&apos;re actively working on creating meaningful career opportunities. Our team is building something special, and we can&apos;t wait to share it with you!
            </p>
            <div className="inline-flex px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Check back in the coming weeks
            </div>
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Join the CurePlus Team?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeartbeat className="w-8 h-8 text-blue-600" />,
                title: "Make a Real Impact",
                description: "Directly improve healthcare access for underserved communities"
              },
              {
                icon: <GiGrowth className="w-8 h-8 text-purple-600" />,
                title: "Growth Opportunities",
                description: "Professional development in a fast-growing healthcare network"
              },
              {
                icon: <RiTeamFill className="w-8 h-8 text-blue-600" />,
                title: "Collaborative Culture",
                description: "Work with passionate professionals across disciplines"
              },
              {
                icon: <FaUserMd className="w-8 h-8 text-purple-600" />,
                title: "Clinical Excellence",
                description: "Practice in facilities committed to quality care"
              },
              {
                icon: <GiHealthNormal className="w-8 h-8 text-blue-600" />,
                title: "Community Focus",
                description: "Serve diverse populations with comprehensive care"
              },
              {
                icon: <FaHandsHelping className="w-8 h-8 text-purple-600" />,
                title: "Supportive Environment",
                description: "Resources and mentorship to help you succeed"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to be the first to know?</h3>
          <p className="text-lg text-gray-600 mb-6">
            We&apos;ll notify you when new positions become available.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all">
            Get Notified <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareersPage;