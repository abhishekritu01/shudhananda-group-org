'use client';

import Footer from '@/app/component/FooterSection';
import { hospitals } from '@/app/data/Hospital';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';


import { FaParking, FaProcedures, FaUserMd, FaWifi } from 'react-icons/fa';
import { HiOutlineClock, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineStar } from 'react-icons/hi';
import { MdLocalHospital, MdOutlineEmergency, MdOutlineLocalHotel } from 'react-icons/md';

const hospitalsList = [
  { slug: 'cureplus-disha-hospital', name: 'CurePlus Disha Hospital', image: '/cureplus/cureplus.png', status: 'popular', phone: '0821-2454798' },
  { slug: 'cureplus-dharani-hospital', name: 'CurePlus Dharani Hospital', image: '/dharni/dharni.png', status: 'normal', phone: '08226-297298' },
  { slug: 'cureplus-kaveri-hospital', name: 'CurePlus Kaveri Hospital', image: '/kaveri/kaveri1.png', status: 'featured', phone: '08276 298998' },
  { slug: 'cureplus-krishna-hospital', name: 'CurePlus Krishna Hospital', image: '/krishna/krishna1.png', status: 'normal', phone: '08223-275798' },
  { slug: 'cureplus-narasegowda-memorial-hospital', name: 'CurePlus Narasegowda Memorial Hospital', image: '/narasegowda/narasaregoda1.png', status: 'popular', phone: '08236-200466' },
  { slug: 'cureplus-hospital-shanivarasanthe', name: 'CurePlus Hospital Shanivarasanthe ', image: '/Shanivarasanthe/shanivarasanthe.png', status: 'normal', phone: '9035193777' },
  { slug: 'cureplus-hospital-ramapura', name: 'CurePlus Hospital Ramapura ', image: '/rampura/rampura.png', status: 'featured', phone: '08225-272200' },
  { slug: 'cureplus-hospital-terakanambi', name: 'CurePlus Hospital Terakanambi ', image: '/terakanamb/terakanamb.png', status: 'normal', phone: '08229-222044' },
  { slug: 'cureplus-hospital-bherya', name: 'CurePlus Hospital Bherya ', image: '/bheraya/bheraya.png', status: 'popular', phone: '08223-200604' },
  { slug: 'cureplus-hospital-t-narasipura', name: 'CurePlus Hospital T. Narasipura ', image: '/Narasipura/Narasipura.png', status: 'normal', phone: '08227-200940' },
  { slug: 'cureplus-hospital-handpost', name: 'CurePlus Hospital Handpost', image: '/HandPost/HandPost1.png', status: 'featured', phone: '8228257300' },
  { slug: 'cureplus-hospital-hosur', name: 'CurePlus Hospital Hosur ', image: '/hosur/hosur.png', status: 'normal', phone: '9035193777' },
  { slug: 'cureplus-hospital-halli-mysore', name: 'CurePlus Hospital Halli Mysore ', image: '/halli/halli.png', status: 'popular', phone: '08175-273114' },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const Page = () => {
  const params = useParams();
  const hospitalSlug = decodeURIComponent(params.slug as string);
  const hospital = hospitals.find((h) => h.slug === hospitalSlug);



  if (!hospital) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600 text-xl font-semibold">
        Hospital not found.
      </div>
    );
  }

  return (
    <>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          {/* Hospital Header with Status - Bigger Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-12 relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96">
              <Image
                src={hospital.imageUrl}
                alt={hospital.name}
                fill
                className="object-cover"
                priority // (optional) if this is above-the-fold for faster LCP
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl font-extrabold text-gray-900"
                >
                  {hospital.name}
                </motion.h1>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <HiOutlineLocationMarker className="text-blue-600 w-5 h-5" />
                  <span className="text-base sm:text-lg">{hospital.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg w-full sm:w-auto justify-center sm:justify-start">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-800 font-medium">Open Now</span>
              </div>
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12"
          >
            <div className="bg-blue-50 p-3 sm:p-4 rounded-xl flex items-center gap-3">
              <FaUserMd className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <p className="text-xs sm:text-sm text-purple-600">Specialists</p>
                <p className="font-bold text-purple-600 text-sm sm:text-base">{hospital.specialists || '10+'}</p>
              </div>
            </div>
            <div className="bg-purple-50 p-3 sm:p-4 rounded-xl flex items-center gap-3">
              <FaProcedures className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <p className="text-xs sm:text-sm text-purple-600">Beds</p>
                <p className="font-bold text-purple-600 text-sm sm:text-base">{hospital.beds || '20+'}</p>
              </div>
            </div>
            <div className="bg-green-50 p-3 sm:p-4 rounded-xl flex items-center gap-3">
              <MdOutlineEmergency className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <p className="text-xs sm:text-sm text-purple-600">Emergency</p>
                <p className="font-bold text-purple-600 text-sm sm:text-base">24/7</p>
              </div>
            </div>
            <div className="bg-orange-50 p-3 sm:p-4 rounded-xl flex items-center gap-3">
              <HiOutlineStar className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <p className="text-xs sm:text-sm text-purple-600">Rating</p>
                <p className="font-bold text-purple-600 text-sm sm:text-base">4.8/5</p>
              </div>
            </div>
          </motion.section>

          {/* About Section */}
          <div className="mb-12 p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 border-b pb-2 flex items-center gap-2">
              <MdLocalHospital className="text-blue-600" />
              About the Hospital
            </h2>
            <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line">{hospital.description}</p>
          </div>

          {/* Services & Facilities */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={2}
            className="grid md:grid-cols-2 gap-6 sm:gap-10 mb-12"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 border-b pb-2 flex items-center gap-2">
                <FaProcedures className="text-blue-600" />
                Services
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {hospital.services.map((service, i) => (
                  <motion.li
                    key={i}
                    variants={fadeIn}
                    custom={i + 1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-blue-50 p-3 sm:p-4 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-200"
                  >
                    <div className="p-1.5 sm:p-2 rounded-lg bg-blue-100 text-blue-600">
                      <MdLocalHospital className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{service.label}</span>
                      {/* {typeof service.icon === 'function' && (
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">No additional description available</p>
                      )} */}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 border-b pb-2 flex items-center gap-2">
                <MdOutlineLocalHotel className="text-green-600" />
                Facilities
              </h2>
              <ul className="grid grid-cols-2 gap-3 sm:gap-4">
                {hospital.facilities.map((facility, i) => (
                  <motion.li
                    key={i}
                    variants={fadeIn}
                    custom={i + 1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-green-50 p-2 sm:p-3 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-200"
                  >
                    <div className="p-1 sm:p-1.5 rounded-lg bg-green-100 text-green-600">
                      {facility.icon?.toString() === 'wifi' && <FaWifi className="w-3 h-3 sm:w-4 sm:h-4" />}
                      {facility.icon?.toString() === 'parking' && <FaParking className="w-3 h-3 sm:w-4 sm:h-4" />}
                      {!facility.icon && <MdOutlineLocalHotel className="w-3 h-3 sm:w-4 sm:h-4" />}
                    </div>
                    <span className="text-gray-700 text-xs sm:text-sm font-medium">{facility.label}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Infrastructure */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={3}
            className="mb-12 bg-white p-4 sm:p-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 border-b pb-2">Infrastructure</h2>
            <p className="text-sm sm:text-base leading-relaxed">{hospital.infrastructure}</p>

            {hospital.departments && (
              <div className="mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Departments</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {Array.isArray(hospital.departments) &&
                    hospital.departments.map((dept, i) => (
                      <span key={i} className="bg-blue-50 text-blue-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                        {dept}
                      </span>
                    ))}
                </div>
              </div>
            )}
          </motion.section>

          {/* Gallery */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={4}
            className="mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 border-b pb-2">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {hospital.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group overflow-hidden rounded-lg shadow-md aspect-square"
                >
                  <div className="relative w-full h-48 group overflow-hidden rounded-lg">
                    <Image
                      src={img}
                      alt={`Hospital Gallery ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact & Hours */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={5}
            className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12"
          >
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 border-b pb-2">Contact Information</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <HiOutlineLocationMarker className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" />
                  <div>
                    <a
                      href={hospital.contact.address}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 underline text-sm sm:text-base"
                    >
                      View on Map
                    </a>

                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlinePhone className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
                  <div>
                    <a href={`tel:${hospital.contact.phone}`} className="text-purple-600 underline text-sm sm:text-base">
                      {hospital.contact.phone}
                    </a>
                  </div>
                </div>
                {hospital.contact.email && (
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Email</p>
                      <p className="text-sm sm:text-base">{hospital.contact.email}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 border-b pb-2 flex items-center gap-2">
                <HiOutlineClock className="text-orange-500" />
                Opening Hours
              </h2>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">24 Hours</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">24 Hours</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">24 Hours</span>
                </div>
                <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Emergency Services</span>
                    <span className="bg-red-100 text-red-800 px-2 py-0.5 sm:px-2 sm:py-1 rounded text-xs sm:text-sm font-medium">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4 lg:sticky lg:top-6 lg:self-start">
          {/* Emergency Contact Card */}
          <div className="p-4 bg-red-50 rounded-xl shadow-md border border-red-100">
            <h3 className="text-lg font-bold mb-3 text-red-800 flex items-center gap-2">
              <MdOutlineEmergency className="w-5 h-5" />
              Emergency Contact
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <HiOutlinePhone className="w-4 h-8 text-red-600" />
                <span className="text-red-800 font-bold text-2xl sm:text-3xl">+91 90351 93777</span>
              </div>
              <p className="text-xs text-red-700 mt-2">Available 24/7 for emergencies</p>
            </div>
          </div>

          {/* Hospital Network Sidebar */}
          <div className="p-4 bg-white rounded-xl shadow-md">
            <h3 className="text-lg sm:text-xl font-bold mb-4 border-b pb-2">Our Network</h3>
            <ul className="space-y-2 sm:space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {hospitalsList.map((hosp) => (
                <Link
                  key={hosp.slug}
                  href={`/hospital/${hosp.slug}`}
                  className={`block rounded-lg transition-colors duration-200 ${hospital.slug === hosp.slug ? 'bg-gray-200' : 'hover:bg-gray-100'}`}


                >
                  <li className="flex items-center gap-3 p-2 sm:p-3">
                    <div className="relative">
                      <Image
                        src={hosp.image}
                        alt={hosp.name}
                        width={48} // corresponds to w-12 (12 * 4 = 48px)
                        height={48} // same for height
                        className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-md shadow"
                      />

                    </div>
                    <div>
                      <span className={`text-xs sm:text-sm font-medium ${hospital.slug === hosp.slug ? 'text-blue-800' : 'text-gray-800'}`}>

                        {hosp.name}
                      </span>
                      <div className="flex items-center gap-1 mt-0.5">
                        <HiOutlineStar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-500" />
                        <span className="text-xs text-gray-500">4.8</span>
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
