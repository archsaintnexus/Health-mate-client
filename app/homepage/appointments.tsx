import Image from 'next/image';
import { Button } from '../components/Button';

export default function Appointments() {
    return (
        <section className="pb-14 lg:pb-20">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Promo Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                            Helping You <span className="text-primary">Stay Healthy, <br />Anytime</span>, Anywhere
                        </h2>
                        <p className="text-sm lg:text-base text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            At HealthMate, we&apos;re committed to providing accessible high-quality healthcare for everyone.
                            Our platform allows you to consult with experienced doctors at your convenience,
                            ensuring you get the care when you need it.
                        </p>
                        <Button className="px-10 py-4">
                            Learn More
                        </Button>
                    </div>
                    <div className="flex-1 w-full max-w-2xl">
                        <div className="relative aspect-4/3 w-full">
                            <Image
                                src="/doctors-appointment.png"
                                alt="Our medical team"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Appointment Cards Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Book Your Appointment <br className="sm:hidden" /> Online & In-Person
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* AI Assistant Card */}
                    <div className="bg-primary rounded-[32px] p-8 lg:p-12 text-white flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-8 max-w-md">
                            Our AI Health Assistant For Quick Health Guidance
                        </h3>
                        <div className="relative w-full aspect-video mb-10">
                            <Image
                                src="/health-assistant.png"
                                alt="AI Health Assistant"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <Button variant="outline" className="bg-white text-primary border-none hover:bg-slate-50 px-8 py-4 font-bold">
                            Let&apos;s Chat With AI
                        </Button>
                    </div>

                    {/* Lab Test Card */}
                    <div className="bg-white rounded-[32px] p-8 lg:p-12 flex flex-col items-center text-center border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 max-w-md">
                            Book Your Appointment For Lab Tests At Your Doorstep
                        </h3>
                        <div className="relative w-full aspect-video mb-10">
                            <Image
                                src="/book-appointment.png"
                                alt="Book Appointment for Lab Tests"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <Button className="px-8 py-4 font-bold">
                            Book Appointment
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
