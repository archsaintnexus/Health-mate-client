'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const doctors = [
    {
        name: "Dr. Richard Smith",
        specialty: "MBBS",
        image: "/Richard.png"
    },
    {
        name: "Dr. Sarah Star",
        specialty: "MBBS",
        image: "/sarah.png"
    },
    {
        name: "Dr. Daniel Shaun",
        specialty: "MBBS",
        image: "/daniel.png"
    },
    {
        name: "Dr. Marie Sophine",
        specialty: "MBBS",
        image: "/marie.png"
    }
];

export default function Doctors() {
    return (
        <section id="doctors" className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-6 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
                        Top-Rated Doctors
                    </h2>
                    <p className="text-sm md:text-base text-foreground leading-relaxed">
                        Our board certified physicians are among the best in medical care, averaging 15 years of
                        clinical experience. They are committed to providing high-quality, personalized care
                        you can trust.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
                        }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(12px)" },
                                visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200/60 group cursor-pointer hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative aspect-4/5 bg-slate-50 overflow-hidden">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                                    {doctor.name}
                                </h3>
                                <p className="text-sm font-semibold text-primary/70 uppercase tracking-widest">
                                    {doctor.specialty}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
