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
    // { base: "#481A54", bg: "bg-[#481A54]/10", text: "text-[#481A54]", border: "border-[#481A54]/30" }
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
      title: "Initial Kickoff Meeting",
      description: `The Kickoff meeting is an opportunity for us to learn what your exact perfect hire would look like.
We will discuss:
        -The full role profile and job spec, including all criteria, desired functional and behavioral
competencies.
- The salary and compensation package, along with our analysis and recommendations for
crafting a competitive offer in your market.
- Company culture considerations.
- Geographical considerations.
- The Marketing Strategy for the position that will be used to market the position to candidates`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e61c5c" strokeWidth="1.6875" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
      )
    },
    {
      number: "02",
      title: "The Search",
      description: `We cast a net over the entire talent pool for the position in your geographical area.
We then identify every single candidate in that location that appears to be a match to your
specific criteria.
We will then systematically approach each candidate using a variety of methods.
We will share weekly updates on the search.
`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38c7ef" strokeWidth="1.6875" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
      )
    },
    {
      number: "03",
      title: "Interview Process",
      description: `Ultimately a long list of candidates will emerge that are qualified, interested and assessed
against the initial kickoff meeting criteria for functional and behavioral competencies.
From this larger list, we will narrow it down to the best 3-5 candidates to submit to you for
interviews.
`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2bb87c" strokeWidth="1.6875" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
      )
    },

    {
      number: "05",
      title: "Successful Placement",
      description: "We help finalize the hiring process, including offer negotiation, and provide ongoing support to ensure your new hire is a perfect long-term fit. At the end of this process, you will be absolutely confident that you’re making your hire from the very best talent available in the market at this time",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ecb324" strokeWidth="1.6875" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop-minimal-check"><path d="M2 20h20" /><path d="m9 10 2 2 4-4" /><rect x="3" y="4" width="18" height="12" rx="2" /></svg>
      )
    }
  ];

  // Background particles data (increased size and opacity for better visibility)
  const particles = [
    { color: "bg-[#e61c5c]/20", size: "w-64 h-64", top: "top-10", left: "left-[5%]", animDuration: 25 },
    { color: "bg-[#38c7ef]/20", size: "w-72 h-72", top: "top-1/4", right: "right-[10%]", animDuration: 30 },
    { color: "bg-[#2bb87c]/20", size: "w-56 h-56", top: "top-1/2", left: "left-[15%]", animDuration: 20 },
    { color: "bg-[#ecb324]/20", size: "w-80 h-80", bottom: "bottom-[20%]", right: "right-[5%]", animDuration: 28 },
    { color: "bg-[#481A54]/20", size: "w-60 h-60", bottom: "bottom-10", left: "left-[20%]", animDuration: 22 }
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
    <section id="how-it-works" className="  bg-gray-50 relative overflow-hidden">


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={titleRef}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-[#481A54] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Our Unique Process
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl font-semibold mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Quality over Quantity
          </motion.p>
        </div>

        <div
          ref={processRef}
          className="max-w-5xl mx-auto"
        >
          {/* Process Steps */}
          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute hidden lg:block md:block  left-8 top-0 bottom-0 w-px bg-gray-200 md:left-1/2 md:-ml-px"></div>

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
                  className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-16 md:pr-0' : 'md:mr-auto md:pr-16 md:pl-0'} md:w-1/2 lg:pl-16`}
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
                    whilehover={{
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
            className="text-center my-12"
          >
            <motion.a
              href="#hero"
              className="inline-block px-8 py-3 bg-[#481A54] text-white font-medium rounded-lg hover:bg-[#3d0e3d] hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              whilehover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            >
              Find Your Perfect Hire Now
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}