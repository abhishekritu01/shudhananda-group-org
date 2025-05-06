'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const team = [
    {
        name: 'Dr. Arjun Sachidanand',
        role: 'Managing Director\nSudhanand Group',
        imageUrl: '/ArjunSachidanand.jpeg',
    },
    {
        name: 'Dr. Sini Arjun',
        role: 'Director\nSudhanand Group',
        imageUrl: '/SBS/DR. SINI.jpeg',
    },
    {
        name: 'Abhinandan S. Rao',
        role: 'VP – New Initiatives & Investments\nSudhanand Group',
        imageUrl: '/SBS/Abhinandan S-Photoroom.png',
    },
    {
        name: 'Capt. Raghu M. Das',
        role: 'Chief Operations Officer\nSudhanand Group',
        imageUrl: '/SBS/CAPT. RAGHU M DAS-Photoroom.png',
    },
    {
        name: 'Keshav Murthy',
        role: 'VP - Internal Audit & Finance\nSudhanand Group',
        imageUrl: '/SBS/Keshav murthy.png',
    },
    {
        name: 'Vijay Asrani',
        role: 'VP - Internal Finance\nSudhanand Group',
        imageUrl: '/SBS/vijay.png',
    },
    {
        name: 'Syed Abdul Wahab ',
        role: 'Facility & Project Manager\nSBPL',
        imageUrl: '/SBS/abdul.jpeg',
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
                className="mx-auto max-w-2xl lg:mx-0"
            >
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Our <span className="text-orange-600">Leadership</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our team is a diverse group of professionals with expertise in various fields, including healthcare, IT, finance, and hospitality.
                    We are united by a common goal: to drive innovation and deliver exceptional solutions that make a positive impact on society.
                </p>
            </motion.div>

            <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
                className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5"
            >
                {team.map((person) => (
                    <motion.li 
                        key={person.name}
                        variants={fadeIn}
                        whileHover={{ y: -5 }}
                        className="group"
                    >
                        <div className="relative mx-auto h-40 w-40 rounded-full bg-gradient-to-br from-orange-100 to-white p-1 shadow-md">
                            <Image
                                src={person.imageUrl}
                                alt={person.name}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="top"
                                className="rounded-full"
                            />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="mt-6 text-lg font-semibold tracking-tight text-gray-900 group-hover:text-orange-600 transition-colors">
                            {person.name}
                        </h3>
                        <div className="text-sm text-gray-600 mt-2">
                            {person.role.includes('\n') ? (
                                <>
                                    <p>{person.role.split('\n')[0]}</p>
                                    <p className="text-orange-600 font-medium">{person.role.split('\n')[1]}</p>
                                </>
                            ) : (
                                <p>{person.role}</p>
                            )}
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )
}

export default AboutTeam
