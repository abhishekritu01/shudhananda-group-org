'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const team = [
    {
        name: 'Dr. Arjun Sachidanand',
        role: 'Chairman & Founder\nSudhanand Group',
        imageUrl: '/ArjunSachidanand.jpeg',
        description: 'Dr. Arjun Sachidanand is a visionary leader and the driving force behind Sudhanand Group. With a wealth of experience in healthcare and business, he has successfully transformed the organization into a leading player in the industry.',
    },
    {
        name: 'Dr. Sini Arjun',
        role: 'Managing Director\nSudhanand Group',
        imageUrl: '/SBS/sinimam.jpg',
        description: 'Dr. Sini Arjun is a dynamic leader with a passion for innovation and excellence. As the Managing Director of Sudhanand Group, she is committed to driving growth and delivering exceptional value to clients.',
    },
    {
        name: 'Abhinandan S. Rao',
        role: 'VP – New Initiatives & Investments\nSudhanand Group',
        imageUrl: '/SBS/Abhinandan S-Photoroom.png',
        description: 'Abhinandan S. Rao is a strategic thinker and a key player in the growth of Sudhanand Group. With a focus on new initiatives and investments, he is dedicated to exploring new opportunities and driving innovation.',
    },
    {
        name: 'Capt. Raghu M. Das',
        role: 'Chief Operations Officer\nSudhanand Group',
        imageUrl: '/SBS/captain.png',
        description: 'Capt. Raghu M. Das is a seasoned professional with extensive experience in operations management. As the Chief Operations Officer of Sudhanand Group, he is responsible for ensuring operational excellence and delivering high-quality services.',
    },
    {
        name: 'Keshav Murthy',
        role: 'VP - Internal Audit & Finance\nSudhanand Group',
        imageUrl: '/SBS/Keshav murthy.png',
        description: 'Keshav Murthy is a finance expert with a strong background in internal audit and compliance. As the VP of Internal Audit & Finance at Sudhanand Group, he plays a crucial role in ensuring financial integrity and transparency.',
    },
    {
        name: 'Vijay Asrani',
        role: 'VP - Internal Finance\nSudhanand Group',
        imageUrl: '/SBS/vijay.png',
        description: 'Vijay Asrani is a finance professional with a deep understanding of financial management and strategy. As the VP of Internal Finance at Sudhanand Group, he is responsible for overseeing financial operations and driving financial performance.',
    },
    {
        name: 'Syed Abdul Wahab ',
        role: 'Facility & Project Manager\nSBPL',
        imageUrl: '/SBS/abdul.jpeg',
        description: 'Syed Abdul Wahab is a skilled facility and project manager with a focus on delivering high-quality projects on time and within budget. He is dedicated to ensuring the success of Sudhanand Group\'s projects and operations.',
    }
];

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

const AboutTeam = () => {
    return (
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8 my-20">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-2xl lg:mx-0 "
            >
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Our <span className="text-orange-600">Leadership</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our team is a diverse group of professionals with expertise in various fields, including healthcare, IT, finance, and hospitality.
                    We are united by a common goal: to drive innovation and deliver exceptional solutions that make a positive impact on society.
                </p>
            </motion.div>

            <div className="mx-auto mt-20 max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="relative bg-gray-50 border border-gray-200 rounded-2xl shadow-md overflow-hidden group transition duration-300 ease-in-out hover:shadow-xl h-[300px]"
                        >
                            {/* Default View */}
                            <motion.div
                                initial={{ opacity: 1 }}
                                whileHover={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10 text-center"
                            >
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ type: 'spring', stiffness: 200 }}
                                    className="mb-4"
                                >
                                    <div className="relative h-32 w-32 mx-auto">
                                        <Image
                                            src={member.imageUrl}
                                            alt={member.name}
                                            fill
                                            className="rounded-full border-4 border-white shadow-md object-fill"
                                        />
                                    </div>
                                </motion.div>
                                <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                                <div className="text-sm text-gray-600 mt-2">
                                    {member.role.includes('\n') ? (
                                        <>
                                            <p className="whitespace-pre-line">
                                                {member.role.split('\n')[0]}
                                                <br />
                                                <span className="text-orange-600 font-medium">
                                                    {member.role.split('\n')[1]}
                                                </span>
                                            </p>
                                        </>
                                    ) : (
                                        <p>{member.role}</p>
                                    )}
                                </div>
                            </motion.div>

                            {/* Hover View - Slide Up Bio */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-white px-6 text-center z-20"
                            >
                                <div className="relative h-16 w-16 mb-4 mx-auto">
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.name}
                                        fill
                                        className="rounded-full border-4 border-white shadow-md"
                                    />
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">{member.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutTeam