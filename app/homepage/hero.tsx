import Image from 'next/image';
import { Button } from '../components/Button';

export default function Hero() {
    return (
        <section className="relative bg-background min-h-screen flex items-center overflow-hidden pt-20 md:pt-0">
            <div className="max-w-7xl mx-auto px-6 md:px-15 w-full">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center gap-12 md:gap-5">
                    {/* Left Content */}
                    <div className="text-center md:text-left py-10 z-10">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-8">
                            Your Trusted Partner <br />
                            in <span className="text-primary">Health & Wellness</span>
                        </h1>
                        <p className="text-lg md:text-xl text-foreground mb-10 max-w-2xl mx-auto md:mx-0">
                            Manage your health with confidence on a secure platform
                            that connects you to trusted care.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                            <Button className="w-full sm:w-auto px-10 py-4 text-base font-bold">
                                Book Appointment
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto px-10 py-4 text-base font-bold bg-blue-50/50">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full h-[450px] md:h-[90vh] md:w-[120%] md:-translate-y-5 md:translate-x-[-5%] lg:translate-x-[-10%] pointer-events-none self-end">
                        <Image
                            src="/doctor-hero.png"
                            alt="Healthcare professional"
                            fill
                            className="object-contain object-bottom scale-105 md:scale-110 lg:scale-125 transition-transform duration-1000"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
