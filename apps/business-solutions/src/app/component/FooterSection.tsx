import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

const footerNavigation = {
  company: [
    // { name: 'About Us', href: '#' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  contact: [
    { name: 'info@sudhanandgroup.com', href: 'info@sudhanandgroup.com' },
    { name: '', href: 'tel:+1234567890' },
  ],
};

const FooterSection = () => {
  return (
    <footer className="bg-orange-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and About Section */}
        <div className="text-center md:text-left">
          <img src="/sbslogo.png" alt="Company Logo" className="h-24 mx-auto md:mx-0 " />
          <p className="mt-4 text-white text-sm">
            Empowering your business with cutting-edge solutions.
          </p>
        </div>

        {/* Company Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            {footerNavigation.company.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-gray-200 text-white transition duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-white ">
            {footerNavigation.contact.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className=" text-white transition duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center space-x-6">
        <Link href="https://www.facebook.com/profile.php?id=61567362776649" className="bg-blue-600 p-2 rounded-full hover:bg-blue-800 transition duration-300">
          <FaFacebookF size={20} className="text-white" />
        </Link>
        {/* <Link href="#" className="bg-sky-500 p-2 rounded-full hover:bg-sky-700 transition duration-300">
          <FaTwitter size={20} className="text-white" />
        </Link> */}
        <Link href="https://www.instagram.com/sudhanand_business_solutions/?next=%2F" className="bg-pink-500 p-2 rounded-full hover:bg-pink-700 transition duration-300">
          <FaInstagram size={20} className="text-white" />
        </Link>
        <Link href="https://www.linkedin.com/company/sudhanand-business-solutions-pvt-ltd/" className="bg-blue-700 p-2 rounded-full hover:bg-blue-900 transition duration-300">
          <FaLinkedin size={20} className="text-white" />
        </Link>
      </div>

      {/* Copyright Section */}
      <div className="mt-4 text-center text-sm text-white ">
        &copy; {new Date().getFullYear()} Sudhanand Business Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
