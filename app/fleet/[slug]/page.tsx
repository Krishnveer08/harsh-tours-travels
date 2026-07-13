import { fleet } from "@/data/fleet";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function FleetDetailPage({ params }: Props) {
  const { slug } = await params;

  const vehicle = fleet.find((item) => item.slug === slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">

          <Image
            src={vehicle.image}
            alt={vehicle.name}
            width={800}
            height={600}
            className="rounded-2xl object-cover"
          />

          <div>
            <h1 className="text-5xl font-bold">
              {vehicle.name}
            </h1>

            <p className="mt-4 text-blue-400 text-xl">
              {vehicle.seats}
            </p>

            <p className="mt-3 text-gray-400">
              Examples: {vehicle.examples}
            </p>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">
                Features
              </h2>

              <ul className="space-y-3">
                {vehicle.features.map((feature) => (
                  <li key={feature}>
                    ✅ {feature}
                  </li>
                ))}
              </ul>
            </div>

           <Link
  href="/get-quote"
  className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
>
  Get Free Quote
</Link>

          </div>
        </div>
      </section>
    </main>
  );
}