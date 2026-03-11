import Image from 'next/image';
import { LuUsers, LuVideo, LuPill, LuFlaskConical } from 'react-icons/lu';
import { IconWrapper } from '../components/IconWrapper';

const quickActions = [
    {
        title: "Find Doctors",
        description: "Locate Your Nearest Doctor and Book Instantly",
        icon: <IconWrapper variant="simple"><LuUsers className="w-6 h-6 text-primary" /></IconWrapper>,
        bgColor: "bg-blue-50"
    },
    {
        title: "Online Consultation",
        description: "Get medical advice without visiting a clinic.",
        icon: <IconWrapper variant="simple"><LuVideo className="w-6 h-6 text-primary" /></IconWrapper>,
        bgColor: "bg-blue-50"
    },
    {
        title: "Find Pharmacy",
        description: "Find Pharmacy and Refill Prescription Easily",
        icon: <IconWrapper variant="simple"><LuPill className="w-6 h-6 text-primary" /></IconWrapper>,
        bgColor: "bg-blue-50"
    },
    {
        title: "Find Labs",
        description: "Discover Nearby Labs For Quick and Easy Testing",
        icon: <IconWrapper variant="simple"><LuFlaskConical className="w-6 h-6 text-primary" /></IconWrapper>,
        bgColor: "bg-blue-50"
    }
];

const mainFeatures = [
    {
        title: "24/7 Access to Doctors",
        description: "Connect instantly with board-certified doctors available around the clock to help you with any health concerns.",
        image: "/doctor-feature.jpg"
    },
    {
        title: "Expert Medical Advice",
        description: "Consult with experienced doctors who provide accurate diagnoses and personalized medical services tailored to your needs.",
        image: "/health-feature.jpg"
    },
    {
        title: "Secure & Private",
        description: "Your health information is encrypted and confidential. We prioritize your privacy and data security at all times.",
        image: "/patient-feature.jpg"
    }
];

export default function Features() {
    return (
        <section className="relative -mt-24 z-20">
            {/* Main Container with Rounded Background */}
            <div className="bg-white rounded-[60px] lg:rounded-[100px] pt-16 lg:pt-20 pb-32">
                <div className="container mx-auto px-6 lg:px-16">

                    {/* Quick Action Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        {quickActions.map((action, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                                <IconWrapper variant="default" bgClassName={action.bgColor}>
                                    {action.icon}
                                </IconWrapper>
                                <h3 className="text-xl font-bold text-foreground mb-3">{action.title}</h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    {action.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Our Features Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">Our Features</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {mainFeatures.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col">
                                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-6">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                                <p className="text-sm text-foreground/70 leading-relaxed grow">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
