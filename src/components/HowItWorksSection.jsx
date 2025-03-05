"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function HowItWorksSection() {
  // Brand colors array
  const brandColors = [
    { base: "#e61c5c", bg: "bg-[#e61c5c]/10", text: "text-[#e61c5c]", border: "border-[#e61c5c]/30" },
    { base: "#38c7ef", bg: "bg-[#38c7ef]/10", text: "text-[#38c7ef]", border: "border-[#38c7ef]/30" },
    { base: "#2bb87c", bg: "bg-[#2bb87c]/10", text: "text-[#2bb87c]", border: "border-[#2bb87c]/30" },
    { base: "#ecb324", bg: "bg-[#ecb324]/10", text: "text-[#ecb324]", border: "border-[#ecb324]/30" },
    { base: "#4e124d", bg: "bg-[#4e124d]/10", text: "text-[#4e124d]", border: "border-[#4e124d]/30" }
  ];

  // State to track current color index for each card
  const [cardColors, setCardColors] = useState([0, 1, 2, 3, 4]);

  // Effect to change colors periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setCardColors(prev => prev.map(index => (index + 1) % brandColors.length));
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Submit Your Requirements",
      description: "Tell us about the position you need to fill and the specific skills, experience, and qualifications you're looking for in your ideal candidate.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: "02",
      title: "We Search & Screen",
      description: "Our specialized recruiters tap into our extensive network and use advanced tools to identify and pre-screen the most qualified candidates for your position.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Review Top Candidates",
      description: "We present you with a curated shortlist of exceptional candidates who best match your requirements, saving you time on reviewing countless resumes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Interview & Select",
      description: "We facilitate interviews with your chosen candidates and provide support throughout the selection process to ensure you make the best hiring decision.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Successful Placement",
      description: "We help finalize the hiring process, including offer negotiation, and provide ongoing support to ensure your new hire is a perfect long-term fit.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  // Background particles data (increased size and opacity for better visibility)
  const particles = [
    { color: "bg-[#e61c5c]/20", size: "w-64 h-64", top: "top-10", left: "left-[5%]", animDuration: 25 },
    { color: "bg-[#38c7ef]/20", size: "w-72 h-72", top: "top-1/4", right: "right-[10%]", animDuration: 30 },
    { color: "bg-[#2bb87c]/20", size: "w-56 h-56", top: "top-1/2", left: "left-[15%]", animDuration: 20 },
    { color: "bg-[#ecb324]/20", size: "w-80 h-80", bottom: "bottom-[20%]", right: "right-[5%]", animDuration: 28 },
    { color: "bg-[#4e124d]/20", size: "w-60 h-60", bottom: "bottom-10", left: "left-[20%]", animDuration: 22 }
  ];

  // Create refs for elements we want to observe
  const titleRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Check if elements are in view
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const processInView = useInView(processRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Color Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className={`absolute ${particle.size} ${particle.color} rounded-full blur-3xl ${particle.top || ''} ${particle.left || ''} ${particle.right || ''} ${particle.bottom || ''} z-0`}
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1, 1.05, 1],
            rotate: [0, particle.animDuration % 2 === 0 ? 5 : -5, 0]
          }}
          transition={{
            duration: particle.animDuration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={titleRef}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-[#4e124d] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our streamlined process is designed to find your perfect hire efficiently and effectively
          </motion.p>
        </div>
        
        <div 
          ref={processRef}
          className="max-w-5xl mx-auto"
        >
          {/* Process Steps */}
          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 md:left-1/2 md:-ml-px"></div>
            
            {steps.map((step, index) => {
              // Create a ref for each step
              const stepRef = useRef(null);
              const stepInView = useInView(stepRef, { 
                once: true, 
                amount: 0.2,
                margin: "-100px 0px -100px 0px" // Trigger a bit before the element is fully in view
              });
              
              // Get color for this card
              const colorIndex = cardColors[index];
              const color = brandColors[colorIndex];
              
              return (
                <div 
                  key={index}
                  ref={stepRef}
                  className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-16 md:pr-0' : 'md:mr-auto md:pr-16 md:pl-0'} md:w-1/2 pl-16`}
                >
                  {/* Step Number - Fixed positioning */}
                  {/* <motion.div 
                    className={`absolute left-0 -top-5 md:top-6 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md ${color.border} md:left-1/2 md:-translate-x-1/2 z-10`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={stepInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className={`text-lg font-bold ${color.text}`}>{step.number}</span>
                  </motion.div> */}
                  
                  {/* Step Content */}
                  <motion.div 
                    className={`bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 border ${color.border}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ 
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className={`inline-flex p-3 rounded-full ${color.bg} ${color.text} mb-4 transition-colors duration-500`}>
                      {step.icon}
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${color.text} transition-colors duration-500`}>{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
          
          {/* Call to Action */}
          <div 
            ref={ctaRef}
            className="text-center mt-12"
          >
            <motion.a 
              href="#hero" 
              className="inline-block px-8 py-3 bg-[#4e124d] text-white font-medium rounded-lg hover:bg-[#3d0e3d] hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            >
              Find Your Perfect Hire Now
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}