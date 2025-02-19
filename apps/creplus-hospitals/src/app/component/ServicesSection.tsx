import { FaHospitalAlt, FaStethoscope, FaPhoneAlt } from 'react-icons/fa';

const ServicesSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-purple-800 text-center mb-12">
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <FaHospitalAlt size={50} className="text-purple-800 mb-5 mx-auto" />
          <h3 className="text-2xl font-semibold text-purple-900 mb-3 text-center">
            15+ Hospitals
          </h3>
          <p className="text-gray-600 text-center">
            Strategically located across Karnataka, ensuring accessible, quality healthcare for all communities.
          </p>
        </div>
        <div className="bg-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <FaStethoscope size={50} className="text-purple-800 mb-5 mx-auto" />
          <h3 className="text-2xl font-semibold text-purple-900 mb-3 text-center">
            24/7 Medical Services
          </h3>
          <p className="text-gray-600 text-center">
            Comprehensive emergency and specialized care available round-the-clock, prioritizing patient well-being at every hour.
          </p>
        </div>
        <div className="bg-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <FaPhoneAlt size={50} className="text-purple-800 mb-5 mx-auto" />
          <h3 className="text-2xl font-semibold text-purple-900 mb-3 text-center">
            Cure+ Pharma
          </h3>
          <p className="text-gray-600 text-center">
            Delivering high-quality, affordable medicines through integrated pharmacy services, supporting holistic healthcare solutions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
