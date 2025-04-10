import React from 'react'
import HeroSection from './component/HeroSection'
import HeaderNavigation from './component/HeaderNavigation'
import HowItWorks from './component/HowItWorks'
import AboutBloodDonation from './component/AboutBloodDonation'
import Testimonials from './component/Testimonials'
import UpcomingEvents from './component/UpcommingEvents'
import CTASection from './component/CTASection'
import Footer from './component/Footer'
import ContactUs from './component/ContactUs'


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Who We Are', href: '/story', current: false },
  { name: 'Blood Facts', href: '/facts', current: false },
  { name: 'Can I donate', href: '/donate', current: false },
  { name: 'FAQs', href: '/faq', current: false },
  { name: 'Join Us', href: '/join', current: false }
];

const page = () => {
  return (
    <>
      <HeaderNavigation navigation={navigation} />
      <HeroSection />
      <HowItWorks />
      <AboutBloodDonation />
      <Testimonials />
      <UpcomingEvents />
      <CTASection />
      <ContactUs />
      <Footer />
    </>
  )
}
export default page