import React from 'react'

import { FaTrophy, FaShareAlt, FaBookOpen, FaHandsHelping, FaTasks, FaSmile, FaLightbulb, FaBalanceScale, FaUsers, FaSync, FaChartBar, FaHandshake, FaLeaf } from 'react-icons/fa'

const values = [
    {
        name: 'Be world-class',
        description: 'Deliver world-class solutions that meet high standards of quality and excellence. Strive for the best in everything we do.',
        icon: <FaTrophy className="text-4xl text-blue-600" />
    },
    {
        name: 'Share everything you know',
        description: 'Encourage knowledge sharing within the team. Collaboration and continuous learning help us grow together.',
        icon: <FaShareAlt className="text-4xl text-green-600" />
    },
    {
        name: 'Always learning',
        description: 'Embrace a growth mindset. Stay ahead of industry trends by continuously learning and improving skills.',
        icon: <FaBookOpen className="text-4xl text-purple-600" />
    },
    {
        name: 'Be supportive',
        description: 'Foster a supportive work culture where team members help each other succeed. Teamwork drives collective success.',
        icon: <FaHandsHelping className="text-4xl text-yellow-600" />
    },
    {
        name: 'Take responsibility',
        description: 'Be accountable for actions and decisions. Integrity and commitment to our work ensure long-term success.',
        icon: <FaTasks className="text-4xl text-red-600" />
    },
    {
        name: 'Enjoy downtime',
        description: 'Work-life balance is essential. Taking breaks helps maintain productivity, creativity, and overall well-being.',
        icon: <FaSmile className="text-4xl text-pink-600" />
    },
    {
        name: 'Be innovative',
        description: 'Encourage thinking outside the box. Explore new ideas to drive continuous improvement and transformation.',
        icon: <FaLightbulb className="text-4xl text-orange-600" />
    },
    {
        name: 'Be ethical',
        description: 'Maintain integrity and transparency in all business dealings. Respect and honesty are fundamental values.',
        icon: <FaBalanceScale className="text-4xl text-teal-600" />
    },
    {
        name: 'Be customer-centric',
        description: 'Our clients are our priority. Listen to their needs and tailor solutions to provide maximum satisfaction and value.',
        icon: <FaUsers className="text-4xl text-indigo-600" />
    },
    {
        name: 'Be adaptable',
        description: 'Adaptability is key in a changing world. Be open to new strategies and embrace evolving market demands.',
        icon: <FaSync className="text-4xl text-cyan-600" />
    },
    {
        name: 'Be data-driven',
        description: 'Use data to guide decision-making. Analytics help in making informed, strategic business choices.',
        icon: <FaChartBar className="text-4xl text-gray-600" />
    },
    {
        name: 'Be collaborative',
        description: 'Success comes through strong partnerships. Work closely with clients and colleagues for shared growth.',
        icon: <FaHandshake className="text-4xl text-lime-600" />
    },
    {
        name: 'Be sustainable',
        description: 'Commit to sustainability. Minimize environmental impact while delivering high-value solutions to clients.',
        icon: <FaLeaf className="text-4xl text-green-700" />
    }
];


const AboutValues = () => {
    return (
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 my-20">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our <span className="text-orange-600">Values</span></h2>
                <p className="mt-6 text-lg/8 text-gray-600">
                    {/* sbpl */}
                    SBPL is committed to upholding the highest standards of integrity, transparency, and excellence in all our endeavors.
                    We believe in fostering a culture of collaboration, innovation, and continuous learning, empowering our team to deliver exceptional results for our clients and communities.

                </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {values.map((value) => (
                    <div key={value.name}>
                        <div className="flex items-center gap-2">
                            <div className="text-2xl text-gray-900">{value.icon}</div>
                            <dt className="font-semibold text-gray-900">{value.name}</dt>
                        </div>
                        <dd className="mt-1 text-gray-600">{value.description}</dd>
                    </div>
                ))}
            </dl>

        </div>
    )
}

export default AboutValues