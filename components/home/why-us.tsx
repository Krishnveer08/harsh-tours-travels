import {
  ShieldCheck,
  Sparkles,
  Headphones,
  IndianRupee,
  MapPinned,
  Star,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Verified Drivers",
    desc: "Professional and experienced drivers for a safe journey.",
  },
  {
    icon: Sparkles,
    title: "Clean Vehicles",
    desc: "Regularly cleaned and well-maintained vehicles.",
  },
  {
    icon: Headphones,
    title: "24×7 Support",
    desc: "We're always available whenever you need assistance.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "Custom quotations with no hidden charges.",
  },
  {
    icon: MapPinned,
    title: "PAN India Travel",
    desc: "Travel comfortably across India.",
  },
  {
    icon: Star,
    title: "Customer Satisfaction",
    desc: "Your comfort and happiness come first.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold text-white">
          Why Choose Us
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
          Premium travel experience with professional service,
          comfortable vehicles and transparent pricing.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon className="mb-5 h-10 w-10 text-blue-500" />

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}