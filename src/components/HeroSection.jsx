"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

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
        // Here you would typically send the data to your server
    };

    return (
        <section id='hero' className="pt-28 pb-20 lg:pt-36 lg:pb-32 bg-[#4e124d] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
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
                            We Don't Just Fill Positions, We Find Your Perfect Hire!
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
                                        className="bg-white text-[#4e124d] hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg"
                                    >
                                        Find Your Perfect Hire →
                                    </Button>

                                    <p className="text-sm opacity-80 pt-2">
                                        Tell us what you're looking for and we'll connect you with top talent.
                                    </p>
                                </div>
                            ) : (
                                <motion.form
                                    onSubmit={handleSubmit}
                                    className="bg-white rounded-lg p-6 shadow-xl w-full max-w-md lg:max-w-xl"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-[#4e124d] font-semibold text-xl mb-4">
                                        Tell us About Your Perfect Hire:
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <Label htmlFor="jobTitle" className="text-gray-700">Job Title:</Label>
                                            <Input
                                                id="jobTitle"
                                                name="jobTitle"
                                                value={formData.jobTitle}
                                                onChange={handleChange}
                                                required
                                                className="mt-1 w-full"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="location" className="text-gray-700">Location:</Label>
                                            <Input
                                                id="location"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                required
                                                className="mt-1 w-full"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="comments" className="text-gray-700">Comments:</Label>
                                            <Textarea
                                                id="comments"
                                                name="comments"
                                                value={formData.comments}
                                                onChange={handleChange}
                                                rows={3}
                                                className="mt-1 w-full"
                                            />
                                        </div>

                                        <h4 className="text-[#4e124d] font-semibold pt-2">Your Contact Information:</h4>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="fullName" className="text-gray-700">Full Name:</Label>
                                                <Input
                                                    id="fullName"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 w-full"
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="phoneNumber" className="text-gray-700">Phone Number:</Label>
                                                <Input
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    type="tel"
                                                    value={formData.phoneNumber}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 w-full"
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="workEmail" className="text-gray-700">Work Email:</Label>
                                                <Input
                                                    id="workEmail"
                                                    name="workEmail"
                                                    type="email"
                                                    value={formData.workEmail}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 w-full"
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="companyName" className="text-gray-700">Company Name:</Label>
                                                <Input
                                                    id="companyName"
                                                    name="companyName"
                                                    value={formData.companyName}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 w-full"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="title" className="text-gray-700">Your Title:</Label>
                                            <Input
                                                id="title"
                                                name="title"
                                                value={formData.title}
                                                onChange={handleChange}
                                                required
                                                className="mt-1 w-full"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-[#4e124d] hover:bg-[#3d0e3d] text-white mt-2"
                                        >
                                            Submit
                                        </Button>

                                        <p className="text-xs text-gray-500 pt-2">
                                            By clicking "Submit", you agree to our Terms of Service and Privacy Policy.
                                        </p>
                                    </div>
                                </motion.form>
                            )}

                            <div className="flex items-center space-x-6 pt-4">
                                <div className="flex -space-x-3">
                                    {/* Law Firm Logo */}
                                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#4e124d] text-xs font-bold border-2 border-white">
                                        LLP
                                    </div>

                                    {/* Tech Company Logo */}
                                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center border-2 border-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#38c7ef]">
                                            <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                    {/* Finance Company Logo */}
                                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#e61c5c] text-xs font-bold border-2 border-white">
                                        FC
                                    </div>

                                    {/* Healthcare Logo */}
                                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center border-2 border-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#2bb87c]">
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                        </svg>
                                    </div>

                                    {/* Manufacturing Logo */}
                                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center border-2 border-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#ecb324]">
                                            <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                                            <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-sm text-white opacity-80">
                                    Trusted by over 500 companies across industries
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Abstract Graphics */}
                    <div className="relative hidden lg:block">
                        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                {/* Large circle */}
                                <motion.div
                                    className="absolute top-0 -left-10 w-64 h-64 rounded-full bg-[#e61c5c] bg-opacity-20 filter blur-md"
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        rotate: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                ></motion.div>

                                {/* Medium circle */}
                                <motion.div
                                    className="absolute top-20 left-20 w-48 h-48 rounded-full bg-[#38c7ef] bg-opacity-20 filter blur-md"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: [0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 7,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }}
                                ></motion.div>

                                {/* Small circle */}
                                <motion.div
                                    className="absolute top-40 -left-4 w-32 h-32 rounded-full bg-[#ecb324] bg-opacity-20 filter blur-md"
                                    animate={{
                                        scale: [1, 1.15, 1],
                                        rotate: [0, 10, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                ></motion.div>

                                {/* Abstract shape */}
                                <motion.div
                                    className="absolute top-10 left-40 w-20 h-20 rounded-md bg-[#2bb87c] bg-opacity-20 filter blur-sm rotate-45"
                                    animate={{
                                        rotate: [45, 90, 45],
                                        x: [0, 20, 0],
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                ></motion.div>
                            </motion.div>
                        </div>

                        {/* Candidate Matching Visualization */}
                        <motion.div
                            className="relative z-10 bg-blue-800/10 backdrop-blur-3xl  rounded-xl p-6 shadow-xl border border-white/20"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <div className="p-4 bg-white/10 rounded-lg mb-4 border border-white/20">
                                <h4 className="text-white font-medium mb-2">Perfect Match™ Technology</h4>
                                <div className="flex items-center justify-between">
                                    <div className="text-xs text-white/70">Match Score</div>
                                    <div className="text-xs text-white/70">Expertise</div>
                                </div>
                            </div>

                            {/* Candidate Cards */}
                            <div className="space-y-4">
                                {/* Top Candidate */}
                                <div className="p-4 bg-white/10 rounded-lg border border-[#ecb324]/40 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-[#ecb324] text-white text-xs px-2 py-1 rounded-bl-md">
                                        98% Match
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-[#e61c5c]/30 flex items-center justify-center text-white font-medium">JD</div>
                                        <div className="ml-3">
                                            <div className="text-white font-medium">Janet Davis</div>
                                            <div className="text-white/70 text-sm">Senior Legal Counsel</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 grid grid-cols-3 gap-2">
                                        <div className="bg-white/10 rounded px-2 py-1 text-xs text-white/90">IP Law</div>
                                        <div className="bg-white/10 rounded px-2 py-1 text-xs text-white/90">Negotiations</div>
                                        <div className="bg-white/10 rounded px-2 py-1 text-xs text-white/90">Corporate</div>
                                    </div>
                                </div>

                                {/* Second Candidate */}
                                <div className="p-4 bg-white/10 rounded-lg border border-white/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-[#38c7ef] text-white text-xs px-2 py-1 rounded-bl-md">
                                        94% Match
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-[#38c7ef]/30 flex items-center justify-center text-white font-medium">MR</div>
                                        <div className="ml-3">
                                            <div className="text-white font-medium">Michael Rodriguez</div>
                                            <div className="text-white/70 text-sm">Contract Attorney</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 grid grid-cols-3 gap-2">
                                        <div className="bg-white/10 rounded px-2 py-1 text-xs text-white/90">Contracts</div>
                                        <div className="bg-white/10 rounded px-2 py-1 text-xs text-white/90">Compliance</div>
                                        <div className="bg-white/10 rounded px-2 py-1 text-xs text-white/90">Finance</div>
                                    </div>
                                </div>

                                {/* Metrics at bottom */}
                                <div className="grid grid-cols-3 gap-3 pt-2">
                                    <div className="bg-white/10 rounded-lg p-2 text-center">
                                        <div className="text-[#ecb324] text-xl font-bold">42</div>
                                        <div className="text-white/70 text-xs">Candidates</div>
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-2 text-center">
                                        <div className="text-[#e61c5c] text-xl font-bold">24h</div>
                                        <div className="text-white/70 text-xs">Avg. Time</div>
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-2 text-center">
                                        <div className="text-[#2bb87c] text-xl font-bold">98%</div>
                                        <div className="text-white/70 text-xs">Success</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}