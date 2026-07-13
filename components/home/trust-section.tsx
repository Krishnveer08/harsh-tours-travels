import { Bus, Headphones, ShieldCheck, Star } from "lucide-react";

const stats = [
  {
    icon: Star,
    title: "4.9 / 5",
    subtitle: "Customer Rating",
  },
  {
    icon: Bus,
    title: "10+",
    subtitle: "Premium Vehicles",
  },
  {
    icon: Headphones,
    title: "24×7",
    subtitle: "Support",
  },
  {
    icon: ShieldCheck,
    title: "100%",
    subtitle: "Safe Journey",
  },
];

export default function TrustSection() {
  return (
    <section 
    data-aos="fade-up"
    className="bg-slate-950 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
            >
              <Icon className="mx-auto mb-4 h-10 w-10 text-blue-500" />

              <h3 className="text-3xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-400">
                {item.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}