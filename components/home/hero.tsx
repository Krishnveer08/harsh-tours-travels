import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      data-aos="fade"
      className="relative h-[90vh] w-full overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero/hero-4.jpg"
        alt="Harsh Tours & Travels"
        fill
        priority
        quality={100}
        className="animate-heroZoom object-cover object-center"
      />

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.45em] text-blue-400">
            Premium Travel Experience
          </p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Explore India
            <br />
            <span className="text-blue-400">
              In Comfort
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Luxury Tempo Traveller, Toyota Crysta, SUV/MUV and Sedan services
            for family trips, corporate travel, weddings, airport transfers and
            customised tours across India.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/get-quote"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-500/30"
            >
              Book Your Trip
            </Link>

            <Link
              href="/fleet"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              View Fleet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}