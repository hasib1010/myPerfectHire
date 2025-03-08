"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed w-full z-50 bg-[#481A54] text-white py-2 sm:py-3">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo - enhanced responsive scaling */}
                    <div className="flex items-center">
                        <Link href={'/'}>
                            <div className="flex items-center">
                                <Image 
                                    src="/logo.png" 
                                    alt="MyPerfectHire Logo" 
                                    width={400} 
                                    height={50}
                                    className="w-[200px] xxs:w-[150px] xs:w-[180px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto" 
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation - adjusted breakpoint and spacing */}
                    <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                        <a
                            href="#services"
                            className="text-sm xl:text-base font-medium hover:opacity-80 transition-opacity"
                        >
                            Services
                        </a>
                        <a
                            href="#how-it-works"
                            className="text-sm xl:text-base font-medium hover:opacity-80 transition-opacity"
                        >
                            How It Works
                        </a>
                        <a
                            href="#about"
                            className="text-sm xl:text-base font-medium hover:opacity-80 transition-opacity"
                        >
                            About Us
                        </a>
                        <a href="#contact">
                            <Button
                                className="rounded-full px-4 py-1.5 xl:px-6 xl:py-2 text-sm xl:text-base font-medium bg-white text-[#481A54] hover:bg-gray-100"
                            >
                                Contact Us
                            </Button>
                        </a>
                    </nav>

                    {/* Mobile Menu Button - adjusted size */}
                    <button
                        className="lg:hidden p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 sm:h-6 sm:w-6"
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

                {/* Mobile Menu - improved spacing and sizing */}
                {menuOpen && (
                    <div className="lg:hidden mt-3 py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-3 px-2">
                            <a
                                href="#services"
                                className="py-2 text-sm sm:text-base font-medium hover:opacity-80 transition-opacity"
                                onClick={() => setMenuOpen(false)}
                            >
                                Services
                            </a>
                            <a
                                href="#how-it-works"
                                className="py-2 text-sm sm:text-base font-medium hover:opacity-80 transition-opacity"
                                onClick={() => setMenuOpen(false)}
                            >
                                How It Works
                            </a>
                            <a
                                href="#about"
                                className="py-2 text-sm sm:text-base font-medium hover:opacity-80 transition-opacity"
                                onClick={() => setMenuOpen(false)}
                            >
                                About Us
                            </a>
                            <a href="#contact" onClick={() => setMenuOpen(false)}>
                                <Button
                                    className="w-full rounded-full px-6 py-2 text-sm sm:text-base font-medium bg-white text-[#481A54] hover:bg-gray-100"
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