"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`fixed w-full z-50 transition-all pt-2.5  duration-300  bg-[#4e124d] text-white py-4"
            }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex p-2 items-center space-x-4">
                        <div className="font-bold text-xl sm:text-2xl">
                           
                                <Link href={'/'}>
                                    <div className="flex items-center">
                                        <Image  src="/logo.png" alt="MyPerfectHire Logo" width={500} height={50} />
                                    </div>
                                </Link>
                            
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="#services"
                            className={`font-medium hover:opacity-80 transition-opacity   "text-white"
                                }`}
                        >
                            Services
                        </a>
                        <a
                            href="#how-it-works"
                            className={`font-medium hover:opacity-80 transition-opacity  "text-white"
                                }`}
                        >
                            How It Works
                        </a>
                        <a
                            href="#about"
                            className={`font-medium hover:opacity-80 transition-opacity   "text-white"
                                }`}
                        >
                            About Us
                        </a>
                        <a className='cursor-pointer' href="#contact">
                            <Button
                                className={`w-full cursor-pointer justify-center rounded-full px-6 py-2 font-medium  
                                    "bg-white text-white hover:bg-gray-100"
                                    }`}
                            >


                                Contact Us
                            </Button>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6  "text-white"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
                        <nav className="flex flex-col space-y-4">
                            <a
                                href="#services"
                                className={`py-2 font-medium   "text-white"}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                Services
                            </a>
                            <a
                                href="#how-it-works"
                                className={`py-2 font-medium   "text-white"}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                How It Works
                            </a>
                            <a
                                href="#about"
                                className={`py-2 font-medium  "text-white"}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                About Us
                            </a>
                            <a className='cursor-pointer' href="#contact">
                            <Button
                                className={`w-full cursor-pointer justify-center rounded-full px-6 py-2 font-medium  
                                    "bg-white text-white hover:bg-gray-100"
                                    }`}
                            >


                                Contact Us
                            </Button>
                        </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}