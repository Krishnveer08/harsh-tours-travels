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
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-blue-500/20">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Destination Name */}
        <div className="absolute bottom-5 left-5">
          <h3 className="text-3xl font-bold text-white drop-shadow-lg">
            {name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm leading-7 text-gray-400">
          {description}
        </p>

        <div className="mt-5">
          <h4 className="mb-2 text-lg font-semibold text-white">
            Top Attractions
          </h4>

          <p className="text-sm leading-6 text-gray-400">
            📍 {attractions}
          </p>
        </div>

        <div className="mt-6">
          <span className="inline-block rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-400">
            🚗 Best Vehicle: {vehicle}
          </span>
        </div>

        <Link
          href="/get-quote"
          className="mt-8 block rounded-xl bg-blue-600 py-3 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-500/30"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}