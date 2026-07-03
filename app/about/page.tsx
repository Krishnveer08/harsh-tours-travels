import { company } from "@/data/company";
import Story from "@/components/about/Story";
import Stats from "@/components/about/Stats";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import CTA from "@/components/about/CTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="border-b border-slate-800 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-blue-400">
            About Us
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            {company.name}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            {company.tagline}
          </p>

        </div>
      </section>

      <Story />

      <Stats />

      <WhyChooseUs />

      <CTA />

    </main>
  );
}