import Link from "next/link";
import FleetCard from "@/components/fleet/FleetCard";
import { fleet } from "@/data/fleet";

export default function FleetPreview() {
  return (
    <section
      data-aos="fade-up"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-400">
            Our Fleet
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Travel With Comfort
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Choose from our premium collection of Sedans, SUVs, Urbania and
            Tempo Travellers. Every vehicle is professionally maintained to
            provide a safe, comfortable and memorable travel experience.
          </p>
        </div>

        {/* Fleet Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {fleet.map((vehicle) => (
            <FleetCard
              key={vehicle.id}
              slug={vehicle.slug}
              name={vehicle.name}
              seats={vehicle.seats}
              image={vehicle.image}
              examples={vehicle.examples}
              price={vehicle.price}
              features={vehicle.features}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/fleet"
            className="rounded-xl border border-blue-500 px-8 py-4 font-semibold text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
          >
            Explore Complete Fleet →
          </Link>
        </div>
      </div>
    </section>
  );
}