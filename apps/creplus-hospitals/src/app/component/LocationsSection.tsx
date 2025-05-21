'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdLocalHospital } from 'react-icons/md';

const hospitals = [
  { id: 1, name: 'CurePlus  Disha Hospital', location: 'Mysore', tags: ['24x7', 'General Surgery', 'Orthopedics', 'Gynecology', 'Pediatrics'] },
  { id: 2, name: 'CurePlus  Dharani Hospital', location: 'Yelandur Taluk,Chamarajanagara', tags: ['24x7', 'General Surgery', 'Orthopedics', 'Gynecology', 'Pediatrics'] },
  { id: 3, name: 'CurePlus  Kaveri Hospital', location: 'Somwarpet Taluk ,Kodagu', tags: ['General Surgery', 'ENT & Audiometry', 'Critical Care', 'Inpatient Care'] },
  { id: 4, name: 'CurePlus  Krishna Hospital', location: 'Piriyapatna Taluk,Mysore', tags: ['Multi-Specialty Care', 'Outpatient & Inpatient Services', 'Preventive Health Checkups', 'Emergency Services'] },
  { id: 5, name: 'CurePlus  Narasegowda Memorial Hospital', location: 'Chinakurali, Pandavapura Taluk ,Mandya', tags: ['Emergency Medicine', 'General Medicine', 'Orthopedics'] },
  { id: 6, name: 'CurePlus  Hospital Shanivarasanthe', location: 'Kodagu', tags: ['Pediatrics', 'Orthopedics', 'Gynecology', 'General Medicine'] },
  { id: 7, name: 'CurePlus  Hospital  Ramapura', location: 'Chamarajanagar', tags: ['Orthopedics', 'General Medicine'] },
  { id: 8, name: 'CurePlus  Hospital Terakanambi', location: 'Terakanambi, Chamarajanagar', tags: ['Outpatient', 'General Medicine'] },
  { id: 9, name: 'CurePlus  Hospital Bherya ', location: 'Saligrama Taluk, Mysore', tags: ['Orthopedics', 'General Medicine'] },
  { id: 10, name: 'CurePlus  Hospital T. Narasipura', location: 'T Narasipura,Mysore', tags: ['Orthopedics', 'General Medicine'] },
  { id: 11, name: 'CurePlus  Hospital  Handpost', location: 'H.D. Kote, Mysore', tags: ['24x7', ' orthopedic', 'General Medicine'] },
  { id: 12, name: 'CurePlus  Hospital Hosur', location: 'Saligrama Taluk, Mysore', tags: ['24x7', 'Emergency', 'Orthopedics', 'General Medicine'] },
  { id: 13, name: 'CurePlus Hospital Halli Mysuru', location: 'Halli Mysuru', tags: ['Orthopedics', 'General Medicine'] },
];

const HospitalsWithMap = () => {
  const [search, setSearch] = useState('');
  const filteredHospitals = hospitals.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden  md:mt-32"
        >
          <video
            src='/final.mp4'
            width="100%"
            height="300"
            style={{ border: 0 }}
            className="bg-gray-200"
            autoPlay
            loop
            muted
            // controls
          />

          <div className=" text-purple-600 p-4 text-center text-xl font-bold">
            Our Network of Hospitals
          </div>
        </motion.div>

        {/* Hospital List */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <motion.h2
            className="text-4xl font-bold text-purple-600"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore Our Network
          </motion.h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search hospitals or locations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-sm"
          />

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-4 max-h-[520px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-purple-50">
            {filteredHospitals.map((hospital) => (
              <motion.div
                key={hospital.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition p-4 cursor-pointer"
              >
                <Link href={`/hospital/${hospital.id}`}>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <MdLocalHospital className="text-purple-600 text-xl" />
                      {/* <Image  
                        src="/hospital-icon1.png"
                        alt="Hospital"
                        width={50}
                        height={50}
                        className="rounded-full border border-gray-200 shadow-sm"
                      /> */}
                      
                      <h3 className="text-lg font-semibold text-purple-600">{hospital.name}</h3>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 gap-2">
                      <FaMapMarkerAlt className="text-gray-400" />
                      {hospital.location}
                    </div>
                    {hospital.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {hospital.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}

            {filteredHospitals.length === 0 && (
              <div className="col-span-2 text-gray-500 text-sm text-center py-10">
                No hospitals found for “{search}”
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HospitalsWithMap;
