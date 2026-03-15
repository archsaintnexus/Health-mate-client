'use client';

import { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import { IconWrapper } from '../components/IconWrapper';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
        question: "What is HealthMate?",
        answer: "HealthMate is a comprehensive digital health platform designed to connect patients with trusted healthcare providers, manage medical records securely, and provide AI-driven health guidance."
    },
    {
        question: "Are the doctors licenced?",
        answer: "Yes, all healthcare providers on HealthMate undergo a rigorous verification process to ensure they are fully licensed, board-certified, and qualified to provide medical care in their respective fields."
    },
    {
        question: "Can i consult a doctor 24/7?",
        answer: "Absolutely! HealthMate provides around-the-clock access to medical professionals through our online consultation service, ensuring you can get expert advice whenever you need it."
    },
    {
        question: "Is my medical information secured?",
        answer: "We prioritize your privacy. All medical data on HealthMate is encrypted using industry-standard protocols and is stored in compliance with major healthcare data protection regulations."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-10 lg:py-20">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-white rounded-[32px] p-4 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100"
                >
                    <motion.div 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                        className="flex flex-col gap-4"
                    >
                        {faqData.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                                    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                className={`border border-blue-100 rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'bg-blue-50/30 ring-1 ring-primary/10' : 'bg-white hover:bg-slate-50'}`}
                            >
                                <button
                                    className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none group"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span className={`text-base lg:text-lg font-bold transition-colors duration-300 ${openIndex === index ? 'text-primary' : 'text-foreground'}`}>
                                        {item.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <IconWrapper variant="simple" className={openIndex === index ? 'text-primary' : 'text-slate-400 group-hover:text-primary'}>
                                            <LuChevronDown className="w-5 h-5" />
                                        </IconWrapper>
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <div className="px-6 pb-6 text-foreground/70 leading-relaxed text-sm lg:text-base border-t border-blue-50/50 pt-4">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
