export default function TripPlanner() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-10 shadow-2xl">
        <h2 className="text-center text-4xl font-bold text-white">
          Plan Your Journey
        </h2>

        <p className="mt-3 text-center text-gray-400">
          Tell us your travel plan and we'll prepare a custom quote.
        </p>

        <form className="mt-10 grid gap-6 md:grid-cols-2">
          <input
            placeholder="Pickup City"
            className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none"
          />

          <input
            placeholder="Destination"
            className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none"
          />

          <input
            type="date"
            className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none"
          />

          <select className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-white">
            <option>Sedan</option>
            <option>Toyota Crysta</option>
            <option>Tempo Traveller</option>
          </select>

          <input
            type="number"
            placeholder="Passengers"
            className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none"
          />

          <select className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-white">
            <option>One Way</option>
            <option>Round Trip</option>
            <option>Multi City</option>
          </select>

          <button
            className="col-span-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Get Free Quote
          </button>
        </form>
      </div>
    </section>
  );
}