import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/hero-4.jpg"
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
            Luxury Tempo Traveller, Toyota Crysta, SUV/MUV and Sedan services
            for family trips, corporate travel, weddings and customised tours
            across India.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/get-quote"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
            >
              Book Your Trip
            </Link>

            <Link
              href="/fleet"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              View Fleet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}