import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export function Footer() {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Features', href: '#features' },
        { name: 'Doctors', href: '#doctors' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="bg-primary text-white pt-16 pb-8 px-6 md:px-16 w-full lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-20 items-start">

                    {/* Brand Info Column */}
                    <div className="flex flex-col gap-6">
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
                            <a href="#" className="hover:text-white/80 transition-colors" aria-label="X (formerly Twitter)">
                                <FaXTwitter className="text-2xl" />
                            </a>
                            <a href="#" className="hover:text-white/80 transition-colors" aria-label="LinkedIn">
                                <FaLinkedinIn className="text-2xl" />
                            </a>
                            <a href="#" className="hover:text-white/80 transition-colors" aria-label="Instagram">
                                <FaInstagram className="text-2xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
                        <ul className="flex flex-col gap-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-base text-white/90 hover:underline hover:text-white transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Open Hours Column */}
                    <div className="flex flex-col gap-4 text-left">
                        <h3 className="text-2xl font-semibold mb-2">Open Hours</h3>
                        <p className="text-base text-white/90 leading-relaxed">
                            Open 24/7 - Virtual Care Anytime, Anywhere
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 text-center text-sm text-white/90">
                    <p>&copy;Copyright HealthMate 2026</p>
                </div>
            </div>
        </footer>
    );
}
