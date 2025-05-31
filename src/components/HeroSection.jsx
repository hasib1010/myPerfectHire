"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import EnhancedProfileCard from './EnhancedProfileCard';

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: '',
    location: '',
    comments: '',
    fullName: '',
    phoneNumber: '',
    workEmail: '',
    companyName: '',
    title: ''
  });

  const handleStartClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  // Define 7 dot positions: 3 lines (2-3-2), using all 4 colors
  const heroDotPositions = [
    // Top line (10%-15%, 2 dots)
    { top: '15%', left: '20%', color: '#38c7ef', size: 40 },  // Cyan
    { top: '15%', right: '10%', color: '#e61c5c', size: 60 }, // Red

    // Middle line (40%-50%, 3 dots)
    { top: '45%', left: '8%', color: '#ecb324', size: 50 },    // Orange
    { top: '38%', left: '40%', color: '#38c7ef', size: 90 },  // Cyan
    { top: '45%', right: '10%', color: '#2bb87c', size: 100 },// Green

    // Bottom line (70%-80%, 2 dots)
    { top: '75%', left: '45%', color: '#e61c5c', size: 70 },  // Red
    { top: '95%', left: '25%', color: '#2bb87c', size: 45 }, // Orange
  ];

  return (
    <section
      id="hero"
      className="pt-28 pb-20 lg:pt-36 lg:pb-32 bg-[#481A54] relative min-h-[600px]"
    >
      {/* Parent div for dots with fixed height */}
      <div className="absolute inset-0 h-[600px] w-full">
        {heroDotPositions.map((dot, index) => (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              top: dot.top,
              left: dot.left || 'auto',
              right: dot.right || 'auto',
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              backgroundColor: dot.color,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* Content container with vertical scrolling */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          <div className="text-white max-w-2xl mx-auto lg:mx-0">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Need to Hire the <span className="text-[#ecb324]">Absolute Best?</span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              With Our Human Driven, AI Assisted Process, We Don’t Just Fill Positions, We Find Your Perfect Hire!
            </motion.p>
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {!showForm ? (
                <div className="space-y-4">
                  <Button
                    onClick={handleStartClick}
                    className="bg-[#2bb87d] hover:bg-[#ecb324] hover:text-black cursor-pointer text-white text-lg px-8 py-6 rounded-lg shadow-lg"
                  >
                    Find My Perfect Hire →
                  </Button>
                  <p className="text-sm opacity-80 pt-2">
                    Tell us what you're looking for and we'll connect you with top talent.
                  </p>
                </div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="rounded-lg bg-[#481a54] p-1 shadow-xl w-full max-w-md lg:max-w-xl relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative z-10 bg-[#3d0e3d] p-6 rounded-xl">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-4 text-center">
                      Tell us About Your Perfect Hire:
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="jobTitle" className="text-white">Job Title:</Label>
                        <Input id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required className="mt-1 w-full" />
                      </div>
                      <div>
                        <Label htmlFor="location" className="text-white">Location:</Label>
                        <Input id="location" name="location" value={formData.location} onChange={handleChange} required className="mt-1 w-full" />
                      </div>
                      <div>
                        <Label htmlFor="comments" className="text-white">Comments:</Label>
                        <Textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} rows={3} className="mt-1 w-full" />
                      </div>
                      <h4 className="text-white font-semibold pt-2">Your Contact Information:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName" className="text-white">Full Name:</Label>
                          <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 w-full" />
                        </div>
                        <div>
                          <Label htmlFor="phoneNumber" className="text-white">Phone Number:</Label>
                          <Input id="phoneNumber" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} required className="mt-1 w-full" />
                        </div>
                        <div>
                          <Label htmlFor="workEmail" className="text-white">Work Email:</Label>
                          <Input id="workEmail" name="workEmail" type="email" value={formData.workEmail} onChange={handleChange} required className="mt-1 w-full" />
                        </div>
                        <div>
                          <Label htmlFor="companyName" className="text-white">Company Name:</Label>
                          <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required className="mt-1 w-full" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="title" className="text-white">Your Title:</Label>
                        <Input id="title" name="title" value={formData.title} onChange={handleChange} required className="mt-1 w-full" />
                      </div>
                      <Button type="submit" className="w-full bg-[#481A54] cursor-pointer hover:bg-[#3d0e3d] text-white mt-2">Submit</Button>
                      <p className="text-xs text-white text-center pt-2">
                        By clicking "Submit", you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </div>
                  </div>
                </motion.form>
              )}
            </motion.div>
          </div>
          <div className="relative h-fit z-10">
            <EnhancedProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}