import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold text-white">
          Ready For Your Next Journey?
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Book your trip today with Harsh Tours & Travels and enjoy a safe,
          comfortable and memorable travel experience.
        </p>

        <Link
          href="/get-quote"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-gray-100"
        >
          Get Free Quote
        </Link>

      </div>
    </section>
  );
}