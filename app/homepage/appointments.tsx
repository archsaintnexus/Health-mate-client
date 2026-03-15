import Image from 'next/image';
import { Button } from '../components/Button';

export default function Appointments() {
    return (
        <section id="about" className="py-15">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Promo Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                            Helping You <span className="text-primary">Stay Healthy, <br />Anytime</span>, Anywhere
                        </h2>
                        <p className="text-sm md:text-xl text-foreground mb-8 max-w-xl  leading-relaxed">
                            At HealthMate, we&apos;re committed to providing accessible high-quality healthcare for everyone.
                            Our platform allows you to consult with experienced doctors at your convenience,
                            ensuring you get the care when you need it.
                        </p>
                        <Button className="px-6 py-2 md:px-8 md:py-3 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Book Your Appointment <br /> Online & In-Person
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                    {/* AI Assistant Card */}
                    <div className="bg-primary rounded-xl p-5 md:p-8 text-white flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl md:text-2xl font-semibold max-w-lg mb-4">
                            Our AI Health Assistant <br />For Quick Health Guidance
                        </h3>
                        <div className="relative w-full aspect-video">
                            <Image
                                src="/health-assistant.png"
                                alt="AI Health Assistant"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <Button variant="outline" className="bg-white text-primary border-none hover:bg-primary hover:text-white px-15 py-3 font-bold mt-4 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-xl">
                            Let&apos;s Chat With AI
                        </Button>
                    </div>

                    {/* Lab Test Card */}
                    <div className="bg-white rounded-xl p-5 md:p-8 text-foreground flex flex-col items-center text-center border border-[#D1D5DC] shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground max-w-lg mb-4">
                            Book Your Appointment <br />For Lab Tests At Your Doorstep
                        </h3>
                        <div className="relative w-full aspect-video">
                            <Image
                                src="/book-appointment.png"
                                alt="Book Appointment for Lab Tests"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <Button className="px-10 py-3 font-bold mt-4 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-xl">
                            Book Appointment
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
