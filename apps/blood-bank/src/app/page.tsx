
import React from 'react'
import HeroSection from './component/HeroSection'
import HeaderNavigation from './component/HeaderNavigation'
import HowItWorks from './component/HowItWorks'
import AboutBloodDonation from './component/AboutBloodDonation'
import Testimonials from './component/Testimonials'
import UpcomingEvents from './component/UpcommingEvents'
import CTASection from './component/CTASection'
import Footer from './component/Footer'

const page = () => {
  return (
    <>
    
      <HeaderNavigation />
      <HeroSection />
      <HowItWorks />
      <AboutBloodDonation />
      <Testimonials />
      <UpcomingEvents />
      <CTASection />
      <Footer />
    </>
  )
}

export default page