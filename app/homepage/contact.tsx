'use client';

import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IoCall } from "react-icons/io5";
import Link from 'next/link';
import { Button } from '../components/Button';
import { IconWrapper } from '../components/IconWrapper';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className='mb-10'>
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-32 items-start">
                    {/* Left side: Contact Info */}
                    <motion.div
                        initial={{ x: -60, opacity: 0, filter: "blur(15px)" }}
                        whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12">Contact</h2>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
                                }
                            }}
                            className="space-y-6"
                        >
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -30, filter: "blur(8px)" },
                                    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                className="flex items-center gap-6 group"
                            >
                                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="shrink-0">
                                    <IconWrapper variant="circle" className="bg-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <IoCall className="w-6 h-6" />
                                    </IconWrapper>
                                </motion.div>
                                <Link
                                    href="tel:+2347062340597"
                                    className="text-lg lg:text-xl font-medium text-foreground/80 hover:text-primary hover:underline transition-colors"
                                >
                                    +234 706 234 0597
                                </Link>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -30, filter: "blur(8px)" },
                                    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                }}
                            >
                                <Link
                                    href="mailto:Contact@healthmate.com"
                                    className="flex items-center gap-6 group"
                                >
                                    <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="shrink-0">
                                        <IconWrapper variant="circle" className="bg-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <FaEnvelope className="w-6 h-6" />
                                        </IconWrapper>
                                    </motion.div>
                                    <span className="text-lg lg:text-xl font-medium text-foreground/80 hover:text-primary hover:underline transition-colors">
                                        Contact@healthmate.com
                                    </span >
                                </Link>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -30, filter: "blur(8px)" },
                                    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                className="flex items-center gap-6 group text-left"
                            >
                                <motion.div whileHover={{ scale: 1.1, y: -5 }} className="shrink-0">
                                    <IconWrapper variant="circle" className="bg-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <FaMapMarkerAlt className="w-6 h-6" />
                                    </IconWrapper>
                                </motion.div>
                                <span className="text-lg lg:text-xl font-medium text-foreground/80 leading-snug">
                                    123 Health St, Medical City <br /> Ikeja, Lagos
                                </span>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right side: Contact Form */}
                    <motion.div
                        initial={{ x: 60, opacity: 0, scale: 0.95, filter: "blur(15px)" }}
                        whileInView={{ x: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full max-w-2xl bg-accent px-6 md:px-8 py-8 md:py-10 rounded-3xl shadow-lg border border-primary/5"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Get in Touch with Us</h3>
                        <motion.form
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                                }
                            }}
                            className="space-y-4" onSubmit={(e) => e.preventDefault()}
                        >
                            <motion.div variants={{ hidden: { opacity: 0, y: 15, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 rounded-xl bg-white border border-transparent focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-foreground/50 font-medium"
                                />
                            </motion.div>
                            <motion.div variants={{ hidden: { opacity: 0, y: 15, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-6 py-4 rounded-xl bg-white border border-transparent focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-foreground/50 font-medium"
                                />
                            </motion.div>
                            <motion.div variants={{ hidden: { opacity: 0, y: 15, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
                                <motion.textarea
                                    whileFocus={{ scale: 1.01 }}
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full px-6 py-4 rounded-xl bg-white border border-transparent focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-foreground/50 font-medium resize-none"
                                />
                            </motion.div>
                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 15, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button className="w-full py-4 text-lg font-bold shadow-xl shadow-primary/20">
                                    Send Message
                                </Button>
                            </motion.div>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
