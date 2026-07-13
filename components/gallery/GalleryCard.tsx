import Image from "next/image";

type GalleryCardProps = {
  title: string;
  image: string;
  onClick: () => void;
};

export default function GalleryCard({
  title,
  image,
  onClick,
}: GalleryCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-900 shadow-lg"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
  src={image}
  alt={title}
  fill
  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
  className="object-cover"
/>

        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/50">
          <span className="rounded-lg border border-white px-5 py-2 text-white opacity-0 transition group-hover:opacity-100">
            View Photo
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}