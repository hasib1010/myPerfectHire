"use client";

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [init, setInit] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Handle scroll to stop particles
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset <= 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log('Particles loaded in Header:', container);
  }, []);

  const particleOptions = {
    autoPlay: true,
    background: {
      color: {
        value: "#481A54" // Match header background
      }
    },
    fullScreen: {
      enable: false // Disable full-screen for header
    },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "grab", parallax: { enable: true, force: 60, smooth: 10 } },
        resize: { delay: 0.5, enable: true }
      },
      modes: {
        push: { quantity: 4 },
        grab: { distance: 400, links: { opacity: 1 } },
        repulse: { distance: 200, duration: 0.4 }
      }
    },
    particles: {
      color: {
        value: ['#e61c5c', '#38c7ef', '#ecb324', '#2bb87c'] // Your brand colors
      },
      links: {
        color: { value: "#ffffff" },
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: false,
        speed: 2, // Slower for header
        straight: false
      },
      number: {
        density: { enable: true, width: 1920, height: 1080 },
        value: 20 // Fewer particles for header
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: { enable: true, speed: 3, sync: false, startValue: "random" }
      },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 5 }, // Smaller particles for header
        animation: { enable: true, speed: 20, sync: false, startValue: "random" }
      }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    zLayers: 100,
    motion: { disable: false, reduce: { factor: 4, value: true } }
  };

  return (
    <header className="fixed w-full z-50 bg-[#481A54] text-white py-2 sm:py-3">
      {/* {init && isVisible && (
        <Particles
          id="header-particles"
          particlesLoaded={particlesLoaded}
          options={particleOptions}
          className="absolute inset-0 z-0"
        />
      )} */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href={'/'}>
              <Image
                src="/logo.png"
                alt="MyPerfectHire Logo"
                width={400}
                height={50}
                className="w-[200px] xxs:w-[150px] xs:w-[180px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto"
                priority
              />
            </Link>
          </div>
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <a href="#services" className="text-sm xl:text-base font-medium hover:opacity-80 transition-opacity">Services</a>
            <a href="#how-it-works" className="text-sm xl:text-base font-medium hover:opacity-80 transition-opacity">How It Works</a>
            <a href="#about" className="text-sm xl:text-base font-medium hover:opacity-80 transition-opacity">About Us</a>
            <a href="#contact">
              <Button className="rounded-full px-4 py-1.5 xl:px-6 xl:py-2 text-sm xl:text-base font-medium bg-[#e61c5c] text-white hover:bg-gray-100">Contact Us</Button>
            </a>
          </nav>
          <button className="lg:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden mt-3 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 px-2">
              <a href="#services" className="py-2 text-sm sm:text-base font-medium hover:opacity-80 transition-opacity" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#how-it-works" className="py-2 text-sm sm:text-base font-medium hover:opacity-80 transition-opacity" onClick={() => setMenuOpen(false)}>How It Works</a>
              <a href="#about" className="py-2 text-sm sm:text-base font-medium hover:opacity-80 transition-opacity" onClick={() => setMenuOpen(false)}>About Us</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                <Button className="w-full rounded-full px-6 py-2 text-sm sm:text-base font-medium bg-white text-[#481A54] hover:bg-gray-100">Contact Us</Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}