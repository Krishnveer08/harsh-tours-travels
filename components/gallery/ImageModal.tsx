"use client";

import Image from "next/image";
import { X } from "lucide-react";

type ImageModalProps = {
  image: string | null;
  title: string;
  onClose: () => void;
};

export default function ImageModal({
  image,
  title,
  onClose,
}: ImageModalProps) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-14 right-0 rounded-full bg-white p-2 text-black transition hover:bg-gray-200"
        >
          <X size={24} />
        </button>

        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Title */}
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold text-white">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}