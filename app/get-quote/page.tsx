import QuoteForm from "@/components/quote/QuoteForm";

export default function GetQuotePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="border-b border-slate-800 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-blue-400">
            Harsh Tours & Travels
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Get Free Quote
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Tell us about your journey and we'll provide the best quotation
            for your trip.
          </p>

        </div>
      </section>

      {/* Form + Contact */}
      <section className="py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <QuoteForm />
          </div>

          <aside className="rounded-2xl bg-slate-900 p-8">

            <h2 className="text-2xl font-bold">
              Contact Information
            </h2>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-blue-400 font-semibold">
                  📞 Call Us
                </p>

                <p className="text-gray-300">
                  +91 9829630537
                </p>
              </div>

              <div>
                <p className="text-blue-400 font-semibold">
                  💬 WhatsApp
                </p>

                <p className="text-gray-300">
                  Instant Booking Support
                </p>
              </div>

              <div>
                <p className="text-blue-400 font-semibold">
                  📍 Service Area
                </p>

                <p className="text-gray-300">
                  Rajasthan & PAN India
                </p>
              </div>

              <div className="border-t border-slate-700 pt-6">

                <h3 className="font-bold text-xl">
                  Why Choose Us?
                </h3>

                <ul className="mt-4 space-y-3 text-gray-300">

                  <li>✔ Professional Drivers</li>

                  <li>✔ Clean Vehicles</li>

                  <li>✔ Transparent Pricing</li>

                  <li>✔ 24×7 Customer Support</li>

                  <li>✔ Luxury Fleet</li>

                </ul>

              </div>

            </div>

          </aside>

        </div>
      </section>

    </main>
  );
}