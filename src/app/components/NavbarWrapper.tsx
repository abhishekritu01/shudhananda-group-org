'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function NavbarWrapper() {
    const pathname = usePathname();

    const showNavbar =
        pathname === '/' ||                                 // ✅ Show on homepage
        pathname.startsWith('/bloodbank/bloodlist');      // Show on blood requests
    

    return showNavbar ? <Navbar /> : null;
}



