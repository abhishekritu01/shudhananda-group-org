import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => (
  <section className="py-20 bg-purple-50">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      {/* Contact Information */}
      <div>
        <h2 className="text-4xl font-extrabold text-purple-800 mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-8">
          Have questions or need assistance? Reach out to us anytime—we’re here to help!
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-purple-600 text-3xl" />
            <p className="text-gray-800 text-lg">+91 98765 43210</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-purple-600 text-3xl" />
            <p className="text-gray-800 text-lg">contact@cureplushospitals.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-purple-600 text-3xl" />
            <p className="text-gray-800 text-lg">Bengaluru, Karnataka, India</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
