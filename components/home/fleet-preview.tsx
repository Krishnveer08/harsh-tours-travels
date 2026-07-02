import Image from "next/image";

const vehicles = [
  {
    name: "Sedan",
    seats: "4 Seater",
    image: "/images/fleet/sedan.jpg",
  },
  {
    name: "Toyota Crysta",
    seats: "7 Seater",
    image: "/images/fleet/crysta.jpg",
  },
  {
    name: "Tempo Traveller",
    seats: "12 Seater",
    image: "/images/fleet/tempo-traveller.jpg",
  },
];

export default function FleetPreview() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-white">
          Our Premium Fleet
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Choose the perfect vehicle for your journey.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition hover:-translate-y-2"
            >
              <div className="relative h-60">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {vehicle.name}
                </h3>

                <p className="mt-2 text-gray-400">
                  {vehicle.seats}
                </p>

                <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}