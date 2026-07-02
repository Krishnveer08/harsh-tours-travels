import FleetCard from "@/components/fleet/FleetCard";
import { fleet } from "@/data/fleet";

export default function FleetPage() {
 console.log("Fleet length:", fleet.length);
console.log(fleet.map((v) => v.name));
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 uppercase tracking-[0.35em] text-blue-400">
            Harsh Tours & Travels
          </p>

          <h1 className="text-5xl font-bold md:text-6xl">
            Our Premium Fleet
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Choose from our premium fleet of well-maintained vehicles for
            family trips, corporate travel, weddings, airport transfers and
            outstation tours across India.
          </p>

          <a
            href="/get-quote"
            className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
          >
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Fleet Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
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
        </div>
      </section>
    </main>
  );
}