import React from 'react';
import Link from 'next/link';
import { FaHeartbeat, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export function Footer() {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Features', href: '/features' },
        { name: 'Doctors', href: '/doctors' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <footer className="bg-primary text-white pt-16 pb-8 px-6 md:px-12 w-full">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">

                    {/* Brand Info Column */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <FaHeartbeat className="text-3xl" />
                            <span className="text-2xl font-bold tracking-tight">HealthMate</span>
                        </div>
                        <p className="text-sm leading-relaxed text-white/90 max-w-sm">
                            Seamlessly connect patients with certified healthcare professionals through secure consultations, protected health records, and reliable, compassionate care.
                        </p>
                        <div className="flex items-center gap-6 mt-2">
                            <a href="#" className="hover:text-white/80 transition-colors" aria-label="Twitter">
                                <FaTwitter className="text-xl" />
                            </a>
                            <a href="#" className="hover:text-white/80 transition-colors" aria-label="LinkedIn">
                                <FaLinkedinIn className="text-xl" />
                            </a>
                            <a href="#" className="hover:text-white/80 transition-colors" aria-label="Instagram">
                                <FaInstagram className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                        <ul className="flex flex-col gap-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/90 hover:underline hover:text-white transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Open Hours Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-semibold mb-2">Open Hours</h3>
                        <p className="text-sm text-white/90 leading-relaxed">
                            Open 24/7 - Virtual Care Anytime, Anywhere
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 text-center text-sm text-white/90">
                    <p>&copy;Copyright HealthMate 2026</p>
                </div>
            </div>
        </footer>
    );
}
