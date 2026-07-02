import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/hero-1.jpg"
        alt="Harsh Tours & Travels"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-blue-400">
            Premium Travel Experience
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Explore India
            <br />
            In Comfort
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
            Luxury Tempo Traveller, Toyota Crysta and Sedan services for
            family trips, corporate travel, weddings and customised tours
            across India.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
              Book Your Trip
            </button>

            <button className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black">
              View Fleet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}