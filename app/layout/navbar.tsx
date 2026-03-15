"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/Button';
import { FiMenu, FiX } from 'react-icons/fi';
import { IconWrapper } from '../components/IconWrapper';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const pathname = usePathname();

    // Intersection Observer to track scroll position and update active section
    useEffect(() => {
        const sections = ['about', 'features', 'contact'];
        const sectionElements = sections
            .map(id => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px -80% 0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sectionElements.forEach(el => observer.observe(el));

        // Special case for top of page (Home)
        const handleScroll = () => {
            if (window.scrollY < 100) {
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '#about' },
        { name: 'Features', href: '#features' },
        { name: 'Contact', href: '#contact' },
    ];

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="w-full bg-white px-6 md:px-8 py-4 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" onClick={() => setActiveSection('')}>
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
                    {navLinks.map((link) => {
                        const isHome = link.href === '/';
                        const linkId = link.href.startsWith('#') ? link.href.slice(1) : '';
                        const isActive = isHome 
                            ? (activeSection === '' && pathname === '/')
                            : activeSection === linkId;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-semibold text-base transition-colors hover:underline underline-offset-8 decoration-2 ${isActive ? 'text-primary underline' : 'text-foreground hover:text-primary-hover'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
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
                    {isMobileMenuOpen ? (
                        <IconWrapper variant="simple">
                            <FiX size={28} />
                        </IconWrapper>
                    ) : (
                        <IconWrapper variant="simple">
                            <FiMenu size={28} />
                        </IconWrapper>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 w-full h-screen bg-white z-60 flex flex-col p-6 overflow-y-auto">
                    <div className="flex justify-between items-center mb-16">
                        {/* Logo inside overlay */}
                        <Link href="/" onClick={() => { setIsMobileMenuOpen(false); setActiveSection(''); }}>
                            <Image
                                src="/health-mate.png"
                                alt="HealthMate Logo"
                                width={160}
                                height={40}
                                className="h-8 md:h-10 w-auto"
                            />
                        </Link>

                        {/* Close button inside overlay */}
                        <button
                            className="text-foreground hover:text-primary transition-colors focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Close Navigation Menu"
                        >
                            <IconWrapper variant="simple">
                                <FiX size={28} />
                            </IconWrapper>
                        </button>
                    </div>

                    <nav className="flex flex-col items-center gap-8 font-semibold text-2xl">
                        {navLinks.map((link) => {
                            const isHome = link.href === '/';
                            const linkId = link.href.startsWith('#') ? link.href.slice(1) : '';
                            const isActive = isHome 
                                ? (activeSection === '' && pathname === '/')
                                : activeSection === linkId;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`tracking-tight transition-colors hover:underline underline-offset-8 decoration-4 ${isActive ? 'text-primary underline' : 'text-foreground hover:text-primary'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex flex-col items-center gap-4 mt-12 w-full">
                        <Button variant="solid" className="w-3/4 justify-center py-4 text-lg">Sign in</Button>
                        <Button variant="outline" className="w-3/4 justify-center py-4 text-lg">Sign up</Button>
                    </div>
                </div>
            )}
        </header>
    );
}
