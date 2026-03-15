"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/Button';
import { FiMenu, FiX } from 'react-icons/fi';
import { IconWrapper } from '../components/IconWrapper';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const [scrolled, setScrolled] = useState(false);
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

        // Detect scroll for background styling and top of page active state
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            if (window.scrollY < 100) {
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

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

    const navAnimation: Variants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                type: "spring" as const, 
                stiffness: 100, 
                damping: 20,
                duration: 0.8 
            }
        }
    };

    const linkAnimation: Variants = {
        hover: { scale: 1.05, y: -2, transition: { duration: 0.2 } },
        tap: { scale: 0.95 }
    };

    return (
        <motion.header 
            initial="hidden"
            animate="visible"
            variants={navAnimation}
            className={`w-full px-6 md:px-8 py-4 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-primary/5 py-3' : 'bg-transparent py-5'}`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <motion.div 
                    initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center"
                >
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
                </motion.div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, index) => {
                        const isHome = link.href === '/';
                        const linkId = link.href.startsWith('#') ? link.href.slice(1) : '';
                        const isActive = isHome 
                            ? (activeSection === '' && pathname === '/')
                            : activeSection === linkId;

                        return (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            >
                                <motion.div variants={linkAnimation} whileHover="hover" whileTap="tap">
                                    <Link
                                        href={link.href}
                                        className={`font-semibold text-base transition-colors relative group ${isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                                            }`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.span 
                                                layoutId="activeNavBg"
                                                className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        {!isActive && (
                                            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary/30 rounded-full transition-all duration-300 group-hover:w-full" />
                                        )}
                                    </Link>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </nav>

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button variant="solid" className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">Sign in</Button>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button variant="outline" className="border-2 hover:bg-primary/5 hover:text-primary transition-all">Sign up</Button>
                    </motion.div>
                </div>

                {/* Mobile Menu Toggle Button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
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
                </motion.button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%', transition: { duration: 0.3 } }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        className="md:hidden fixed inset-0 w-full h-screen bg-white/95 backdrop-blur-xl z-60 flex flex-col p-6 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-16">
                            {/* Logo inside overlay */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Link href="/" onClick={() => { setIsMobileMenuOpen(false); setActiveSection(''); }}>
                                    <Image
                                        src="/health-mate.png"
                                        alt="HealthMate Logo"
                                        width={160}
                                        height={40}
                                        className="h-8 md:h-10 w-auto"
                                    />
                                </Link>
                            </motion.div>

                            {/* Close button inside overlay */}
                            <motion.button
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-foreground hover:text-primary transition-colors focus:outline-none"
                                onClick={toggleMenu}
                                aria-label="Close Navigation Menu"
                            >
                                <IconWrapper variant="circle" className="bg-primary/5 text-primary">
                                    <FiX size={28} />
                                </IconWrapper>
                            </motion.button>
                        </div>

                        <nav className="flex flex-col items-center gap-8 font-semibold text-2xl">
                            {navLinks.map((link, index) => {
                                const isHome = link.href === '/';
                                const linkId = link.href.startsWith('#') ? link.href.slice(1) : '';
                                const isActive = isHome 
                                    ? (activeSection === '' && pathname === '/')
                                    : activeSection === linkId;

                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + (index * 0.1), ease: "easeOut" }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`tracking-tight transition-colors hover:text-primary block py-2 ${isActive ? 'text-primary relative' : 'text-foreground'
                                                }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                            {isActive && (
                                                <motion.span 
                                                    layoutId="activeMobileNav"
                                                    className="absolute -bottom-1 left-0 right-0 h-1 bg-primary rounded-full mx-auto w-1/2"
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col items-center gap-4 mt-auto mb-10 w-full"
                        >
                            <Button variant="solid" className="w-full justify-center py-4 text-lg shadow-xl shadow-primary/20">Sign in</Button>
                            <Button variant="outline" className="w-full justify-center py-4 text-lg border-2">Sign up</Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
