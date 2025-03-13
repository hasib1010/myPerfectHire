"use client";

import { useState } from 'react';
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
        // Here you would typically send the data to your server
    };

    return (
        <section id='hero' className="pt-28 pb-20 lg:pt-36 lg:pb-32 bg-[#481A54] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8   ">
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
                                        className="bg-[#e61c5c] text-white   text-lg px-8 py-6 rounded-lg shadow-lg"
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
                                    className="bg-white rounded-lg p-6 shadow-xl w-full max-w-md lg:max-w-xl"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-[#481A54] font-semibold text-xl mb-4">
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

                                        <h4 className="text-[#481A54] font-semibold pt-2">Your Contact Information:</h4>

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
                                            className="w-full bg-[#481A54] hover:bg-[#3d0e3d] text-white mt-2"
                                        >
                                            Submit
                                        </Button>

                                        <p className="text-xs text-gray-500 pt-2">
                                            By clicking "Submit", you agree to our Terms of Service and Privacy Policy.
                                        </p>
                                    </div>
                                </motion.form>
                            )}


                        </motion.div>
                    </div>

                    {/* Right Content - Hero Image with Professional Profile */}
                    <div className="relative  h-fit">
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

                        <EnhancedProfileCard/>
                    </div>
                </div>
            </div>
        </section>
    );
}