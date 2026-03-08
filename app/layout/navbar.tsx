"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/Button';
import { FiMenu, FiX } from 'react-icons/fi';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Features', href: '/features' },
        { name: 'Contact', href: '/contact' },
    ];

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="w-full bg-white border-b border-foreground/10 px-6 md:px-8 py-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/health-mate.png"
                            alt="HealthMate Logo"
                            width={160}
                            height={40}
                            className="h-8 md:h-10 w-auto"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-foreground font-semibold text-sm hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="solid">Sign in</Button>
                    <Button variant="outline">Sign up</Button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden text-foreground hover:text-primary transition-colors focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle Navigation Menu"
                >
                    {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-foreground/10 flex flex-col px-6 py-6 shadow-md z-40">
                    <nav className="flex flex-col gap-6 font-semibold">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex flex-col gap-4 mt-8">
                        <Button variant="solid" className="w-full justify-center">Sign in</Button>
                        <Button variant="outline" className="w-full justify-center">Sign up</Button>
                    </div>
                </div>
            )}
        </header>
    );
}
