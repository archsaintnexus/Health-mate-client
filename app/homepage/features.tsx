import Image from 'next/image';
import { IconWrapper } from '../components/IconWrapper';
import { TbRibbonHealth } from "react-icons/tb";
import { RiHealthBookLine } from "react-icons/ri";
import { GiHospitalCross } from "react-icons/gi";
import { CiMedicalCross } from "react-icons/ci";

const quickActions = [
    {
        title: "Find Doctors",
        description: "Locate Your Nearest Doctor and Book Instantly",
        icon: <TbRibbonHealth className="w-6 h-6" />,
        bgColor: "bg-blue-50"
    },
    {
        title: "Online Consultation",
        description: "Get medical advice without visiting a clinic.",
        icon: <CiMedicalCross className="w-6 h-6" />,
        bgColor: "bg-blue-50"
    },
    {
        title: "Find Pharmacy",
        description: "Find Pharmacy and Refill Prescription Easily",
        icon: <GiHospitalCross className="w-6 h-6" />,
        bgColor: "bg-blue-50"
    },
    {
        title: "Find Labs",
        description: "Discover Nearby Labs For Quick and Easy Testing",
        icon: <RiHealthBookLine className="w-6 h-6" />,
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
        <section className="relative z-20">
            {/* Main Features Section  */}
            <div className="bg-white rounded-[40px] md:rounded-[80px] border border-accent pt-1 pb-15">
                {/* Quick Action Container*/}
                <div className="max-w-7xl mx-auto px-6 md:px-15 relative z-50 -mt-20 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickActions.map((action, index) => (
                            <div key={index} className="bg-white p-5 rounded-2xl shadow-xl shadow-slate-200/50 border border-[#D1D5DC] flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                                <IconWrapper variant="circle" bgClassName={action.bgColor} className="mb-4">
                                    {action.icon}
                                </IconWrapper>
                                <h3 className="text-xl font-bold text-foreground mb-3">{action.title}</h3>
                                <p className="text-sm text-foreground leading-relaxed max-w-[200px]">
                                    {action.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* main features section */}
                <div className="container mx-auto px-10 md:px-16">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">Our Features</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {mainFeatures.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-3xl shadow-sm border border-[#D1D5DC] h-full flex flex-col">
                                <div className="relative w-full aspect-4/3 overflow-hidden mb-6">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                                <p className="text-base text-foreground leading-relaxed">
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
