import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import Map from "@/components/contact/Map";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="border-b border-slate-800 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-blue-400">
            Contact Us
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            We're Here To Help
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Have questions about your trip? Contact Harsh Tours & Travels
            anytime. We're happy to help you plan your journey.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>
      </section>

      {/* Google Map */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Map />
        </div>
      </section>

    </main>
  );
}