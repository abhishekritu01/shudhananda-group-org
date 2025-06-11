import AboutSection from "./component/AboutSection";
import ContactSection from "./component/ContactSection";
import FooterSection from "./component/FooterSection";
import HeroSection from "./component/HeroSection";
import NavBar from "./component/NavBar";
import ServiceSection from "./component/ServiceSection";
// import TestimonialSection from "./component/TestimonialSection";
import ProjectsSection from "./component/ProjectsSection";
import TeamSection from "./component/TeamSection";
import HistoryTimeline from "./component/History";

const LandingPage = () => {
  return (
    <div className="font-sans">
      <NavBar />
      <HeroSection />
      <HistoryTimeline />
      <AboutSection />
      <ServiceSection />
      <TeamSection /> {/* Our Teams */}
      <ProjectsSection /> 
      {/* <TestimonialSection /> */}
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
