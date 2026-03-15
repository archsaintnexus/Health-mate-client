'use client';

import Image from 'next/image';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative bg-background min-h-screen flex items-center overflow-hidden pt-20 md:pt-0">
            <div className="max-w-7xl mx-auto px-6 md:px-15 w-full">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center gap-12 md:gap-5">
                    {/* Left Content */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15, delayChildren: 0.1 }
                            }
                        }}
                        className="text-center md:text-left py-10 z-10"
                    >
                        <motion.h1 
                            variants={{
                                hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
                                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-8"
                        >
                            Your Trusted Partner <br />
                            in <span className="text-primary">Health & Wellness</span>
                        </motion.h1>
                        <motion.p 
                            variants={{
                                hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
                                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="text-lg md:text-xl text-foreground mb-10 max-w-2xl mx-auto md:mx-0"
                        >
                            Manage your health with confidence on a secure platform
                            that connects you to trusted care.
                        </motion.p>
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
                                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
                        >
                            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto px-6 py-4 text-base font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                                    Book Appointment
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full sm:w-auto px-10 py-4 text-base font-bold hover:bg-primary/5 hover:text-primary transition-all border-2">
                                    Learn More
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)", x: 20 }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }}
                        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        viewport={{ once: true, margin: "-10%" }}
                        className="relative w-full h-[450px] md:h-[90vh] md:w-[120%] md:-translate-y-5 md:translate-x-[-5%] lg:translate-x-[-10%] pointer-events-none self-end"
                    >
                        <Image
                            src="/doctor-hero.png"
                            alt="Healthcare professional"
                            fill
                            className="object-contain object-bottom scale-105 md:scale-110 lg:scale-125 transition-transform duration-1000"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
