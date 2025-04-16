// 'use client';
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuItem,
//   MenuItems
// } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import clsx from 'clsx';
// import Link from 'next/link';
// import { FaDownload } from "react-icons/fa";

// type NavItem = {
//   name: string;
//   href: string;
//   current: boolean;
// };

// type Props = {
//   navigation: NavItem[];
// };

// const BloodBankNavbar = ({ navigation }: Props) => {
//   const handleDownloadDocument = () => {
//     const documentUrl = 'https://drive.google.com/file/d/1eLIcyYrW7A5HL3z63T69IkkUiuABRcul/view?usp=sharing';
//     window.open(documentUrl, '_blank');
//   }

//   return (
//     <Disclosure
//       as="nav"
//       className="sticky top-0 z-50 bg-gradient-to-r from-red-800 to-red-900 backdrop-blur-md shadow-lg">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Mobile menu button */}
//           <div className="flex items-center sm:hidden">
//             <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <Bars3Icon className="block h-6 w-6 ui-open:hidden" aria-hidden="true" />
//               <XMarkIcon className="hidden h-6 w-6 ui-open:block" aria-hidden="true" />
//             </DisclosureButton>
//           </div>
//           {/* Logo */}
//           <div className="flex items-center gap-3 h-16 w-32 bg-white">
//             <Link href="/" className="">
//               <img
//                 className=" px-4 "
//                 src="/bloodBank.png"
//                 alt="Blood Bank"
//               />
//             </Link>
//           </div>
//           {/* Desktop Navigation */}
//           <div className="hidden sm:flex sm:space-x-6">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={clsx(
//                   item.current
//                     ? 'bg-white text-red-900'
//                     : 'text-gray-300 hover:bg-red-700 hover:text-white',
//                   'rounded-md px-4 py-2 text-sm font-medium transition duration-150'
//                 )}
//                 aria-current={item.current ? 'page' : undefined}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Right Icons */}
//           <div className="flex items-center gap-4">
//             <Menu as="div" className="relative">
//               <button onClick={() => handleDownloadDocument()} className="flex items-center rounded-full bg-red-900 p-1 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
//                 <FaDownload />
//               </button>
//               <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/10 focus:outline-none">
//                 <MenuItem>
//                   {({ focus }) => (
//                     <Link
//                       href="#"
//                       className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : 'text-gray-700'
//                         }`}
//                     >
//                       Your Profile
//                     </Link>
//                   )}
//                 </MenuItem>
//                 <MenuItem>
//                   {({ focus }) => (
//                     <Link
//                       href="#"
//                       className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : 'text-gray-700'
//                         }`}
//                     >
//                       Settings
//                     </Link>
//                   )}
//                 </MenuItem>
//                 <MenuItem>
//                   {({ focus }) => (
//                     <Link
//                       href="#"
//                       className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : 'text-gray-700'
//                         }`}
//                     >
//                       Logout
//                     </Link>
//                   )}
//                 </MenuItem>
//               </MenuItems>
//             </Menu>
//           </div>

//         </div>
//       </div>

//       {/* Mobile menu */}
//       <DisclosurePanel className="sm:hidden px-2 pt-2 pb-3 space-y-1">
//         {navigation.map((item) => (
//           <DisclosureButton
//             key={item.name}
//             as={Link}
//             href={item.href}
//             className={clsx(
//               item.current
//                 ? 'bg-white text-red-900'
//                 : 'text-gray-300 hover:bg-red-700 hover:text-white',
//               'block rounded-md px-3 py-2 text-base font-medium transition'
//             )}
//             aria-current={item.current ? 'page' : undefined}
//           >
//             {item.name}
//           </DisclosureButton>
//         ))}
//       </DisclosurePanel>
//     </Disclosure>
//   );
// }
// export default BloodBankNavbar;









'use client';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuItem,
  MenuItems
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { FaDownload } from "react-icons/fa";

type NavItem = {
  name: string;
  href: string;
  current: boolean;
};

type Props = {
  navigation: NavItem[];
};

const BloodBankNavbar = ({ navigation }: Props) => {
  const handleDownloadDocument = () => {
    const documentUrl = 'https://drive.google.com/file/d/1eLIcyYrW7A5HL3z63T69IkkUiuABRcul/view?usp=sharing';
    window.open(documentUrl, '_blank');
  };

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-gradient-to-r from-red-800 to-red-900 backdrop-blur-md shadow-lg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:justify-start">
          {/* Mobile: Left Section */}
          <div className="flex w-full items-center justify-between sm:hidden">
            <Link href="/">
              <img className="h-12 w-auto bg-white px-2 py-1 rounded" src="/bloodBank.png" alt="Blood Bank" />
            </Link>

            <div className="flex items-center gap-2">
              {/* Mobile: Download Button */}
              <button
                onClick={handleDownloadDocument}
                className="flex items-center rounded-full bg-red-700 p-2 text-white hover:bg-red-600"
              >
                <FaDownload className="h-4 w-4" />
              </button>

              {/* Mobile: Hamburger */}
              <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <Bars3Icon className="block h-6 w-6 ui-open:hidden" aria-hidden="true" />
                <XMarkIcon className="hidden h-6 w-6 ui-open:block" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>

          {/* Desktop: Logo */}
          <div className="hidden sm:flex items-center gap-3 h-16 w-32 bg-white">
            <Link href="/">
              <img className="px-4" src="/bloodBank.png" alt="Blood Bank" />
            </Link>
          </div>

          {/* Desktop: Navigation */}
          <div className="hidden sm:flex sm:space-x-6 ml-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  item.current
                    ? 'bg-white text-red-900'
                    : 'text-gray-300 hover:bg-red-700 hover:text-white',
                  'rounded-md px-4 py-2 text-sm font-medium transition duration-150'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop: Right Side */}
          <div className="hidden sm:flex items-center gap-4 ml-auto">
            <Menu as="div" className="relative">
              <button
                onClick={handleDownloadDocument}
                className="flex items-center rounded-full bg-red-900 p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className='mr-2'>View Licence    
                  </span><FaDownload /> 
              </button>
              <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/10 focus:outline-none">
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : 'text-gray-700'}`}
                    >
                      Your Profile
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : 'text-gray-700'}`}
                    >
                      Settings
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : 'text-gray-700'}`}
                    >
                      Logout
                    </Link>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden px-2 pt-2 pb-3 space-y-1">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as={Link}
            href={item.href}
            className={clsx(
              item.current
                ? 'bg-white text-red-900'
                : 'text-gray-300 hover:bg-red-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium transition'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
};

export default BloodBankNavbar;
