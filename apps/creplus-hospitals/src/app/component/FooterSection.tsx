import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-purple-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
      {/* About */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">CurePlus Hospitals</h3>
        <p className="text-gray-300">
          Delivering accessible healthcare across Karnataka with 15+ hospitals, integrated pharma services, and specialized care, 24/7.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="hover:text-white transition">Home</li>
          <li className="hover:text-white transition">About Us</li>
          <li className="hover:text-white transition">Services</li>
          <li className="hover:text-white transition">Locations</li>
          <li className="hover:text-white transition">Contact</li>
        </ul>
      </div>

      {/* Contact Details */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <div className="space-y-4 text-gray-300">
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-purple-400" /> +91 98765 43210
          </p>
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-purple-400" /> support@cureplushospitals.com
          </p>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-purple-400" /> Bengaluru, Karnataka, India
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex gap-4">
          <a href="#" className="bg-purple-700 hover:bg-purple-600 p-3 rounded-full transition">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-purple-700 hover:bg-purple-600 p-3 rounded-full transition">
            <FaTwitter />
          </a>
          <a href="#" className="bg-purple-700 hover:bg-purple-600 p-3 rounded-full transition">
            <FaLinkedinIn />
          </a>
          <a href="#" className="bg-purple-700 hover:bg-purple-600 p-3 rounded-full transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-purple-700 mt-10 pt-6 text-center text-gray-400">
      <p>© {new Date().getFullYear()} CurePlus Hospitals. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
