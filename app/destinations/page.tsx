import DestinationCard from "@/components/destinations/DestinationCard";
import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800 py-20">
        <div className="mx-auto mb-16 max-w-3xl text-center">
  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-400">
    Popular Destinations
  </p>

  <h1 className="mt-4 text-5xl font-bold text-white">
    Explore Incredible India
  </h1>

  <p className="mt-6 text-lg leading-8 text-gray-400">
    From the royal palaces of Rajasthan to the snow-covered mountains of
    Himachal Pradesh, travel comfortably with Harsh Tours & Travels.
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