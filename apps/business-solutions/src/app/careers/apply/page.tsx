
'use client'

import { useState } from 'react'
import Link from 'next/link'
import SecondNavBar from '@/app/component/SecondNavBar';
import FooterSection from '@/app/component/FooterSection';

const navItems = [
    { name: "Home", link: "/" },
    { name: "Careers", link: "/careers" },
    { name: "About Us", link: "/about" },
];

interface JobListing {
    id: number
    title: string
    location: string
    type: string
    description: string
    techStack: string
    salary: string
    experience: string
    applyLink: string
}

// const jobListings = [
//     {
//         id: 1,
//         title: 'Frontend Developer',
//         location: 'Remote',
//         type: 'Full-time',
//         description:
//             'We are looking for a talented Frontend Developer to build intuitive user interfaces using React and modern web technologies.',
//         techStack: 'React, JavaScript, CSS, HTML, Redux',
//         salary: '₹8-12 LPA',
//         experience: '3-5 years',
//         applyLink: '/apply/frontend-developer',
//     },
//     {
//         id: 2,
//         title: 'Backend Engineer',
//         location: 'Remote',
//         type: 'Full-time',
//         description:
//             'Join our backend team to design and implement scalable APIs and database solutions for our SaaS products.',
//         techStack: 'Node.js, Express, MongoDB, AWS, Docker',
//         salary: '₹10-15 LPA',
//         experience: '3-6 years',
//         applyLink: '/apply/backend-engineer',
//     },
//     {
//         id: 3,
//         title: 'Product Manager',
//         location: 'Bangalore, India',
//         type: 'Full-time',
//         description:
//             'We need a Product Manager to define and drive product strategy, ensuring alignment with business objectives.',
//         techStack: 'Product Management, Agile, Jira, Scrum',
//         salary: '₹15-20 LPA',
//         experience: '5+ years',
//         applyLink: '/apply/product-manager',
//     },
//     // Add more jobs as needed...
// ]

const ApplyPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [selectedJob, setSelectedJob] = useState<JobListing | null>(null)
    // const [currentPage, setCurrentPage] = useState(1)
    // const jobsPerPage = 2

    // const totalPages = Math.ceil(jobListings.length / jobsPerPage)
    // const indexOfLastJob = currentPage * jobsPerPage
    // const indexOfFirstJob = indexOfLastJob - jobsPerPage
    // const currentJobs = jobListings.slice(indexOfFirstJob, indexOfLastJob)

    // const handleApplyClick = (job: JobListing) => {

    //     setSelectedJob(job)
    //     setShowModal(true)
    // }

    const handleCloseModal = () => {
        setShowModal(false)
        setSelectedJob(null)
    }

    // const handleNextPage = () => {
    //     if (currentPage < totalPages) {
    //         setCurrentPage(currentPage + 1)
    //     }
    // }

    // const handlePreviousPage = () => {
    //     if (currentPage > 1) {
    //         setCurrentPage(currentPage - 1)
    //     }
    // }

    return (
        <div className="bg-white">
            <SecondNavBar navItems={navItems} />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-gradient-flow"
                >
                </div>

                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-28 animate-fade-in-up">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Explore Open <span className="text-orange-600">Positions</span> at SBPL
                        </h1>
                        <p className="mt-6 text-lg font-medium text-gray-600 sm:text-xl animate-fade-in">
                            Join us in transforming the IT industry with innovative solutions and a commitment to excellence.
                        </p>
                    </div>

                    {/* <div className="mt-12 space-y-10">
                        {currentJobs.map((job) => (
                            <div
                                key={job.id}
                                className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h2 className="text-2xl font-semibold text-gray-900">{job.title}</h2>
                                <p className="mt-2 text-gray-700">{job.description}</p>
                                <div className="mt-4 text-sm text-gray-600">
                                    <p>
                                        <strong>Location:</strong> {job.location}
                                    </p>
                                    <p>
                                        <strong>Type:</strong> {job.type}
                                    </p>
                                    <p>
                                        <strong>Tech Stack:</strong> {job.techStack}
                                    </p>
                                    <p>
                                        <strong>Salary:</strong> {job.salary}
                                    </p>
                                    <p>
                                        <strong>Experience:</strong> {job.experience}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button
                                        onClick={() => handleApplyClick(job)}
                                        // className="rounded-md bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-r hover:from-secondary hover:to-primary"
                                        className="rounded-md bg-gradient-to-r from-orange-600 to-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-orange-700 hover:to-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-between mt-6">
                            <button
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300' : 'bg-orange-600'} text-white font-semibold`}
                            >
                                Previous
                            </button>
                            <span className="text-sm font-medium text-gray-600">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300' : 'bg-orange-600'} text-white font-semibold`}
                            >
                                Next
                            </button>
                        </div>
                    </div> */}

                    <p className="mt-12 text-center text-sm text-gray-600">
                        Don’t see a position that fits you?{' '}
                        <Link href="/" className="font-medium text-primary">
                            Send a message
                        </Link>{' '}
                        to share your interest.
                    </p>
                </div>
            </div>

            {showModal && selectedJob && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75">
                    <div className="bg-white rounded-lg shadow-xl w-11/12 sm:w-10/12 md:w-3/4 p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row">
                            <div className="w-full sm:w-1/2 sm:pr-4">
                                <h2 className="text-xl sm:text-2xl font-semibold">{selectedJob.title}</h2>
                                <p className="mt-2 text-gray-700">{selectedJob.description}</p>
                                <p className="mt-4">
                                    <strong>Location:</strong> {selectedJob.location}
                                </p>
                                <p>
                                    <strong>Type:</strong> {selectedJob.type}
                                </p>
                                <p>
                                    <strong>Tech Stack:</strong> {selectedJob.techStack}
                                </p>
                                <p>
                                    <strong>Salary:</strong> {selectedJob.salary}
                                </p>
                                <p>
                                    <strong>Experience:</strong> {selectedJob.experience}
                                </p>
                            </div>

                            <div className="w-full sm:w-1/2 sm:pl-4 mt-6 sm:mt-0">
                                <h3 className="text-lg sm:text-xl font-medium mb-4">
                                    Apply for {selectedJob.title}
                                </h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-3 border rounded-md"
                                            placeholder="Your full name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full p-3 border rounded-md"
                                            placeholder="Your email"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-3 border rounded-md"
                                            placeholder="Your phone number"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Upload Resume
                                        </label>
                                        <input
                                            type="file"
                                            className="w-full p-3 border rounded-md"
                                            required
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="submit"
                                            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-md"
                                        >
                                            Submit Application
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 sm:top-6 right-6 mt-4 md:right-52 md:mt-20 sm:right-6 text-4xl sm:text-4xl font-semibold text-primary"
                        >
                            &times;
                        </button>
                    </div>
                </div>


            )}
            <FooterSection />
        </div>
    )
}

export default ApplyPage