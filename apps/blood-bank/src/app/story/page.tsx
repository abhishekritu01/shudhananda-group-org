'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { BiHeart } from 'react-icons/bi'
import { FaAmbulance } from 'react-icons/fa'
import { GiWaterDrop } from 'react-icons/gi'
import Footer from '../component/Footer'
import HeaderNavigation from '../component/HeaderNavigation'

const navigation = [
  { name: 'Home', href: '/', current: false },
  // { name: 'Who We Are', href: '/story', current: true },
  { name: 'Blood Facts', href: '/facts', current: false },
  { name: 'Can I Donate?', href: '/donate', current: false },
  { name: 'Contact', href: '#', current: false },
]

const teamMembers = [
  {
    name: 'Dr. Arjun Sachidanand',
    role: 'Managing Trustee',
    image: '/ArjunSachidanand.jpeg',
  },
  {
    name: 'Dr. Sini Arjun',
    role: 'Medical Officer',
    image: '/DrSiniArjun.jpeg',
  },
  {
    name: 'Capt. Raghu Das',
    role: 'Chief Operating Officer',
    image: '/RaghuDas.jpeg',
  },
  {
    name: 'Mrs. Rashmi N. Raj',
    role: 'General Manager',
    image: '/RashmiRaj.jpeg',
  },
]

export default function WhoWeArePage() {
  return (
    <>
      <HeaderNavigation navigation={navigation} />

      {/* Hero Section */}
      <section className="relative bg-red-100 py-20 px-6 md:px-20 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-red-700 mb-6">
            Saving Lives. Spreading Hope.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At CurePlus Blood Bank, our mission goes beyond storage — we’re building a movement that connects donors with those in need, no matter the distance.
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            CurePlus Blood Bank is an initiative by <strong>Dr. M. D. Sachidananda Murthy Memorial Educational Trust</strong> based in Mysuru, Karnataka. With a storage capacity of over <strong>2,000 units</strong>, we provide life-saving support to hospitals and communities across rural Karnataka. <br /><br />
            Our mobile healthcare units — <em>Sudhanand Arogya Vahinis</em> — bridge the gap between rural patients and accessible healthcare, ensuring no life is lost due to distance or delay.
          </p>
        </div>
      </section>

      {/* Mission Highlights */}
      <section className="bg-red-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: '2000+ Blood Units',
              description: 'High-capacity storage to meet critical demands across Karnataka.',
              icon: <GiWaterDrop size={60} className="text-red-600 mx-auto mb-4" />,
            },
            {
              title: 'Mobile Health Units',
              description: 'Sudhanand Arogya Vahinis transport blood and provide health services in remote areas.',
              icon: <FaAmbulance size={60} className="text-red-600 mx-auto mb-4" />,
            },
            {
              title: 'Life-First Approach',
              description: 'We ensure no one suffers due to unavailability of blood. Every drop counts.',
              icon: <BiHeart size={60} className="text-red-600 mx-auto mb-4" />,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-red-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-12">
            Meet Our Leadership
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-red-50 p-6 rounded-2xl shadow-lg text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-bold text-gray-800">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-700 text-white py-16 text-center px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be the Lifeline</h2>
          <p className="text-lg mb-8">
            Join us in creating a future where every patient has access to the blood they need — on time, every time.
          </p>
          <button className="bg-white text-red-700 font-bold py-3 px-6 rounded-full hover:bg-red-100 transition">
            Become a Donor
          </button>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}
