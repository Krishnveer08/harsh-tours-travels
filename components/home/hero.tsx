export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-slate-100">
      <div className="text-center px-6">
        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Welcome to
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-7xl">
          Harsh Tours & Travels
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Comfortable, safe and reliable cab & Tempo Traveller services across
          India. Plan your journey with confidence.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            Book Now
          </button>

          <button className="rounded-xl border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50">
            View Fleet
          </button>
        </div>
      </div>
    </section>
  );
}
