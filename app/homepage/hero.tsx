import Image from 'next/image';
import { Button } from '../components/Button';

export default function Hero() {
    return (
        <section className="relative bg-background pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <h1 className="text-4xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                            Your Trusted Partner <br />
                            in <span className="text-primary">Health & Wellness</span>
                        </h1>
                        <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto lg:mx-0">
                            Manage your health with confidence on a secure platform
                            that connects you to trusted care.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button className="w-full sm:w-auto px-8 py-4 text-base">
                                Book Appointment
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-base bg-white border-foreground/10 hover:bg-accent/50">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
                        <div className="relative w-full h-[400px] lg:h-[600px]">
                            <Image
                                src="/doctor-hero.png"
                                alt="Healthcare professional"
                                fill
                                className="object-contain object-center lg:object-right"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
