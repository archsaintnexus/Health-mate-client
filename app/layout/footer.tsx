"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion, Variants } from 'framer-motion';

export function Footer() {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Features', href: '#features' },
        { name: 'Doctors', href: '#doctors' },
        { name: 'Contact', href: '#contact' },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
    };

    return (
        <footer className="bg-primary text-white pt-16 pb-8 px-6 md:px-16 w-full lg:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-20 items-start"
                >

                    {/* Brand Info Column */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-6">
                        <div className="flex items-center">
                            <Image
                                src="/health-mate.png"
                                alt="HealthMate Logo"
                                width={160}
                                height={40}
                                className="h-8 md:h-10 w-auto brightness-0 invert"
                            />
                        </div>
                        <p className="text-base leading-relaxed text-white/90 max-w-sm">
                            Seamlessly connect patients with certified healthcare professionals through secure consultations, protected health records, and reliable, compassionate care.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <motion.a whileHover={{ scale: 1.2, rotate: -10 }} whileTap={{ scale: 0.9 }} href="#" className="hover:text-white/80 transition-colors" aria-label="X (formerly Twitter)">
                                <FaXTwitter className="text-2xl" />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }} href="#" className="hover:text-white/80 transition-colors" aria-label="LinkedIn">
                                <FaLinkedinIn className="text-2xl" />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }} href="#" className="hover:text-white/80 transition-colors" aria-label="Instagram">
                                <FaInstagram className="text-2xl" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Quick Links Column */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-4">
                        <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
                        <ul className="flex flex-col gap-2">
                            {quickLinks.map((link) => (
                                <motion.li key={link.name} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                                    <Link
                                        href={link.href}
                                        className="text-base text-white/90 hover:text-white transition-all relative group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Open Hours Column */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-4 text-left">
                        <h3 className="text-2xl font-semibold mb-2">Open Hours</h3>
                        <p className="text-base text-white/90 leading-relaxed">
                            Open 24/7 - Virtual Care Anytime, Anywhere
                        </p>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center text-sm"
                >
                    <p>&copy;Copyright HealthMate 2026</p>
                </motion.div>
            </div>
        </footer>
    );
}
