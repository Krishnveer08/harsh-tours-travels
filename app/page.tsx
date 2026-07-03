import Hero from "@/components/home/hero";
import TrustSection from "@/components/home/trust-section";
import FleetPreview from "@/components/home/fleet-preview";
import WhyUs from "@/components/home/why-us";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <FleetPreview />
      <WhyUs />
      <Testimonials />
      <FAQ />
    </main>
  );
}