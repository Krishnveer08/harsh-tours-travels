import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  image: string;
  description: string;
  attractions: string;
  vehicle: string;
};

export default function DestinationCard({
  name,
  image,
  description,
  attractions,
  vehicle,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-slate-900 shadow-lg transition hover:-translate-y-2">
      <div className="relative h-60">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {name}
        </h3>

        <p className="mt-3 text-gray-400">
          {description}
        </p>

        <p className="mt-4 text-sm text-blue-400">
          📍 {attractions}
        </p>

        <p className="mt-3 text-sm text-gray-300">
          🚗 Best Vehicle: {vehicle}
        </p>

        <Link
          href="/get-quote"
          className="mt-6 inline-block w-full rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}