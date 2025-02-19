import React from 'react'
import HeroSection from './component/HeroSection'
import AboutSection from './component/AboutSection'
import ServicesSection from './component/ServicesSection'
import LocationsSection from './component/LocationsSection'
import ContactSection from './component/ContactSection'
import Footer from './component/FooterSection'
import Header from './component/Header'

const page = () => {
  return (
   <>
    <Header />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <LocationsSection />
    <ContactSection />
    <Footer />
   </>
  )
}

export default page