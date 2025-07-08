// 'use client';
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuItem,
//   MenuItems,
//   Dialog,
//   DialogPanel,
//   DialogTitle,
// } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import clsx from 'clsx';
// import Link from 'next/link';
// import { FaDownload } from "react-icons/fa";
// import { useState } from 'react';

// type NavItem = {
//   name: string;
//   href: string;
//   current: boolean;
// };

// type Props = {
//   navigation: NavItem[];
// };

// const BloodBankNavbar = ({ navigation }: Props) => {
//   const [isLicenseOpen, setIsLicenseOpen] = useState(false);

//   const openLicenseViewer = () => {
//     setIsLicenseOpen(true);
//   };

//   const closeLicenseViewer = () => {
//     setIsLicenseOpen(false);
//   };

//   return (
//     <>
//       <Disclosure
//         as="nav"
//         className="sticky top-0 z-50 bg-gradient-to-r from-red-800 to-red-900 backdrop-blur-md shadow-lg"
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex h-16 items-center justify-between sm:justify-start">
//             {/* Mobile: Left Section */}
//             <div className="flex w-full items-center justify-between sm:hidden">
//               <Link href="/">
//                 <img className="h-12 w-auto bg-white px-2 py-1 rounded" src="/bloodBank.png" alt="Blood Bank" />
//               </Link>

//               <div className="flex items-center gap-2">
//                 {/* Mobile: View Button */}
//                 <button
//                   onClick={openLicenseViewer}
//                   className="flex items-center rounded-full bg-red-700 p-2 text-white hover:bg-red-600"
//                 >
//                   <span className="sr-only">View License</span>
//                   <FaDownload className="h-4 w-4" />
//                 </button>

//                 {/* Mobile: Hamburger */}
//                 <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <Bars3Icon className="block h-6 w-6 ui-open:hidden" aria-hidden="true" />
//                   <XMarkIcon className="hidden h-6 w-6 ui-open:block" aria-hidden="true" />
//                 </DisclosureButton>
//               </div>
//             </div>

//             {/* Desktop: Logo */}
//             <div className="hidden sm:flex items-center gap-3 h-16 w-32 bg-white">
//               <Link href="/">
//                 <img className="px-4" src="/bloodBank.png" alt="Blood Bank" />
//               </Link>
//             </div>

//             {/* Desktop: Navigation */}
//             <div className="hidden sm:flex sm:space-x-6 ml-6">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={clsx(
//                     item.current
//                       ? 'bg-white text-red-900'
//                       : 'text-gray-300 hover:bg-red-700 hover:text-white',
//                     'rounded-md px-4 py-2 text-sm font-medium transition duration-150'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>

//             {/* Desktop: Right Side */}
//             <div className="hidden sm:flex items-center gap-4 ml-auto">
//               <Menu as="div" className="relative">
//                 <button
//                   onClick={openLicenseViewer}
//                   className="flex items-center rounded-full bg-red-900 p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
//                 >
//                   <span className='mr-2'>View License</span>
//                   <FaDownload /> 
//                 </button>
//                 <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/10 focus:outline-none">
//                   <MenuItem>
//                     {({ focus }) => (
//                       <Link
//                         href="#"
//                         className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : 'text-gray-700'}`}
//                       >
//                         Your Profile
//                       </Link>
//                     )}
//                   </MenuItem>
//                   <MenuItem>
//                     {({ focus }) => (
//                       <Link
//                         href="#"
//                         className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : 'text-gray-700'}`}
//                       >
//                         Settings
//                       </Link>
//                     )}
//                   </MenuItem>
//                   <MenuItem>
//                     {({ focus }) => (
//                       <Link
//                         href="#"
//                         className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : 'text-gray-700'}`}
//                       >
//                         Logout
//                       </Link>
//                     )}
//                   </MenuItem>
//                 </MenuItems>
//               </Menu>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <DisclosurePanel className="sm:hidden px-2 pt-2 pb-3 space-y-1">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as={Link}
//               href={item.href}
//               className={clsx(
//                 item.current
//                   ? 'bg-white text-red-900'
//                   : 'text-gray-300 hover:bg-red-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium transition'
//               )}
//               aria-current={item.current ? 'page' : undefined}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </DisclosurePanel>
//       </Disclosure>

//       {/* License Viewer Modal */}
//       <Dialog open={isLicenseOpen} onClose={closeLicenseViewer} className="relative z-50">
//         <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <DialogPanel className="w-full max-w-4xl rounded bg-white">
//             <div className="flex justify-between items-center p-4 border-b">
//               <DialogTitle className="text-lg font-semibold">License Document</DialogTitle>
//               <button
//                 onClick={closeLicenseViewer}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <XMarkIcon className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="h-[80vh]">
//               <iframe 
//                 src="https://drive.google.com/file/d/1eLIcyYrW7A5HL3z63T69IkkUiuABRcul/preview" 
//                 // src="/blood-bank-licence.pdf" 
//                 width="100%" 
//                 height="100%"
//                 className="border-0"
//                 allow="autoplay"
//               ></iframe>
//             </div>
//           </DialogPanel>
//         </div>
//       </Dialog>
//     </>
//   );
// };

// export default BloodBankNavbar;


//this is pdf 

// 'use client';
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuItem,
//   MenuItems,
//   Dialog,
//   DialogPanel,
//   DialogTitle,
// } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import clsx from 'clsx';
// import Link from 'next/link';
// import { FaDownload } from "react-icons/fa";
// import { useState, useEffect } from 'react';

// type NavItem = {
//   name: string;
//   href: string;
//   current: boolean;
// };

// type Props = {
//   navigation: NavItem[];
// };

// const BloodBankNavbar = ({ navigation }: Props) => {
//   const [isLicenseOpen, setIsLicenseOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const openLicenseViewer = () => {
//     setIsLicenseOpen(true);
//   };

//   const closeLicenseViewer = () => {
//     setIsLicenseOpen(false);
//   };

//   return (
//     <>
//       <Disclosure
//         as="nav"
//         className={clsx(
//           "sticky top-0 z-50 backdrop-blur-md shadow-sm transition-colors duration-300",
//           isScrolled ? "bg-gradient-to-r from-red-800 to-red-900" : "bg-white"
//         )}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex h-16 items-center justify-between sm:justify-start">
//             {/* Mobile: Left Section */}
//             <div className="flex w-full items-center justify-between sm:hidden">
//               <Link href="/">
//                 <img className="h-12 w-auto bg-white px-2 py-1 rounded" src="/bloodBank.png" alt="Blood Bank" />
//               </Link>

//               <div className="flex items-center gap-2">
//                 {/* Mobile: View Button */}
//                 <button
//                   onClick={openLicenseViewer}
//                   className={clsx(
//                     "flex items-center rounded-full p-2 hover:bg-opacity-80",
//                     isScrolled ? "bg-red-700 text-white" : "bg-red-900 text-white"
//                   )}
//                 >
//                   <span className="sr-only">View License</span>
//                   <FaDownload className="h-4 w-4" />
//                 </button>

//                 {/* Mobile: Hamburger */}
//                 <DisclosureButton className={clsx(
//                   "inline-flex items-center justify-center rounded-md p-2 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-inset",
//                   isScrolled ? "text-gray-300 hover:bg-red-700 focus:ring-white" : "text-gray-700 hover:bg-gray-200 focus:ring-gray-500"
//                 )}>
//                   <Bars3Icon className="block h-6 w-6 ui-open:hidden" aria-hidden="true" />
//                   <XMarkIcon className="hidden h-6 w-6 ui-open:block" aria-hidden="true" />
//                 </DisclosureButton>
//               </div>
//             </div>

//             {/* Desktop: Logo */}
//             <div className="hidden sm:flex items-center gap-3 h-16 w-32 bg-white">
//               <Link href="/">
//                 <img className="px-4" src="/bloodBank.png" alt="Blood Bank" />
//               </Link>
//             </div>

//             {/* Desktop: Navigation */}
//             <div className="hidden sm:flex sm:space-x-6 ml-6">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={clsx(
//                     item.current
//                       ? 'bg-white text-red-900'
//                       : isScrolled 
//                         ? 'text-gray-300 hover:bg-red-700 hover:text-white' 
//                         : 'text-gray-700 hover:bg-gray-200',
//                     'rounded-md px-4 py-2 text-sm font-medium transition duration-150'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>

//             {/* Desktop: Right Side */}
//             <div className="hidden sm:flex items-center gap-4 ml-auto">
//               <Menu as="div" className="relative">
//                 <button
//                   onClick={openLicenseViewer}
//                   className={clsx(
//                     "flex items-center rounded-full p-2 hover:text-white focus:outline-none focus:ring-2",
//                     isScrolled 
//                       ? "bg-red-900 text-gray-300 hover:bg-red-800 focus:ring-white" 
//                       : "bg-red-800 text-white hover:bg-red-700 focus:ring-gray-500"
//                   )}
//                 >
//                   <span className='mr-2'>View License</span>
//                   <FaDownload /> 
//                 </button>
//                 <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/10 focus:outline-none">
//                   <MenuItem>
//                     {({ focus }) => (
//                       <Link
//                         href="#"
//                         className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : 'text-gray-700'}`}
//                       >
//                         Your Profile
//                       </Link>
//                     )}
//                   </MenuItem>
//                   <MenuItem>
//                     {({ focus }) => (
//                       <Link
//                         href="#"
//                         className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : 'text-gray-700'}`}
//                       >
//                         Settings
//                       </Link>
//                     )}
//                   </MenuItem>
//                   <MenuItem>
//                     {({ focus }) => (
//                       <Link
//                         href="#"
//                         className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : 'text-gray-700'}`}
//                       >
//                         Logout
//                       </Link>
//                     )}
//                   </MenuItem>
//                 </MenuItems>
//               </Menu>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <DisclosurePanel className={clsx(
//           "sm:hidden px-2 pt-2 pb-3 space-y-1",
//           isScrolled ? "bg-gradient-to-r from-red-800 to-red-900" : "bg-white"
//         )}>
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as={Link}
//               href={item.href}
//               className={clsx(
//                 item.current
//                   ? 'bg-white text-red-900'
//                   : isScrolled 
//                     ? 'text-gray-300 hover:bg-red-700 hover:text-white' 
//                     : 'text-gray-700 hover:bg-gray-200',
//                 'block rounded-md px-3 py-2 text-base font-medium transition'
//               )}
//               aria-current={item.current ? 'page' : undefined}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </DisclosurePanel>
//       </Disclosure>

//       {/* License Viewer Modal */}
//       <Dialog open={isLicenseOpen} onClose={closeLicenseViewer} className="relative z-50">
//         <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <DialogPanel className="w-full max-w-4xl rounded bg-white">
//             <div className="flex justify-between items-center p-4 border-b">
//               <DialogTitle className="text-lg font-semibold">License Document</DialogTitle>
//               <button
//                 onClick={closeLicenseViewer}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <XMarkIcon className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="h-[80vh]">
//               <iframe 
//                 src="https://drive.google.com/file/d/1eLIcyYrW7A5HL3z63T69IkkUiuABRcul/preview" 
//                 width="100%" 
//                 height="100%"
//                 className="border-0"
//                 allow="autoplay"
//               ></iframe>
//             </div>
//           </DialogPanel>
//         </div>
//       </Dialog>
//     </>
//   );
// };

// export default BloodBankNavbar;







'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { FaDownload } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Image from "next/image";

type NavItem = {
  name: string;
  href: string;
  current: boolean;
};

type Props = {
  navigation: NavItem[];
};

const BloodBankNavbar = ({ navigation }: Props) => {
  const [isLicenseOpen, setIsLicenseOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLicenseViewer = () => setIsLicenseOpen(true);
  const closeLicenseViewer = () => setIsLicenseOpen(false);

  return (
    <>
      <Disclosure
        as="nav"
        className={clsx(
          "sticky top-0 z-50 backdrop-blur-md shadow-sm transition-colors duration-300",
          isScrolled ? "bg-gradient-to-r from-red-800 to-red-900" : "bg-white"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:justify-start">
            {/* Mobile: Logo */}
            <div className="flex w-full items-center justify-between sm:hidden">
              <Link href="/">
                <Image
                  src="/bloodBank.png"
                  alt="Blood Bank"
                  width={100}
                  height={48}
                  className="h-12 w-auto bg-white px-2 py-1 rounded"
                />
              </Link>
              <div className="flex items-center gap-2">
                <button
                  onClick={openLicenseViewer}
                  className={clsx(
                    "flex items-center rounded-full p-2 hover:bg-opacity-80",
                    isScrolled ? "bg-red-700 text-white" : "bg-red-900 text-white"
                  )}
                >
                  <span className="sr-only">View License</span>
                  <FaDownload className="h-4 w-4" />
                </button>
                <DisclosureButton className={clsx(
                  "inline-flex items-center justify-center rounded-md p-2 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-inset",
                  isScrolled ? "text-gray-300 hover:bg-red-700 focus:ring-white" : "text-gray-700 hover:bg-gray-200 focus:ring-gray-500"
                )}>
                  <Bars3Icon className="block h-6 w-6 ui-open:hidden" aria-hidden="true" />
                  <XMarkIcon className="hidden h-6 w-6 ui-open:block" aria-hidden="true" />
                </DisclosureButton>
              </div>
            </div>

            {/* Desktop: Logo */}
            <div className="hidden sm:flex items-center gap-3 h-16 w-32 bg-white">
              <Link href="/">
                <Image
                  src="/bloodBank.png"
                  alt="Blood Bank"
                  width={128}
                  height={64}
                  className="px-4"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:flex sm:space-x-6 ml-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    item.current
                      ? 'bg-white text-red-900'
                      : isScrolled
                        ? 'text-gray-300 hover:bg-red-700 hover:text-white'
                        : 'text-gray-700 hover:bg-gray-200',
                    'rounded-md px-4 py-2 text-sm font-medium transition duration-150'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop: View License Button */}
            <div className="hidden sm:flex items-center gap-4 ml-auto">
              <button
                onClick={openLicenseViewer}
                className={clsx(
                  "flex items-center rounded-full p-2 hover:text-white focus:outline-none focus:ring-2",
                  isScrolled
                    ? "bg-red-900 text-gray-300 hover:bg-red-800 focus:ring-white"
                    : "bg-red-800 text-white hover:bg-red-700 focus:ring-gray-500"
                )}
              >
                <span className='mr-2'>View License</span>
                <FaDownload />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <DisclosurePanel className={clsx(
          "sm:hidden px-2 pt-2 pb-3 space-y-1",
          isScrolled ? "bg-gradient-to-r from-red-800 to-red-900" : "bg-white"
        )}>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              href={item.href}
              className={clsx(
                item.current
                  ? 'bg-white text-red-900'
                  : isScrolled
                    ? 'text-gray-300 hover:bg-red-700 hover:text-white'
                    : 'text-gray-700 hover:bg-gray-200',
                'block rounded-md px-3 py-2 text-base font-medium transition'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </DisclosurePanel>
      </Disclosure>

      {/* License Modal */}
      <Dialog open={isLicenseOpen} onClose={closeLicenseViewer} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
          <DialogPanel className="w-full max-w-4xl rounded bg-white">
            <div className="flex justify-between items-center p-4 border-b">
              <DialogTitle className="text-lg font-semibold">License Document</DialogTitle>
              <div className="flex items-center space-x-3">
                <a
                  href="/Licence/view.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Fullscreen"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
                  </svg>
                </a>
                <button onClick={closeLicenseViewer} className="text-gray-500 hover:text-gray-700">
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-4 space-y-6 max-h-[80vh] overflow-y-auto">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <Image
                  key={num}
                  src={`/Licence/${num}.jpg`}
                  alt={`License Page ${num}`}
                  width={800}
                  height={1000}
                  className="w-full rounded shadow object-contain"
                />

              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

    </>
  );
};

export default BloodBankNavbar;


