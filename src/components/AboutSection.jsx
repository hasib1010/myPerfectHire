"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  // Refs for scroll animations
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  
  // Check if elements are in view
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const contentInView = useInView(contentRef, { once: true, amount: 0.3 });

  // Stats data
  const stats = [
    { number: "5%", label: "Access to Elite Talent", color: "bg-[#e61c5c]" },
    { number: "98%", label: "Client Satisfaction", color: "bg-[#38c7ef]" },
    { number: "5,000+", label: "Candidates Placed", color: "bg-[#2bb87c]" },
    { number: "15+", label: "Years Experience", color: "bg-[#ecb324]" }
  ];

  return (
    <section id="about" className="py-4 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#481A54] mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About MyPerfectHire.com
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            We're more than recruiters – we're your partners in building exceptional teams
          </motion.p>
        </div>

        {/* About Content */}
        <div 
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-20"
        >
          {/* Image */}
          <motion.div
            className="relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image 
              width={1000} 
              height={1000} 
              className="object-cover w-full h-full"
              src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg?t=st=1741136145~exp=1741139745~hmac=eb258883c18010e44f618d8f4b6d98d0325bbf7181cc65ceb595d80c5716cccf&w=1060"
              alt="Team working together"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#481A54]/60 to-transparent mix-blend-multiply"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-600">
              At MyPerfectHire.com, we believe that the right talent can transform an organization. Our mission is to connect exceptional professionals with companies where they can thrive and make a meaningful impact.
            </p>
            
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 pt-2">Our Approach</h3>
            <p className="text-sm sm:text-base text-gray-600">
              We take the time to understand both our clients' unique needs and our candidates' career aspirations. This personalized approach enables us to make connections that go beyond skills and experience to find the perfect cultural fit.
            </p>
            
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 pt-2">Our Expertise</h3>
            <p className="text-sm sm:text-base text-gray-600">
              With specialized recruiters across legal, technical, executive, and healthcare fields, we bring industry-specific knowledge to every search. Our team's expertise ensures we identify qualified candidates who possess both the technical abilities and soft skills required for success.
            </p>
          </motion.div>
        </div>

       
      </div>
    </section>
  );
}