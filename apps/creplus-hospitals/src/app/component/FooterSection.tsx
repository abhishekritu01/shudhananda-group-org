import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-slate-50 text-gray-600 py-12">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
      {/* About */}
      <div>
        <Image
          src="/CUREPLUS HOSPITALS.png"
          alt="CurePlus Hospitals Logo"
          width={100}
          height={100}
          className="rounded-full object-cover mb-4"
        />
        <h3 className="text-2xl font-semibold text-purple-700 mb-4">
          CurePlus Hospitals
        </h3>
        <p>
          Delivering accessible healthcare across Karnataka with 15+ hospitals,
          integrated pharma services, and specialized care, 24/7.
        </p>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Company</h3>
        <ul className="space-y-2">
          <Link href='/'> <li className="hover:text-purple-700 transition">Home</li></Link>
          <Link href='/about'><li className="hover:text-purple-700 transition">About Us</li></Link>
          <Link href='/services'><li className="hover:text-purple-700 transition">Services</li></Link>
          <Link href='/team'><li className="hover:text-purple-700 transition">Our Team</li></Link>
          <Link href='/contact'><li className="hover:text-purple-700 transition">Contact Us</li></Link>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Support</h3>
        <div className="space-y-4">
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-purple-700" /> +91 98765 43210
          </p>
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-purple-700" /> support@cureplushospitals.com
          </p>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-purple-700" /> Bengaluru, Karnataka, India
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Follow Us</h3>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-white bg-[#3b5998] hover:bg-[#2d4373] p-3 rounded-full transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-white bg-[#1DA1F2] hover:bg-[#0d8ddb] p-3 rounded-full transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-white bg-[#0077B5] hover:bg-[#005983] p-3 rounded-full transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="text-white bg-[#E1306C] hover:bg-[#c2285c] p-3 rounded-full transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

    </div>

    {/* Footer Bottom */}
    <div className="border-t border-purple-200 mt-10 pt-6 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} CurePlus Hospitals. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
