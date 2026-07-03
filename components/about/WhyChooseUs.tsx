const reasons = [
  {
    title: "Professional Drivers",
    description:
      "Experienced and courteous drivers ensuring a safe and comfortable journey.",
  },
  {
    title: "Premium Fleet",
    description:
      "Well-maintained Sedan, SUV/MUV, Force Urbania and Tempo Travellers.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden charges. Competitive and honest pricing for every trip.",
  },
  {
    title: "24×7 Support",
    description:
      "Our team is available round the clock to assist you with bookings and travel.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-blue-400">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Travel With Confidence
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl bg-slate-900 p-8 shadow-lg transition hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-white">
                {reason.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}