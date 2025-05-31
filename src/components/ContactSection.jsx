"use client";

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      company: form.company.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-white via-purple-50 to-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#481A54] mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Ready to find your perfect hire? We’re here to help.
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          ref={formRef}
          className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={formInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold text-[#481A54] mb-6">
            Let’s start a conversation
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                <Input id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <Input id="email" name="email" type="email" required />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
              <Input id="phone" name="phone" type="tel" />
            </div>

            <div>
              <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
              <Input id="company" name="company" />
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
              <Input id="subject" name="subject" required />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" name="message" rows={5} required />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className={`w-full py-3 px-6 rounded bg-[#481A54] text-white font-semibold transition-all ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#3d0e3d]"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
