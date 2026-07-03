"use client";

import { useMemo, useState } from "react";

import GalleryCard from "@/components/gallery/GalleryCard";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import ImageModal from "@/components/gallery/ImageModal";
import { gallery } from "@/data/gallery";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
  } | null>(null);

  const filteredGallery = useMemo(() => {
    if (selectedCategory === "All") {
      return gallery;
    }

    return gallery.filter(
      (item) => item.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-slate-800 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="uppercase tracking-[0.35em] text-blue-400">
            Harsh Tours & Travels
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Explore our premium fleet and travel moments across India.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <GalleryFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGallery.map((item) => (
              <GalleryCard
                key={item.id}
                title={item.title}
                image={item.image}
                onClick={() =>
                  setSelectedImage({
                    image: item.image,
                    title: item.title,
                  })
                }
              />
            ))}
          </div>

        </div>
      </section>

      <ImageModal
        image={selectedImage?.image ?? null}
        title={selectedImage?.title ?? ""}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  );
}