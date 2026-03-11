'use client';

import { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import { IconWrapper } from '../components/IconWrapper';

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
        <section className="py-10 lg:py-15">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Frequently Ask Questions
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl p-4 lg:p-12 shadow-sm border border-slate-50">
                    <div className="flex flex-col gap-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`border border-blue-100 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-blue-50/30' : 'bg-white'}`}
                            >
                                <button
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors focus:outline-none"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-base lg:text-lg font-bold text-foreground pr-8">
                                        {item.question}
                                    </span>
                                    <IconWrapper variant="simple">
                                        <LuChevronDown
                                            className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                        />
                                    </IconWrapper>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-6 pb-6 text-foreground/70 leading-relaxed text-sm lg:text-base">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
