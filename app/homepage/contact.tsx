'use client';

import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IoCall } from "react-icons/io5";
import Link from 'next/link';
import { Button } from '../components/Button';
import { IconWrapper } from '../components/IconWrapper';

export default function Contact() {
    return (
        <section id="contact" className='mb-10'>
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-32 items-start">
                    {/* Left side: Contact Info */}
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12">Contact</h2>

                        <div className="space-y-3">
                            <div className="flex items-center gap-6 group">
                                <IconWrapper variant="circle">
                                    <IoCall className="w-6 h-6" />
                                </IconWrapper>
                                <Link
                                    href="tel:+2347062340597"
                                    className="text-lg lg:text-xl font-medium text-foreground/80 hover:text-primary hover:underline transition-colors"
                                >
                                    +234 706 234 0597
                                </Link>
                            </div>

                            <Link
                                href="mailto:Contact@healthmate.com"
                                className="flex items-center gap-6 group hover:text-primary transition-colors"
                            >
                                <IconWrapper variant="circle">
                                    <FaEnvelope className="w-6 h-6" />
                                </IconWrapper>
                                <span className="text-lg lg:text-xl font-medium text-foreground/80 hover:text-primary hover:underline transition-colors">
                                    Contact@healthmate.com
                                </span >
                            </Link>

                            <div className="flex items-center gap-6 group text-left">
                                <IconWrapper variant="circle" className="shrink-0">
                                    <FaMapMarkerAlt className="w-6 h-6" />
                                </IconWrapper>
                                <span className="text-lg lg:text-xl font-medium text-foreground/80 leading-snug">
                                    123 Health St, Medical City <br /> Ikeja, Lagos
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Contact Form */}
                    <div className="flex-1 w-full max-w-2xl bg-accent px-6 md:px-8 py-8 md:py-10 rounded-2xl">
                        <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-8">Get in Touch with Us</h3>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 rounded-xl bg-white border border-transparent focus:border-primary/30 outline-none transition-all placeholder:text-foreground/80 font-medium"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-6 py-4 rounded-xl bg-white border border-transparent focus:border-primary/30 outline-none transition-all placeholder:text-foreground/80 font-medium"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full px-6 py-4 rounded-xl bg-white border border-transparent focus:border-primary/30 outline-none transition-all placeholder:text-foreground/80 font-medium resize-none"
                                />
                            </div>
                            <Button className="w-full py-3 text-lg font-bold">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
