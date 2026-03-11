'use client';

import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu';
import { Button } from '../components/Button';
import { IconWrapper } from '../components/IconWrapper';

export default function Contact() {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
                    {/* Left side: Contact Info */}
                    <div className="flex-1">
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">Contact</h2>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <IconWrapper variant="circle">
                                    <LuPhone className="w-6 h-6" />
                                </IconWrapper>
                                <span className="text-lg lg:text-xl font-medium text-foreground/80 lowercase">+234 706 234 0597</span>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <IconWrapper variant="circle">
                                    <LuMail className="w-6 h-6" />
                                </IconWrapper>
                                <span className="text-lg lg:text-xl font-medium text-foreground/80">Contact@healthmate.com</span>
                            </div>

                            <div className="flex items-center gap-6 group text-left">
                                <IconWrapper variant="circle" className="shrink-0">
                                    <LuMapPin className="w-6 h-6" />
                                </IconWrapper>
                                <span className="text-lg lg:text-xl font-medium text-foreground/80 leading-snug">
                                    123 Health St, Medical City <br /> Ikeja, Lagos
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Contact Form */}
                    <div className="flex-1 w-full max-w-2xl bg-accent p-8 lg:p-12 rounded-[40px]">
                        <h3 className="text-2xl font-bold text-foreground mb-8">Get in Touch with Us</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-primary/30 outline-none transition-all placeholder:text-foreground/30 font-medium"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-primary/30 outline-none transition-all placeholder:text-foreground/30 font-medium"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-primary/30 outline-none transition-all placeholder:text-foreground/30 font-medium resize-none"
                                />
                            </div>
                            <Button className="w-full py-5 text-lg font-bold">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
