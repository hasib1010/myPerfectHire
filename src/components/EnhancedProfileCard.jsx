import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EnhancedProfileCard = () => {
    // Primary brand colors
    const primaryColor = "#38c7ef"; // Cyan blue
    const accentColor = "#e61c5c";  // Red
    const textColor = "#ffffff";    // White
    const starColor = "#ff0000";    // Red for stars

    // Add state for hover and screen size
    const [hovered, setHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    // Check screen size on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initial check
        checkMobile();
        
        // Add event listener
        window.addEventListener('resize', checkMobile);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <motion.div
            className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ backdropFilter: "blur(50px)" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {isMobile ? (
                // Mobile layout - reordered with text first, then skills, then image
                <>
                    {/* Text Content for Mobile */}
                    <div className="w-full   py-4 flex flex-col    backdrop-blur-sm">
                        {/* Profile Info */}
                        <div className=" mx-auto bg-gray-500/50 w-fit backdrop-blur-3xl text-white p-4 rounded-xl flex flex-col items-center">
                            <div className="text-lg font-semibold">Victoria H</div>
                            <div className="text-sm">Commercial Litigation Attorney</div>
                            <div className="flex flex-col text-xs mt-1 text-center">
                                <span>10+ Years Experience</span>
                                <span>J.D Harvard Law School</span>
                            </div>
                        </div>
                        {/* Image at Bottom for Mobile */}
                    <div className="relative w-full h-64 flex items-center justify-center">
                        <Image
                            src="/hero2.png"
                            alt="Victoria H, Commercial Litigation Attorney"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                            className="transition-opacity duration-500"
                            priority
                        />
                    </div>
                        {/* Recruiter Assessment */}
                        <div className="w-full bg-white text-black px-4 rounded-xl flex flex-col items-center">
                            <div className="text-lg font-semibold">MyPerfectHire.com</div>
                            <div className="text-sm">Recruiter Assessment</div>
                            
                            {/* Rating Stars */}
                            <div className="flex gap-1 my-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="#e61c5c"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Skills for Mobile - flex wrap */}
                    <div className="w-full px-4 py-3 flex flex-wrap gap-2 justify-center bg-gray-100/80">
                        <div className="bg-white border border-gray-200 text-black px-3 py-1 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-xs font-medium">Litigation Strategy</span>
                        </div>
                        
                        <div className="bg-white border border-gray-200 text-black px-3 py-1 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-xs font-medium">Trial Advocacy</span>
                        </div>
                        
                        <div className="bg-white border border-gray-200 text-black px-3 py-1 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-xs font-medium">Legal Research</span>
                        </div>
                        
                        <div className="bg-white border border-gray-200 text-black px-3 py-1 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-xs font-medium">Document Drafting</span>
                        </div>
                    </div>
                    
                    
                </>
            ) : (
                // Desktop layout - original design
                <>
                    {/* Full-Height Image Section */}
                    <div className="relative w-full h-96 flex items-center justify-center">
                        <Image
                            src="/hero2.png"
                            alt="Victoria H, Commercial Litigation Attorney"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                            className="transition-opacity duration-500"
                            priority
                        />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute top-10 w-full p-6 text-white flex flex-col gap-2">
                        {/* Professional Info */}
                        <motion.div>
                            <div className='flex justify-between relative'>
                                <div className='mt-14 text-white px-24 py-3 pl-7 -z-10 rounded-2xl top-10 flex flex-col items-center'>
                                    <div className="text-xl font-semibold">Victoria H</div>
                                    <div className="text-sm">Commercial Litigation Attorney</div>
                                    <div className="flex flex-col text-sm mt-1">
                                        <span>10+ Years Experience</span>
                                        <span>J.D Harvard Law School</span>
                                    </div>
                                </div>
                                <div className='h-fit mt-14 mr-10 px-5 py-0.5 pl-[19%] -z-10 rounded-r-2xl flex flex-col items-center'>
                                    <div className="text-xl font-semibold">MyPerfectHire.com</div>
                                    <div className="text-base">Recruiter Assessment</div>

                                    {/* Rating with Red Stars */}
                                    <motion.div
                                        className="flex gap-1"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        {[1, 2, 3, 4, 5].map((star, index) => (
                                            <motion.svg
                                                key={star}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="#e61c5c"
                                                initial={{ scale: 0.8 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                                                style={{ color: starColor }}
                                                whileHover={{ scale: 1.2 }}
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </motion.svg>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                    {/* Skills section at bottom right for desktop */}
                    <div className='flex flex-col gap-1.5 absolute bottom-0 right-0 items-center p-1.5 z-20'>
                        <div className="bg-white border w-fit border-gray-200 text-black px-4 py-1 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-sm font-medium">Litigation Strategy</span>
                        </div>

                        <div className="bg-white border w-fit border-gray-200 text-black px-4 py-1 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-sm font-medium">Trial Advocacy</span>
                        </div>

                        <div className='flex'>
                            <div className="bg-white border border-gray-200 text-black px-4 py-1 rounded-full flex items-center justify-center shadow-md">
                                <span className="text-sm font-medium">Legal Research</span>
                            </div>

                            <div className="bg-white border border-gray-200 text-black px-4 py-1 rounded-full flex items-center justify-center shadow-md">
                                <span className="text-sm font-medium">Document Drafting</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default EnhancedProfileCard