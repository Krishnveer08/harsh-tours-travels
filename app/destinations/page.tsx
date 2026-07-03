import DestinationCard from "@/components/destinations/DestinationCard";
import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="uppercase tracking-[0.35em] text-blue-400">
            Explore India
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Popular Destinations
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Discover the most loved travel destinations with Harsh Tours & Travels.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              {...destination}
            />
          ))}
        </div>
      </section>
    </main>
  );
}