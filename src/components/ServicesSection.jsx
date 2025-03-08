"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function EnhancedServicesSection() {
  const services = [
    {
      title: "Legal Recruiting",
      description: "We help our law firm partners hire the very best legal talent available through our rigorous process.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e61c5c" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /></svg>,
      color: "#e61c5c",
      bgColor: "#e61c5c10",
      delay: 0.05
    },
    {
      title: "Executive Search",
      description: "The right executive hire can transform your business. We ensure you get the best person for the job.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38c7ef" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12h.01" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M22 13a18.15 18.15 0 0 1-20 0" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>,
      color: "#38c7ef",
      bgColor: "#38c7ef10",
      delay: 0.1
    },
    {
      title: "Accounting & Finance",
      description: "We identify top-tier professionals to support your business objectives in accounting and finance.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2bb87c" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" /><line x1="8" x2="16" y1="6" y2="6" /><line x1="16" x2="16" y1="14" y2="18" /><path d="M16 10h.01" /><path d="M12 10h.01" /><path d="M8 10h.01" /><path d="M12 14h.01" /><path d="M8 14h.01" /><path d="M12 18h.01" /><path d="M8 18h.01" /></svg>,
      color: "#2bb87c",
      bgColor: "#2bb87c10",
      delay: 0.15
    },
    {
      title: "Supply Chain",
      description: "We pinpoint top talent with proven expertise in supply chain and logistics to keep your business ahead.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ecb324" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></svg>,
      color: "#ecb324",
      bgColor: "#ecb32410",
      delay: 0.2
    }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targetCounts = [5, 50, 98, 90];

  useEffect(() => {
    if (isInView) {
      const duration = 1000; // Reduced from 2000ms to 1000ms
      const steps = 20; // Reduced steps for faster completion
      const interval = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep += 1;
        const progress = Math.min(currentStep / steps, 1);
        setCounts(targetCounts.map(target => Math.floor(target * progress)));
        if (currentStep >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } } // Reduced stagger
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#481A54" opacity="0.07" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }} // Reduced from 0.5
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#481A54]/10 text-[#481A54] text-sm font-medium mb-4">Our Specialties</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              <span className="relative z-10">Our Services</span>
              <motion.span
                className="absolute -bottom-2 left-0 h-3 w-full bg-[#481A54]/10 -z-10"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.5 }} // Reduced from 0.8
              />
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized recruiting services tailored to your needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl border border-gray-100 group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: service.delay }} // Reduced duration from 0.5
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.15 } }} // Faster hover
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-full mb-4 mx-auto"
                style={{ backgroundColor: service.bgColor }}
              >
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }} // Reduced from 2s
                >
                  {service.icon}
                </motion.span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-2 group-hover:text-[#481A54]" style={{ color: service.color }}>
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 sm:mt-16 rounded-2xl bg-gradient-to-r from-[#481A54] to-[#e61c5c] p-1">
          <div className="bg-white rounded-xl py-8 px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <motion.div
                className="text-center p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >

                <div className="text-gray-600 mt-2">Access to the top <span>
                  <motion.div
                    className="text-4xl font-bold text-[#e61c5c]"
                    animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {counts[0]}%
                  </motion.div>
                </span> of Elite Talent.                </div>
              </motion.div>

              <motion.div
                className="text-center p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >

                <div className="text-gray-600 mt-2">Experience <span>
                  <motion.div
                    className="text-4xl font-bold text-[#38c7ef]"
                    animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {counts[1]}%
                  </motion.div>
                </span> Reduction in Time to Hire</div>
              </motion.div>

              <motion.div
                className="text-center p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >

                <div className="text-gray-600 mt-2">Overall <span>
                  <motion.div
                    className="text-4xl font-bold text-[#2bb87c]"
                    animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    {counts[2]}%
                  </motion.div>
                </span> Successful Placement Rate
                </div>
              </motion.div>

              <motion.div
                className="text-center p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >

                <div className="text-gray-600 mt-2">
                  All Candidates Come With a
                  <span>
                    <motion.div
                      className="text-4xl font-bold text-[#ecb324]"
                      animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      {counts[3]} Day
                    </motion.div>
                  </span>  Replacement Guarantee</div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3 }} // Reduced delay from 0.6
        >
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Not sure which service fits? Let's talk.
          </p>
          <motion.a
            href="#contact"
            className="inline-block bg-[#481A54] hover:bg-[#3d0e3d] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium shadow-md group relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">Schedule a Consultation</span>
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0 bg-[#e61c5c]"
              initial={{ height: "0%" }}
              whileHover={{ height: "100%" }}
              transition={{ duration: 0.2 }} // Reduced from 0.3
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}