import Image from "next/image";
import Link from "next/link";

type FleetCardProps = {
  slug: string;
  name: string;
  seats: string;
  image: string;
  examples: string;
  price: string;
  features: string[];
};

export default function FleetCard({
  slug,
  name,
  seats,
  image,
  examples,
  price,
}: FleetCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {name}
        </h3>

        <p className="mt-2 font-medium text-blue-400">
          {seats}
        </p>

        <p className="mt-2 text-sm text-gray-400">
          {examples}
        </p>

        <div className="mt-5">
          <p className="text-sm text-gray-500">
            Starting Price
          </p>

          <p className="text-xl font-bold text-white">
            {price}
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            href={`/fleet/${slug}`}
            className="flex-1 rounded-lg border border-blue-500 py-3 text-center font-semibold text-blue-400 transition hover:bg-blue-600 hover:text-white"
          >
            Details
          </Link>

          <Link
            href="/get-quote"
            className="flex-1 rounded-lg bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            Quote
          </Link>
        </div>
      </div>
    </div>
  );
}