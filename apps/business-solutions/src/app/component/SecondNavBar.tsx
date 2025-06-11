"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavItem {
    name: string;
    link: string;
}

interface Props {
    navItems: NavItem[];
}

const SecondNavBar: React.FC<Props> = ({ navItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white text-orange-600 fixed w-full top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-6 py-2">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <Link href="/" passHref>
                        <Image
                            src="/SBPL.png"
                            alt="SBPL Logo"
                            width={60}
                            height={50}
                            className="rounded-full z-10"
                            priority={true}
                        />
                    </Link>
                    <Link href={'/'} className="text-sm md:text-sm font-semibold text-orange-600 tracking-wide">
                        Sudhanand Business Solutions
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-8">
                    {navItems.map((item, index) => (
                        <Link href={item.link} key={index} passHref>
                            <p className="text-sm font-medium text-orange-600 hover:text-orange-800 hover:b-order-b-2 hover:border-orange-600 transition-colors duration-300">
                                {item.name}
                            </p>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-orange-600 focus:outline-none hover:text-orange-800"
                    >
                        {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`absolute top-16 left-0 w-full bg-white shadow-md p-6 transition-all duration-300 ease-in-out z-50 lg:hidden ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col space-y-4 text-center mt-4">
                    {navItems.map((item, index) => (
                        <Link href={item.link} key={index} passHref>
                            <p className="text-lg font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300">
                                {item.name}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default SecondNavBar;
