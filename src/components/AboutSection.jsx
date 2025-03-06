"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  // Refs for scroll animations
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const teamRef = useRef(null);
  
  // Check if elements are in view
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const contentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });

  // Stats data
  const stats = [
    { number: " 5%", label: "Access to the top Elite Talent.", color: "bg-[#e61c5c]" },
    { number: "98%", label: "Client Satisfaction", color: "bg-[#38c7ef]" },
    { number: "5,000+", label: "Candidates Placed", color: "bg-[#2bb87c]" },
    { number: "15+", label: "Years Experience", color: "bg-[#ecb324]" }
  ];

  

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
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
            About MyPerfectHire.com
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're more than recruiters – we're your partners in building exceptional teams
          </motion.p>
        </div>

        {/* About Content */}
        <div 
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Image */}
          <motion.div
            className="relative max-h-[400px] rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <Image width={1000} height={1000} className='object-cover' src={"https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg?t=st=1741136145~exp=1741139745~hmac=eb258883c18010e44f618d8f4b6d98d0325bbf7181cc65ceb595d80c5716cccf&w=1060"}/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4e124d]/60 to-transparent mix-blend-multiply"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-gray-600">
              At MyPerfectHire.com, we believe that the right talent can transform an organization. Our mission is to connect exceptional professionals with companies where they can thrive and make a meaningful impact.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 pt-2">Our Approach</h3>
            <p className="text-gray-600">
              We take the time to understand both our clients' unique needs and our candidates' career aspirations. This personalized approach enables us to make connections that go beyond skills and experience to find the perfect cultural fit.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 pt-2">Our Expertise</h3>
            <p className="text-gray-600">
              With specialized recruiters across legal, technical, executive, and healthcare fields, we bring industry-specific knowledge to every search. Our team's expertise ensures we identify qualified candidates who possess both the technical abilities and soft skills required for success.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        {/* <div 
          ref={statsRef}
          className="mb-20"
        >
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={`w-16 h-1 ${stat.color} mx-auto mb-4 rounded`}></div>
                <h4 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h4>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div> */}

        
      </div>
    </section>
  );
}