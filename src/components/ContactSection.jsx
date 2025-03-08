"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
  // Refs for scroll animations
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  // Check if elements are in view
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });
  const infoInView = useInView(infoRef, { once: true, amount: 0.2 });

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className=" py-4 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#481A54] mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Ready to find your perfect hire? Get in touch with our team today.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto ">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            className="bg-white rounded-lg shadow-xl border border-gray-100 p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-[#481A54] mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#481A54] hover:bg-[#3d0e3d] text-white font-medium py-2 sm:py-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
}