import Image from 'next/image';

const doctors = [
    {
        name: "Dr. Richard Smith",
        specialty: "MBBS",
        image: "/richard.png"
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
        <section className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        Top-Rated Doctors
                    </h2>
                    <p className="text-sm lg:text-base text-foreground/70 leading-relaxed">
                        Our board certified physicians are among the best in medical care, averaging 15 years of
                        clinical experience. They are committed to providing high-quality, personalized care
                        you can trust.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                            <div className="relative aspect-4/5 bg-slate-50">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-foreground mb-1">
                                    {doctor.name}
                                </h3>
                                <p className="text-xs font-medium text-foreground/40 uppercase tracking-wider">
                                    {doctor.specialty}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
