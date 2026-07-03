"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export default function FloatingWhatsapp() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello Harsh Tours & Travels, I would like to know more about your travel services."
    );

    window.open(
      `https://wa.me/${company.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </button>
  );
}