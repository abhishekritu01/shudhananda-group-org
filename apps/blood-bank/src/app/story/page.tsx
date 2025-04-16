'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { BiHeart } from 'react-icons/bi'
import { FaAmbulance } from 'react-icons/fa'
import { GiWaterDrop } from 'react-icons/gi'
import Footer from '../component/Footer'
import HeaderNavigation from '../component/HeaderNavigation'
import { PiTrademarkRegistered } from 'react-icons/pi'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Who We Are', href: '/story', current: true },
  { name: 'Blood Facts', href: '/facts', current: false },
  { name: 'Can I donate', href: '/donate', current: false },
  { name: 'FAQs', href: '/faq', current: false },
  { name: 'Join Us', href: '/join', current: false }
];

const teamMembers = [
  {
    name: 'Dr. Arjun Sachidanand',
    role: 'Managing Trustee',
    image: '/ArjunSachidanand.jpeg',
    bio: 'Dr. Arjun Sachidanand is a visionary leader and the driving force behind CurePlus Blood Bank. With a deep commitment to healthcare and community service, he has dedicated his career to improving access to life-saving resources in rural Karnataka.',
  },
  {
    name: 'Dr. Sini Arjun',
    role: 'Medical Officer',
    image: '/DrSiniArjun.jpeg',
    bio: 'Dr. Sini Arjun is a compassionate medical officer at CurePlus Blood Bank, dedicated to ensuring the safety and quality of blood donations. Her expertise and commitment to patient care are invaluable to our mission.',
  },
  {
    name: 'Capt. Raghu Das',
    role: 'Chief Operating Officer',
    image: '/RaghuDas.jpeg',
    bio: 'Capt. Raghu Das is a seasoned professional with extensive experience in operations management. His strategic vision and leadership skills are instrumental in ensuring the efficient functioning of CurePlus Blood Bank.',
  },
  {
    name: 'Mrs. Rashmi N. Raj',
    role: 'General Manager',
    image: '/RashmiRaj.jpeg',
    bio: 'Mrs. Rashmi N. Raj is a dynamic general manager at CurePlus Blood Bank, overseeing daily operations and ensuring that our mission of saving lives is met with efficiency and compassion.',
  },
]

const page = () => {
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
            At CurePlus Blood Bank, our mission goes beyond storage - we’re building a movement that connects donors with those in need, no matter the distance.
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed mx-2">
            CurePlus Blood Bank is an initiative by
            <strong>
              <span className='mx-2'> Dr. M. D. Sachidananda Murthy Memorial Educational Trust</span>
              <PiTrademarkRegistered className="-mt-4 inline-block ml-2 mx-1" />
            </strong>
            and <strong> <br /> Dr. Arjun Sachidanand</strong>, a renowned medical professional with over
            <strong> 20 years of experience</strong> in the field. We are a <strong> <br /> not-for-profit blood bank</strong> dedicated to providing safe and quality blood products to those in need.
            <br /><br />

            Based in Mysuru, Karnataka, with a storage capacity of over <strong>2,000 units</strong>, we provide life-saving support to hospitals and communities across rural Karnataka.
            <br /><br />
            Our mobile healthcare units - <em>Sudhanand Arogya Vahinis</em> - bridge the gap between rural patients and accessible healthcare, ensuring no life is lost due to distance or delay.
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
      <section className="bg-white py-20 px-6 md:px-20 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Meet Our Leadership
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="relative bg-gray-50 border border-gray-200 rounded-2xl shadow-md overflow-hidden group transition duration-300 ease-in-out hover:shadow-xl h-[300px]"
              >
                {/* Default View */}
                <motion.div
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10"
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="mb-4"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="rounded-full border-4 border-white shadow-md"
                    />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </motion.div>

                {/* Hover View - Slide Up Bio */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-white px-6 text-center z-20"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={50}
                    height={50}
                    className="rounded-full border-4 border-white shadow-md mb-4"
                  />
                  <p className="text-sm text-gray-700 leading-relaxed">{member.bio}</p>
                </motion.div>
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
            Join us in creating a future where every patient has access to the blood they need - on time, every time.
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

export default page