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

type NavItem = {
  name: string;
  href: string;
  current: boolean;
};

type Props = {
  navigation: NavItem[];
};

const BloodBankNavbar = ({ navigation }: Props) => {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-gradient-to-r from-red-800 to-red-900 backdrop-blur-md shadow-lg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <Bars3Icon className="block h-6 w-6 ui-open:hidden" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6 ui-open:block" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center">
            <img
              className="h-10 w-auto rounded-md bg-white p-1 shadow-md"
              src="/bloodBank.png"
              alt="Blood Bank"
            />
            </Link>
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-6">
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

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="rounded-full bg-red-900 p-1 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              {/* <BellIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">View notifications</span> */}
            </button>

            <Menu as="div" className="relative">
              {/* <MenuButton className="flex rounded-full bg-red-900 text-sm focus:outline-none focus:ring-2 focus:ring-white">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="https://i.pravatar.cc/300"
                  alt="User Avatar"
                />
              </MenuButton> */}
              <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/10 focus:outline-none">
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        focus ? 'bg-gray-100' : 'text-gray-700'
                      }`}
                    >
                      Your Profile
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        focus ? 'bg-gray-100' : 'text-gray-700'
                      }`}
                    >
                      Settings
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        focus ? 'bg-gray-100' : 'text-gray-700'
                      }`}
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
}


export default BloodBankNavbar;