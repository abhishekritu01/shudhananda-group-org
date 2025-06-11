import AboutSection from './component/AboutSection'
import Banner from './component/Banner'
import ContactSection from './component/ContactSection'
import Footer from './component/FooterSection'
import HeroSection from './component/HeroSection'
import LocationsSection from './component/LocationsSection'
import ServicesSection from './component/ServicesSection'
import Testimonial from './component/Testimonial'


const page = () => {
  return (
   <>
    {/* <Header navLinks={customNavLinks} /> */}
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    {/* <FeaturedInitiative /> */}
    <LocationsSection />
    <Banner />
    <Testimonial />
    <ContactSection />
    <Footer />
   </>
  )
}

export default page