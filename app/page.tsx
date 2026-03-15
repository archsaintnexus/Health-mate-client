import Hero from "./homepage/hero";
import Features from "./homepage/features";
import Appointments from "./homepage/appointments";
import FAQ from "./homepage/faq";
import Doctors from "./homepage/doctors";
import Contact from "./homepage/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Appointments />
      <FAQ />
      <Doctors />
      <Contact />
    </main>
  );
}
