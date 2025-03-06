import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EnhancedProfileCard = () => {
    const [hovered, setHovered] = useState(false);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimated(true), 300);
    }, []);

    // Primary brand colors
    const primaryColor = "#38c7ef"; // Cyan blue
    const accentColor = "#e61c5c";  // Red
    const textColor = "#ffffff";    // White
    const starColor = "#ff0000";    // Red for stars

    return (
        <motion.div
            className="relative z-10 w-full h-[80vh] bg-gray-100/10 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ backdropFilter: "blur(10px)" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Full-Height Image Section */}
            <div className="relative w-full h-full">
                <Image
                    src="/hero.png"
                    alt="Victoria H, Commercial Litigation Attorney"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ opacity: hovered ? 0.9 : 1 }}
                    priority
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>

                {/* Unique Floating Tags at the Top */}
                <motion.div
                    className="absolute top-6 left-6 z-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                >
                    <div
                        className="bg-gradient-to-br from-[#38c7ef] to-[#00b7ff] text-white px-4 py-1 rounded-tr-3xl rounded-bl-3xl text-xs font-semibold shadow-lg"
                        style={{ transform: "rotate(-5deg)", boxShadow: "0 0 15px rgba(56, 199, 239, 0.5)" }}
                    >
                        Top Performer
                    </div>
                </motion.div>
                <motion.div
                    className="absolute top-6 right-6 z-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                >
                    <div
                        className="bg-gradient-to-br from-[#e61c5c] to-[#ff6f91] text-white px-4 py-1 rounded-tl-3xl rounded-br-3xl text-xs font-semibold shadow-lg"
                        style={{ transform: "rotate(5deg)", boxShadow: "0 0 15px rgba(230, 28, 92, 0.5)" }}
                    >
                        Ivy League
                    </div>
                </motion.div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 w-full p-6 text-white flex flex-col gap-2">
                {/* Website Name */}
                <motion.div
                    className="text-sm text-gray-300"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    MyPerfectHire.com
                </motion.div>

                {/* Professional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="text-xl font-semibold" style={{ color: primaryColor }}>Victoria H</div>
                    <div className="text-lg">Commercial Litigation Attorney</div>
                    <div className="flex justify-between text-sm mt-1">
                        <span style={{ color: accentColor }}>10+ Years Experience</span>
                        <span>J.D Harvard Law School, 2010</span>
                    </div>
                    <div className="text-sm text-gray-300">Location: NYC, NY</div>
                    <div className="text-sm text-gray-300">Avg Tenure Prior Roles: 7 years</div>
                </motion.div>

                {/* Rating with Red Stars */}
                <motion.div
                    className="flex gap-1 my-2"
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
                            fill="currentColor"
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

                {/* Award Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <span
                        className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gray-800/70 text-gray-300"
                        style={{
                            transition: "all 0.3s",
                            ...(hovered && { borderColor: primaryColor, color: primaryColor }),
                        }}
                    >
                        Top 100 Attorneys
                    </span>
                </motion.div>

                {/* CTA Button */}
                <a href="#contact">
                    <motion.button
                        className="w-full py-2.5 px-4 rounded-lg font-semibold text-white mt-2"
                        style={{ background: primaryColor }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        whileHover={{
                            background: accentColor,
                            boxShadow: "0 0 15px rgba(230, 28, 92, 0.3)",
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Contact Victoria
                    </motion.button>
                </a>
            </div>
        </motion.div>
    );
};

export default EnhancedProfileCard;