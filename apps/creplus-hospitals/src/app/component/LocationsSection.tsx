'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHospitalAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const hospitals = [
  { id: 1, name: 'Cure Plus Disha Hospital', location: 'Mysore', tags: ['24x7', 'Emergency'] },
  { id: 2, name: 'Cure Plus Dharani Hospital', location: 'Bangalore', tags: ['ICU', 'Cardiology'] },
  { id: 3, name: 'Cure Plus Kaveri Hospital', location: 'Hassan', tags: ['Radiology'] },
  { id: 4, name: 'Cure Plus Krishna Hospital', location: 'Mandya', tags: ['24x7'] },
  { id: 5, name: 'Cure Plus Narasegowda Memorial Hospital', location: 'Tumkur', tags: ['Emergency'] },
  { id: 6, name: 'Cure Plus Bherya Hospital', location: 'Kodagu', tags: [] },
  { id: 7, name: 'Cure Plus Terakanambi Hospital', location: 'Chamarajanagar', tags: ['Outpatient'] },
  { id: 8, name: 'Cure Plus Shanivarasanthe Hospital', location: 'Madikeri', tags: ['Pediatrics'] },
  { id: 9, name: 'Cure Plus Ramapura Hospital', location: 'Shimoga', tags: ['Cardiology'] },
  { id: 10, name: 'Cure Plus T. Narasipura Hospital', location: 'Mysore', tags: [] },
];

const HospitalsWithMap = () => {
  const [search, setSearch] = useState('');

  const filteredHospitals = hospitals.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          <Image
            src="/images/map-placeholder.png"
            alt="Map"
            width={700}
            height={500}
            className="object-cover w-full h-full"
          />
          <div className="bg-purple-800 text-white p-4 text-center text-sm font-medium">
            SHPL Hospital Coverage Map
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
            className="text-4xl font-bold text-gray-800"
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
                      <FaHospitalAlt className="text-purple-700 text-xl" />
                      <h3 className="text-lg font-semibold text-purple-900">{hospital.name}</h3>
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
