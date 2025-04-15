import React from 'react'

const team = [
    {
        name: 'Dr, Arjun Sachidanand',
        role: 'Managing Director',
        imageUrl: '/ArjunSachidanand.jpeg',


    },
    // More people...
]

const AboutTeam = () => {
    return (
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8 my-20">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our <span className="text-orange-600"> Team</span></h2>
                <p className="mt-6 text-lg/8 text-gray-600">
                    {/* sbpl */}
                    Our team is a diverse group of professionals with expertise in various fields, including healthcare, IT, finance, and hospitality.
                    We are united by a common goal: to drive innovation and deliver exceptional solutions that make a positive impact on society.
                </p>
            </div>
            <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
            >
                {team.map((person) => (
                    <li key={person.name}>
                        <img alt="" src={person.imageUrl} className="mx-auto size-24 rounded-full" />
                        <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                        <p className="text-sm/6 text-gray-600">{person.role}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AboutTeam