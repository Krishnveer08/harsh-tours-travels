import Link from "next/link";
import FleetCard from "@/components/fleet/FleetCard";
import { fleet } from "@/data/fleet";

export default function FleetPreview() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-blue-400 uppercase tracking-[0.3em]">
            Our Vehicles
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Our Premium Fleet
          </h2>

          <p className="mt-4 text-gray-400">
            Choose the perfect vehicle for your journey.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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

        <div className="mt-12 flex justify-center">
          <Link
            href="/fleet"
            className="rounded-xl border border-blue-500 px-8 py-4 font-semibold text-blue-400 transition hover:bg-blue-600 hover:text-white"
          >
            View Complete Fleet →
          </Link>
        </div>
      </div>
    </section>
  );
}