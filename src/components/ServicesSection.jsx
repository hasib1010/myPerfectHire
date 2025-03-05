"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function EnhancedServicesSection() {
  // Define services with icons and colors
  const services = [
    {
      title: "Legal Recruiting",
      description: "Finding top legal talent for your firm with our specialized knowledge of the legal industry and professional networks.",
      icon: "⚖️", 
      color: "#e61c5c",
      bgColor: "#e61c5c10",
      delay: 0.1
    },
    {
      title: "Executive Search",
      description: "Comprehensive search solutions for C-suite executives and senior management positions across industries.",
      icon: "👥",
      color: "#38c7ef",
      bgColor: "#38c7ef10",
      delay: 0.2
    },
    {
      title: "Technical Recruiting",
      description: "Connecting you with highly skilled technical professionals for engineering, development, and IT roles.",
      icon: "💻",
      color: "#2bb87c",
      bgColor: "#2bb87c10",
      delay: 0.3
    },
    {
      title: "Healthcare Recruiting",
      description: "Specialized talent acquisition for healthcare organizations including clinical, administrative and executive roles.",
      icon: "🏥",
      color: "#ecb324",
      bgColor: "#ecb32410",
      delay: 0.4
    }
  ];

  // For scroll-based animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // For animated counts
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targetCounts = [500, 98, 250, 15]; // Final numbers to count to
  
  useEffect(() => {
    if (isInView) {
      // Start counter animation when section comes into view
      const duration = 2000; // 2 seconds
      const steps = 30; // Number of steps to reach the final count
      const interval = duration / steps;
      
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep += 1;
        const progress = Math.min(currentStep / steps, 1);
        
        setCounts(targetCounts.map(target => Math.floor(target * progress)));
        
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [isInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#4e124d" opacity="0.07" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>

        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#4e124d]/5 to-[#e61c5c]/5"></div>
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-br from-[#38c7ef]/5 to-[#2bb87c]/5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#4e124d]/10 text-[#4e124d] text-sm font-medium mb-4">Our Specialties</span>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              <span className="relative z-10">Our Services</span>
              <motion.span 
                className="absolute -bottom-2 left-0 h-3 w-full bg-[#4e124d]/10 -z-10"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer specialized recruiting services tailored to your industry and specific needs
          </p>
        </motion.div>
        
        {/* Service Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-full text-3xl mb-6 mx-auto transition-all duration-300`} 
                style={{ 
                  backgroundColor: service.bgColor,
                  boxShadow: `0 0 0 0 ${service.color}40`,
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {service.icon}
                </motion.span>
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-3 group-hover:text-[#4e124d] transition-colors duration-300" style={{ color: service.color }}>
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
              
              <div className="mt-6 text-center">
                <motion.a 
                  href="#"
                  className="inline-flex items-center font-medium hover:underline transition-all duration-300"
                  style={{ color: service.color }}
                  whileHover={{ x: 3 }}
                >
                  Learn more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats Section */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-[#4e124d] to-[#e61c5c] p-1">
          <div className="bg-white rounded-xl py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                className="text-center p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-[#e61c5c]"
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {counts[0]}+
                </motion.div>
                <div className="text-gray-600 mt-2">Companies Served</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-[#38c7ef]"
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {counts[1]}%
                </motion.div>
                <div className="text-gray-600 mt-2">Client Satisfaction</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-[#2bb87c]"
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {counts[2]}+
                </motion.div>
                <div className="text-gray-600 mt-2">Monthly Candidates</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-[#ecb324]"
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {counts[3]}+
                </motion.div>
                <div className="text-gray-600 mt-2">Years Experience</div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Not sure which service is right for you? Let's discuss your specific needs.
          </p>
          <motion.a 
            href="#contact" 
            className="inline-block bg-[#4e124d] hover:bg-[#3d0e3d] text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-md group relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">Schedule a Consultation</span>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-0 bg-[#e61c5c] transition-all duration-300 group-hover:h-full -z-10"
              initial={{ height: "0%" }}
              whileHover={{ height: "100%" }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}