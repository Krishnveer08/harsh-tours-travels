import Hero from "@/components/home/hero";
import TrustSection from "@/components/home/trust-section";
import FleetPreview from "@/components/home/fleet-preview";
import WhyUs from "@/components/home/why-us";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <FleetPreview />
      <WhyUs />
    </main>
  );
}