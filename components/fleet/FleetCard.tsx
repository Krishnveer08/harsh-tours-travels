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
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-blue-500/20">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Vehicle Name on Image */}
        <div className="absolute bottom-5 left-5">
          <h3 className="text-3xl font-bold text-white drop-shadow-lg">
            {name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Seat Badge */}
        <span className="inline-block rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-400">
          {seats}
        </span>

        {/* Description */}
        <p className="mt-4 text-sm leading-6 text-gray-400">
          {examples}
        </p>

        {/* Price */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <p className="text-2xl font-extrabold text-white">
              {price}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-3">
          <Link
            href={`/fleet/${slug}`}
            className="flex-1 rounded-xl border border-blue-500 py-3 text-center font-semibold text-blue-400 transition-all duration-300 hover:bg-blue-600 hover:text-white"
          >
            View Details
          </Link>

          <Link
            href="/get-quote"
            className="flex-1 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/30"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}