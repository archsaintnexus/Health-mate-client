'use client';

import Image from 'next/image';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

export default function Appointments() {
    return (
        <section id="about" className="py-15">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Promo Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32">
                    <motion.div 
                        initial={{ x: -60, opacity: 0, filter: "blur(15px)" }}
                        whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                            Helping You <span className="text-primary">Stay Healthy, <br />Anytime</span>, Anywhere
                        </h2>
                        <p className="text-sm md:text-xl text-foreground mb-8 max-w-xl  leading-relaxed">
                            At HealthMate, we&apos;re committed to providing accessible high-quality healthcare for everyone.
                            Our platform allows you to consult with experienced doctors at your convenience,
                            ensuring you get the care when you need it.
                        </p>
                        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="inline-block">
                            <Button className="px-6 py-2 md:px-8 md:py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                                Learn More
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 60, opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                        whileInView={{ x: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex-1 w-full max-w-2xl"
                    >
                        <div className="relative aspect-4/3 w-full">
                            <Image
                                src="/doctors-appointment.png"
                                alt="Our medical team"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Appointment Cards Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Book Your Appointment <br /> Online & In-Person
                    </h2>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto"
                >
                    {/* AI Assistant Card */}
                    <motion.div 
                        variants={{
                            hidden: { scale: 0.9, opacity: 0, y: 30, filter: "blur(12px)" },
                            visible: { scale: 1, opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        className="bg-primary rounded-[32px] p-6 md:p-10 text-white flex flex-col items-center text-center shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold max-w-lg mb-6">
                            Our AI Health Assistant <br />For Quick Health Guidance
                        </h3>
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6">
                            <Image
                                src="/health-assistant.png"
                                alt="AI Health Assistant"
                                fill
                                className="object-contain hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                        </div>
                        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outline" className="bg-white text-primary border-none hover:bg-slate-50 px-12 py-4 font-bold transition-all shadow-lg hover:shadow-xl">
                                Let&apos;s Chat With AI
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Lab Test Card */}
                    <motion.div 
                        variants={{
                            hidden: { scale: 0.9, opacity: 0, y: 30, filter: "blur(12px)" },
                            visible: { scale: 1, opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        className="bg-white rounded-[32px] p-6 md:p-10 text-foreground flex flex-col items-center text-center border border-slate-200/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground max-w-lg mb-6">
                            Book Your Appointment <br />For Lab Tests At Your Doorstep
                        </h3>
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6">
                            <Image
                                src="/book-appointment.png"
                                alt="Book Appointment for Lab Tests"
                                fill
                                className="object-contain hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                        </div>
                        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                            <Button className="px-10 py-4 font-bold transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40">
                                Book Appointment
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
