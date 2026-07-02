import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import TrustSection from "@/components/home/trust-section";
import FleetPreview from "@/components/home/fleet-preview";

export default function HomePage() {
  return (
    <>
      <Navbar />

    <main>
  <Hero />
  <TrustSection />
  <FleetPreview />
</main>

      <Footer />
    </>
  );
}