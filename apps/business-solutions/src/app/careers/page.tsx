'use client'

import Link from 'next/link'
import SecondNavBar from '../component/SecondNavBar';
import FooterSection from '../component/FooterSection';
const navItems = [
  { name: "Home", link: "/" },
  { name: "Careers", link: "/careers" },
  { name: "About Us", link: "/about" },
];

const CareerSection = () => {
  return (
    <div className="bg-white">
      <SecondNavBar navItems={navItems} />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-gradient-flow"
        >
          {/* <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          /> */}
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-28 animate-fade-in-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Join Our Team at <span className="text-orange-600">HealthTech</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8 animate-fade-in">
              We are looking for passionate individuals to join our team and help us make a difference in the healthcare industry. Whether you are a developer, designer, or healthcare professional, we have a place for you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="careers/apply"
                className="rounded-md bg-gradient-to-r from-orange-600 to-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-orange-700 hover:to-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 animate-bounce"
              >
                View Open Positions
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-orange-600 hover:text-orange-700"
              >
                Learn About Us <span aria-hidden="true">→</span>
              </Link>

            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">Why Work With Us?</h2>
              <p className="mt-4 text-md text-gray-600">
                - Make an impact in the healthcare industry.<br />
                - Work with cutting-edge technology.<br />
                - Collaborate with a passionate, supportive team.<br />
                - Enjoy flexible work arrangements and competitive benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}

export default CareerSection