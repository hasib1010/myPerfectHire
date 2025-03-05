"use client";

import { useEffect, useState, lazy, Suspense } from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { motion, AnimatePresence } from 'framer-motion';

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
            <HowItWorksSection/>
          </Suspense>
          
          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading about...</div>}>
            <div className="relative">
              <AboutSection/>
            </div>
          </Suspense>
          
          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading contact...</div>}>
            <ContactSection/>
          </Suspense>
        </main>

        <footer 
          className="relative overflow-hidden py-12 text-white text-center"
          style={{
            background: `linear-gradient(to right, ${BRAND_COLORS[currentColorIndex]}, ${BRAND_COLORS[(currentColorIndex + 1) % BRAND_COLORS.length]})`,
            transition: 'background 2s ease'
          }}
        >
          {/* Simplified wave SVG */}
          <div className="absolute top-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto fill-white">
              <path d="M0,224L1440,128L1440,0L0,0Z"></path>
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
              <div>
                <h3 className="font-bold text-lg mb-4 text-white">Perfect Hire</h3>
                <p className="text-white text-sm">
                  Finding the absolute best talent for your organization since 2010.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-white">Services</h4>
                <ul className="space-y-2 text-white text-sm">
                  <li><a href="#services" className="hover:text-white underline">Legal Recruiting</a></li>
                  <li><a href="#services" className="hover:text-white underline">Executive Search</a></li>
                  <li><a href="#services" className="hover:text-white underline">Technical Recruiting</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-white">Company</h4>
                <ul className="space-y-2 text-white text-sm">
                  <li><a href="#about" className="hover:text-white underline">About Us</a></li>
                  <li><a href="#how-it-works" className="hover:text-white underline">How It Works</a></li>
                  <li><a href="#contact" className="hover:text-white underline">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-white">Connect</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white hover:bg-white/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white hover:bg-white/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white hover:bg-white/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/20">
              <p className="mb-2 text-white">&copy; {new Date().getFullYear()} Perfect Hire. All rights reserved.</p>
              <div className="flex justify-center space-x-4 mt-4 text-sm">
                <a href="#" className="text-white hover:text-white underline">Privacy Policy</a>
                <a href="#" className="text-white hover:text-white underline">Terms of Service</a>
                <a href="#" className="text-white hover:text-white underline">Sitemap</a>
              </div>
            </div>
          </div>
          
          {/* Simplified light beam effect */}
          <motion.div 
            className="absolute -inset-1/4 opacity-10 bg-white blur-3xl"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
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