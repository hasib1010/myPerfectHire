"use client";

import { useEffect, useState, lazy, Suspense } from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Lazy load non-critical components
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));

// Pre-defined colors to avoid recreation
const BRAND_COLORS = ['#4e124d', '#e61c5c', '#38c7ef', '#2bb87c', '#ecb324'];

export default function Home() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame for smoother animation
    let colorChangeId;
    const updateColor = () => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % BRAND_COLORS.length);
      colorChangeId = setTimeout(updateColor, 5000);
    };

    colorChangeId = setTimeout(updateColor, 5000);

    // Handle scroll visibility
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      clearTimeout(colorChangeId);
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Fixed background elements - combined for better performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#e61c5c]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#38c7ef]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#2bb87c]/3 rounded-full blur-3xl"></div>
      </div>

      {/* Reduced number of floating elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {BRAND_COLORS.slice(0, 3).map((color, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full opacity-5"
            style={{
              backgroundColor: color,
              width: `${Math.random() * 10 + 5}rem`,
              height: `${Math.random() * 10 + 5}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />

        <main>
          <HeroSection />

          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading services...</div>}>
            <div className="relative">
              <ServicesSection />
            </div>
          </Suspense>

          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading process...</div>}>
            <HowItWorksSection />
          </Suspense>

          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading about...</div>}>
            <div className="relative">
              <AboutSection />
            </div>
          </Suspense>

          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading contact...</div>}>
            <ContactSection />
          </Suspense>
        </main>
        <footer
  className="relative overflow-hidden py-16 text-center"
  style={{
    background: `linear-gradient(to right, ${BRAND_COLORS[currentColorIndex]}, ${BRAND_COLORS[(currentColorIndex + 1) % BRAND_COLORS.length]})`,
    transition: 'background 2s ease',
    boxShadow: '0 -10px 25px -5px rgba(0,0,0,0.1)'
  }}
>
  {/* Stronger dark overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/50 z-0"></div>

  {/* Improved wave SVG with more pronounced curve */}
  <div className="absolute top-0 left-0 w-full z-10">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto fill-white">
      <path d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
  </div>

  <div className="container mx-auto px-6 relative z-20">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 text-left">
      <div className="bg-[#4e124d] p-4 rounded-lg">
        <Link href={'/'}>
          <div className="flex items-center mb-4">
            <div className=" ">
              <Image className='' src="/logo.webp" alt="MyPerfectHire Logo" width={150} height={50} />
            </div>
          </div>
        </Link>
        <p className="text-white text-base font-bold">
          Finding the absolute best talent for your organization since 2010.
        </p>
      </div>

      <div className="bg-[#4e124d] p-4 rounded-lg">
        <h4 className="font-extrabold text-xl mb-4 text-white">Services</h4>
        <ul className="space-y-3">
          <li>
            <a href="#services" className="text-white font-bold text-lg hover:text-white transition-all duration-200 flex items-center group">
              <span className="mr-2 bg-white text-[#4e124d] rounded-full w-5 h-5 flex items-center justify-center text-sm group-hover:bg-[#e61c5c] group-hover:text-white transition-colors">→</span>
              Legal Recruiting
            </a>
          </li>
          <li>
            <a href="#services" className="text-white font-bold text-lg hover:text-white transition-all duration-200 flex items-center group">
              <span className="mr-2 bg-white text-[#4e124d] rounded-full w-5 h-5 flex items-center justify-center text-sm group-hover:bg-[#e61c5c] group-hover:text-white transition-colors">→</span>
              Executive Search
            </a>
          </li>
          <li>
            <a href="#services" className="text-white font-bold text-lg hover:text-white transition-all duration-200 flex items-center group">
              <span className="mr-2 bg-white text-[#4e124d] rounded-full w-5 h-5 flex items-center justify-center text-sm group-hover:bg-[#e61c5c] group-hover:text-white transition-colors">→</span>
              Technical Recruiting
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-[#4e124d] p-4 rounded-lg">
        <h4 className="font-extrabold text-xl mb-4 text-white">Company</h4>
        <ul className="space-y-3">
          <li>
            <a href="#about" className="text-white font-bold text-lg hover:text-white transition-all duration-200 flex items-center group">
              <span className="mr-2 bg-white text-[#4e124d] rounded-full w-5 h-5 flex items-center justify-center text-sm group-hover:bg-[#e61c5c] group-hover:text-white transition-colors">→</span>
              About Us
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="text-white font-bold text-lg hover:text-white transition-all duration-200 flex items-center group">
              <span className="mr-2 bg-white text-[#4e124d] rounded-full w-5 h-5 flex items-center justify-center text-sm group-hover:bg-[#e61c5c] group-hover:text-white transition-colors">→</span>
              How It Works
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white font-bold text-lg hover:text-white transition-all duration-200 flex items-center group">
              <span className="mr-2 bg-white text-[#4e124d] rounded-full w-5 h-5 flex items-center justify-center text-sm group-hover:bg-[#e61c5c] group-hover:text-white transition-colors">→</span>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-[#4e124d] p-4 rounded-lg">
        <h4 className="font-extrabold text-xl mb-4 text-white">Connect</h4>
        <div className="flex space-x-4 mb-6">
          <a href="#" className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-[#e61c5c] hover:text-white transition-all duration-300 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#e61c5c] hover:text-white transition-all duration-300 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-[#e61c5c] hover:text-white transition-all duration-300 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        <p className="text-white text-base font-bold mt-4 bg-[#4e124d] p-3 rounded-lg shadow-md">
          Get the latest updates from Perfect Hire
        </p>
      </div>
    </div>

    <div className="pt-8 border-t-2 border-yellow-300 mt-6 bg-[#4e124d] p-4 rounded-lg">
      <p className="mb-4 text-white font-bold text-base">&copy; {new Date().getFullYear()} Perfect Hire. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="#" className="text-white font-bold text-base hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="text-white font-bold text-base hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="text-white font-bold text-base hover:text-white transition-colors">Sitemap</a>
      </div>
    </div>
  </div>

  {/* No light beam effect to avoid visibility issues */}
</footer>


      </div>

      {/* Optimized scroll to top button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-[#4e124d] text-white shadow-lg z-50 hover:bg-[#3d0e3d] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}