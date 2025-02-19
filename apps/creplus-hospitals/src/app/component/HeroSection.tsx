import { FaHospitalAlt, FaStethoscope, FaPhoneAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-blue-900 text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Quality & Affordable Healthcare for Everyone
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            CurePlus Hospitals provide 24/7 medical services, advanced diagnostics, and specialized treatments across multiple specialties.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-900 px-6 py-3 font-semibold rounded-lg hover:bg-gray-200">
              Explore Services
            </button>
            <button className="bg-transparent border border-white px-6 py-3 font-semibold rounded-lg hover:bg-white hover:text-blue-900 flex items-center gap-2">
              <FaPhoneAlt /> Contact Us
            </button>
          </div>
        </div>

        {/* Right Content - Icons & Visuals */}
        <div className="mt-10 lg:mt-0 grid grid-cols-2 gap-6 lg:gap-10">
          <div className="flex items-center gap-4 bg-white text-blue-900 p-6 rounded-xl shadow-lg">
            <FaHospitalAlt size={40} />
            <div>
              <h3 className="font-semibold text-lg">15+ Hospitals</h3>
              <p className="text-sm">Across Karnataka</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white text-blue-900 p-6 rounded-xl shadow-lg">
            <FaStethoscope size={40} />
            <div>
              <h3 className="font-semibold text-lg">24/7 Medical Care</h3>
              <p className="text-sm">Emergency & Specialized Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;