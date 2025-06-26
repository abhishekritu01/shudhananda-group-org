'use client';

import Head from 'next/head';
import AboutSection from './component/AboutSection';
import Banner from './component/Banner';
import ContactSection from './component/ContactSection';
import Footer from './component/FooterSection';
import HeroSection from './component/HeroSection';
import LocationsSection from './component/LocationsSection';
import ServicesSection from './component/ServicesSection';
import Testimonial from './component/Testimonial';

const Page = () => {
  return (
    <>
      <Head>
        <title>Best Hospitals Near Me | Trusted, Affordable & Advanced Healthcare Everyone</title>
        <meta
          name="description"
          content="As the Best Hospitals Near Me, we deliver compassionate, tech-driven care that puts patients first. Your well-being is our mission—today and always."
        />
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="CurePlus Hospitals" />
        <link rel="canonical" href="https://www.cureplushospitals.com/" />
      </Head>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LocationsSection />
      <Banner />
      <Testimonial />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Page;
